"use strict";(self.webpackChunkarmeria_site=self.webpackChunkarmeria_site||[]).push([[6721],{67695:function(e,s,t){t.d(s,{Z:function(){return o}});t(88025);var r=t(1923),n=t(25444),a=t(67294),l=r.Z.Title,o=function(e){var s={};Object.entries(e.allItems).forEach((function(t){var r=t[0],n=t[1],a=e.grouper(r);s[a]||(s[a]={}),s[a][r]=n}));var t=e.layout;return a.createElement(t,e,a.createElement(l,{level:1},e.pageTitle),Object.entries(s).map((function(e){var s=e[0],t=e[1];return a.createElement("span",{key:s},a.createElement(l,{id:s,level:2},s),a.createElement("ul",{className:"list-all-module--itemList--mmQaB"},Object.entries(t).map((function(e){var s=e[0],t=e[1];return a.createElement("li",{key:s},a.createElement(n.Link,{to:s},t))}))))})),e.children)}},20370:function(e,s,t){t(88025);var r=t(1923),n=t(25444),a=t(67294),l=t(55746),o=t(8284),v=t(96759),i=t(46731),c=t(9396),u=r.Z.Title,m=Object.keys(o)[0],f=h(m);function h(e){return e.substring(e.lastIndexOf("/")+1)}s.Z=function(e){var s={},t={},r={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":s,"Recent releases":t};Object.entries(l).forEach((function(e){var t=e[0],r=e[1];s[r]=t})),Object.entries(o).forEach((function(e){var s=e[0],r=e[1];t[r]=s}));var d=(0,c.Z)(e.location),p=e.version||h(d);return p.match(/^[0-9]/)||(p=void 0),a.createElement(i.Z,Object.assign({},e,{candidateMdxNodes:[],index:r,prefix:"release-notes",pageTitle:p?p+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),p&&p!==f?a.createElement(v.Ch,null,"You're seeing the release note of an old version. Check out"," ",a.createElement(n.Link,{to:m},"the latest release note"),"."):"",p?a.createElement(u,{id:"release-notes",level:1},a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),p," release notes"):"",e.children)}},88237:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});t(88025);var r=t(1923),n=t(67294),a=t(65769),l=t(67695),o=t(20370),v=JSON.parse('{"/release-notes/1.20.0":"v1.20.0","/release-notes/1.19.0":"v1.19.0","/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0","/release-notes/1.11.0":"v1.11.0","/release-notes/1.10.0":"v1.10.0","/release-notes/1.9.2":"v1.9.2","/release-notes/1.9.1":"v1.9.1","/release-notes/1.9.0":"v1.9.0","/release-notes/1.8.0":"v1.8.0","/release-notes/1.7.2":"v1.7.2","/release-notes/1.7.1":"v1.7.1","/release-notes/1.7.0":"v1.7.0","/release-notes/1.6.0":"v1.6.0","/release-notes/1.5.0":"v1.5.0","/release-notes/1.4.0":"v1.4.0","/release-notes/1.3.0":"v1.3.0","/release-notes/1.2.0":"v1.2.0","/release-notes/1.1.0":"v1.1.0","/release-notes/1.0.0":"v1.0.0","/release-notes/0.99.9":"v0.99.9","/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4","/release-notes/0.98.3":"v0.98.3","/release-notes/0.98.2":"v0.98.2","/release-notes/0.98.1":"v0.98.1","/release-notes/0.98.0":"v0.98.0","/release-notes/0.97.0":"v0.97.0","/release-notes/0.96.0":"v0.96.0","/release-notes/0.95.0":"v0.95.0","/release-notes/0.94.0":"v0.94.0","/release-notes/0.93.0":"v0.93.0","/release-notes/0.92.0":"v0.92.0","/release-notes/0.91.0":"v0.91.0","/release-notes/0.90.3":"v0.90.3","/release-notes/0.90.2":"v0.90.2","/release-notes/0.90.1":"v0.90.1","/release-notes/0.90.0":"v0.90.0","/release-notes/0.89.1":"v0.89.1","/release-notes/0.89.0":"v0.89.0","/release-notes/0.88.0":"v0.88.0","/release-notes/0.87.0":"v0.87.0","/release-notes/0.86.0":"v0.86.0","/release-notes/0.85.0":"v0.85.0","/release-notes/0.84.0":"v0.84.0","/release-notes/0.83.0":"v0.83.0","/release-notes/0.82.0":"v0.82.0","/release-notes/0.81.1":"v0.81.1","/release-notes/0.81.0":"v0.81.0","/release-notes/0.80.0":"v0.80.0"}'),i=r.Z.Title,c=r.Z.Paragraph,u=function(e){var s=Object.keys(v);function t(e){var s=e.lastIndexOf("/");return s>=0?e.substring(s+1):e}return n.createElement(l.Z,Object.assign({},e,{pageTitle:"Release notes for all past versions",allItems:v,layout:o.Z,grouper:(0,n.useCallback)((function(e){var s=t(e),r=s.indexOf(".");return"Version "+(r>=0?s.substring(0,r):s)}),[])}),n.createElement(i,{id:"even-older-versions",level:2},"Even older versions"),n.createElement(c,null,"See"," ",n.createElement(a.MS,{href:"https://github.com/line/armeria/releases?after=armeria-"+t(s[s.length-1])},"Github releases page"),"."))}},55746:function(e){e.exports=JSON.parse('{"/news/20220714-newsletter-4":"Armeria Newsletter vol. 4","/news/20211029-newsletter-3":"Armeria Newsletter vol. 3","/news/20210202-newsletter-2":"Armeria Newsletter vol. 2","/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},8284:function(e){e.exports=JSON.parse('{"/release-notes/1.20.0":"v1.20.0","/release-notes/1.19.0":"v1.19.0","/release-notes/1.18.0":"v1.18.0","/release-notes/1.17.2":"v1.17.2","/release-notes/1.17.1":"v1.17.1","/release-notes/1.17.0":"v1.17.0","/release-notes/1.16.0":"v1.16.0","/release-notes/1.15.0":"v1.15.0","/release-notes/1.14.1":"v1.14.1","/release-notes/1.14.0":"v1.14.0","/release-notes/1.13.4":"v1.13.4","/release-notes/1.13.3":"v1.13.3","/release-notes/1.13.2":"v1.13.2","/release-notes/1.13.1":"v1.13.1","/release-notes/1.13.0":"v1.13.0","/release-notes/1.12.0":"v1.12.0"}')}}]);
//# sourceMappingURL=component---src-pages-release-notes-list-tsx-25ebc753e0f44cb94a84.js.map