(()=>{"use strict";var e={8472:(e,t,s)=>{s.d(t,{c:()=>a});const o=new Map,a={getAll:()=>o,get:(e,t)=>o.has(e)?t?o.get(e).get(t)||null:o.get(e)||null:null,set(e,t,s){o.has(e)||o.set(e,new Map),o.get(e).set(t,s)},remove(e,t){if(!o.has(e))return;const s=o.get(e);t&&s.delete(t),t&&0!==s.size||o.delete(e)}}}},t={};function s(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o](l,l.exports,s),l.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=s(8472);const{ivent:t}=window,{version:o,pro:a,themeName:l,settings:r,media_sizes:i,disabledBlocks:p,allowPluginColorPalette:n,allowPluginCustomizer:g,allowTemplates:c,sidebars:h,timezone:u,googleMapsAPIKey:d,googleMapsAPIUrl:m,googleReCaptchaAPISiteKey:w,googleReCaptchaAPISecretKey:y,icons:v,shapes:P,fonts:k,customTypographyList:b,admin_url:f,admin_templates_url:A}=window.ghostkitVariables,I={},T=[];Object.keys(i).forEach((e=>{I[`media_${e}`]=i[e],T.push(i[e])}));const C={version:o,pro:a,themeName:l,settings:r,disabledBlocks:p,allowPluginColorPalette:n,allowPluginCustomizer:g,allowTemplates:c,vars:I,replaceVars(e){return Object.keys(this.vars).forEach((t=>{var s;e=e.replace(new RegExp(`#{ghostkitvar:${s=t,s.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}}`,"g"),`(max-width: ${this.vars[t]}px)`)})),e},screenSizes:T,sidebars:h,timezone:u,googleMapsAPIKey:d,googleMapsAPIUrl:m,googleReCaptchaAPISiteKey:w,googleReCaptchaAPISecretKey:y,icons:v,shapes:P,fonts:k,customTypographyList:b,adminUrl:f,adminTemplatesUrl:A,instance:e.c,events:t,hasBlockSupport:(e,t,s=!1)=>("string"==typeof e&&wp?.blocks?.getBlockType&&(e=wp.blocks.getBlockType(e)),e&&e.ghostkit&&e.ghostkit.supports&&void 0!==e.ghostkit.supports[t]?e.ghostkit.supports[t]:s)};window.GHOSTKIT=C})()})();