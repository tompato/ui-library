import '../scss/notification.scss'

class Notification {
    constructor() {
        this.element = document.createElement('div');
    }
    init(message) {
        this.element.classList.add('notification');
        document.querySelector('body').appendChild(this.element);
    }
    show(message) {
        this.element.textContent = message;
        this.element.classList.add('notification--active');
        setTimeout(() => {
            this.element.classList.remove('notification--active');
        }, 5000);
    }
}

export { Notification as default }