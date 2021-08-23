const args = process.argv.slice(2)
// const args = [
//   'workflow-node',
//   'v0.0.42',
//   'rondymesquita/workflow-node',
//   '*',
//   'release:',
//   '0.0.41',
//   '(ab09c78)'
// ]

const [name, version, repository ] = args
const changelog = args.slice(2).join()

console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
console.log('>>log args', args);
console.debug('>>>debug args', args);
console.info('>>>info args', args);
console.log('>>>changelog', changelog);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
