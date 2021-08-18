function Emitter() {
    this.events = {};
}

// on = It's a standard for each kind of event
/**
 * This will register only the event, but execute
 * @param {*} type Type of event
 * @param {*} listener To trigger the event
 */
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        });
    }
}

module.exports = Emitter;