"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[47458],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},40410:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return d}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"React 18 and TypeScript",authors:"johnnyreilly",tags:["React","TypeScript","React 18"],image:"./createNode-error.png",hide_table_of_contents:!1},p=void 0,c={permalink:"/2021/06/30/react-18-and-typescript",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-06-30-react-18-and-typescript/index.md",source:"@site/blog/2021-06-30-react-18-and-typescript/index.md",title:"React 18 and TypeScript",description:'React 18 alpha has been released; but can we use it with TypeScript? The answer is "yes", but you need to do a couple of things to make that happen. This post will show you what to do.',date:"2021-06-30T00:00:00.000Z",formattedDate:"June 30, 2021",tags:[{label:"React",permalink:"/tags/react"},{label:"TypeScript",permalink:"/tags/type-script"},{label:"React 18",permalink:"/tags/react-18"}],readingTime:3.405,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"React 18 and TypeScript",authors:"johnnyreilly",tags:["React","TypeScript","React 18"],image:"./createNode-error.png",hide_table_of_contents:!1},prevItem:{title:"C# 9 in-process Azure Functions",permalink:"/2021/07/01/c-sharp-9-azure-functions-in-process"},nextItem:{title:"Azure Functions and .NET 5: Query params, Dependency Injection, Bicep & Build",permalink:"/2021/06/11/azure-functions-dotnet-5-query-params-di-bicep"}},s={image:n(33443).Z,authorsImageUrls:[void 0]},u=[{value:"Creating a React App with TypeScript",id:"creating-a-react-app-with-typescript",children:[],level:2},{value:"Using the new APIs",id:"using-the-new-apis",children:[],level:2},{value:"Telling TypeScript about the new APIs",id:"telling-typescript-about-the-new-apis",children:[],level:2}],h={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html"},"React 18 alpha has been released"),'; but can we use it with TypeScript? The answer is "yes", but you need to do a couple of things to make that happen. This post will show you what to do.'),(0,o.kt)("h2",{id:"creating-a-react-app-with-typescript"},"Creating a React App with TypeScript"),(0,o.kt)("p",null,"Let's create ourselves a vanilla React TypeScript app with ",(0,o.kt)("a",{parentName:"p",href:"https://create-react-app.dev/"},"Create React App"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn create react-app my-app --template typescript\n")),(0,o.kt)("p",null,"Now let's upgrade the version of React to ",(0,o.kt)("inlineCode",{parentName:"p"},"@next"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react@next react-dom@next\n")),(0,o.kt)("p",null,"Which will leave you with entries in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," which use React 18. It will likely look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "react": "^18.0.0-alpha-e6be2d531",\n    "react-dom": "^18.0.0-alpha-e6be2d531",\n')),(0,o.kt)("p",null,"If we run ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," we'll find ourselves running a React 18 app. Exciting!"),(0,o.kt)("h2",{id:"using-the-new-apis"},"Using the new APIs"),(0,o.kt)("p",null,"So let's try using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reactwg/react-18/discussions/5"},(0,o.kt)("inlineCode",{parentName:"a"},"ReactDOM.createRoot"))," API. It's this API that opts our application into using new features of React 18. We'll open up ",(0,o.kt)("inlineCode",{parentName:"p"},"index.tsx")," and make this change:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-ReactDOM.render(\n-  <React.StrictMode>\n-    <App />\n-  </React.StrictMode>,\n-  document.getElementById('root')\n-);\n+const root = ReactDOM.createRoot(document.getElementById('root'));\n+\n+root.render(\n+  <React.StrictMode>\n+    <App />\n+  </React.StrictMode>\n+);\n")),(0,o.kt)("p",null,"If we were running JavaScript alone, this would work. However, because we're using TypeScript as well, we're now confronted with an error:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Property 'createRoot' does not exist on type 'typeof import(\"/code/my-app/node_modules/@types/react-dom/index\")'. TS2339"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"a screenshot of the Property &#39;createRoot&#39; does not exist error",src:n(33443).Z,width:"2076",height:"584"})),(0,o.kt)("p",null,"This is the TypeScript compiler complaining that it doesn't know anything about ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.createRoot"),". This is because the type definitions that are currently in place in our application don't have that API defined."),(0,o.kt)("p",null,"Let's upgrade our type definitions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @types/react @types/react-dom\n")),(0,o.kt)("p",null,"We might reasonably hope that everything should work now. Alas it does not. The same error is presenting. TypeScript is not happy."),(0,o.kt)("h2",{id:"telling-typescript-about-the-new-apis"},"Telling TypeScript about the new APIs"),(0,o.kt)("p",null,"If we take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/pull/53685"},"PR that added support for the APIs"),", we'll find some tips. If you look at one of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped/blob/a07e9cfb005682fb6be0a2e85113eac131c3006f/types/react/next.d.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"next.d.ts"))," you'll find this info, courtesy of ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/sebsilbermann"},"Sebastian Silbermann"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'/**\n * These are types for things that are present in the upcoming React 18 release.\n *\n * Once React 18 is released they can just be moved to the main index file.\n *\n * To load the types declared here in an actual project, there are three ways. The easiest one,\n * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,\n * is to add `"react/next"` to the `"types"` array.\n *\n * Alternatively, a specific import syntax can to be used from a typescript file.\n * This module does not exist in reality, which is why the {} is important:\n *\n * ```ts\n * import {} from \'react/next\'\n * ```\n *\n * It is also possible to include it through a triple-slash reference:\n *\n * ```ts\n * /// <reference types="react/next" />\n * ```\n *\n * Either the import or the reference only needs to appear once, anywhere in the project.\n */\n')),(0,o.kt)("p",null,"Let's try the first item on the list. We'll edit our ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," and add a new entry to the ",(0,o.kt)("inlineCode",{parentName:"p"},'"compilerOptions"')," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "types": ["react/next", "react-dom/next"]\n')),(0,o.kt)("p",null,"If we restart our build with ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," we're now presented with a ",(0,o.kt)("em",{parentName:"p"},"different")," error:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"Argument of type 'HTMLElement | null' is not assignable to parameter of type 'Element | Document | DocumentFragment | Comment'. Type 'null' is not assignable to type 'Element | Document | DocumentFragment | Comment'. TS2345"))),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"a screenshot of the null is not assignable error",src:n(75259).Z,width:"2076",height:"584"})),(0,o.kt)("p",null,"Now this is actually nothing to do with issues with our new React type definitions. They are fine. This is TypeScript saying \"it's not guaranteed that ",(0,o.kt)("inlineCode",{parentName:"p"},"document.getElementById('root')")," returns something that is not ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"... since we're in ",(0,o.kt)("inlineCode",{parentName:"p"},"strictNullChecks")," mode you need to be sure ",(0,o.kt)("inlineCode",{parentName:"p"},"root"),' is not null".'),(0,o.kt)("p",null,"We'll deal with that by testing we do have an element in play before invoking ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactDOM.createRoot"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"-const root = ReactDOM.createRoot(document.getElementById('root'));\n+const rootElement = document.getElementById('root');\n+if (!rootElement) throw new Error('Failed to find the root element');\n+const root = ReactDOM.createRoot(rootElement);\n")),(0,o.kt)("p",null,"Now that change is made, we have a working React 18 application, using TypeScript. Enjoy!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.logrocket.com/how-to-use-typescript-with-react-18-alpha/"},"This post was originally published on LogRocket.")))}d.isMDXComponent=!0},33443:function(e,t,n){t.Z=n.p+"assets/images/createNode-error-7f5762c8600bd13afa1bfe2a80138d25.png"},75259:function(e,t,n){t.Z=n.p+"assets/images/null_is_not_assignable-error-1e8064ad99559bcc7f545064a7ea264c.png"}}]);