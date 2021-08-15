const release = require("release-it");
const conventionalChangelog = require("conventional-changelog");
const fs = require("fs");

const options = fs.readFileSync(".release-it2.json").toString();

// conventionalChangelog({
//   preset: "conventionalcommits",
// }).pipe(process.stdout); // or any writable stream

release(options).then((output) => {
  console.log(output);
});
