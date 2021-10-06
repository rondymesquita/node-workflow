const { Plugin } = require('release-it');
const { Octokit } = require('octokit');


const { log, error } = console;
const createPull = async function({
  changelog,
  tagName,
  repo,
  base,
  isDryRun,
  currentBranchName,
}) {
  const body = {
    owner: repo.owner,
    repo: repo.project,
    head: currentBranchName,
    base,
    body: changelog,
    title: `Release: ${tagName} on ${base}`,
  };

  log('Creating PR [%s] from branch [%s]', body.title, currentBranchName);
  log('PR options', { body });
  try {
    if (!isDryRun) {
      const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
      const endpoint = `/repos/${repo.repository}/pulls`;
      const response = await octokit.request(
        `POST ${endpoint}`, body
      );
      const { html_url: htmlUrl } = response.data;
      log('PR created and available on', htmlUrl);
    }
  } catch (err) {
    error('Error when creating Pull');
    error('Status: ', err.status);
    error('Response: ', err.response.data);
  }
};
class GithubOpenPullPlugin extends Plugin {
  async afterRelease() {
    const context = this.config.getContext();
    const isDryRun = context['dry-run'];
    const { changelog, repo, tagName } = context;
    const { bases } = this.options;

    const currentBranchName = await this.exec('git rev-parse --abbrev-ref HEAD', { options: { write: false } });

    this.log.verbose('Options', JSON.stringify({
      repo,
      tagName,
      bases,
      isDryRun,
      token: process.env.GITHUB_TOKEN,
    }, null, 2));

    const pullPromises = bases.map(async (base) => {
      await createPull({
        changelog,
        tagName,
        repo,
        base,
        isDryRun,
        currentBranchName,
      });
    });
    await Promise.all(pullPromises);
  }
}

module.exports = GithubOpenPullPlugin;
