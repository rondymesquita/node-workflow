module.exports = {
  // "dry-run": true,
  // "dryRun": true,
  "plugins": {
    "@release-it/conventional-changelog": {
      "ignoreRecommendedBump": true,
      // "gitRawCommitsOpts": {
      //   "merges": null
      // },
      // "parserOpts": {

      // },
      // "writerOpts": {
      //   "groupBy": "scope"
      // },
      // "infile": "CHANGELOG.md",
      "preset": {
        "name": "conventionalcommits",
        "types": [
          { "type": "feat", "section": "Features" },
          { "type": "fix", "section": "Bug Fixes" },
          { "type": "chore", "section": "Chores" },
          { "type": "docs", "section": "Docos" },
          { "type": "style", "section": "Code Style" },
          { "type": "refactor", "section": "Refactors" },
          { "type": "perf", "section": "Performance" },
          { "type": "test", "section": "Tests" }
        ]
      }
    }
  },
  "git": {
    // "changelog": "git log v0.0.36..HEAD --oneline",
    "requireCleanWorkingDir": false,
    "commit": true,
    "commitMessage": "Release ${version}",
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
