!function(e,t){if("function"==typeof define&&define.amd)define(["exports"],t);else if("undefined"!=typeof exports)t(exports);else{var o={};t(o),e.bodyScrollLock=o}}(this,function(exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var e={get passive(){n=!0}};window.addEventListener("testPassive",null,e),window.removeEventListener("testPassive",null,e)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),l=null,d=[],u=!1,a=-1,c=void 0,s=void 0,v=function(t){return d.some(function(e){return!(!e.options.allowTouchMove||!e.options.allowTouchMove(t))})},f=function(e){var t=e||window.event;return!!v(t.target)||(1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1))},o=function(){setTimeout(function(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==c&&(document.body.style.overflow=c,c=void 0)})};exports.disableBodyScroll=function(r,e){if(i){if(!r)return void console.warn("targetElement must be provided, and disableBodyScroll must not have been called on this targetElement before.");if(r&&!d.some(function(e){return e.targetElement===r})){var t={targetElement:r,options:e||{}};d=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(d),[t]),r.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},r.ontouchmove=function(e){var t,o,n,i;1===e.targetTouches.length&&(o=r,i=(t=e).targetTouches[0].clientY-a,!v(t.target)&&(o&&0===o.scrollTop&&0<i?f(t):(n=o)&&n.scrollHeight-n.scrollTop<=n.clientHeight&&i<0?f(t):t.stopPropagation()))},u||(document.addEventListener("touchmove",f,n?{passive:!1}:void 0),u=!0)}}else o=e,setTimeout(function(){if(void 0===s){var e=!!o&&!0===o.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(s=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===c&&(c=document.body.style.overflow,document.body.style.overflow="hidden")}),l||(l=r);var o},exports.clearAllBodyScrollLocks=function(){i?(d.forEach(function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null}),u&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),u=!1),d=[],a=-1):(o(),l=null)},exports.enableBodyScroll=function(t){if(i){if(!t)return void console.warn("targetElement must be provided when calling enableBodyScroll.");t.ontouchstart=null,t.ontouchmove=null,d=d.filter(function(e){return e.targetElement!==t}),u&&0===d.length&&(document.removeEventListener("touchmove",f,n?{passive:!1}:void 0),u=!1)}else l===t&&(o(),l=null)}});
