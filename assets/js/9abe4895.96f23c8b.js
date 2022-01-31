"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[49246],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69610:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],l={title:"Windows Defender Step Away From npm",authors:"johnnyreilly",tags:["VS Code","code","Windows","failed","npm install","windows defender"],hide_table_of_contents:!1},s=void 0,d={permalink:"/2017/06/11/windows-defender-step-away-from-npm",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2017-06-11-windows-defender-step-away-from-npm/index.md",source:"@site/blog/2017-06-11-windows-defender-step-away-from-npm/index.md",title:"Windows Defender Step Away From npm",description:"Update 18/06/2017",date:"2017-06-11T00:00:00.000Z",formattedDate:"June 11, 2017",tags:[{label:"VS Code",permalink:"/tags/vs-code"},{label:"code",permalink:"/tags/code"},{label:"Windows",permalink:"/tags/windows"},{label:"failed",permalink:"/tags/failed"},{label:"npm install",permalink:"/tags/npm-install"},{label:"windows defender",permalink:"/tags/windows-defender"}],readingTime:1.68,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Windows Defender Step Away From npm",authors:"johnnyreilly",tags:["VS Code","code","Windows","failed","npm install","windows defender"],hide_table_of_contents:!1},prevItem:{title:"Dynamic import: I've been awaiting you...",permalink:"/2017/07/02/dynamic-import-ive-been-await-ing-you"},nextItem:{title:"TypeScript: Spare the Rod, Spoil the Code",permalink:"/2017/05/20/typescript-spare-rod-spoil-code"}},p={authorsImageUrls:[void 0]},u=[{value:"Update 18/06/2017",id:"update-18062017",children:[],level:2},{value:"Update 12/07/2017",id:"update-12072017",children:[],level:2}],c={toc:u};function m(e){var n=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"update-18062017"},"Update 18/06/2017"),(0,i.kt)("p",null,"Whilst things did improve by fiddling with Windows Defender it wasn't a 100% fix which makes me wary. Interestingly, VS Code was always open when I did experience the issue and I haven't experienced it when it's been closed. So it may be the cause. I've opened ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/vscode/issues/28593"},"an issue for this against the VS Code repo")," ","-"," it sounds like other people may be affected as I was. Perhaps this is VS Code and not Windows Defender. Watch that space..."),(0,i.kt)("h2",{id:"update-12072017"},"Update 12/07/2017"),(0,i.kt)("p",null,"The issue was VS Code. The bug has now been fixed and shipped last night with ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/updates/v1_14"},"VS Code 1.14.0"),". Yay!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"I've recently experienced many of my ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install"),"s failing for no consistent reason. The error message would generally be something along the lines of:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm ERR! Error: EPERM: operation not permitted, rename 'C:\\dev\\training\\drrug\\node_modules\\.staging\\@exponent\\ngrok-fc327f2a' -> 'C:\\dev\\training\\drrug\\node_modules\\@exponent\\ngrok'\n")),(0,i.kt)("p",null,"I spent a good deal of time changing the versions of node and npm I was running; all seemingly to no avail. Regular flakiness which I ascribed to node / npm. I was starting to give up when I read of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-community/create-react-native-app/issues/191#issuecomment-304073970"},"other people experiencing similar issues"),". Encouragingly ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fmeira"},"Fernando Meira")," suggested a solution:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"I got the same problem just doing an npm install. Run with antivirus disabled (if you use Windows Defender, turn off Real-Time protection and Cloud-based protection). That worked for me!")),(0,i.kt)("p",null,"I didn't really expect this to work - Windows Defender has been running in the background of my Windows 10 laptop since I've had it. There's been no problems with npm installs up until a week or so ago. But given the experience I and others have had I thought I should put it out there: it looks like Windows Defender has it in for npm. Go figure."),(0,i.kt)("p",null,"Alas Windows Defender doesn't stay dead for long; it's like a zombie that rises from the grave no matter how many times you kill it. So you might want to try configuring it to ignore node.exe:"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:t(37301).Z,width:"445",height:"640"})),(0,i.kt)("p",null,"Or switching to Linux..."))}m.isMDXComponent=!0},37301:function(e,n,t){n.Z=t.p+"assets/images/Screenshot%2B2017-06-11%2B15.05.47-e2db81fdbabc3b2d7ef9bce851838176.png"}}]);