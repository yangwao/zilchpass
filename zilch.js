#!/usr/bin/env node
'use strict';

const blake = require('blakejs')
const clipboardy = require('clipboardy');
const inquirer = require('inquirer')
const meow = require('meow')
const niceware = require('niceware')
const cli = meow(`
  Usage
  $ zilch <domain> <even-sized entropy> <joinChar> <clipboard-timeout-in-ms>`)
const i = { domain: cli.input[0],
          entropy: cli.input[1],
          joinChar: cli.input[2],
          clpbrdtimeout: cli.input[3],
          backupClipboard: clipboardy.readSync()
        }

// default config
if(i.entropy === undefined)
  i.entropy = 6

if(i.joinChar === undefined)
  i.joinChar = '+'

if(i.clpbrdtimeout === undefined)
  i.clpbrdtimeout = 5000

inquirer.prompt([
  {
    type: 'password',
    message: 'Enter your masterpass',
    name: 'mpw'
}
]).then(function (a) {
  const mpw = blake.blake2bHex(a.mpw, a.mpw)
  const domain = blake.blake2bHex(mpw, i.domain, 32)
  // const str = domain.toLowerCase().replace(/[,\s]/g, '');
  const mix = blake.blake2bHex(mpw, domain, i.entropy)
  const buffer = Buffer.from(mix, 'hex')
  const arr = niceware.bytesToPassphrase(buffer)
  const password = arr.join(i.joinChar)
  clipboardy.writeSync(password)
  setTimeout(function() {
    clipboardy.writeSync(i.backupClipboard)
  }, cli.input[3]);
}).catch(function(err) {
  console.error(err.message)
})
