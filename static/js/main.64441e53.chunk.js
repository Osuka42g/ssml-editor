(this["webpackJsonpssml-editor"]=this["webpackJsonpssml-editor"]||[]).push([[0],{11:function(t,e,a){},14:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),l=a(3),r=a.n(l),s=(a(11),a(5)),c=a(4),i=(a(14),"SSML_WIP"),u="Get more info about SSML tags in https://docs.aws.amazon.com/us_us/polly/latest/dg/supportedtags.html#lang-tag";function m(t){var e=t.onClick,a=t.tag,n=t.closeTag,l=void 0===n?null:n,r=t.label,s=void 0===r?null:r;return o.a.createElement("button",{onClick:function(){return e(a,l)}},s||a)}var g=[{label:"(s)peak",tag:"speak",hotkeys:["command+s","alt+s"]},{label:"(e)mphasis",tag:"emphasis",hotkeys:["command+e","alt+e"]},{label:"(p)",tag:"p",hotkeys:["command+p","alt+p"]},{label:"brea(k)",tag:"break",hotkeys:["command+k","alt+k"]},{label:"auto-(b)reaths",tag:'amazon:auto-breaths volume="x-soft" frequency="x-low" duration="x-short"',closeTag:"amazon:auto-breaths",hotkeys:["command+b","alt+b"]},{label:"(l)ang en-US",tag:'lang xml:lang="en-US"',closeTag:"lang",hotkeys:["command+l","alt+l"]},{label:"lang fr-FR",tag:'lang xml:lang="fr-FR"',closeTag:"lang",hotkeys:[]}],h=g.map((function(t){return t.hotkeys})).flat().join(",");var d=function(){var t=Object(n.useState)(localStorage.getItem(i)||u),e=Object(s.a)(t,2),a=e[0],l=e[1],r=Object(n.useRef)(null),d=function(t,e,a){return"<".concat(e,">").concat(t,"</").concat(a||e,">")},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=r.current.selectionStart,o=r.current.selectionEnd,s=a.substring(0,n),c=a.substring(n,o),i=a.substring(o,a.length);l("".concat(s).concat(d(c,t,e)).concat(i))};return o.a.createElement("div",{className:"App"},o.a.createElement("h3",null,"SSML Editor"),o.a.createElement(c.a,{keyName:h,onKeyDown:function(t,e){e.preventDefault(),e.stopPropagation();var a=g.filter((function(e){return e.hotkeys.includes(t)}))[0],n=a.tag,o=a.closeTag;p(n,o)}.bind(this),onKeyUp:function(t,e){e.preventDefault(),e.stopPropagation()}.bind(this),allowRepeat:!0,filter:function(t){return"textarea"===t.target.type}},o.a.createElement("textarea",{ref:r,value:a,onChange:function(t){return e=t.target.value,l(e),void localStorage.setItem(i,e);var e},rows:15,style:{width:"90%",height:"90%"}})),o.a.createElement("hr",null),g.map((function(t,e){return o.a.createElement(m,{key:e,onClick:p,label:t.label||t.tag,tag:'amazon:auto-breaths volume="x-soft" frequency="x-low" duration="x-short"',closeTag:"amazon:auto-breaths"})})),o.a.createElement("p",null,"hotkeys: cmd / alt + (Mod)"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},6:function(t,e,a){t.exports=a(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.64441e53.chunk.js.map