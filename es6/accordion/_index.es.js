import { __ArrayCall, __AddClass, __HasClass, __RemoveClass, __ActiveClass, __SlideUp, __SlideDown } from './../_constants.es';

const __AccordionClickFn = (item, link, content) => {
  return () => {
    if (event) {
      event.preventDefault();
    }
    if (__HasClass(item, __ActiveClass)) {
      __RemoveClass(item, __ActiveClass);
      __SlideUp(content);

    } else {
      __AddClass(item, __ActiveClass);
      __SlideDown(content);
    }
  }
};

export default class Accordion {
  constructor() {}
  __init() {
    const accordions = __ArrayCall(document.querySelectorAll('[data-accordion]') || []);
    accordions.forEach(accordion => {
      const items = __ArrayCall(accordion.querySelectorAll('[data-accordionitem]') || []);
      items.forEach(item => {
        const link = item.querySelector('[data-accordionlink]');
        const content = item.querySelector('[data-accordioncontent]');
        if (link && content) {
          if (!link.accordionClickFn) {
            link.accordionClickFn = __AccordionClickFn(item, link, content);
          }
          link.addEventListener('click', link.accordionClickFn);
        }
      });
    });
  }
}