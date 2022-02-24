import '../scss/accordion.scss';

class Accordion {
    constructor(container) {
        this.container = container,
        this.items = container.querySelectorAll('.accordion__item')
    }
    init() {
        this.items.forEach(accordion => {
            const trigger = accordion.querySelector('button');
            trigger.addEventListener('click', () => {
                let currentStatus = (accordion.classList.contains('accordion__item--active')) ? true : false;
                this.items.forEach(accordion => accordion.classList.remove('accordion__item--active'));
                if(!currentStatus) { accordion.classList.toggle('accordion__item--active')}
            })
        });
    }
}

export { Accordion as default }