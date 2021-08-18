module.exports = {
	extends: ['@commitlint/config-conventional'],
	"rules": {
    "type-enum": [2, "always", ['feat', 'build', 'fix', 'chore', 'ci', 'docs', 'style', 'refactor', 'perf', 'test', "release"]],
  }
}
