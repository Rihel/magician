(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[51],{Jn2o:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),r=n.n(t),c=n("dEAq"),o=n("H1Ra");n("JjdP");a["default"]=e=>(r.a.useEffect((()=>{var a;null!==e&&void 0!==e&&null!==(a=e.location)&&void 0!==a&&a.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"css-\u547d\u540d-bem"},r.a.createElement(c["AnchorLink"],{to:"#css-\u547d\u540d-bem","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"CSS \u547d\u540d Bem"),r.a.createElement("p",null,r.a.createElement(c["Link"],{to:"https://www.bemcss.com/"},"bem \u89c4\u8303")),r.a.createElement(o["a"],{code:"import { createBem } from '@magician/utils';\n\n// \u4f20\u53c2\u6307\u7684\u662f\u7ed9\u6240\u6709\u52a0\u7edf\u4e00\u524d\u7f00\nconst bem = createBem('hobby');\n\n// \u58f0\u660e\u4e00\u4e2a\u6a21\u5757\u6765\u7c7b\u540d\nconst searchCreator = bem('search');\n\nsearchCreator(); // => hobby-search\nsearchCreator('btn'); // => hobby-search-btn\nsearchCreator('btn__item'); // => hobby-search-btn__item\n\nconst sideCreator = bem('side');\nsideCreator(); // hobby-side\nsideCreator('a'); // hobby-side-a",lang:"js"}),r.a.createElement("h2",{id:"api"},r.a.createElement(c["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(o["a"],{code:"createBem(libPrefix?: string) => (blockName:string) => (name:string)=>string",lang:"ts"}))))}}]);