(()=>{"use strict";var e,t,n,r={151:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Redressed&display=swap);"]),o.push([e.id,'*{margin:0;padding:0;box-sizing:border-box}.navbar{height:20vh;background:linear-gradient(to right, #ff1111, #ff0606);display:grid;grid-template-columns:3fr 1fr;border-bottom:solid #fff}.navbar .nav_one ul{height:100%;display:flex;align-items:center}.navbar .nav_one ul li{color:#fff;cursor:pointer;margin:30px;font-family:Redressed,"Courier New",Courier,monospace;font-weight:500;font-size:35px;list-style:none}.navbar .nav_one ul li:hover{transition:.7s;font-size:38px}.navbar .nav_two{display:grid;place-items:center;position:relative}.navbar .nav_two .search{position:relative;border:solid #fff;margin:20px;outline:none;height:40px;width:300px;border-radius:20px;font-size:100%}.navbar .nav_two .search_img{height:20%;margin-left:250px;cursor:pointer;position:absolute}.navbar_two{height:15vh;background-color:#fff;border-bottom:solid #fff;box-shadow:rgba(50,50,93,.25) 0px 50px 100px -20px,rgba(0,0,0,.3) 0px 30px 60px -30px}.navbar_two ul{height:100%;width:100vw;display:grid;grid-template-columns:repeat(10, 1fr)}.navbar_two ul li{margin:20px;height:50%;display:grid;place-items:center;background-color:#f5a9a95e;cursor:pointer;border-radius:20px;font-size:20px;font-family:monospace,cursive;padding:10px;border:solid #fff;list-style:none;color:#aa1c1c;font-weight:900}',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,d="".concat(c," ").concat(l);n[c]=l+1;var f=a(d),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==f?(i[f].references++,i[f].updater(u)):i.push({identifier:d,updater:h(u,t),references:1}),r.push(d)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function h(e,t){var n,r,o;if(t.singleton){var i=v++;n=p||(p=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=u.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(e,t),l=0;l<n.length;l++){var d=a(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=c}}}}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={id:e,exports:{}};return r[e](n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=i(379),t=i.n(e),n=i(151),t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals})();