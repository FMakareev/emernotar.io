(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),l=n(212),a=(r=n(1161))&&r.__esModule?r:{default:r},u=n(213),i=n(211),c=n(353),f=n(50),p=n(18);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var n,r,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.translate;return o.default.createElement(l.Container,null,o.default.createElement(a.default,{as:"h1"},e("notification_record_added")),o.default.createElement(u.Row,null,o.default.createElement(i.Column,null,o.default.createElement(a.default,{as:"h3"},e("notification_notar_info")),o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement("b",null,e("notification_owner"),":")," Кто то"),o.default.createElement("li",null,o.default.createElement("b",null,e("notification_date"))," 00.00.0000")))),o.default.createElement(u.Row,null,o.default.createElement(i.Column,null,o.default.createElement(c.Button,{variant:"raised",color:"secondary"},e("notification_view_cert")))))}}])&&d(n.prototype,r),f&&d(n,f),t}(),m=(0,p.connect)(function(e){return{translate:(0,f.getTranslate)(e.locale),currentLanguage:(0,f.getActiveLanguage)(e.locale).code}})(b);t.default=m},1161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(1)),l=((r=n(2))&&r.__esModule,n(216));function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=(0,n(15).createComponentWithProxy)(function(e){var t=e.as,n=void 0===t?"default":t,r=e.textTransform,o=void 0!==r&&r,l=e.fontWeight,u=void 0!==l&&l,i=e.textAlign;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){a(e,t,n[t])})}return e}({lineHeight:1.2,as:n},o?{textTransform:"uppercase"}:null,u?{fontWeights:"700"}:null,void 0!==i&&i?{textAlign:"center"}:null)},function e(t){var n=(0,l.getElementType)(e,t);return o.default.createElement(n,{className:t.className},t.children||"")});t.default=u}}]);