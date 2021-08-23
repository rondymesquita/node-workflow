const args = process.argv.slice(2)

const [name, version, repository ] = args
const changelog = args.slice(2).join()

console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
console.log('>>log args', args);
console.debug('>>>debug args', args);
console.info('>>>info args', args);
console.log('>>>changelog', changelog);
console.log('>>>>>>>>>>>>>>>>>>>>>>>>')
