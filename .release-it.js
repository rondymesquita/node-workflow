const commitPartial = `* **{{raw.type}}({{scope}})**: {{subject}} ([{{~shortHash}}]({{~@root.host}}/{{~@root.owner}}/{{~@root.repository}}/{{~@root.commit}}/{{hash}}))
`

const mainTemplate = `
{{> header}}

{{#each commitGroups}}

{{#if title}}
### [{{title}}]({{title}})
{{/if}}
{{#each commits}}
{{> commit root=@root}}
{{/each}}

{{/each}}
`

module.exports = {
  "plugins": {
    "@release-it/conventional-changelog": {
      "ignoreRecommendedBump": true,
      "writerOpts": {
        "groupBy": "scope",
        "mainTemplate": mainTemplate,
        "commitPartial": commitPartial
      },
      "parserOpts": {
        "mergePattern": /^Merge pull request #(\d+) from (.*)$/,
        "mergeCorrespondence": ['id', 'source']
      },
      "preset": {
        "name": "conventionalcommits",
        "types": [
          { "type": "feat", "section": "Features" },
          { "type": "build", "section": "Build Changes" },
          { "type": "fix", "section": "Bug Fixes" },
          { "type": "chore", "section": "Chores" },
          { "type": "ci", "section": "CI Configuration" },
          { "type": "docs", "section": "Docs" },
          { "type": "style", "section": "Code Style" },
          { "type": "refactor", "section": "Refactors" },
          { "type": "perf", "section": "Performance" },
          { "type": "test", "section": "Tests" },
          { "type": "release", "section": "Releases" }
        ]
      }
    },
    "./release-it-github-open-pull.js": {
      "bases": ["main"]
    }
  },
  "git": {
    "requireCleanWorkingDir": false,
    "commit": true,
    "commitMessage": "release: ${version}",
    "commitArgs": ["--no-verify"],
    "tag": true,
    "tagAnnotation": "Release ${version}",
    "push": true,
    "pushArgs": ["--follow-tags"]
  },
  "github": {
    "release": true,
    "releaseName": "Release ${version}"
  },
  "npm": {
    "publish": false
  },
  "gitlab": {
    "release": false
  }
}
