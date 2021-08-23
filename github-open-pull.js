const args = process.argv.slice(2)
// const args = [
//   'workflow-node',
//   'v0.0.44',
//   'rondymesquita/workflow-node',
//   '###',
//   '[0.0.44](https://github.com/rondymesquita/workflow-node/compare/v0.0.43...v0.0.44)',
//   '(2021-08-23)'
// ]
console.log('>>>', args);
const cl = `### [0.0.44](https://github.com/rondymesquita/workflow-node/compare/v0.0.43...v0.0.44) (2021-08-23)


### SCOPE-1


* chore(SCOPE-1): testing to open PR automatically ([d803ef5](https://github.com/rondymesquita/workflow-node/commit/d803ef5fbf48dfc704e19e368fbb9711ba93ea38))`

// console.log(`${cl.replace(/\n/g)}`);
// console.log(cl.replace(//g, ""))
// const args = ["workflow-none", "v0.0.42", "rondy", cl]


// const [name, version, repository ] = args
// const changelog = args.slice(2).join()

// console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
// console.log('>>log args', args)
// console.log('>>>changelog', changelog)
// console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
