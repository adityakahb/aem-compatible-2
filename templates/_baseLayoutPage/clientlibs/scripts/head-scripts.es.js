import 'lazysizes';
import picturefill from 'picturefill';

export default class HeadScripts {
  constructor() {}
  
  __init() {
    if(typeof picturefill === "function") {
      picturefill();
    }
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const hscripts = new HeadScripts();
  hscripts.__init();
});