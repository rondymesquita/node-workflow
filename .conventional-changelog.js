module.exports = {
  preset: "conventionalcommits",
  writerOpts: {
    mainTemplate:
      "{{commitGroups.[0].commits.[0].type}}{{testContext}}template",
  },
};
