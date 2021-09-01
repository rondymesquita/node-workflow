const { Plugin } = require('release-it')
const { Octokit, App, Action } = require('octokit')

class MyPlugin extends Plugin {
  init () {
  }

  async _createPull ({
    changelog,
    tagName,
    repo,
    base
  }) {
    const currentBranchName = await this.exec('git branch --show-current', { options: { write: false } });
    const body = {
      owner: repo.owner,
      repo: repo.project,
      head: currentBranchName,
      base: base,
      body: changelog,
      title: 'Release: ' + tagName
    }

    this.log.verbose('Creating PR with options', body)
    try {
      const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
      const endpoint = `/repos/${repo.repository}/pulls`
      const response = await octokit.request(
        `POST ${endpoint}`, body
      )
      const { html_url: htmlUrl } = response.data
      this.log.verbose('PR created and available on', htmlUrl)
    } catch (err) {
      this.log.error('Error when creating Pull')
      this.log.error('Status: ', err.status)
      this.log.error('Response: ', err.response.data)
    }
  }

  async afterRelease () {
    const context = this.config.getContext()
    const {  changelog, repo, tagName } = context
    const { base } = this.options
    const isDryRun = context['dry-run']
    if (!isDryRun) {
      await this._createPull({
        changelog,
        tagName,
        repo,
        base
      })
    } else {
      this.log.verbose('Running in dry-run mode. No PR will be created')
    }
  }
}

module.exports = MyPlugin
