const conventionalcommits = require("conventional-changelog-conventionalcommits");
const conventionalChangelog = require("conventional-changelog");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

// async function main() {
//   const { stdout: lastestVersion } = await exec(
//     "git describe --tags --abbrev=0"
//   );
//   const { stdout: changelog } = await exec(
//     `git log ${lastestVersion}..HEAD --oneline`
//   );
//   console.log(changelog);
// }
// main();

const [from, to] = process.argv.slice(2);

console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
console.log(process.argv.slice(2));
console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');

// const config = conventionalcommits({
//   issuePrefixes: ["TEST-"],
//   issueUrlFormat: "myBugTracker.com/{prefix}{id}",
//   types: [
//     { type: "feat", section: "Features" },
//     { type: "fix", section: "Bug Fixes" },
//     { type: "chore", section: "Chores" },
//     { type: "docs", section: "Docos" },
//     { type: "style", section: "Code Style" },
//     { type: "refactor", section: "Refactors" },
//     { type: "perf", section: "Performance" },
//     { type: "test", section: "Tests" },
//   ],
// });

// config.then((c) => {
//   conventionalChangelog(
//     {
//       // pkg: {
//       //   transform: function (commit) {
//       //     console.log(arguments);
//       //   },
//       // },
//       releaseCount: 2,
//       config: c,
//     },
//     null,
//     // {
//     //   version: to,
//     // },
//     null,
//     // { from: from },
//     null,
//     {
//       groupBy: "scope",
//       // transform: function (commit, cb) {
//       //   console.log(commit);
//       //   // return;
//       //   // cb();
//       // },
//       // finalizeContext(context, options, commits, keyCommit) {
//       //   // console.log(commits);
//       //   // return { commitGroups: commits };
//       // },
//     }
//   ).pipe(process.stdout);
// });
