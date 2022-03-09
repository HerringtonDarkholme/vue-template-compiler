import{d as W,w as R,r as I,a as C,o as _,c as h,b as F,v as E,u as S,e as l,i as O,p as b,f as w,g as L,h as g,j as B,k,S as N,F as U,l as V}from"./vendor.1f6b9e85.js";const H=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}};H();let i,v=0,d=null;function p(){return(d===null||d.buffer!==i.memory.buffer)&&(d=new Uint8Array(i.memory.buffer)),d}let m=new TextEncoder("utf-8");const P=typeof m.encodeInto=="function"?function(e,n){return m.encodeInto(e,n)}:function(e,n){const r=m.encode(e);return n.set(r),{read:e.length,written:r.length}};function D(e,n,r){if(r===void 0){const c=m.encode(e),u=n(c.length);return p().subarray(u,u+c.length).set(c),v=c.length,u}let o=e.length,t=n(o);const s=p();let a=0;for(;a<o;a++){const c=e.charCodeAt(a);if(c>127)break;s[t+a]=c}if(a!==o){a!==0&&(e=e.slice(a)),t=r(t,o,o=a+e.length*3);const c=p().subarray(t+a,t+o);a+=P(e,c).written}return v=a,t}let f=null;function M(){return(f===null||f.buffer!==i.memory.buffer)&&(f=new Int32Array(i.memory.buffer)),f}let $=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});$.decode();function q(e,n){return $.decode(p().subarray(e,e+n))}function j(e){try{const s=i.__wbindgen_add_to_stack_pointer(-16);var n=D(e,i.__wbindgen_malloc,i.__wbindgen_realloc),r=v;i.baseCompile(s,n,r);var o=M()[s/4+0],t=M()[s/4+1];return q(o,t)}finally{i.__wbindgen_add_to_stack_pointer(16),i.__wbindgen_free(o,t)}}async function K(e,n){if(typeof Response=="function"&&e instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(e,n)}catch(o){if(e.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",o);else throw o}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}else{const r=await WebAssembly.instantiate(e,n);return r instanceof WebAssembly.Instance?{instance:r,module:e}:r}}async function T(e){typeof e=="undefined"&&(e=new URL("/vue-compiler/assets/vue_compiler_wasm_bg.b0c206a8.wasm",self.location));const n={};(typeof e=="string"||typeof Request=="function"&&e instanceof Request||typeof URL=="function"&&e instanceof URL)&&(e=fetch(e));const{instance:r,module:o}=await K(await e,n);return i=r.exports,T.__wbindgen_wasm_module=o,i}var y=(e,n)=>{const r=e.__vccOpts||e;for(const[o,t]of n)r[o]=t;return r};const z={class:"playground"},G=["innerHTML"],J=W({async setup(e){let n,r;[n,r]=R(()=>T()),await n,r();let o=I("<p>Hello World from wasm!</p>"),t=I("");return C(async()=>{t.value=j(o.value)}),(s,a)=>(_(),h("div",z,[F(l("textarea",{"onUpdate:modelValue":a[0]||(a[0]=c=>O(o)?o.value=c:o=c)},null,512),[[E,S(o)]]),l("code",{innerHTML:S(t)},null,8,G)]))}});var Q=y(J,[["__scopeId","data-v-1eb71834"]]),X="/vue-compiler/assets/wasm-ferris.eb749a19.png",Y="/vue-compiler/assets/logo.03d6d6da.png";const Z={},x=e=>(b("data-v-921708e0"),e=e(),w(),e),ee={class:"demo-header"},te=x(()=>l("h1",{class:"title"},"Rusty Vue Playground",-1)),ne=x(()=>l("img",{class:"crab",alt:"Ferris with WA hat",src:X},null,-1)),oe=L(" \u2764\uFE0F "),re=x(()=>l("img",{class:"vue",alt:"Vue logo",src:Y},null,-1)),se=[te,ne,oe,re];function ae(e,n){return _(),h("header",ee,se)}var ce=y(Z,[["render",ae],["__scopeId","data-v-921708e0"]]);const ie={},A=e=>(b("data-v-66ab9a06"),e=e(),w(),e),le=A(()=>l("a",{href:"https://github.com/HerringtonDarkholme/vue-compiler"}," Source Code ",-1)),_e=A(()=>l("a",{href:"https://herringtondarkholme.github.io/vue-compiler/dev/bench/"}," Benchmark ",-1)),ue=A(()=>l("span",null,[l("a",{href:"https://rustwasm.github.io/wasm-pack/"},"wasm-pack"),L(" for tooling and logo. ")],-1)),de=[le,_e,ue];function fe(e,n){return _(),h("footer",null,de)}var pe=y(ie,[["render",fe],["__scopeId","data-v-66ab9a06"]]);const me=e=>(b("data-v-2e3dc787"),e=e(),w(),e),he=me(()=>l("h1",null," Loading WASM... ",-1)),ye=W({setup(e){return(n,r)=>(_(),h(U,null,[g(ce),l("main",null,[(_(),B(N,null,{fallback:k(()=>[he]),default:k(()=>[g(Q)]),_:1}))]),g(pe)],64))}});var ge=y(ye,[["__scopeId","data-v-2e3dc787"]]);V(ge).mount("#app");
