(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1093:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TopLabel",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"TopLabelRow",{enumerable:!0,get:function(){return o.default}});var n=i(r(1096)),o=i(r(1095));function i(e){return e&&e.__esModule?e:{default:e}}},1094:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Top",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(1098))&&n.__esModule?n:{default:n}},1095:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=((n=r(2))&&n.__esModule,r(15));r(134),r(350);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.styles,r=e.children;return o.default.createElement("div",{className:t&&t.wrapper,__source:{fileName:"E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\topLabel\\top_label-row.js",lineNumber:25},__self:this},r)}},{key:"initialState",get:function(){return{}}}])&&u(r.prototype,n),i&&u(r,i),t}();Object.defineProperty(f,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(f,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var s=(0,i.connect)(function(e){var t=e.children;return{wrapper:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({marginRight:"-1rem",marginLeft:"-1rem"},t&&t.length?{display:"flex",justifyContent:"space-around",flexDirection:"row","-ms-flex-direction":"row","-ms-flex-pack":"distribute"}:{display:"flex",justifyContent:"center",flexDirection:"row","-ms-flex-direction":"row","-ms-flex-pack":"center"})}})(f);t.default=s},1096:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(15),i=r(134),a="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\topLabel\\top_label.js";function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var s=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(o=[{key:"render",value:function(){var e=this.props,t=e.styles,r=e.toggleTab,o=e.children,l=e.className,u=e.as,c=void 0===u?"h2":u;return t?n.default.createElement("div",{onClick:r,className:l+" "+t.wrapper,__source:{fileName:a,lineNumber:24},__self:this},n.default.createElement(i.Typography,{styles:{margin:0},as:c,size:"medium",fontWeight:"inherit",textAlign:"center",__source:{fileName:a,lineNumber:25},__self:this},o)):null}},{key:"initialState",get:function(){return{}}}])&&c(r.prototype,o),l&&c(r,l),t}();Object.defineProperty(s,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(s,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var p=(0,o.connect)(function(e){e.theme;var t=e.isActive,r=e.styles;return{wrapper:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({position:"relative",display:"inline-block",transform:"translateY(-50%)",padding:"2rem",margin:"1rem",zIndex:5,backgroundColor:"#FFFFFF"},t?{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",fontWeight:"bold"}:null,r)}})(s);t.default=p},1097:function(e,t){e.exports="/assets/media/BCgraphicelement-3-min-597369e2.jpg"},1098:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(15),a=r(134),l=r(206),u=(n=r(1097))&&n.__esModule?n:{default:n},c="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\top\\top.js";function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){s(e,t,r[t])})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.styles,r=e.children;return t?o.default.createElement("div",{className:t.wrapper,__source:{fileName:c,lineNumber:26},__self:this},o.default.createElement("img",{className:t.bgImage,src:u.default,alt:"",__source:{fileName:c,lineNumber:27},__self:this}),o.default.createElement(l.Column,{styles:{position:"relative",zIndex:"2"},grid:[[425,80,"%"],[768,60,"%"]],__source:{fileName:c,lineNumber:29},__self:this},o.default.createElement(a.Typography,{styles:{margin:"3.125rem 0 5.625rem",fontSize:"2rem"},as:"h1",size:"medium",textAlign:"center",__source:{fileName:c,lineNumber:37},__self:this},r))):null}},{key:"initialState",get:function(){return{}}}])&&b(r.prototype,n),i&&b(r,i),t}();Object.defineProperty(y,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(y,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var d=(0,i.connect)(function(e){var t=e.theme,r=e.marginBottom,n=e.paddingBottom;return{wrapper:f({paddingTop:"1px",verticalAlign:"top",textAlign:"center",position:"relative",maxWeight:"1200px",overflow:"hidden"},t?f({},t.top):null,r?{marginBottom:r}:null,n?{paddingBottom:n}:{paddingBottom:"1px"}),bgImage:{position:"absolute",width:"200%",top:"50%",left:"50%",zIndex:"1",transform:"translate(-50%,-50%)","@media(min-width:768px)":{width:"150%"},"@media(min-width:1024px)":{width:"100%"}}}})(y);t.default=d},1102:function(e,t){e.exports="/assets/media/icon_close-ac16cd0b.svg"},1103:function(e,t){e.exports="/assets/media/icon_home-9d8cd709.svg"},354:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(207),i=_(r(355)),a=r(1094),l=r(206),u=r(1093),c=r(134),f=r(350),s=r(68),p=r(44),b=_(r(1102)),m=_(r(1103)),y=r(18),d="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\routes\\errors\\404.js";function _(e){return e&&e.__esModule?e:{default:e}}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var O=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=v(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,p,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(p=[{key:"render",value:function(){var e=this.props,t=e.translate;e.instruction,e.styles,e.staticContext;return n.default.createElement(n.Fragment,{__source:{fileName:d,lineNumber:36},__self:this},n.default.createElement(a.Top,{paddingBottom:"7rem",__source:{fileName:d,lineNumber:37},__self:this},t("home_error")),n.default.createElement(o.Container,{__source:{fileName:d,lineNumber:40},__self:this},n.default.createElement(u.TopLabelRow,{__source:{fileName:d,lineNumber:41},__self:this},n.default.createElement(u.TopLabel,{as:"div",isActive:!0,__source:{fileName:d,lineNumber:42},__self:this},n.default.createElement(f.Image,{styles:{maxWidth:"8rem"},src:b.default,__source:{fileName:d,lineNumber:43},__self:this}),n.default.createElement(c.Typography,{as:"h2",size:"large",fontWeight:"bold",textAlign:"center",textTransform:"uppercase",color:"secondary",bright:"contrastText",__source:{fileName:d,lineNumber:44},__self:this},t("home_error_page_not_found"))))),n.default.createElement(o.Container,{styles:{marginTop:"-10rem",textAlign:"center"},__source:{fileName:d,lineNumber:53},__self:this},n.default.createElement(l.Column,{grid:[[,70,"%"]],__source:{fileName:d,lineNumber:54},__self:this},n.default.createElement(c.Typography,{as:"p",size:"medium",fontWeight:"bold",styles:{lineHeight:"2"},color:"secondary",bright:"contrastText",__source:{fileName:d,lineNumber:55},__self:this},t("home_error_page_not_found_description_title"),n.default.createElement("br",{__source:{fileName:d,lineNumber:57},__self:this}),t("home_error_page_not_found_description_1"),n.default.createElement("br",{__source:{fileName:d,lineNumber:58},__self:this}),t("home_error_page_not_found_description_2"),n.default.createElement("br",{__source:{fileName:d,lineNumber:59},__self:this}),t("home_error_page_not_found_description_3")))),n.default.createElement(o.Container,{styles:{paddingBottom:"5rem",textAlign:"center"},__source:{fileName:d,lineNumber:64},__self:this},n.default.createElement(s.Link,{to:"/",styles:{textDecoration:"none"},__source:{fileName:d,lineNumber:65},__self:this},n.default.createElement(i.default,{variant:"raised",color:"primary",__source:{fileName:d,lineNumber:66},__self:this},n.default.createElement(f.Image,{src:m.default,styles:{padding:"0.2rem"},__source:{fileName:d,lineNumber:67},__self:this}),n.default.createElement(c.Typography,{as:"p",size:"small",color:"secondary",bright:"contrastText",__source:{fileName:d,lineNumber:68},__self:this},t("home_page_title"))))))}},{key:"initialState",get:function(){return{}}}])&&h(r.prototype,p),y&&h(r,y),t}();Object.defineProperty(O,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(O,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var w=O=(0,y.connect)(function(e){return{translate:(0,p.getTranslate)(e.locale),currentLanguage:(0,p.getActiveLanguage)(e.locale).code}})(O);t.default=w}}]);