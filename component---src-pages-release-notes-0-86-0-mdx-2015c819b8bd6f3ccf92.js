(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"1lec":function(e){e.exports=JSON.parse('{"/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4","/release-notes/0.98.3":"v0.98.3","/release-notes/0.98.2":"v0.98.2","/release-notes/0.98.1":"v0.98.1"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,a,t){"use strict";t("njko"),t("XOI/"),t("UsjJ"),t("Pw7m"),t("LrLq"),t("YmQD"),t("JGbM");var n=t("q1tI"),i=t.n(n),s=t("2+3N"),r=t("1lec"),c=t("+ejy"),l=t("+9zj");a.a=function(e){var a={},t={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":a,"Recent releases":t};Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t})),Object.entries(r).forEach((function(e){var a=e[0],n=e[1];t[n]=a}));var b=Object(l.a)(e.location),o=e.version||b.substring(b.lastIndexOf("/")+1);return o.match(/^[0-9]/)||(o=void 0),i.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:o?o+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),o?i.a.createElement("h1",{id:"release-notes"},i.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},i.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},i.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),o," release notes"):"",e.children)}},Rt0B:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return r})),t.d(a,"default",(function(){return o}));t("8x/H"),t("UsjJ"),t("tKM+"),t("q1tI");var n=t("7ljp"),i=t("JkCF");var s,r={},c=(s="ThankYou",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:r},b=i.a;function o(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(n.b)(b,Object.assign({},l,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"new-features",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The request body is injected automatically in annotated HTTP service when the parameter type is ",Object(n.b)("inlineCode",{parentName:"li"},"byte[]"),", ",Object(n.b)("inlineCode",{parentName:"li"},"HttpData"),", ",Object(n.b)("inlineCode",{parentName:"li"},"String")," or ",Object(n.b)("inlineCode",{parentName:"li"},"CharSequence")," regardless of the ",Object(n.b)("inlineCode",{parentName:"li"},"content-type")," header. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1584"}),"#1584"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1745"}),"#1745")),Object(n.b)("li",{parentName:"ul"},"You can now create a curl command from the ",Object(n.b)("inlineCode",{parentName:"li"},"DocService")," using ",Object(n.b)("inlineCode",{parentName:"li"},"COPY AS A CURL COMMAND")," button. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/196"}),"#196"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1747"}),"#1747")),Object(n.b)("li",{parentName:"ul"},"You can now build your gRPC service without depending on gRPC stubs by extending ",Object(n.b)("inlineCode",{parentName:"li"},"AbstractUnsafeUnaryGrpcService"),". This is for advanced users only. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1766"}),"#1766")),Object(n.b)("li",{parentName:"ul"},"You can now log available ciphers for TLS on startup by setting a system property: ",Object(n.b)("inlineCode",{parentName:"li"},"-Dcom.linecorp.armeria.dumpOpenSslInfo=true"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1777"}),"#1777"))),Object(n.b)("h2",{id:"improvements",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#improvements","aria-label":"improvements permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You can now use ",Object(n.b)("inlineCode",{parentName:"li"},"HttpTracingClient")," even when the client is used outside of Armeria server. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1767"}),"#1767"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1768"}),"#1768")),Object(n.b)("li",{parentName:"ul"},"You can now get pooled HTTP decode responses. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1770"}),"#1770"))),Object(n.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"RequestLogAvailabilityException")," is no longer raised in ",Object(n.b)("inlineCode",{parentName:"li"},"HttpTracling(Client|Service)")," when a request timed out. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1769"}),"#1769"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1775"}),"#1775")),Object(n.b)("li",{parentName:"ul"},"Now, an exception is raised while building a server when TLS is configured but ALPN is not supported. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1772"}),"#1772"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1774"}),"#1774")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},":scheme")," and ",Object(n.b)("inlineCode",{parentName:"li"},":authority")," headers are set for every received request in the server. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1773"}),"#1773"),", ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1776"}),"#1776"))),Object(n.b)("h2",{id:"breaking-change",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-change","aria-label":"breaking change permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking change"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"newDecoder()")," in ",Object(n.b)("inlineCode",{parentName:"li"},"StreamDecoderFactory")," now takes a ",Object(n.b)("inlineCode",{parentName:"li"},"ByteBufAllocator"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1770"}),"#1770"))),Object(n.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Jackson 2.9.8 -> 2.9.9"),Object(n.b)("li",{parentName:"ul"},"jsoup 1.11.3 -> 1.12.1"),Object(n.b)("li",{parentName:"ul"},"tomcat-embed-core 9.0.19 -> 9.0.20"),Object(n.b)("li",{parentName:"ul"},"Spring Boot",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"2.1.4.RELEASE -> 2.1.5.RELEASE"),Object(n.b)("li",{parentName:"ul"},"1.5.20.RELEASE -> 1.5.21.RELEASE")))),Object(n.b)("h2",{id:"thank-you",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#thank-you","aria-label":"thank you permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Thank you"),Object(n.b)(c,{usernames:["adriancole","alex-lx","anuraaga","dawnbreaks","gquintana","hyangtack","imasahiro","jongmin92","minwoox","trustin","wooyeong"],mdxType:"ThankYou"}))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-86-0-mdx-2015c819b8bd6f3ccf92.js.map