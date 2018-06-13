const Terminal = (() => {
    let _term = Symbol('Terminal');
    let _messages = Symbol('Terminal');
    let _promise = Symbol('Terminal');

    let _renderer = (msg, type) => {
        return `<div class="story-conversation-message--${type}" data-message="${msg}"></div>`
    }
    return class {
        constructor(args) {
            this[_term] = args.hasOwnProperty('element') ? args.element : null;
            if (this[_term] === null) {
                throw new Error('Terminal requires DOM Element');
            } else {
                this[_messages] = [];
                this[_promise] = new Promise(resolve => resolve());
            }
        }
        render(speed, delay) {
            let _speed = speed || 1000/30;
            let _delay = delay || 20;
            this[_promise] = this[_promise].then((() => {
                return new Promise(resolve => {
                    setTimeout(() => {
                        this[_term].innerHTML += this[_messages].shift();
                        let element = this[_term].querySelector('[data-message]');
                        let message = element.dataset.message.split('');

                        if (message.length > 0) {
                            let timer = setInterval(() => {
                                let letter = message.shift();
                                if (letter) {
                                    element.innerHTML += letter;
                                } else {
                                    clearInterval(timer);
                                    resolve();
                                }
                            }, _speed);
                        }

                        delete element.dataset.message;
                    }, _delay);
                });
            }));
        }
        write(args) {
            let message = _renderer(args.message, args.type);
            this[_messages].push(message);
            this.render(args.typingSpeed, args.initialDelay);
        }
        clear() {
            this[_promise] = this[_promise].then(() => {
                return new Promise(resolve => {
                    // TODO: Make clearing the terminal more fancy...??
                    let element = this[_term].innerHTML = '';
                    resolve();
                });
            });
        }
    }
})();
