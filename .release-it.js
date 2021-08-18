const commitPartial = `
* {{header}}

{{~!-- commit link --}} {{#if @root.linkReferences~}}
  ([{{shortHash}}](
  {{~#if @root.repository}}
    {{~#if @root.host}}
      {{~@root.host}}/
    {{~/if}}
    {{~#if @root.owner}}
      {{~@root.owner}}/
    {{~/if}}
    {{~@root.repository}}
  {{~else}}
    {{~@root.repoUrl}}
  {{~/if}}/
  {{~@root.commit}}/{{hash}}))
{{~else}}
  {{~hash}}
{{~/if}}

{{~!-- commit references --}}
{{~#if references~}}
  , closes
  {{~#each references}} {{#if @root.linkReferences~}}
    [
    {{~#if this.owner}}
      {{~this.owner}}/
    {{~/if}}
    {{~this.repository}}#{{this.issue}}](
    {{~#if @root.repository}}
      {{~#if @root.host}}
        {{~@root.host}}/
      {{~/if}}
      {{~#if this.repository}}
        {{~#if this.owner}}
          {{~this.owner}}/
        {{~/if}}
        {{~this.repository}}
      {{~else}}
        {{~#if @root.owner}}
          {{~@root.owner}}/
        {{~/if}}
          {{~@root.repository}}
        {{~/if}}
    {{~else}}
      {{~@root.repoUrl}}
    {{~/if}}/
    {{~@root.issue}}/{{this.issue}})
  {{~else}}
    {{~#if this.owner}}
      {{~this.owner}}/
    {{~/if}}
    {{~this.repository}}#{{this.issue}}
  {{~/if}}{{/each}}
{{~/if}}`

module.exports = {
  "plugins": {
    "./conventional-changelog/index.js": {
      "ignoreRecommendedBump": true,
      "writerOpts": {
        "groupBy": "scope"
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
    }
  },
  "git": {
    "requireCleanWorkingDir": false,
    "commit": true,
    "commitMessage": "release: ${version}",
    "tag": true,
    "tagAnnotation": "Release ${version}",
    "push": false,
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
