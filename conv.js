const config = require("conventional-changelog-conventionalcommits");

module.exports = config({
  issuePrefixes: ["TEST-"],
  issueUrlFormat: "myBugTracker.com/{prefix}{id}",
});
