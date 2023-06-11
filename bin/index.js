#!/usr/bin/env node
// let argv = process.argv
// console.warn(argv)
// argv.shift()

// for (const i in argv) {
//   let _argv = argv[i]
//   if (_argv == '-h' || _argv == '--help') {
//     console.log('this is help info')
//   }
// }

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
  .command(
    'serve [port]',
    'start the server',
    (yargs) => {
      return yargs.positional('port', {
        describe: 'port to bind on',
        default: 5000,
      })
    },
    (argv) => {
      if (argv.verbose) console.info(`start server on :${argv.port}`)
      serve(argv.port)
    },
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  })
  .parse()
