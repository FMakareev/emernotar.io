(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1087:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TopLabel",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"TopLabelRow",{enumerable:!0,get:function(){return o.default}});var n=i(r(1090)),o=i(r(1089));function i(e){return e&&e.__esModule?e:{default:e}}},1088:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Top",{enumerable:!0,get:function(){return o.default}});var n,o=(n=r(1092))&&n.__esModule?n:{default:n}},1089:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=((n=r(2))&&n.__esModule,r(15));r(205),r(349);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.styles,r=e.children;return o.default.createElement("div",{className:t&&t.wrapper,__source:{fileName:"E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\topLabel\\top_label-row.js",lineNumber:25},__self:this},r)}},{key:"initialState",get:function(){return{}}}])&&u(r.prototype,n),i&&u(r,i),t}();Object.defineProperty(f,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(f,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var s=(0,i.connect)(function(e){var t=e.children;return{wrapper:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({marginRight:"-1rem",marginLeft:"-1rem"},t&&t.length?{display:"flex",justifyContent:"space-around",flexDirection:"row"}:{display:"flex",justifyContent:"center",flexDirection:"row"})}})(f);t.default=s},1090:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(15),i=r(205),l="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\topLabel\\top_label.js";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var s=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(o=[{key:"render",value:function(){var e=this.props,t=e.styles,r=e.toggleTab,o=e.children,a=e.className,u=e.as,c=void 0===u?"h2":u;return t?n.default.createElement("div",{onClick:r,className:a+" "+t.wrapper,__source:{fileName:l,lineNumber:24},__self:this},n.default.createElement(i.Typography,{styles:{margin:0},as:c,size:"medium",fontWeight:"inherit",textAlign:"center",__source:{fileName:l,lineNumber:25},__self:this},o)):null}},{key:"initialState",get:function(){return{}}}])&&c(r.prototype,o),a&&c(r,a),t}();Object.defineProperty(s,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(s,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var p=(0,o.connect)(function(e){e.theme;var t=e.isActive,r=e.styles;return{wrapper:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({position:"relative",display:"inline-block",transform:"translateY(-50%)",padding:"2rem",margin:"1rem",zIndex:5,backgroundColor:"#FFFFFF"},t?{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",fontWeight:"bold"}:null,r)}})(s);t.default=p},1091:function(e,t){e.exports="/assets/media/BCgraphicelement-3-min-597369e2.jpg"},1092:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),i=r(15),l=r(205),a=r(206),u=(n=r(1091))&&n.__esModule?n:{default:n},c="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\components\\top\\top.js";function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){s(e,t,r[t])})}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.styles,r=e.children;return t?o.default.createElement("div",{className:t.wrapper,__source:{fileName:c,lineNumber:26},__self:this},o.default.createElement("img",{className:t.bgImage,src:u.default,alt:"",__source:{fileName:c,lineNumber:27},__self:this}),o.default.createElement(a.Column,{styles:{position:"relative",zIndex:"2"},grid:[[425,80,"%"],[768,60,"%"]],__source:{fileName:c,lineNumber:29},__self:this},o.default.createElement(l.Typography,{styles:{margin:"3.125rem 0 5.625rem",fontSize:"2rem"},as:"h1",size:"medium",textAlign:"center",__source:{fileName:c,lineNumber:37},__self:this},r))):null}},{key:"initialState",get:function(){return{}}}])&&b(r.prototype,n),i&&b(r,i),t}();Object.defineProperty(y,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(y,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var d=(0,i.connect)(function(e){var t=e.theme,r=e.marginBottom,n=e.paddingBottom;return{wrapper:f({paddingTop:"1px",verticalAlign:"top",textAlign:"center",position:"relative",maxWeight:"1200px",overflow:"hidden"},t?f({},t.top):null,r?{marginBottom:r}:null,n?{paddingBottom:n}:{paddingBottom:"1px"}),bgImage:{position:"absolute",width:"200%",top:"50%",left:"50%",zIndex:"1",transform:"translate(-50%,-50%)","@media(min-width:768px)":{width:"150%"},"@media(min-width:1024px)":{width:"100%"}}}})(y);t.default=d},1096:function(e,t){e.exports="/assets/media/icon_close-ac16cd0b.svg"},1097:function(e,t){e.exports="/assets/media/icon_home-9d8cd709.svg"},355:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(207),i=y(r(353)),l=r(1088),a=r(206),u=r(1087),c=r(205),f=r(349),s=r(51),p=y(r(1096)),b=y(r(1097)),m="E:\\development\\compaero.project\\emernatar.io-ssr\\src\\routes\\errors\\404.js";function y(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var g=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=h(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,y,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(y=[{key:"render",value:function(){return n.default.createElement(n.Fragment,{__source:{fileName:m,lineNumber:32},__self:this},n.default.createElement(l.Top,{paddingBottom:"7rem",__source:{fileName:m,lineNumber:33},__self:this},"Error",n.default.createElement("br",{__source:{fileName:m,lineNumber:34},__self:this})," 404"),n.default.createElement(o.Container,{__source:{fileName:m,lineNumber:36},__self:this},n.default.createElement(u.TopLabelRow,{__source:{fileName:m,lineNumber:37},__self:this},n.default.createElement(u.TopLabel,{isActive:!0,__source:{fileName:m,lineNumber:38},__self:this},n.default.createElement(f.Image,{src:p.default,__source:{fileName:m,lineNumber:39},__self:this}),n.default.createElement(c.Typography,{styles:{padding:"2rem"},as:"h2",size:"large",fontWeight:"bold",textAlign:"center",textTransform:"uppercase",color:"secondary",bright:"contrastText",__source:{fileName:m,lineNumber:40},__self:this},"Page Not Found")))),n.default.createElement(o.Container,{styles:{marginTop:"-10rem",textAlign:"center"},__source:{fileName:m,lineNumber:49},__self:this},n.default.createElement(a.Column,{grid:[[,70,"%"]],__source:{fileName:m,lineNumber:50},__self:this},n.default.createElement(c.Typography,{as:"p",size:"medium",fontWeight:"bold",styles:{lineHeight:"2"},color:"default",bright:"contrastText",__source:{fileName:m,lineNumber:51},__self:this},"the reasons for the emergence of the problem:",n.default.createElement("br",{__source:{fileName:m,lineNumber:53},__self:this}),"1. the page has been moved or renamed",n.default.createElement("br",{__source:{fileName:m,lineNumber:54},__self:this}),"2. the page no longer exists ",n.default.createElement("br",{__source:{fileName:m,lineNumber:55},__self:this}),"3. URL does not correspond to reality"))),n.default.createElement(o.Container,{styles:{paddingBottom:"5rem",textAlign:"center"},__source:{fileName:m,lineNumber:60},__self:this},n.default.createElement(s.Link,{to:"/",styles:{textDecoration:"none"},__source:{fileName:m,lineNumber:61},__self:this},n.default.createElement(i.default,{variant:"raised",color:"primary",__source:{fileName:m,lineNumber:62},__self:this},n.default.createElement(f.Image,{src:b.default,styles:{padding:"0.2rem"},__source:{fileName:m,lineNumber:63},__self:this}),n.default.createElement(c.Typography,{as:"p",size:"small",color:"secondary",bright:"contrastText",__source:{fileName:m,lineNumber:64},__self:this},"Home")))))}},{key:"initialState",get:function(){return{}}}])&&_(r.prototype,y),d&&_(r,d),t}();Object.defineProperty(g,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(g,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var v=g;t.default=v}}]);