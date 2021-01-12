import "core-js/stable";
import Accordion from './../../../../es6/accordion/_index.es';

class Buttons {
  constructor() {}
  __init() {
    const accordion = new Accordion();
    accordion.__init();
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const buttons = new Buttons();
  buttons.__init();
});