(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1068:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(346),l=(n=r(1087))&&n.__esModule?n:{default:n},a=r(347),u=r(345),c=r(349),f=r(67),s=r(27),_="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\modules\\notification\\view\\notification\\index.js";function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props.translate;return o.default.createElement(i.Container,{__source:{fileName:_,lineNumber:16},__self:this},o.default.createElement(l.default,{as:"h1",__source:{fileName:_,lineNumber:17},__self:this},e("notification_record_added")),o.default.createElement(a.Row,{__source:{fileName:_,lineNumber:20},__self:this},o.default.createElement(u.Column,{__source:{fileName:_,lineNumber:21},__self:this},o.default.createElement(l.default,{as:"h3",__source:{fileName:_,lineNumber:22},__self:this},e("notification_notar_info")),o.default.createElement("ul",{__source:{fileName:_,lineNumber:25},__self:this},o.default.createElement("li",{__source:{fileName:_,lineNumber:26},__self:this},o.default.createElement("b",{__source:{fileName:_,lineNumber:27},__self:this},e("notification_owner"),":")," Кто то"),o.default.createElement("li",{__source:{fileName:_,lineNumber:29},__self:this},o.default.createElement("b",{__source:{fileName:_,lineNumber:30},__self:this},e("notification_date"))," 00.00.0000")))),o.default.createElement(a.Row,{__source:{fileName:_,lineNumber:35},__self:this},o.default.createElement(u.Column,{__source:{fileName:_,lineNumber:36},__self:this},o.default.createElement(c.Button,{variant:"raised",color:"secondary",__source:{fileName:_,lineNumber:37},__self:this},e("notification_view_cert")))))}}])&&p(r.prototype,n),f&&p(r,f),t}(),y=(0,s.connect)(function(e){return{translate:(0,f.getTranslate)(e.locale),currentLanguage:(0,f.getActiveLanguage)(e.locale).code}})(d);t.default=y},1087:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=((n=r(2))&&n.__esModule,r(202));function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=(0,r(14).createComponentWithProxy)(function(e){var t=e.as,r=void 0===t?"default":t,n=e.textTransform,o=void 0!==n&&n,i=e.fontWeight,a=void 0!==i&&i,u=e.textAlign;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({lineHeight:1.2,as:r},o?{textTransform:"uppercase"}:null,a?{fontWeights:"700"}:null,void 0!==u&&u?{textAlign:"center"}:null)},function e(t){var r=(0,i.getElementType)(e,t);return o.default.createElement(r,{className:t.className,__source:{fileName:"E:\\development\\compaero.project\\emernatar.io-ssr\\src\\blocks\\title\\title.js",lineNumber:62},__self:this},t.children||"")});t.default=a}}]);