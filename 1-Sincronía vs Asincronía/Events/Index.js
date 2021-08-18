// const Emitter = require('./emitter')
const { EventEmitter } = require('events') //This is from Nodejs
const { SAVED } = require('./event-names')
// const emitter = new Emitter();
const emitter = new EventEmitter();

emitter.on(SAVED, () => {
    console.log('On save activated 1')
})

emitter.on(SAVED, () => {
    console.log('On save activated 2')
})

emitter.emit(SAVED)