import './scss/defaults.scss';
import Tooltip from './ui/tooltip';
import Accordion from './ui/accordion';
import Tabs from './ui/tabs';
import Notification from './ui/notification';

// Create a tooltip
const tooltips = document.querySelectorAll('[data-tooltip]');
tooltips.forEach(tooltip => {
    let a = new Tooltip(tooltip);
    a.init();
});

// Create an ccordion
const accordion = document.querySelector('.accordion');
let b = new Accordion(accordion);
b.init();

// Create tabs
const tabs = document.querySelectorAll('.tabs');
tabs.forEach(tab => {
    let c = new Tabs(tab);
    c.init();
})

// Create notification
const notification = new Notification();
notification.init();
document.querySelector('#notify').addEventListener('click', e => {
    e.preventDefault();
    notification.show('Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet obcaecati et debitis excepturi corrupti deserunt aperiam.');
})