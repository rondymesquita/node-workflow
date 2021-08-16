const conventionalcommits = require("conventional-changelog-conventionalcommits");
const conventionalChangelog = require("conventional-changelog");

const config = conventionalcommits({
  issuePrefixes: ["TEST-"],
  issueUrlFormat: "myBugTracker.com/{prefix}{id}",
  types: [
    { type: "feat", section: "Features" },
    { type: "fix", section: "Bug Fixes" },
    { type: "chore", section: "Chores" },
    { type: "docs", section: "Docos" },
    { type: "style", section: "Code Style" },
    { type: "refactor", section: "Refactors" },
    { type: "perf", section: "Performance" },
    { type: "test", section: "Tests" },
  ],
});

config.then((c) => {
  conventionalChangelog(
    {
      releaseCount: 4,
      config: c,
    },
    null,
    null,
    null,
    {
      groupBy: "scope",
    }
  ).pipe(process.stdout);
});
