(()=>{"use strict";function e(e,t,n,o,l){return{sel:e,data:t,children:n,text:o,elm:l,key:void 0===t?void 0:t.key}}const t=Array.isArray;function n(e){return"string"==typeof e||"number"==typeof e||e instanceof String||e instanceof Number}function o(e){if(l(e)){for(;e&&l(e);)e=i(e).parent;return null!=e?e:null}return e.parentNode}function l(e){return 11===e.nodeType}function i(e,t){var n,o,l;const i=e;return null!==(n=i.parent)&&void 0!==n||(i.parent=null!=t?t:null),null!==(o=i.firstChildNode)&&void 0!==o||(i.firstChildNode=e.firstChild),null!==(l=i.lastChildNode)&&void 0!==l||(i.lastChildNode=e.lastChild),i}const r={createElement:function(e,t){return document.createElement(e,t)},createElementNS:function(e,t,n){return document.createElementNS(e,t,n)},createTextNode:function(e){return document.createTextNode(e)},createDocumentFragment:function(){return i(document.createDocumentFragment())},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){if(l(e)){let t=e;for(;t&&l(t);)t=i(t).parent;e=null!=t?t:e}l(t)&&(t=i(t,e)),n&&l(n)&&(n=i(n).firstChildNode),e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){l(t)&&(t=i(t,e)),e.appendChild(t)},parentNode:o,nextSibling:function(e){var t;if(l(e)){const n=i(e),l=o(n);if(l&&n.lastChildNode){const e=Array.from(l.childNodes),o=e.indexOf(n.lastChildNode);return null!==(t=e[o+1])&&void 0!==t?t:null}return null}return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},getTextContent:function(e){return e.textContent},isElement:function(e){return 1===e.nodeType},isText:function(e){return 3===e.nodeType},isComment:function(e){return 8===e.nodeType},isDocumentFragment:l};function d(e){return void 0===e}function c(e){return void 0!==e}const u=e("",{},[],void 0,void 0);function s(e,t){var n,o;const l=e.key===t.key,i=(null===(n=e.data)||void 0===n?void 0:n.is)===(null===(o=t.data)||void 0===o?void 0:o.is),r=e.sel===t.sel,d=!(!e.sel&&e.sel===t.sel)||typeof e.text==typeof t.text;return r&&l&&i&&d}function a(){throw new Error("The document fragment is not supported on this platform.")}function f(e,t,n){var o;const l={};for(let i=t;i<=n;++i){const t=null===(o=e[i])||void 0===o?void 0:o.key;void 0!==t&&(l[t]=i)}return l}const v=["create","update","remove","destroy","pre","post"],m="undefined"!=typeof window&&window.requestAnimationFrame.bind(window)||setTimeout,h=function(e){m((function(){m(e)}))};let p=!1;function g(e,t,n){h((function(){e[t]=n}))}function y(e,t){let n,o;const l=t.elm;let i=e.data.style,r=t.data.style;if(!i&&!r)return;if(i===r)return;i=i||{},r=r||{};const d="delayed"in i;for(o in i)r[o]||("-"===o[0]&&"-"===o[1]?l.style.removeProperty(o):l.style[o]="");for(o in r)if(n=r[o],"delayed"===o&&r.delayed)for(const e in r.delayed)n=r.delayed[e],d&&n===i.delayed[e]||g(l.style,e,n);else"remove"!==o&&n!==i[o]&&("-"===o[0]&&"-"===o[1]?l.style.setProperty(o,n):l.style[o]=n)}function x(e,t,n){if("function"==typeof e)e.call(t,n,t);else if("object"==typeof e)for(let o=0;o<e.length;o++)x(e[o],t,n)}function C(e,t){const n=e.type,o=t.data.on;o&&o[n]&&x(o[n],t,e)}function N(e,t){const n=e.data.on,o=e.listener,l=e.elm,i=t&&t.data.on,r=t&&t.elm;let d;if(n!==i){if(n&&o)if(i)for(d in n)i[d]||l.removeEventListener(d,o,!1);else for(d in n)l.removeEventListener(d,o,!1);if(i){const o=t.listener=e.listener||function e(t){C(t,e.vnode)};if(o.vnode=t,n)for(d in i)n[d]||r.addEventListener(d,o,!1);else for(d in i)r.addEventListener(d,o,!1)}}}function T(e,t,n){if(e.ns="http://www.w3.org/2000/svg","foreignObject"!==n&&void 0!==t)for(let e=0;e<t.length;++e){const n=t[e];if("string"==typeof n)continue;const o=n.data;void 0!==o&&T(o,n.children,n.sel)}}function k(o,l,i){let r,d,c,u={};if(void 0!==i?(null!==l&&(u=l),t(i)?r=i:n(i)?d=i.toString():i&&i.sel&&(r=[i])):null!=l&&(t(l)?r=l:n(l)?d=l.toString():l&&l.sel?r=[l]:u=l),void 0!==r)for(c=0;c<r.length;++c)n(r[c])&&(r[c]=e(void 0,void 0,void 0,r[c],void 0));return"s"!==o[0]||"v"!==o[1]||"g"!==o[2]||3!==o.length&&"."!==o[3]&&"#"!==o[3]||T(u,r,o),e(o,u,r,d,void 0)}const w=function(o,l,i){const m={create:[],update:[],remove:[],destroy:[],pre:[],post:[]},h=r;for(const e of v)for(const t of o){const n=t[e];void 0!==n&&m[e].push(n)}function p(e,t){return function(){if(0==--t){const t=h.parentNode(e);h.removeChild(t,e)}}}function g(e,o){var l,r,s,f;let v,p=e.data;if(void 0!==p){const t=null===(l=p.hook)||void 0===l?void 0:l.init;c(t)&&(t(e),p=e.data)}const y=e.children,x=e.sel;if("!"===x)d(e.text)&&(e.text=""),e.elm=h.createComment(e.text);else if(void 0!==x){const l=x.indexOf("#"),i=x.indexOf(".",l),d=l>0?l:x.length,s=i>0?i:x.length,a=-1!==l||-1!==i?x.slice(0,Math.min(d,s)):x,f=e.elm=c(p)&&c(v=p.ns)?h.createElementNS(v,a,p):h.createElement(a,p);for(d<s&&f.setAttribute("id",x.slice(d+1,s)),i>0&&f.setAttribute("class",x.slice(s+1).replace(/\./g," ")),v=0;v<m.create.length;++v)m.create[v](u,e);if(t(y))for(v=0;v<y.length;++v){const e=y[v];null!=e&&h.appendChild(f,g(e,o))}else n(e.text)&&h.appendChild(f,h.createTextNode(e.text));const C=e.data.hook;c(C)&&(null===(r=C.create)||void 0===r||r.call(C,u,e),C.insert&&o.push(e))}else if((null===(s=null==i?void 0:i.experimental)||void 0===s?void 0:s.fragments)&&e.children){for(e.elm=(null!==(f=h.createDocumentFragment)&&void 0!==f?f:a)(),v=0;v<m.create.length;++v)m.create[v](u,e);for(v=0;v<e.children.length;++v){const t=e.children[v];null!=t&&h.appendChild(e.elm,g(t,o))}}else e.elm=h.createTextNode(e.text);return e.elm}function y(e,t,n,o,l,i){for(;o<=l;++o){const l=n[o];null!=l&&h.insertBefore(e,g(l,i),t)}}function x(e){var t,n;const o=e.data;if(void 0!==o){null===(n=null===(t=null==o?void 0:o.hook)||void 0===t?void 0:t.destroy)||void 0===n||n.call(t,e);for(let t=0;t<m.destroy.length;++t)m.destroy[t](e);if(void 0!==e.children)for(let t=0;t<e.children.length;++t){const n=e.children[t];null!=n&&"string"!=typeof n&&x(n)}}}function C(e,t,n,o){for(var l,i;n<=o;++n){let o,r;const d=t[n];if(null!=d)if(c(d.sel)){x(d),o=m.remove.length+1,r=p(d.elm,o);for(let e=0;e<m.remove.length;++e)m.remove[e](d,r);const e=null===(i=null===(l=null==d?void 0:d.data)||void 0===l?void 0:l.hook)||void 0===i?void 0:i.remove;c(e)?e(d,r):r()}else d.children?(x(d),C(e,d.children,0,d.children.length-1)):h.removeChild(e,d.elm)}}function N(e,t,n){var o,l,i,r,u,a,v,p;const x=null===(o=t.data)||void 0===o?void 0:o.hook;null===(l=null==x?void 0:x.prepatch)||void 0===l||l.call(x,e,t);const T=t.elm=e.elm;if(e===t)return;if(void 0!==t.data||c(t.text)&&t.text!==e.text){null!==(i=t.data)&&void 0!==i||(t.data={}),null!==(r=e.data)&&void 0!==r||(e.data={});for(let n=0;n<m.update.length;++n)m.update[n](e,t);null===(v=null===(a=null===(u=t.data)||void 0===u?void 0:u.hook)||void 0===a?void 0:a.update)||void 0===v||v.call(a,e,t)}const k=e.children,w=t.children;d(t.text)?c(k)&&c(w)?k!==w&&function(e,t,n,o){let l,i,r,c,u=0,a=0,v=t.length-1,m=t[0],p=t[v],x=n.length-1,T=n[0],k=n[x];for(;u<=v&&a<=x;)null==m?m=t[++u]:null==p?p=t[--v]:null==T?T=n[++a]:null==k?k=n[--x]:s(m,T)?(N(m,T,o),m=t[++u],T=n[++a]):s(p,k)?(N(p,k,o),p=t[--v],k=n[--x]):s(m,k)?(N(m,k,o),h.insertBefore(e,m.elm,h.nextSibling(p.elm)),m=t[++u],k=n[--x]):s(p,T)?(N(p,T,o),h.insertBefore(e,p.elm,m.elm),p=t[--v],T=n[++a]):(void 0===l&&(l=f(t,u,v)),i=l[T.key],d(i)?h.insertBefore(e,g(T,o),m.elm):(r=t[i],r.sel!==T.sel?h.insertBefore(e,g(T,o),m.elm):(N(r,T,o),t[i]=void 0,h.insertBefore(e,r.elm,m.elm))),T=n[++a]);a<=x&&(c=null==n[x+1]?null:n[x+1].elm,y(e,c,n,a,x,o)),u<=v&&C(e,t,u,v)}(T,k,w,n):c(w)?(c(e.text)&&h.setTextContent(T,""),y(T,null,w,0,w.length-1,n)):c(k)?C(T,k,0,k.length-1):c(e.text)&&h.setTextContent(T,""):e.text!==t.text&&(c(k)&&C(T,k,0,k.length-1),h.setTextContent(T,t.text)),null===(p=null==x?void 0:x.postpatch)||void 0===p||p.call(x,e,t)}return function(t,n){let o,l,i;const r=[];for(o=0;o<m.pre.length;++o)m.pre[o]();for(function(e,t){return e.isElement(t)}(h,t)?t=function(t){const n=t.id?"#"+t.id:"",o=t.getAttribute("class"),l=o?"."+o.split(" ").join("."):"";return e(h.tagName(t).toLowerCase()+n+l,{},[],void 0,t)}(t):function(e,t){return e.isDocumentFragment(t)}(h,t)&&(t=e(void 0,{},[],void 0,t)),s(t,n)?N(t,n,r):(l=t.elm,i=h.parentNode(l),g(n,r),null!==i&&(h.insertBefore(i,n.elm,h.nextSibling(l)),C(i,[t],0,0))),o=0;o<r.length;++o)r[o].data.hook.insert(r[o]);for(o=0;o<m.post.length;++o)m.post[o]();return n}}([{pre:function(){p=!1},create:y,update:y,destroy:function(e){let t,n;const o=e.elm,l=e.data.style;if(l&&(t=l.destroy))for(n in t)o.style[n]=t[n]},remove:function(e,t){const n=e.data.style;if(!n||!n.remove)return void t();let o;p||(e.elm.offsetLeft,p=!0);const l=e.elm;let i=0;const r=n.remove;let d=0;const c=[];for(o in r)c.push(o),l.style[o]=r[o];const u=getComputedStyle(l)["transition-property"].split(", ");for(;i<u.length;++i)-1!==c.indexOf(u[i])&&d++;l.addEventListener("transitionend",(function(e){e.target===l&&--d,0===d&&t()}))}},{create:N,update:N,destroy:N}]);let E=k("div",[k("h1",{style:{backgroundColor:"red"}},"Hello world"),k("p",{on:{click:function(){alert("eventHandler")}}},"Hello P")]);w(document.querySelector("#app"),E)})();