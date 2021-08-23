const { Plugin } = require("release-it");
const { Octokit, App, Action } = require("octokit");

class MyPlugin extends Plugin {
  init() {
    // console.log("init", this);
    // this.octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
  }
  async beforeRelease() {
    const context = this.config.getContext();
    console.log("beforeRelease", context);
    const { version, changelog } = context;
    const { pullTitle } = this.options;
    console.log("beforeRelease", pullTitle);
    // console.log("beforeRelease", Object.keys(this.config.getContext()));
    // console.log("beforeRelease", context.changelog);

    try {
      const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
      const response = await octokit.request(
        "POST /repos/rondymesquita/workflow-node/pulls",
        {
          owner: "rondymesquita",
          repo: "workflow-node",
          head: "dev",
          base: "main",
          body: context.changelog,
          title: "Release: v" + version,
        }
      );
      console.log(response.status);
    } catch (err) {
      console.log(">>>err", err.status);
      console.log(">>>err", err.response.data);
      console.log(">>>responerrse", err.response.data.errors);
    }
  }
  // release() {
  //   console.log("release", this.config.getContext());
  // }
  // afterRelease() {
  //   console.log("afterRelease", this.config.getContext());
  // }
}

module.exports = MyPlugin;
