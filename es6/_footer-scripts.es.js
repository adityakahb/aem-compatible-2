import { __AddClass, __RemoveClass, __GetElementDimensions, __PortraitCSSClass, __LandscapeCSSClass } from './_constants.es';

let bodyElem;
let bgElements;
let bgElementDimension;

export default class GlobalScripts {
  constructor() {}
  reportWindowOrientation() {
    setTimeout(() => {
      if ((bgElements || []).length > 0) {
        bgElements.forEach(element => {
          bgElementDimension = __GetElementDimensions(element);
          if (bgElementDimension.height > bgElementDimension.width) {
            __AddClass(element, __PortraitCSSClass);
            __RemoveClass(element, __LandscapeCSSClass);
          }
          if (bgElementDimension.height <= bgElementDimension.width) {
            __RemoveClass(element, __PortraitCSSClass);
            __AddClass(element, __LandscapeCSSClass);
          }
        });
      }
      if (bodyElem && window.innerHeight > window.innerWidth) {
        __AddClass(bodyElem, __PortraitCSSClass);
        __RemoveClass(bodyElem, __LandscapeCSSClass);
      }
      if (bodyElem && window.innerHeight <= window.innerWidth) {
        __RemoveClass(bodyElem, __PortraitCSSClass);
        __AddClass(bodyElem, __LandscapeCSSClass);
      }
    }, 0);
  }
  __init() {
    bodyElem = document.querySelector('body');
    bgElements = Array.prototype.slice.call(document.querySelectorAll('.bg-img-wrap') || []);
    this.reportWindowOrientation();
    window.addEventListener('resize', this.reportWindowOrientation, false);
  }
}

document.addEventListener( 'DOMContentLoaded', function () {
  const globalscripts = new GlobalScripts();
  globalscripts.__init();
});
