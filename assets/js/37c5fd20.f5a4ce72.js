"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[68870],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,A=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?i.createElement(A,r(r({ref:t},u),{},{components:n})):i.createElement(A,r({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},47487:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return h},default:function(){return d}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],s={title:"LICENSE to kill your PWA",authors:"johnnyreilly",tags:[],hide_table_of_contents:!1},l=void 0,c={permalink:"/2020/01/21/license-to-kill-your-pwa",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-01-21-license-to-kill-your-pwa/index.md",source:"@site/blog/2020-01-21-license-to-kill-your-pwa/index.md",title:"LICENSE to kill your PWA",description:"Update: 26/01/2020 - LICENSE to kill revoked!",date:"2020-01-21T00:00:00.000Z",formattedDate:"January 21, 2020",tags:[],readingTime:3.805,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"LICENSE to kill your PWA",authors:"johnnyreilly",tags:[],hide_table_of_contents:!1},prevItem:{title:"From create-react-app to PWA",permalink:"/2020/01/31/from-create-react-app-to-pwa"},nextItem:{title:"EF Core 3.1 breaks left join with no navigation property",permalink:"/2020/01/02/ef-core-31-breaks-left-join-with-no-navigation-property"}},u={authorsImageUrls:[void 0]},h=[{value:"Update: 26/01/2020 - LICENSE to kill revoked!",id:"update-26012020---license-to-kill-revoked",children:[],level:2},{value:"The tragedy",id:"the-tragedy",children:[],level:2},{value:"The mystery",id:"the-mystery",children:[],level:2},{value:"The investigation",id:"the-investigation",children:[],level:2},{value:"The resolution",id:"the-resolution",children:[],level:2}],p={toc:h};function d(e){var t=e.components,s=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"update-26012020---license-to-kill-revoked"},"Update: 26/01/2020 - LICENSE to kill revoked!"),(0,o.kt)("p",null,"Following the original publication of this post I received this tweet suggesting we should change the behaviour of the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"terser-webpack-plugin"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Send a PR to change the name to .LICENSE.txt by default."),(0,o.kt)("p",{parentName:"blockquote"},"\u2014 Tobias Koppers (@wSokra) ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/wSokra/status/1220069497660411904?ref_src=twsrc%5Etfw"},"January 22, 2020"))),(0,o.kt)("script",{async:"",src:"https://platform.twitter.com/widgets.js",charSet:"utf-8"}),(0,o.kt)("p",null,"That seemed like an excellent idea! I raised ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/terser-webpack-plugin/pull/210"},"this PR")," which changes the behaviour such that instead of ",(0,o.kt)("inlineCode",{parentName:"p"},".LICENSE")," files being produced, ",(0,o.kt)("inlineCode",{parentName:"p"},".LICENSE.txt")," files are pumped out instead. Crucially they are IIS (and other servers) friendly. The great news is that future users of webpack / create-react-app etc will not face this problem at all; result!"),(0,o.kt)("h2",{id:"the-tragedy"},"The tragedy"),(0,o.kt)("p",null,"Recently my beloved PWA died. I didn't realise it at first. It wasn't until a week or so after the tragedy that I realised he'd gone. In his place was the stale memory of service workers gone by. Last week's code; cached and repeatedly served up to a disappointed audience. Terrible news."),(0,o.kt)("p",null,"What had happened? What indeed. The problem was quirky and (now that I know the answer) I'm going to share it with you. Because it's entirely non-obvious."),(0,o.kt)("h2",{id:"the-mystery"},"The mystery"),(0,o.kt)("p",null,"Once I realised that I was repeatedly being served up an old version of my PWA, I got to wondering.... Why? What's happening? What's wrong? What did I do? I felt bad. I stared at the ceiling. I sighed and opened my Chrome devtools. With no small amount of sadness I went to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Application")," tab, hit ",(0,o.kt)("inlineCode",{parentName:"p"},"Service Workers")," and then ",(0,o.kt)("inlineCode",{parentName:"p"},"Unregister"),"."),(0,o.kt)("p",null,"Then I hit refresh and took a look at console. I saw this:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(32543).Z,width:"640",height:"32"})),(0,o.kt)("p",null,'What does this mean? Something about a "bad-precaching-response". And apparently this was happening whilst trying to load this resource: ',(0,o.kt)("inlineCode",{parentName:"p"},"/static/js/6.20102e99.chunk.js.LICENSE?__WB_REVISION__=e2fc36")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," was preventing pre-caching from executing successfully. This was what was killing my PWA. This was the perpetrator. How to fix this? Read on!"),(0,o.kt)("h2",{id:"the-investigation"},"The investigation"),(0,o.kt)("p",null,"Time to find out what's going on. I dropped that URL into my browser to see what would happen. ",(0,o.kt)("inlineCode",{parentName:"p"},"404")," city man:"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(8968).Z,width:"400",height:"233"})),(0,o.kt)("p",null,"So, to disk. I took a look at what was actually on the server in that location. Sure enough, the file existed. When I opened it up I found this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * A better abstraction over CSS.\n *\n * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present\n * @website https://github.com/cssinjs/jss\n * @license MIT\n */\n\n/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n/** @license React v16.12.0\n * react.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/** @license React v16.12.0\n * react-dom.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/** @license React v0.18.0\n * scheduler.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/** @license React v16.12.0\n * react-is.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n")),(0,o.kt)("p",null,"What is this? Well, as the name of the file suggests, it's licenses. For some reason, my build was scraping the licenses from the head of some of my files and placing them in a separate ",(0,o.kt)("inlineCode",{parentName:"p"},"6.20102e99.chunk.js.LICENSE")," file. Doing some more digging I happened upon ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/create-react-app/issues/6441"},"this discussion against the ",(0,o.kt)("inlineCode",{parentName:"a"},"create-react-app"))," project. It's worth saying, that my PWA was an ejected ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," project."),(0,o.kt)("p",null,"It turned out the the issue was related to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/terser-webpack-plugin"},(0,o.kt)("inlineCode",{parentName:"a"},"terser-webpack-plugin")),". The default behaviour performs this kind of license file extraction. The app was being served by an IIS server and it wasn't configured to support the ",(0,o.kt)("inlineCode",{parentName:"p"},".LICENSE")," file type."),(0,o.kt)("h2",{id:"the-resolution"},"The resolution"),(0,o.kt)("p",null,"The simplest solution was simply this: wave goodbye to ",(0,o.kt)("inlineCode",{parentName:"p"},"LICENSE")," files. If you haven't ejected from your ",(0,o.kt)("inlineCode",{parentName:"p"},"create-react-app")," then this might be a problem. But since I had, I was able to make this tweak to the terser settings in the ",(0,o.kt)("inlineCode",{parentName:"p"},"webpack.config.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"new TerserPlugin({\n    /* TURN OFF LICENSE FILES - SEE https://github.com/facebook/create-react-app/issues/6441 */\n    extractComments: false,\n    /* TURN OFF LICENSE FILES - Tweak by John Reilly */\n    terserOptions: {\n        // ....\n")),(0,o.kt)("p",null,"And with this we say goodbye to our ",(0,o.kt)("inlineCode",{parentName:"p"},"404"),"s and hello to a resurrected PWA!"))}d.isMDXComponent=!0},32543:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAAgCAMAAAC1kDnWAAAAY1BMVEX/8fH/9fX+6+v/5uZUVFTOw8PIv7/c0dG9s7M3OzvTyMiwp6dKS0v05ub/tLTt4OD/39//vr7/q6v/09P/o6Pn29uJhITi1tYpNjb/yMjr0dH/mpqfl5f/jo7/enp0cHD+ERFxTzk2AAANSklEQVR42uxZi3bjJhCdQQWmsDwlRdWR5Oz/f2UvclV7t1aapus+9uw1ghEz3IFwg6OIuh/4gX8RBLBSTCfgO4vP/fc3p3FMZ3gnCfEbJKfxfDAeJjM/jHwuHv+sDoPp3eAPRTxh0BmYif8KN5fPnxcCFFHuMvFto5kLcacI6ApXxXzbyVZxLtet6/trSHNQ4VvMoYG5YxruNXA4UN2ZQLzeFXWQ3GJUAVHPV/rf3V+H3ZbcD0oNaqnXoDnSUInRWzRTIkp3IzSRWV+eiNeJTZt1aBkTs05oaRxZWq9yZOEhO+6FEu4nYlYuBKcI4Cnw3pJpLSJ4b0cKbiKXRpSg7BTcGERRQ6IwucbqrHLTyHsMTIsck0p0gFs6JeOejmyiM1h7txkoaWp3yiX0ohw/T+1IxjsNYYaogJSQudVfQn2u5XOH9mXk0tdS51zzjIJ2GIZ+WTJoBtUtVIYeOhtirjXXuQ5zmVXsu9rzQHBcooqlGwYmhZhhgGOnUnEuy5wHjkOOW4Zea+xrVxBbuzrPQz9jZOSYwbJhxEBxU8Sl9m1EpDh3EVT9JXZDxhT7ISJHHVQtOXalZpQa1R4DCog0dte2n6nPvSpznalyzsihcuclrWZ6cdbYZIISTpqn6fXTE/GLDVqZUa+jNenFKAlBoElynsxENuldNcnbcZ18EKeDBONMEEkaDu2sd5OyTpK4gECxo6AlIUJ4gujSao1hN0KrjgCW4NZkYHmxjj2L8moF1eSSIJapgTnImMArpDUFsWA9gx+NabPCCCS3ZvJYx4TkbVZmfLGTOIxXhqcJq3Ni20T3GZukhIy21qhV01e4QICKSL2+BOznAAURzzUWSHGoTURNzBtzpY0qUy5znPOFtzpgz9WQh3nZNxyK6ssGmfWxwwUJlrowqJaZS1648tLFZVGI6vOlRLCUAkqUEvthyNSwQG5Lo4DMCNHzViHwXJqu65z7XHJdytyXDmxxgZAXWmJeZuRDjagDECBVzIujWgbVq/q7S5LVxMKGZDIBESbg7vXTT8/Dz9aoJhTHTiZhtpAMB8PsMQck9wGdFExTggmrE5JRvDVeGzhGzVCNU0aUfnUIRCQIiVlQyKMyVvtkxcpEnnY4L944Il598BbDSTj5AIu018IEhNULTFHWIgc0KMEznWCVIJiCF2jcOM+j1YIkTEKiNRZjxtGzJ83TaLSImoityKhMktSSQbotHX2F/vPniAYEBBlECKrmy1a2S9nmiiNnPwEXzpf5KsBtmWeONdYlxkvG2QaBVNVOwGEeLnE/AbelLwxHqR2ooA6wXPolx0sFWekZeeatB9VQF1X7ZV4K7RK84KDb5uWikBN8TFvJSDFsYItzvw0FZ2ubUlcZjlzLhuHL3Ny17Cdgo8/HCdjaZavE8QIxXh0mWStknBE9iiVhw8E9WYATcmhhP65+1CZ4M8qoFbGnJhyGdILnV8ynyc9IetHJu4AtNQEOcTZAuAIBigQzccL4KQivOqwWgyHAyVsNY1KGdzizinEwxDpv+TVML6OT5AU5TPLcQClYdPk0TSRIZyYxdAZhwiLETjJ6JNLjpGEioyCDJlSBBataQ8uRhDihbQIEMUbLqrRDPvoazHxv7p+G2C+03wHQE9DsXLgF3gD76Lt2QxxxD+WD6jCgmtjT4eKutPq40P0FCQ/ER+QRdQ0d+oFvLMtdAN8/q8yRcv19gb/7KGijtcMltrXGiRgx5qefn4hfVkEijeKc1q2G6U2aoBHnjdHNB/Mao6+mQ4vSHPo6tN232SfTfPcj9vraalkbZI9fV/+b11zTtgILDuCa2bVBB4+jEwSN4PtFGH0d0QrMdpnWe+QwZmdN2h2ru06e3gLzraas3njg5buOI+6840DXnYe9m0Tl95Fk5Hu8yCtuFmx2xuhnwZjAj0BJ8UcQAvE5KDTQYb4Rox44TsEfgwr0vgwuIUddOqJuqQjLioH+t2fUYehg5V6VzEXFzLXQ9wbG5xmlfX7gz2DCC+qcaa9zzcuQ21+DpXSljx0cpact1rz1F9UV7iJ9e6jj+iZcP/BhqAfluWARoRsgwDlzWfLAsRv62rUQjmVY4rYNmRZ1FaB6NFlcJ71vhZ1J8avhD2gfMz+YxvekSvW8S51k/GA53b0vMYo2YmCUgirH2G1523It87L1w9wcfQdjKN2Q707A/+j59wbU+3fwHupvb8HHynf8e6ToDvujjYURO1S3lwxX3N6n7Y4yM3S6g5+KB5M+k9MZvtdvc9WuZ5yF9C0l/4D/DDed3XWdPAV3KGqXo/VPxfSRF5b8p5H8D74rfcqxrp73y/GEr+BTmnMtqsxoY7nJsCbHNDGNd/+1Mxxefv70RPxiSB//73OJzZevuvVeWVTKEdlEVzd7JsPNpPt3xkcJllnUH99L7+NHe+2dRuLG6vSINGbqIv/NHXjC9+/N+KbXN8YHuFWM5dLDyAVVPxRGPYfVjy/OraNIMo7M2CSh/aefnohP2gTHzvjkRU/GeKuR3ARigwm8tAU1udHoiWQKwXozCaKmVZSItULol+B9Eq38OEnSJsHn2YBnHTFSjPXawbGm6ztWE5KQcSyhsbqkvU7CMf+HvsRVux7w/g+egt9F05Vf27cadadBGEpSCREE+odYu833f0uT1uqmbrqr1X5+Zh2QknC39dxAeujFdLAAEJQGVkKkx+jJMEQCRrLWgBENifcFIBEof4js0X8AMicbvSVDLpMLLAAyLqwoLC4HPhmyWRBmbDlFH09ZOf3og2HiAOCYCbJbeCG0gaO4x+BjFZ2qRsDsleQHqaUAhXXkkGXcYToK+r4ZfIe14O+dgu+uL+/JMF5g1h88nTENw5gWYjU6C+wglMBK6PlcKpDZGYBvM7B1zEqXVrLsiLNdaIWAkXIm4xmCKadCZoEK1QjsauDI5ByrIUdS7jRzZvEXuCl/SuhOjL5WGT6C1b7I2RSfZQRFPVDMJ0G1DBtthU4j4HGmYPwmAcMDJ1347MAAeqz15zVgJUtWjsJuqYmJ2L5993pHeffWkhXxtNQb6Ugidj3WjyIdTFKS187FUEtVnLyWc+S/+KtZZDXYPFYWM3NVY9W00L5Fo5jgVy4M7nhRN9k3D/7lT4q/DnRYRVsGNslukarH2vitkn/HfZw7HQtJeduL+F3jozFpN9Ma7hCz9smC8ZkseNgioL62hLJNE6jomW642vWKZ2wvS3uErlWTptv4/iY1w3C0S/gCOcwU/PCW4G5cCP7BKRhTms7Lzjrd1ZywT+PQpUb0YUxjSv10Pg99q3RdWsx6kxo4K8hSi0Ihj0kIk9S3qUdj5vYM8z8BQDSHmIKv4t93OnCnf7ZfH+uJLDh9yoLTPKSuHZe9yapP85Sa9mwu/TgNuhf/3HVqdm66FYAwG5jaDue+6c+p7ZOcu3QzjOaggj/x3q7BYdb0Bh8h+zetAf/mjehhPMPC/urG5hEupse0RMBpAEGaoC+laZYA13VJ4iDO4zB3w2VYI+CcuqZPAtVOIqA6jRPM8OIv8ZM094Mff63u8FfPoefhCufuscMcfPPxb9aCR0yDX5QFbzVMaalg7brZo6zNtdw8cNzWiFepNDxYAx5jitwGeKQfLAu+c303HB4oD8a7vwC+kBGF792yUSB+zx6q21Pq1V+FJ/hceAHvC48795dboD26rtenD5KDPcMFG8BhrQ1cb7/HSytlM67hDwft6sZ1czSklsE4Y9zVpWAD/GHPO4Xv3gJvsTkS1HqDA1e1IG0SmmhhNQRf1Ouu6Pfw36I1Wi3DquRF8TlzrIzFw3h/tbATF4yPI+yB8mB8ciLA1G9ZsG5Gxb4fp2UNuPIBUzLziPMgNkMasIeFMm56CFxPVE7eMznCTJA9+Ljj02ZKlURH4C1XZkvsTtKw7CpALT4HZ0RsFPCECBQtEHM+Be8ocKVQiCKAZS+exJF9JF/EgDOVEsgxg8GgHkX5GMEcWkYucIIaoHokh5FN9SVA2/3JKRgfrk+lOFoe/NQIbbqYBNLoZ32+d96yYAWgDpMwTW0vJXQpmR6adbcCcPSk8cOaUDiLOUXR9gXgySqpG4AZyodSCkkzn0D5XisvgyZS2T4Kc3CZrNLKbAKhVVq5WCPO+URUQdzZGC4u11pssFWg66v1KL7B2IV1NuyXel1eACOyajiC+ePyOAvW4nh58I8hDUN/hlEj4Dy3XQ+CRuyWCNjMCWbTnVt9Mrw3Eh1TJ1o/4jIxe6yFjPeWpc7RG4ZSYecIaMEp25Y9oKPCLqviAMBnI3VQLBaHwfsI5B1RdFAzSW0560kgLh7AajyrRFmGioU4Z8fskE1QDxnVU1W7gNYDgwsxO8PkQhVb0TQC/kk2+HrYh2vBI+TBeNV4lguGqVsq+Gqf9FZ+tu3eK80qb+edXYSImOybd3vKK7KfhLS1Cam2HLSxv2w3g632q6Wrt86bVSW/kMJXHtZZ7zf2+eax2JL+bBqMz/wVfAZRu/DBd/OR5icE5f1TZrjKp8Z24v2+gt+R5jv1fbumueMvX+rWufli21x3LGb/5QXyEaP6CazdatsaAAAAAElFTkSuQmCC"},8968:function(e,t){t.Z="data:image/png;base64,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"}}]);