"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[53085],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"TypeScript 2.0, ES2016 and Babel",authors:"johnnyreilly",tags:["TypeScript","Babel","ES2016"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2016/09/22/typescript-20-es2016-and-babel",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2016-09-22-typescript-20-es2016-and-babel/index.md",source:"@site/blog/2016-09-22-typescript-20-es2016-and-babel/index.md",title:"TypeScript 2.0, ES2016 and Babel",description:"TypeScript 2.0 has shipped! Naturally I'm excited. For some time I've been using TypeScript to emit ES2015 code which I pass onto Babel to transpile to ES \"old school\". You can see how here.",date:"2016-09-22T00:00:00.000Z",formattedDate:"September 22, 2016",tags:[{label:"TypeScript",permalink:"/tags/type-script"},{label:"Babel",permalink:"/tags/babel"},{label:"ES2016",permalink:"/tags/es-2016"}],readingTime:2.325,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"TypeScript 2.0, ES2016 and Babel",authors:"johnnyreilly",tags:["TypeScript","Babel","ES2016"],hide_table_of_contents:!1},prevItem:{title:"React Component Curry",permalink:"/2016/10/05/react-component-curry"},nextItem:{title:"Integration Tests with SQL Server Database Snapshots",permalink:"/2016/09/12/integration-tests-with-sql-server"}},c={authorsImageUrls:[void 0]},m=[{value:"<code>tsconfig.json</code> changes",id:"tsconfigjson-changes",children:[],level:2},{value:"Babel changes",id:"babel-changes",children:[],level:2},{value:"Webpack changes",id:"webpack-changes",children:[],level:2},{value:"Wake Up and Smell the Jasmine",id:"wake-up-and-smell-the-jasmine",children:[],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://blogs.msdn.microsoft.com/typescript/2016/09/22/announcing-typescript-2-0/"},"TypeScript 2.0 has shipped!")," Naturally I'm excited. For some time I've been using TypeScript to emit ES2015 code which I pass onto Babel to transpile to ES \"old school\". You can see how ",(0,a.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/2015/12/es6-typescript-babel-react-flux-karma.html"},"here"),"."),(0,a.kt)("p",null,"Merely upgrading my ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to use ",(0,a.kt)("inlineCode",{parentName:"p"},'"typescript": "^2.0.3"')," from ",(0,a.kt)("inlineCode",{parentName:"p"},'"typescript": "^1.8.10"')," was painless. TypeScript now supports ES2016 (the previous major release 1.8 supported ES2015). I wanted to move on from writing ES2015 to writing ES2016 using my chosen build process. Fortunately, it's supported. Phew. However, due to some advances in ecmascript feature modularisation within the TypeScript compiler the upgrade path is slightly different. I figured that I'd just be able to update the ",(0,a.kt)("inlineCode",{parentName:"p"},'<a href="https://www.typescriptlang.org/docs/handbook/compiler-options.html">target</a>')," in my ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," to ",(0,a.kt)("inlineCode",{parentName:"p"},'"es2016"')," from ",(0,a.kt)("inlineCode",{parentName:"p"},'"es2015"'),", add in the ES2016 preset for Babel and jobs a good 'un. Not so. There were a few more steps to follow. Here's the recipe:"),(0,a.kt)("h2",{id:"tsconfigjson-changes"},(0,a.kt)("inlineCode",{parentName:"h2"},"tsconfig.json")," changes"),(0,a.kt)("p",null,"Well, there's no ",(0,a.kt)("inlineCode",{parentName:"p"},'"es2016"')," target for TypeScript. You carry on with a target of ",(0,a.kt)("inlineCode",{parentName:"p"},'"es2015"'),". What I need is a new entry: ",(0,a.kt)("inlineCode",{parentName:"p"},'"lib": ["dom", "es2015", "es2016"]'),". This tells the compiler that we're expecting to be emitting to an environment which supports a browser (",(0,a.kt)("inlineCode",{parentName:"p"},'"dom"'),'), and both ES2016 and ES2015. Our "environment" is Babel and it\'s going to pick up the baton from this point. My complete ',(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compileOnSave": false,\n  "compilerOptions": {\n    "allowSyntheticDefaultImports": true,\n    "lib": ["dom", "es2015", "es2016"],\n    "jsx": "preserve",\n    "module": "es2015",\n    "moduleResolution": "node",\n    "noEmitOnError": false,\n    "noImplicitAny": true,\n    "preserveConstEnums": true,\n    "removeComments": false,\n    "suppressImplicitAnyIndexErrors": true,\n    "target": "es2015"\n  }\n}\n')),(0,a.kt)("h2",{id:"babel-changes"},"Babel changes"),(0,a.kt)("p",null,"I needed the Babel preset for ES2016; with a quick ",(0,a.kt)("inlineCode",{parentName:"p"},'<a href="https://www.npmjs.com/package/babel-preset-es2016">npm install --save-dev babel-preset-es2016</a>')," that was sorted. Now just to kick Webpack into gear..."),(0,a.kt)("h2",{id:"webpack-changes"},"Webpack changes"),(0,a.kt)("p",null,"My webpack config plugs together TypeScript and Babel with the help of ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-loader"},"ts-loader")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-loader"},"babel-loader"),". It allows the transpilation of my (few) JavaScript files so I can write ES2015. However, mainly it allows the transpilation of my (many) TypeScript files so I can write ES2015-flavoured TypeScript. I'll now tweak the ",(0,a.kt)("inlineCode",{parentName:"p"},"loaders")," so they cater for ES2016 as well."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"var webpack = require('webpack');\n\nmodule.exports = {\n  // ....\n\n  module: {\n    loaders: [\n      {\n        // Now transpiling ES2016 TS\n        test: /\\.ts(x?)$/,\n        exclude: /node_modules/,\n        loader:\n          'babel-loader?presets[]=es2016&presets[]=es2015&presets[]=react!ts-loader',\n      },\n      {\n        // Now transpiling ES2016 JS\n        test: /\\.js$/,\n        exclude: /node_modules/,\n        loader: 'babel',\n        query: {\n          presets: ['es2016', 'es2015', 'react'],\n        },\n      },\n    ],\n  },\n\n  // ....\n};\n")),(0,a.kt)("h2",{id:"wake-up-and-smell-the-jasmine"},"Wake Up and Smell the Jasmine"),(0,a.kt)("p",null,"And we're there; it works. How do I know? Well; here's the proof:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"it('Array.prototype.includes works', () => {\n  const result = [1, 2, 3].includes(2);\n  expect(result).toBe(true);\n});\n\nit('Exponentiation operator works', () => {\n  expect(1 ** 2 === Math.pow(1, 2)).toBe(true);\n});\n")),(0,a.kt)("p",null,"Much love to the TypeScript team for an awesome job; I can't wait to get stuck into some of the exciting new features of TypeScript 2.0. ",(0,a.kt)("inlineCode",{parentName:"p"},"strictNullChecks")," FTW!"))}d.isMDXComponent=!0}}]);