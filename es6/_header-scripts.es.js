import 'lazysizes';
import picturefill from 'picturefill';

export default class HeaderScripts {
  constructor() {}
  
  __init() {
    if(typeof picturefill === "function") {
      picturefill();
    }
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const hscripts = new HeaderScripts();
  hscripts.__init();
});