export const __HeaderBreakpoint = '768';
export const __LandscapeCSSClass = 'is-landscape';
export const __PortraitCSSClass = 'is-portrait';
export const __FormValidElementClass = 'is-valid';
export const __FormInvalidElementClass = 'is-invalid';
export const __DefaultCarouselOptions = {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next>button',
    prevEl: '.swiper-button-prev>button',
  },
  responsive4: {
    slidesPerView: 1,
    slidesPerGroup: 1,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4
      }
    }
  }
};
export const __GetElementDimensions = function (elem) {
  try {
    let docElem, win, box = {
        top: 0,
        left: 0
      },
      doc = elem && elem.ownerDocument;

    let isWindow = (obj) => {
      return obj != null && obj === obj.window;
    };

    let getWindow = (elem) => {
      return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    };

    docElem = doc.documentElement;
    if (typeof elem.getBoundingClientRect !== typeof undefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + win.pageYOffset - docElem.clientTop,
      left: box.left + win.pageXOffset - docElem.clientLeft,
      width: box.width ? box.width : 0,
      height: box.height ? box.height : 0
    };
  } catch (e) {
    return {
      top: 0,
      left: 0,
      width: 0,
      height: 0
    };
  }
};
export const __StringTrim = function (str) {
  return str.replace(/^\s+|\s+$/g, '');
};
export const _ArrayCall = function (arr) {
  try {
    return Array.prototype.slice.call(arr);
  } catch (e) {
    return [];
  }
};
export const __HasClass = function (element, cls) {
  if (element) {
    let clsarr = element.className.split(' ');
    return clsarr.indexOf(cls) > -1 ? true : false;
  }
  return false;
};
export const __AddClass = function (element, cls) {
  if (element) {
    let clsarr = cls.split(' ');
    let clsarrLength = clsarr.length;
    for (let i = 0; i < clsarrLength; i++) {
      let thiscls = clsarr[i];
      if (!__HasClass(element, thiscls)) {
        element.className += ' ' + thiscls;
      }
    }
    element.className = __StringTrim(element.className);
  }
};
export const __RemoveClass = function (element, cls) {
  if (element) {
    let clsarr = cls.split(' ');
    let curclass = element.className.split(' ');
    let curclassLength = curclass.length;
    for (let i = 0; i < curclassLength; i++) {
      let thiscls = curclass[i];
      if (clsarr.indexOf(thiscls) > -1) {
        curclass.splice(i, 1);
        i--;
      }
    }
    element.className = __StringTrim(curclass.join(' '));
  }
};
export const __SlideUp = (target, duration=500) => {
  if (target) {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout( () => {
      target.style.display = 'none';
      target.style.removeProperty('height');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }
};

export const __SlideDown = (target, duration=500) => {
  if (target) {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
  
    if (display === 'none')
      display = 'block';
  
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout( () => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
    }, duration);
  }
};

export const __SlideToggle = (target, duration = 500) => {
  if (target) {
    if (window.getComputedStyle(target).display === 'none') {
      return slideDown(target, duration);
    } else {
      return slideUp(target, duration);
    }
  }
};

// let speedAnimation = 400;
// let targetId = document.getElementById("target");

// let slideBtnClick = (id, sl) => document.getElementById(id).addEventListener('click', () => sl(targetId, speedAnimation));

// slideBtnClick('triggerUp', slideUp);
// slideBtnClick('triggerDown', slideDown);
// slideBtnClick('triggerToggle', slideToggle);
