class Typing {
    constructor({ el, interval, delay }) {
        this.el = document.querySelector(el)
        this.interval = interval || 500
        this.delay = delay ?? 1000
        this.text = this.el.innerHTML.trim()
        this.el.innerHTML = ''
        setTimeout(() => this.write(), this.delay);
    }

    write(i = 0) {
        this.el.innerHTML += this.text[i]
        i++
        if (i < this.text.length) {
            setTimeout(() => {
                this.write(i)
            }, this.interval);
        }
    }
}
