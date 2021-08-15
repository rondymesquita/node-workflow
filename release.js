const release = require("release-it");
const conventionalChangelog = require("conventional-changelog");
const conventionalcommitsConfig = require("conventional-changelog-conventionalcommits");
const fs = require("fs");
const options = fs.readFileSync(".release-it.json").toString();

// const options = conventionalcommitsConfig({
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
//   // issuePrefixes: ["TEST-"],
//   // issueUrlFormat: "myBugTracker.com/{prefix}{id}",
// }).then(function (config) {
//   // console.log(Object.keys(config));
// });

conventionalChangelog(
  {
    // config: () => conventionalcommitsConfig,
    preset: "conventionalcommits",
    // releaseCount: 2,
    // transform: function(commit, cb) {
    //   console.log('>>',commit, '<<')
    //   // this.pipe(cb())
    //   // cb()
    //   commit = {
    //     ...commit,
    //     type: "rondy"
    //   }
    //   cb(commit);
    // },
  },
  null,
  {
    from: 1,
  },
  null,
  {
    groupBy: "scope",
    transform: function (commit) {
      // console.log("commit", commit);
    },
    finalizeContext: function (ctx, opts, commits, keyCommit) {
      console.log(ctx, opts, commits, keyCommit);
    },
  }
).pipe(process.stdout);

// console.log(options);
// console.log("1");

// conventionalChangelog({
//   config: conventionalcommitsConfig,
// }).pipe(process.stdout);

// conventionalChangelog(
//   {
//     releaseCount: 3,
//     preset: {},
//     // transform: function (params, cb) {
//     //   // console.log(params);
//     //   cb(params);
//     // },
//   },
//   null,
//   null,
//   null,
//   {
//     context: {},
//     transform: function (commit, ctx) {
//       // console.log(commit);
//     },
//   }
// ).pipe(process.stdout);

// release(options).then((output) => {
//   console.log(output);

// });
