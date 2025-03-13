(function(){"use strict";/*! js-cookie v3.0.5 | MIT */function E(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var c in t)e[c]=t[c]}return e}var ie={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function $(e,o){function t(i,n,u){if(!(typeof document>"u")){u=E({},o,u),typeof u.expires=="number"&&(u.expires=new Date(Date.now()+u.expires*864e5)),u.expires&&(u.expires=u.expires.toUTCString()),i=encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var r="";for(var h in u)u[h]&&(r+="; "+h,u[h]!==!0&&(r+="="+u[h].split(";")[0]));return document.cookie=i+"="+e.write(n,i)+r}}function c(i){if(!(typeof document>"u"||arguments.length&&!i)){for(var n=document.cookie?document.cookie.split("; "):[],u={},r=0;r<n.length;r++){var h=n[r].split("="),a=h.slice(1).join("=");try{var s=decodeURIComponent(h[0]);if(u[s]=e.read(a,s),i===s)break}catch{}}return i?u[i]:u}}return Object.create({set:t,get:c,remove:function(i,n){t(i,"",E({},n,{expires:-1}))},withAttributes:function(i){return $(this.converter,E({},this.attributes,i))},withConverter:function(i){return $(E({},this.converter,i),this.attributes)}},{attributes:{value:Object.freeze(o)},converter:{value:Object.freeze(e)}})}var x=$(ie,{path:"/"});const se=`
:root {
  --b-100: #F2F3F7;
  --s-700: #37546D;
}

.woot-widget-holder {
  box-shadow: 0 5px 40px rgba(0, 0, 0, .16);
  opacity: 1;
  will-change: transform, opacity;
  transform: translateY(0);
  overflow: hidden !important;
  position: fixed !important;
  transition: opacity 0.2s linear, transform 0.25s linear;
  z-index: 2147483000 !important;
}

.woot-widget-holder.woot-widget-holder--flat {
  box-shadow: none;
  border-radius: 0;
  border: 1px solid var(--b-100);
}

.woot-widget-holder iframe {
  border: 0;
  color-scheme: normal;
  height: 100% !important;
  width: 100% !important;
  max-height: 100vh !important;
}

.woot-widget-holder.has-unread-view {
  border-radius: 0 !important;
  min-height: 80px !important;
  height: auto;
  bottom: 94px;
  box-shadow: none !important;
  border: 0;
}

.woot-widget-bubble {
  background: #1f93ff;
  border-radius: 100px;
  border-width: 0px;
  bottom: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, .16) !important;
  cursor: pointer;
  height: 64px;
  padding: 0px;
  position: fixed;
  user-select: none;
  width: 64px;
  z-index: 2147483000 !important;
}

.woot-widget-bubble.woot-widget-bubble--flat {
  border-radius: 0;
}

.woot-widget-holder.woot-widget-holder--flat {
  bottom: 90px;
}

.woot-widget-bubble.woot-widget-bubble--flat {
  height: 56px;
  width: 56px;
}

.woot-widget-bubble.woot-widget-bubble--flat svg {
  margin: 16px;
}

.woot-widget-bubble.woot-widget-bubble--flat.woot--close::before,
.woot-widget-bubble.woot-widget-bubble--flat.woot--close::after {
  left: 28px;
  top: 16px;
}

.woot-widget-bubble.unread-notification::after {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: #ff4040;
  border-radius: 100%;
  top: 0px;
  right: 0px;
  border: 2px solid #ffffff;
  transition: background 0.2s ease;
}

.woot-widget-bubble.woot-widget--expanded {
  bottom: 24px;
  display: flex;
  height: 48px !important;
  width: auto !important;
  align-items: center;
}

.woot-widget-bubble.woot-widget--expanded div {
  align-items: center;
  color: #fff;
  display: flex;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  padding-right: 20px;
  width: auto !important;
}

.woot-widget-bubble.woot-widget--expanded.woot-widget-bubble-color--lighter div{
  color: var(--s-700);
}

.woot-widget-bubble.woot-widget--expanded svg {
  height: 20px;
  margin: 14px 8px 14px 16px;
  width: 20px;
}

.woot-widget-bubble.woot-elements--left {
  left: 20px;
}

.woot-widget-bubble.woot-elements--right {
  right: 20px;
}

.woot-widget-bubble:hover {
  background: #1f93ff;
  box-shadow: 0 8px 32px rgba(0, 0, 0, .4) !important;
}

.woot-widget-bubble svg {
  all: revert;
  height: 24px;
  margin: 20px;
  width: 24px;
}

.woot-widget-bubble.woot-widget-bubble-color--lighter path{
  fill: var(--s-700);
}

@media only screen and (min-width: 667px) {
  .woot-widget-holder.woot-elements--left {
    left: 20px;
 }
  .woot-widget-holder.woot-elements--right {
    right: 20px;
 }
}

.woot--close:hover {
  opacity: 1;
}

.woot--close::before, .woot--close::after {
  background-color: #fff;
  content: ' ';
  display: inline;
  height: 24px;
  left: 32px;
  position: absolute;
  top: 20px;
  width: 2px;
}

.woot-widget-bubble-color--lighter.woot--close::before, .woot-widget-bubble-color--lighter.woot--close::after {
  background-color: var(--s-700);
}

.woot--close::before {
  transform: rotate(45deg);
}

.woot--close::after {
  transform: rotate(-45deg);
}

.woot--hide {
  bottom: -100vh !important;
  top: unset !important;
  opacity: 0;
  visibility: hidden !important;
  z-index: -1 !important;
}

.woot-widget--without-bubble {
  bottom: 20px !important;
}
.woot-widget-holder.woot--hide{
  transform: translateY(40px);
}
.woot-widget-bubble.woot--close {
  transform: translateX(0px) scale(1) rotate(0deg);
  transition: transform 300ms ease, opacity 100ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot--close.woot--hide {
  transform: translateX(8px) scale(.75) rotate(45deg);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}

.woot-widget-bubble {
  transform-origin: center;
  will-change: transform, opacity;
  transform: translateX(0) scale(1) rotate(0deg);
  transition: transform 300ms ease, opacity 100ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot--hide {
  transform: translateX(8px) scale(.75) rotate(-30deg);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}

.woot-widget-bubble.woot-widget--expanded {
  transform: translateX(0px);
  transition: transform 300ms ease, opacity 100ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot-widget--expanded.woot--hide {
  transform: translateX(8px);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}
.woot-widget-bubble.woot-widget-bubble--flat.woot--close {
  transform: translateX(0px);
  transition: transform 300ms ease, opacity 10ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot-widget-bubble--flat.woot--close.woot--hide {
  transform: translateX(8px);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}
.woot-widget-bubble.woot-widget--expanded.woot-widget-bubble--flat {
  transform: translateX(0px);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 0ms, bottom 0ms linear 0ms;
}
.woot-widget-bubble.woot-widget--expanded.woot-widget-bubble--flat.woot--hide {
  transform: translateX(8px);
  transition: transform 300ms ease, opacity 200ms ease, visibility 0ms linear 500ms, bottom 0ms ease 200ms;
}

@media only screen and (max-width: 667px) {
  .woot-widget-holder {
    height: 100%;
    right: 0;
    top: 0;
    width: 100%;
 }

 .woot-widget-holder iframe {
    min-height: 100% !important;
  }


 .woot-widget-holder.has-unread-view {
    height: auto;
    right: 0;
    width: auto;
    bottom: 0;
    top: auto;
    max-height: 100vh;
    padding: 0 8px;
  }

  .woot-widget-holder.has-unread-view iframe {
    min-height: unset !important;
  }

 .woot-widget-holder.has-unread-view.woot-elements--left {
    left: 0;
  }

  .woot-widget-bubble.woot--close {
    bottom: 60px;
    opacity: 0;
    visibility: hidden !important;
    z-index: -1 !important;
  }
}

@media only screen and (min-width: 667px) {
  .woot-widget-holder {
    border-radius: 16px;
    bottom: 104px;
    height: calc(90% - 64px - 20px);
    max-height: 640px !important;
    min-height: 250px !important;
    width: 400px !important;
 }
}

.woot-hidden {
  display: none !important;
}
`,ae=()=>{const e=document.createElement("style");e.innerHTML=`${se}`,e.id="cw-widget-styles",document.body.appendChild(e)},T=(e,o)=>{const t=document.getElementById(e),c=o.querySelector(`#${e}`);t&&!c&&o.appendChild(t)},M=e=>{T("cw-bubble-holder",e),T("cw-widget-holder",e),T("cw-widget-styles",e)},y=(e,o)=>{e.classList.add(...o.split(" "))},F=(e,o)=>{e.classList.toggle(o)},B=(e,o)=>{e.classList.remove(...o.split(" "))},W=({referrerURL:e,referrerHost:o})=>{g.events.onLocationChange({referrerURL:e,referrerHost:o})},de=()=>{let e=document.location.href;const o=document.location.host,t={childList:!0,subtree:!0};W({referrerURL:e,referrerHost:o});const c=document.querySelector("body");new MutationObserver(n=>{n.forEach(()=>{e!==document.location.href&&(e=document.location.href,W({referrerURL:e,referrerHost:o}))})}).observe(c,t)},A=["standard","expanded_bubble"],q=["standard","flat"],z=["light","auto","dark"],P=e=>A.includes(e)?e:A[0],V=e=>P(e)===A[1],le=e=>q.includes(e)?e:q[0],X=e=>e==="flat",j=e=>z.includes(e)?e:z[0],ce="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z",K=document.getElementsByTagName("body")[0],v=document.createElement("div"),C=document.createElement("div"),k=document.createElement("button"),_=document.createElement("button");document.createElement("span");const we=e=>{if(V(window.$chatwoot.type)){const o=document.getElementById("woot-widget--expanded__text");o.innerText=e}},ue=({className:e,path:o,target:t})=>{let c=`${e} woot-elements--${window.$chatwoot.position}`;const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttributeNS(null,"id","woot-widget-bubble-icon"),i.setAttributeNS(null,"width","24"),i.setAttributeNS(null,"height","24"),i.setAttributeNS(null,"viewBox","0 0 240 240"),i.setAttributeNS(null,"fill","none"),i.setAttribute("xmlns","http://www.w3.org/2000/svg");const n=document.createElementNS("http://www.w3.org/2000/svg","path");if(n.setAttributeNS(null,"d",o),n.setAttributeNS(null,"fill","#FFFFFF"),i.appendChild(n),t.appendChild(i),V(window.$chatwoot.type)){const u=document.createElement("div");u.id="woot-widget--expanded__text",u.innerText="",t.appendChild(u),c+=" woot-widget--expanded"}return t.className=c,t.title="Open chat window",t},ge=e=>{e&&y(C,"woot-hidden"),y(C,"woot--bubble-holder"),C.id="cw-bubble-holder",K.appendChild(C)},S=(e={})=>{const{toggleValue:o}=e,{isOpen:t}=window.$chatwoot;if(t!==o){const c=o===void 0?!t:o;window.$chatwoot.isOpen=c,F(k,"woot--hide"),F(_,"woot--hide"),F(v,"woot--hide"),g.events.onBubbleToggle(c),c||k.focus()}},he=()=>{C.addEventListener("click",S)},be=()=>{const e=document.querySelector(".woot-widget-holder");y(e,"has-unread-view")},Y=()=>{const e=document.querySelector(".woot-widget-holder");B(e,"has-unread-view")},fe=e=>{const o=e.replace("#",""),t=parseInt(o.substr(0,2),16),c=parseInt(o.substr(2,2),16),i=parseInt(o.substr(4,2),16);return(t*299+c*587+i*114)/1e3>225},pe=({eventName:e,data:o=null})=>{let t;return typeof window.CustomEvent=="function"?t=new CustomEvent(e,{detail:o}):(t=document.createEvent("CustomEvent"),t.initCustomEvent(e,!1,!1,o)),t},U=({eventName:e,data:o})=>{const t=pe({eventName:e,data:o});window.dispatchEvent(t)},me="chatwoot:error",ve="chatwoot:ready",xe="SET_USER_ERROR";function ye(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var L={exports:{}},I={exports:{}},G;function Ce(){return G||(G=1,function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o={rotl:function(t,c){return t<<c|t>>>32-c},rotr:function(t,c){return t<<32-c|t>>>c},endian:function(t){if(t.constructor==Number)return o.rotl(t,8)&16711935|o.rotl(t,24)&4278255360;for(var c=0;c<t.length;c++)t[c]=o.endian(t[c]);return t},randomBytes:function(t){for(var c=[];t>0;t--)c.push(Math.floor(Math.random()*256));return c},bytesToWords:function(t){for(var c=[],i=0,n=0;i<t.length;i++,n+=8)c[n>>>5]|=t[i]<<24-n%32;return c},wordsToBytes:function(t){for(var c=[],i=0;i<t.length*32;i+=8)c.push(t[i>>>5]>>>24-i%32&255);return c},bytesToHex:function(t){for(var c=[],i=0;i<t.length;i++)c.push((t[i]>>>4).toString(16)),c.push((t[i]&15).toString(16));return c.join("")},hexToBytes:function(t){for(var c=[],i=0;i<t.length;i+=2)c.push(parseInt(t.substr(i,2),16));return c},bytesToBase64:function(t){for(var c=[],i=0;i<t.length;i+=3)for(var n=t[i]<<16|t[i+1]<<8|t[i+2],u=0;u<4;u++)i*8+u*6<=t.length*8?c.push(e.charAt(n>>>6*(3-u)&63)):c.push("=");return c.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/ig,"");for(var c=[],i=0,n=0;i<t.length;n=++i%4)n!=0&&c.push((e.indexOf(t.charAt(i-1))&Math.pow(2,-2*n+8)-1)<<n*2|e.indexOf(t.charAt(i))>>>6-n*2);return c}};I.exports=o}()),I.exports}var D,J;function Z(){if(J)return D;J=1;var e={utf8:{stringToBytes:function(o){return e.bin.stringToBytes(unescape(encodeURIComponent(o)))},bytesToString:function(o){return decodeURIComponent(escape(e.bin.bytesToString(o)))}},bin:{stringToBytes:function(o){for(var t=[],c=0;c<o.length;c++)t.push(o.charCodeAt(c)&255);return t},bytesToString:function(o){for(var t=[],c=0;c<o.length;c++)t.push(String.fromCharCode(o[c]));return t.join("")}}};return D=e,D}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var R,Q;function Se(){if(Q)return R;Q=1,R=function(t){return t!=null&&(e(t)||o(t)||!!t._isBuffer)};function e(t){return!!t.constructor&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function o(t){return typeof t.readFloatLE=="function"&&typeof t.slice=="function"&&e(t.slice(0,0))}return R}var ee;function Ee(){return ee||(ee=1,function(){var e=Ce(),o=Z().utf8,t=Se(),c=Z().bin,i=function(n,u){n.constructor==String?u&&u.encoding==="binary"?n=c.stringToBytes(n):n=o.stringToBytes(n):t(n)?n=Array.prototype.slice.call(n,0):!Array.isArray(n)&&n.constructor!==Uint8Array&&(n=n.toString());for(var r=e.bytesToWords(n),h=n.length*8,a=1732584193,s=-271733879,l=-1732584194,d=271733878,w=0;w<r.length;w++)r[w]=(r[w]<<8|r[w]>>>24)&16711935|(r[w]<<24|r[w]>>>8)&4278255360;r[h>>>5]|=128<<h%32,r[(h+64>>>9<<4)+14]=h;for(var b=i._ff,f=i._gg,p=i._hh,m=i._ii,w=0;w<r.length;w+=16){var qe=a,ze=s,Pe=l,Ve=d;a=b(a,s,l,d,r[w+0],7,-680876936),d=b(d,a,s,l,r[w+1],12,-389564586),l=b(l,d,a,s,r[w+2],17,606105819),s=b(s,l,d,a,r[w+3],22,-1044525330),a=b(a,s,l,d,r[w+4],7,-176418897),d=b(d,a,s,l,r[w+5],12,1200080426),l=b(l,d,a,s,r[w+6],17,-1473231341),s=b(s,l,d,a,r[w+7],22,-45705983),a=b(a,s,l,d,r[w+8],7,1770035416),d=b(d,a,s,l,r[w+9],12,-1958414417),l=b(l,d,a,s,r[w+10],17,-42063),s=b(s,l,d,a,r[w+11],22,-1990404162),a=b(a,s,l,d,r[w+12],7,1804603682),d=b(d,a,s,l,r[w+13],12,-40341101),l=b(l,d,a,s,r[w+14],17,-1502002290),s=b(s,l,d,a,r[w+15],22,1236535329),a=f(a,s,l,d,r[w+1],5,-165796510),d=f(d,a,s,l,r[w+6],9,-1069501632),l=f(l,d,a,s,r[w+11],14,643717713),s=f(s,l,d,a,r[w+0],20,-373897302),a=f(a,s,l,d,r[w+5],5,-701558691),d=f(d,a,s,l,r[w+10],9,38016083),l=f(l,d,a,s,r[w+15],14,-660478335),s=f(s,l,d,a,r[w+4],20,-405537848),a=f(a,s,l,d,r[w+9],5,568446438),d=f(d,a,s,l,r[w+14],9,-1019803690),l=f(l,d,a,s,r[w+3],14,-187363961),s=f(s,l,d,a,r[w+8],20,1163531501),a=f(a,s,l,d,r[w+13],5,-1444681467),d=f(d,a,s,l,r[w+2],9,-51403784),l=f(l,d,a,s,r[w+7],14,1735328473),s=f(s,l,d,a,r[w+12],20,-1926607734),a=p(a,s,l,d,r[w+5],4,-378558),d=p(d,a,s,l,r[w+8],11,-2022574463),l=p(l,d,a,s,r[w+11],16,1839030562),s=p(s,l,d,a,r[w+14],23,-35309556),a=p(a,s,l,d,r[w+1],4,-1530992060),d=p(d,a,s,l,r[w+4],11,1272893353),l=p(l,d,a,s,r[w+7],16,-155497632),s=p(s,l,d,a,r[w+10],23,-1094730640),a=p(a,s,l,d,r[w+13],4,681279174),d=p(d,a,s,l,r[w+0],11,-358537222),l=p(l,d,a,s,r[w+3],16,-722521979),s=p(s,l,d,a,r[w+6],23,76029189),a=p(a,s,l,d,r[w+9],4,-640364487),d=p(d,a,s,l,r[w+12],11,-421815835),l=p(l,d,a,s,r[w+15],16,530742520),s=p(s,l,d,a,r[w+2],23,-995338651),a=m(a,s,l,d,r[w+0],6,-198630844),d=m(d,a,s,l,r[w+7],10,1126891415),l=m(l,d,a,s,r[w+14],15,-1416354905),s=m(s,l,d,a,r[w+5],21,-57434055),a=m(a,s,l,d,r[w+12],6,1700485571),d=m(d,a,s,l,r[w+3],10,-1894986606),l=m(l,d,a,s,r[w+10],15,-1051523),s=m(s,l,d,a,r[w+1],21,-2054922799),a=m(a,s,l,d,r[w+8],6,1873313359),d=m(d,a,s,l,r[w+15],10,-30611744),l=m(l,d,a,s,r[w+6],15,-1560198380),s=m(s,l,d,a,r[w+13],21,1309151649),a=m(a,s,l,d,r[w+4],6,-145523070),d=m(d,a,s,l,r[w+11],10,-1120210379),l=m(l,d,a,s,r[w+2],15,718787259),s=m(s,l,d,a,r[w+9],21,-343485551),a=a+qe>>>0,s=s+ze>>>0,l=l+Pe>>>0,d=d+Ve>>>0}return e.endian([a,s,l,d])};i._ff=function(n,u,r,h,a,s,l){var d=n+(u&r|~u&h)+(a>>>0)+l;return(d<<s|d>>>32-s)+u},i._gg=function(n,u,r,h,a,s,l){var d=n+(u&h|r&~h)+(a>>>0)+l;return(d<<s|d>>>32-s)+u},i._hh=function(n,u,r,h,a,s,l){var d=n+(u^r^h)+(a>>>0)+l;return(d<<s|d>>>32-s)+u},i._ii=function(n,u,r,h,a,s,l){var d=n+(r^(u|~h))+(a>>>0)+l;return(d<<s|d>>>32-s)+u},i._blocksize=16,i._digestsize=16,L.exports=function(n,u){if(n==null)throw new Error("Illegal argument "+n);var r=e.wordsToBytes(i(n,u));return u&&u.asBytes?r:u&&u.asString?c.bytesToString(r):e.bytesToHex(r)}}()),L.exports}var Be=Ee();const _e=ye(Be),te=["avatar_url","email","name"],$e=[...te,"identifier_hash"],O=()=>{const e="cw_user_",{websiteToken:o}=window.$chatwoot;return`${e}${o}`},Te=({identifier:e="",user:o})=>`${$e.reduce((c,i)=>`${c}${i}${o[i]||""}`,"")}identifier${e}`,Me=(...e)=>_e(Te(...e)),Fe=e=>te.reduce((o,t)=>o||!!e[t],!1),N=(e,o,{expires:t=365,baseDomain:c=void 0}={})=>{const i={expires:t,sameSite:"Lax",domain:c};typeof o=="object"&&(o=JSON.stringify(o)),x.set(e,o,i)},oe=["click","touchstart","keypress","keydown"],Ae=()=>{let e;try{e=new(window.AudioContext||window.webkitAudioContext)}catch{}return e},ke=async(e="",o)=>{const t=Ae(),c=i=>{window.playAudioAlert=()=>{if(t){const n=t.createBufferSource();n.buffer=i,n.connect(t.destination),n.loop=!1,n.start()}}};if(t){const{type:i="dashboard",alertTone:n="ding"}=o||{},u=`${e}/audio/${i}/${n}.mp3`,r=new Request(u);fetch(r).then(h=>h.arrayBuffer()).then(h=>(t.decodeAudioData(h).then(c),new Promise(a=>a()))).catch(()=>{})}},Ue=({origin:e,conversationCookie:o,websiteToken:t,locale:c})=>{const i=new URL("/widget",e);return i.searchParams.append("cw_conversation",o),i.searchParams.append("website_token",t),i.searchParams.append("locale",c),i.toString()},Le=(e,o,t,c)=>{try{const i=Ue({origin:e,websiteToken:o,locale:t,conversationCookie:c});window.open(i,`webwidget_session_${o}`,"resizable=off,width=400,height=600").focus()}catch(i){console.log(i)}};function ne(e){if(e===null||e===!0||e===!1)return NaN;var o=Number(e);return isNaN(o)?o:o<0?Math.ceil(o):Math.floor(o)}function H(e,o){if(o.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+o.length+" present")}function Ie(e){H(1,arguments);var o=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&o==="[object Date]"?new Date(e.getTime()):typeof e=="number"||o==="[object Number]"?new Date(e):((typeof e=="string"||o==="[object String]")&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn(new Error().stack)),new Date(NaN))}function De(e,o){H(2,arguments);var t=Ie(e).getTime(),c=ne(o);return new Date(t+c)}var Re=36e5;function Oe(e,o){H(2,arguments);var t=ne(o);return De(e,t*Re)}const re=(e,o="")=>N("cw_conversation",e,{baseDomain:o}),Ne=e=>{const o=Oe(new Date,1);N("cw_snooze_campaigns_till",Number(o),{expires:o,baseDomain:e})},g={getUrl({baseUrl:e,websiteToken:o}){return`${e}/widget?website_token=${o}`},createFrame:({baseUrl:e,websiteToken:o})=>{if(g.getAppFrame())return;ae();const t=document.createElement("iframe"),c=x.get("cw_conversation");let i=g.getUrl({baseUrl:e,websiteToken:o});c&&(i=`${i}&cw_conversation=${c}`),t.src=i,t.allow="camera;microphone;fullscreen;display-capture;picture-in-picture;clipboard-write;",t.id="chatwoot_live_chat_widget",t.style.visibility="hidden";let n=`woot-widget-holder woot--hide woot-elements--${window.$chatwoot.position}`;window.$chatwoot.hideMessageBubble&&(n+=" woot-widget--without-bubble"),X(window.$chatwoot.widgetStyle)&&(n+=" woot-widget-holder--flat"),y(v,n),v.id="cw-widget-holder",v.appendChild(t),K.appendChild(v),g.initPostMessageCommunication(),g.initWindowSizeListener(),g.preventDefaultScroll()},getAppFrame:()=>document.getElementById("chatwoot_live_chat_widget"),getBubbleHolder:()=>document.getElementsByClassName("woot--bubble-holder"),sendMessage:(e,o)=>{g.getAppFrame().contentWindow.postMessage(`chatwoot-widget:${JSON.stringify({event:e,...o})}`,"*")},initPostMessageCommunication:()=>{window.onmessage=e=>{if(typeof e.data!="string"||e.data.indexOf("chatwoot-widget:")!==0)return;const o=JSON.parse(e.data.replace("chatwoot-widget:",""));typeof g.events[o.event]=="function"&&g.events[o.event](o)}},initWindowSizeListener:()=>{window.addEventListener("resize",()=>g.toggleCloseButton())},preventDefaultScroll:()=>{v.addEventListener("wheel",e=>{const o=e.deltaY,t=v.scrollHeight,c=v.offsetHeight,i=v.scrollTop;(i===0&&o<0||c+i===t&&o>0)&&e.preventDefault()})},setFrameHeightToFitContent:(e,o)=>{const t=g.getAppFrame(),c=o?`${e}px`:"100%";t&&t.setAttribute("style",`height: ${c} !important`)},setupAudioListeners:()=>{const{baseUrl:e=""}=window.$chatwoot;ke(e,{type:"widget",alertTone:"ding"}).then(()=>oe.forEach(o=>{document.removeEventListener(o,g.setupAudioListeners,!1)}))},events:{loaded:e=>{re(e.config.authToken,window.$chatwoot.baseDomain),window.$chatwoot.hasLoaded=!0;const o=x.get("cw_snooze_campaigns_till");g.sendMessage("config-set",{locale:window.$chatwoot.locale,position:window.$chatwoot.position,hideMessageBubble:window.$chatwoot.hideMessageBubble,showPopoutButton:window.$chatwoot.showPopoutButton,widgetStyle:window.$chatwoot.widgetStyle,darkMode:window.$chatwoot.darkMode,showUnreadMessagesDialog:window.$chatwoot.showUnreadMessagesDialog,campaignsSnoozedTill:o}),g.onLoad({widgetColor:e.config.channelConfig.widgetColor}),g.toggleCloseButton(),window.$chatwoot.user&&g.sendMessage("set-user",window.$chatwoot.user),window.playAudioAlert=()=>{},oe.forEach(t=>{document.addEventListener(t,g.setupAudioListeners,!1)}),window.$chatwoot.resetTriggered||U({eventName:ve})},error:({errorType:e,data:o})=>{U({eventName:me,data:o}),e===xe&&x.remove(O())},onEvent({eventIdentifier:e,data:o}){U({eventName:e,data:o})},setBubbleLabel(e){we(window.$chatwoot.launcherTitle||e.label)},setAuthCookie({data:{widgetAuthToken:e}}){re(e,window.$chatwoot.baseDomain)},setCampaignReadOn(){Ne(window.$chatwoot.baseDomain)},toggleBubble:e=>{let o={};e==="open"?o.toggleValue=!0:e==="close"&&(o.toggleValue=!1),S(o)},popoutChatWindow:({baseUrl:e,websiteToken:o,locale:t})=>{const c=x.get("cw_conversation");window.$chatwoot.toggle("close"),Le(e,o,t,c)},closeWindow:()=>{S({toggleValue:!1}),Y()},onBubbleToggle:e=>{g.sendMessage("toggle-open",{isOpen:e}),e&&g.pushEvent("webwidget.triggered")},onLocationChange:({referrerURL:e,referrerHost:o})=>{g.sendMessage("change-url",{referrerURL:e,referrerHost:o})},updateIframeHeight:e=>{const{extraHeight:o=0,isFixedHeight:t}=e;g.setFrameHeightToFitContent(o,t)},setUnreadMode:()=>{be(),S({toggleValue:!0})},resetUnreadMode:()=>Y(),handleNotificationDot:e=>{if(window.$chatwoot.hideMessageBubble)return;const o=document.querySelector(".woot-widget-bubble");e.unreadMessageCount>0&&!o.classList.contains("unread-notification")?y(o,"unread-notification"):e.unreadMessageCount===0&&B(o,"unread-notification")},closeChat:()=>{S({toggleValue:!1})},playAudio:()=>{window.playAudioAlert()}},pushEvent:e=>{g.sendMessage("push-event",{eventName:e})},onLoad:({widgetColor:e})=>{const o=g.getAppFrame();if(o.style.visibility="",o.setAttribute("id","chatwoot_live_chat_widget"),g.getBubbleHolder().length)return;ge(window.$chatwoot.hideMessageBubble),de();let t="woot-widget-bubble",c=`woot-elements--${window.$chatwoot.position} woot-widget-bubble woot--close woot--hide`;X(window.$chatwoot.widgetStyle)&&(t+=" woot-widget-bubble--flat",c+=" woot-widget-bubble--flat"),fe(e)&&(t+=" woot-widget-bubble-color--lighter",c+=" woot-widget-bubble-color--lighter");const i=ue({className:t,path:ce,target:k});y(_,c),i.style.background=e,_.style.background=e,C.appendChild(i),C.appendChild(_),he()},toggleCloseButton:()=>{let e=!1;window.matchMedia("(max-width: 668px)").matches&&(e=!0),g.sendMessage("toggle-close-button",{isMobile:e})}},He="sdk-set-bubble-visibility",We=({baseUrl:e,websiteToken:o})=>{if(window.$chatwoot)return;window.Turbo&&document.addEventListener("turbo:before-render",n=>M(n.detail.newBody)),window.Turbolinks&&document.addEventListener("turbolinks:before-render",n=>{M(n.data.newBody)}),document.addEventListener("astro:before-swap",n=>M(n.newDocument.body));const t=window.chatwootSettings||{};let c=t.locale,i=t.baseDomain;t.useBrowserLanguage&&(c=window.navigator.language.replace("-","_")),window.$chatwoot={baseUrl:e,baseDomain:i,hasLoaded:!1,hideMessageBubble:t.hideMessageBubble||!1,isOpen:!1,position:t.position==="left"?"left":"right",websiteToken:o,locale:c,useBrowserLanguage:t.useBrowserLanguage||!1,type:P(t.type),launcherTitle:t.launcherTitle||"",showPopoutButton:t.showPopoutButton||!1,showUnreadMessagesDialog:t.showUnreadMessagesDialog??!0,widgetStyle:le(t.widgetStyle)||"standard",resetTriggered:!1,darkMode:j(t.darkMode),toggle(n){g.events.toggleBubble(n)},toggleBubbleVisibility(n){let u=document.querySelector(".woot--bubble-holder"),r=document.querySelector(".woot-widget-holder");n==="hide"?(y(r,"woot-widget--without-bubble"),y(u,"woot-hidden"),window.$chatwoot.hideMessageBubble=!0):n==="show"&&(B(u,"woot-hidden"),B(r,"woot-widget--without-bubble"),window.$chatwoot.hideMessageBubble=!1),g.sendMessage(He,{hideMessageBubble:window.$chatwoot.hideMessageBubble})},popoutChatWindow(){g.events.popoutChatWindow({baseUrl:window.$chatwoot.baseUrl,websiteToken:window.$chatwoot.websiteToken,locale:c})},setUser(n,u){if(typeof n!="string"&&typeof n!="number")throw new Error("Identifier should be a string or a number");if(!Fe(u))throw new Error("User object should have one of the keys [avatar_url, email, name]");const r=O(),h=x.get(r),a=Me({identifier:n,user:u});a!==h&&(window.$chatwoot.identifier=n,window.$chatwoot.user=u,g.sendMessage("set-user",{identifier:n,user:u}),N(r,a,{baseDomain:i}))},setCustomAttributes(n={}){if(!n||!Object.keys(n).length)throw new Error("Custom attributes should have atleast one key");g.sendMessage("set-custom-attributes",{customAttributes:n})},deleteCustomAttribute(n=""){if(n)g.sendMessage("delete-custom-attribute",{customAttribute:n});else throw new Error("Custom attribute is required")},setConversationCustomAttributes(n={}){if(!n||!Object.keys(n).length)throw new Error("Custom attributes should have atleast one key");g.sendMessage("set-conversation-custom-attributes",{customAttributes:n})},deleteConversationCustomAttribute(n=""){if(n)g.sendMessage("delete-conversation-custom-attribute",{customAttribute:n});else throw new Error("Custom attribute is required")},setLabel(n=""){g.sendMessage("set-label",{label:n})},removeLabel(n=""){g.sendMessage("remove-label",{label:n})},setLocale(n="en"){g.sendMessage("set-locale",{locale:n})},setColorScheme(n="light"){g.sendMessage("set-color-scheme",{darkMode:j(n)})},reset(){window.$chatwoot.isOpen&&g.events.toggleBubble(),x.remove("cw_conversation"),x.remove(O());const n=g.getAppFrame();n.src=g.getUrl({baseUrl:window.$chatwoot.baseUrl,websiteToken:window.$chatwoot.websiteToken}),window.$chatwoot.resetTriggered=!0}},g.createFrame({baseUrl:e,websiteToken:o})};window.chatwootSDK={run:We}})();
