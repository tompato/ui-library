import '../scss/tabs.scss';

class Tabs {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll('button')
    }
    init() {
        this.tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                let contentEls = this.container.querySelectorAll('.content');
                this.tabs.forEach(tab => {
                    tab.classList.remove('active');
                })
                tab.classList.add('active');
                contentEls.forEach(contentEl => {
                    if(contentEl.getAttribute('id') != tab.getAttribute('data-target').substr(1,tab.getAttribute('data-target').length)) {
                        contentEl.classList.remove('active');
                    } else {
                        contentEl.classList.add('active');
                    }
                });
            })
        })
    }
}

export { Tabs as default }