(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1073:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=r(14),i=r(343),a=r(1081),u=r(344),c=r(349),f=(n=r(1200))&&n.__esModule?n:{default:n},s="/home/ya/compaero/emernotar/emernatar.io-ssr/src/modules/static/view/mail/index.js";function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){p(e,t,r[t])})}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var y=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=d(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.styles;e.children;return t?o.default.createElement("table",{border:"0",cellPadding:"0",cellSpacing:"0",className:t.table,__source:{fileName:s,lineNumber:47},__self:this},o.default.createElement("thead",{className:t.th,__source:{fileName:s,lineNumber:49},__self:this},o.default.createElement("tr",{className:t.top,__source:{fileName:s,lineNumber:50},__self:this},o.default.createElement("td",{colSpan:"2",width:"100%",__source:{fileName:s,lineNumber:51},__self:this},o.default.createElement(i.Typography,{as:"h1",color:"default",size:"large",fontWeight:"bold",textAlign:"center",textTransform:"uppercase",styles:{fontSize:"4rem",lineHeight:"5rem"},__source:{fileName:s,lineNumber:52},__self:this},"EMERNOTAR.IO")))),o.default.createElement("tbody",{__source:{fileName:s,lineNumber:61},__self:this},o.default.createElement("tr",{className:t.topFooter,__source:{fileName:s,lineNumber:62},__self:this},o.default.createElement("td",{colSpan:"2",__source:{fileName:s,lineNumber:63},__self:this},o.default.createElement(a.TopLabel,{isActive:!0,styles:{transform:"none",maxWidth:"540px",width:"100%",marginTop:"2rem"},__source:{fileName:s,lineNumber:64},__self:this},o.default.createElement(i.Typography,{as:"h3",fontWeight:"bold",textAlign:"center",__source:{fileName:s,lineNumber:65},__self:this},"Уважаемый пользователь!"),o.default.createElement(i.Typography,{as:"p",fontWeight:"bold",__source:{fileName:s,lineNumber:68},__self:this},"Ваша заявка на создание/редакторование записи в блокчейн была выполнена. Ниже Вы найдете все нужные данные о транзакции, а в приложении - архив с подписью и сертификат.")))),o.default.createElement("tr",{className:t.topFooter,__source:{fileName:s,lineNumber:76},__self:this},o.default.createElement("td",{colSpan:"1",style:{width:"50%"},__source:{fileName:s,lineNumber:77},__self:this},o.default.createElement(a.TopLabel,{isActive:!0,styles:{transform:"none",width:"calc(100%-4rem)",margin:"2rem"},__source:{fileName:s,lineNumber:80},__self:this},"Данные о транзакции в блокчейн:",o.default.createElement(i.Typography,{as:"p",__source:{fileName:s,lineNumber:82},__self:this},"Дата внесения: ","{submittingDate}"," ",o.default.createElement("br",{__source:{fileName:s,lineNumber:83},__self:this}),"ID транзакции: ","{idTransaction}"," ",o.default.createElement("br",{__source:{fileName:s,lineNumber:84},__self:this}),"Ваш адрес в блокчейн Emercoin: ","{blockChainAddress}"," ",o.default.createElement("br",{__source:{fileName:s,lineNumber:85},__self:this})))),o.default.createElement("td",{colSpan:"1",style:{width:"50%"},__source:{fileName:s,lineNumber:89},__self:this},o.default.createElement(a.TopLabel,{isActive:!0,styles:{transform:"none",width:"calc(100%-4rem)",margin:"2rem"},__source:{fileName:s,lineNumber:92},__self:this},"Данные о сертификате:",o.default.createElement(i.Typography,{as:"p",lineHeight:"2rem",__source:{fileName:s,lineNumber:94},__self:this},"Дата нотаризации: ","{notarizationDate}"," ",o.default.createElement("br",{__source:{fileName:s,lineNumber:95},__self:this}),"Владелец нотаризации: ","{ownerEmail}"," ",o.default.createElement("br",{__source:{fileName:s,lineNumber:96},__self:this}),"Срок действия: до ","{submittingExpiration}",o.default.createElement("a",{to:"http://emernoter.io/faq",style:{textDecoration:"none"},__source:{fileName:s,lineNumber:98},__self:this},o.default.createElement("span",{className:t.circle,__source:{fileName:s,lineNumber:99},__self:this}," ¿ ")),o.default.createElement("br",{__source:{fileName:s,lineNumber:100},__self:this}),"Сервис: ","{serviceName}"," ",o.default.createElement("br",{__source:{fileName:s,lineNumber:101},__self:this}))))),o.default.createElement("tr",{className:t.topFooter,__source:{fileName:s,lineNumber:106},__self:this},o.default.createElement("td",{colSpan:"2",__source:{fileName:s,lineNumber:107},__self:this},o.default.createElement(c.Button,{as:"a",href:"",variant:"raised",color:"primary",__source:{fileName:s,lineNumber:108},__self:this},o.default.createElement(u.Image,{src:f.default,styles:{padding:"0.2rem",height:"3rem"},__source:{fileName:s,lineNumber:109},__self:this}),o.default.createElement(i.Typography,{as:"span",size:"large",textDecoration:"none",__source:{fileName:s,lineNumber:110},__self:this},"Print")))),o.default.createElement("tr",{className:t.topFooter,__source:{fileName:s,lineNumber:116},__self:this},o.default.createElement("td",{colSpan:"2",__source:{fileName:s,lineNumber:117},__self:this},o.default.createElement(i.Typography,{as:"p",textAlign:"center",__source:{fileName:s,lineNumber:118},__self:this},"SHA512 Хэш-сумма: ","{name}"," ",o.default.createElement("br",{__source:{fileName:s,lineNumber:119},__self:this}),"Наимменование файла:","{fileName}")))),o.default.createElement("tfoot",{__source:{fileName:s,lineNumber:125},__self:this},o.default.createElement("tr",{className:t.footer,__source:{fileName:s,lineNumber:126},__self:this},o.default.createElement("td",{colSpan:"2",__source:{fileName:s,lineNumber:127},__self:this},o.default.createElement(i.Typography,{as:"p",size:"small",bright:"light",fontWeight:"bold",textAlign:"center",__source:{fileName:s,lineNumber:128},__self:this},"EMERNOTAR.IO © 2018"))))):null}},{key:"initialState",get:function(){return{}}}])&&_(r.prototype,n),l&&_(r,l),t}();Object.defineProperty(y,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(y,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var h=(0,l.connect)(function(e){var t=e.theme;e.marginBottom,e.paddingBottom;return{top:m({minHeight:"10rem",paddingTop:"1px",verticalAlign:"middle",position:"relative",borderBottom:"0.5rem solid #FDF396",width:"100%"},t.header),topFooter:{minHeight:"7rem",verticalAlign:"middle",position:"relative",textAlign:"center",color:"black",marginTop:"2rem",width:"100%"},footer:m({minHeight:"5rem",verticalAlign:"middle",position:"relative"},t.footer,{borderTop:"none",width:"100%"}),table:{borderSpacing:0,borderCollapse:"collapse",width:"100%"},th:{},tr:{width:"100%"}}})(y);t.default=h},1081:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TopLabel",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"TopLabelRow",{enumerable:!0,get:function(){return o.default}});var n=l(r(1084)),o=l(r(1083));function l(e){return e&&e.__esModule?e:{default:e}}},1083:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),l=((n=r(2))&&n.__esModule,r(14));r(343),r(344);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.styles,r=e.children;return o.default.createElement("div",{className:t&&t.wrapper,__source:{fileName:"/home/ya/compaero/emernotar/emernatar.io-ssr/src/components/topLabel/top_label-row.js",lineNumber:25},__self:this},r)}},{key:"initialState",get:function(){return{}}}])&&u(r.prototype,n),l&&u(r,l),t}();Object.defineProperty(f,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(f,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var s=(0,l.connect)(function(e){var t=e.children;return{wrapper:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){i(e,t,r[t])})}return e}({marginRight:"-1rem",marginLeft:"-1rem"},t&&t.length?{display:"flex",justifyContent:"space-around",flexDirection:"row"}:{display:"flex",justifyContent:"center",flexDirection:"row"})}})(f);t.default=s},1084:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(1)),o=r(14),l=r(343),i="/home/ya/compaero/emernotar/emernatar.io-ssr/src/components/topLabel/top_label.js";function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var s=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))).state=r.initialState,r}var r,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.Component),r=t,(o=[{key:"render",value:function(){var e=this.props,t=e.styles,r=e.toggleTab,o=e.children,a=e.className,u=e.as,c=void 0===u?"h2":u;return t?n.default.createElement("div",{onClick:r,className:a+" "+t.wrapper,__source:{fileName:i,lineNumber:24},__self:this},n.default.createElement(l.Typography,{styles:{margin:0},as:c,size:"medium",fontWeight:"inherit",textAlign:"center",__source:{fileName:i,lineNumber:25},__self:this},o)):null}},{key:"initialState",get:function(){return{}}}])&&c(r.prototype,o),a&&c(r,a),t}();Object.defineProperty(s,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(s,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{}});var m=(0,o.connect)(function(e){e.theme;var t=e.isActive,r=e.styles;return{wrapper:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({position:"relative",display:"inline-block",transform:"translateY(-50%)",padding:"2rem",margin:"1rem",zIndex:5,backgroundColor:"#FFFFFF"},t?{boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",fontWeight:"bold"}:null,r)}})(s);t.default=m},1200:function(e,t){e.exports="/static/media/icon_print-81a6a0fb.svg"}}]);