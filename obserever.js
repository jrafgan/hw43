var Observer = function () {
    this.listeners = {};
};
Observer.prototype.on = function (type, listener) {
    if (!this.listeners[type]) {
        this.listeners[type] = [];
    }
    this.listeners[type].push(listener);
};

Observer.prototype.trigger = function (type, event) { //
    if (this.listeners[type]) {
        this.listeners[type].forEach(function (listener) {
            listener(event);
        });
    }
};