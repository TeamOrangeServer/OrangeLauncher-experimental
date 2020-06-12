//const { electron, remote } = require('electron')
import { electron } from 'electron'

process.once('loaded', () => {
  global.process = process
  global.electron = electron
  global.module = module
})
/*
remote.getCurrentWindow().on('devtools-opened', () => {
  console.log(
    '%cThe console is dark and full of terrors.',
    'color: white; -webkit-text-stroke: 4px #a02d2a; font-size: 60px; font-weight: bold'
  )
})*/
