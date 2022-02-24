import '../scss/tooltip.scss';

class Tooltip {
    constructor(element) {
        this.element = element,
        this.message = element.getAttribute('data-tooltip'),
        this.position = element.getAttribute('data-tooltip-position')
    }
    init() {
        const content = document.createElement('div');
        content.classList.add('tooltip');
        content.textContent = this.message;
        this.element.appendChild(content);
        if(this.position == 'bottom') {
            content.classList.add('tooltip--bottom');
        }
        // Add event listeners
        this.element.addEventListener('mouseenter', () => {
            content.classList.add('tooltip--active');
        })
        this.element.addEventListener('mouseleave', () => {
            content.classList.remove('tooltip--active');
        })
    }
}

export { Tooltip as default }