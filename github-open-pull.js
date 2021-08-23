const args = process.argv.slice(2)

const [name, version, repository ] = args
const changelog = args.slice(2).join()

console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
console.log('>>>args', args);
console.log('>>>changelog', changelog);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
