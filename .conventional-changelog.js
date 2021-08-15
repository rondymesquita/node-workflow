module.exports = {
  preset: "angular",
  writerOpts: {
    mainTemplate:
      "{{commitGroups.[0].commits.[0].type}}{{testContext}}template",
  },
};
