const { Plugin } = require('release-it')
const { Octokit, App, Action } = require('octokit')

class MyPlugin extends Plugin {
  init () {
  }

  async _createPull ({
    tagName,
    repo,
    changelog,
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

    this.log.verbose('Creating PR with options %o', body)
    try {
      const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })
      const response = await octokit.request(
        'POST /repos/rondymesquita/workflow-node/pulls', body
      )
      this.log.log('PR created', response.data, response.status)
    } catch (err) {
      this.log.error('Error when creating Pull')
      this.log.error('Status: ', err.status)
      this.log.error('Response: ', err.response.data)
      this.log.error('Errors: ', err.response.data.errors)
    }
  }

  async afterRelease () {
    const context = this.config.getContext()
    console.log('beforeRelease2', context)
    const {  changelog, repo, name, tagName } = context
    const { base } = this.options
    console.log('beforeRelease3', {
      tagName,
      repo,
      changelog,
      base
    })

    const isDryRun = context['dry-run']
    if (!isDryRun) {
      await this._createPull({
        changelog,
        name,
        tagName,
        repo
      })
    } else {
      this.log.verbose('Running in dry-run mode. No PR will be created')
    }
  }
}

module.exports = MyPlugin
