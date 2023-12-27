#!/usr/bin/env node

import { realpathSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { Note } from './note.js'

/** documentation in docopt.org format */
export const documentation = ({ command = 'socialweb' } = {}) => `
socialweb

What?
  socialweb is a cli for using the social web e.g. ActivityPub[0]

Usage:
  # create a note that says 'hi' and write it to stdout
  ${command} note hi

Options:
  # none atm. maybe later

Examples:
  # writes a social note as json to stdout
  ${command} note hi

[0]: https://en.wikipedia.org/wiki/ActivityPub
`

async function main() {
  const args = parseArgs({
    allowPositionals: true,
  })
  const [command] = args.positionals
  switch (command) {
    case "note":
      console.log(JSON.stringify(new Note({
        content: args.positionals[1],
      }), undefined, 2))
      break;
    case "help":
    default:
      console.log(documentation())
  }
}

// if this file is executed directly, run `main`
if (fileURLToPath(import.meta.url) === realpathSync(process.argv[1])) {
  await main()
}
