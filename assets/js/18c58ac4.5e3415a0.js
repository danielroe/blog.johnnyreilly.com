"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[51187],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,d=c["".concat(l,".").concat(h)]||c[h]||y[h]||s;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4573:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={title:"react-query: strongly typing useQueries",authors:"johnnyreilly",image:"./strongly-typing-usequeries.webp",tags:["useQueries","react-query"],hide_table_of_contents:!1},o=void 0,l={permalink:"/2021/01/03/strongly-typing-react-query-s-usequeries",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-01-03-strongly-typing-react-query-s-usequeries/index.md",source:"@site/blog/2021-01-03-strongly-typing-react-query-s-usequeries/index.md",title:"react-query: strongly typing useQueries",description:"react-query has a weakly typed hook named useQueries. It's possible to turn that into a strong typed hook; this post shows you how.",date:"2021-01-03T00:00:00.000Z",formattedDate:"January 3, 2021",tags:[{label:"useQueries",permalink:"/tags/use-queries"},{label:"react-query",permalink:"/tags/react-query"}],readingTime:7.835,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"react-query: strongly typing useQueries",authors:"johnnyreilly",image:"./strongly-typing-usequeries.webp",tags:["useQueries","react-query"],hide_table_of_contents:!1},prevItem:{title:"Azure Easy Auth and Roles with .NET (and .NET Core)",permalink:"/2021/01/14/azure-easy-auth-and-roles-with-dotnet-and-core"},nextItem:{title:"Create React App with ts-loader and CRACO",permalink:"/2021/01/02/create-react-app-with-ts-loader-and-craco"}},u={image:n(50489).Z,authorsImageUrls:[void 0]},p=[{value:"Update April 2022",id:"update-april-2022",level:2},{value:"What is <code>useQueries</code>?",id:"what-is-usequeries",level:2},{value:"<code>useQueriesTyped</code> - a strongly typed wrapper for <code>useQueries</code>",id:"usequeriestyped---a-strongly-typed-wrapper-for-usequeries",level:2},{value:"Usage",id:"usage",level:2},{value:"In the box?",id:"in-the-box",level:2}],y={toc:p};function c(e){var{components:t}=e,i=s(e,["components"]);return(0,r.kt)("wrapper",a({},y,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-query")," has a weakly typed hook named ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueries"),". It's possible to turn that into a strong typed hook; this post shows you how."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"title image that says &quot;react-query: strongly typings useQueries&quot;",src:n(50489).Z,width:"800",height:"237"})),(0,r.kt)("h2",a({},{id:"update-april-2022"}),"Update April 2022"),(0,r.kt)("p",null,"You don't need this blog post! Just use a ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query@3.28.0")," or greater; ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/artysidorenko"}),"artysidorenko")," ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/tannerlinsley/react-query/pull/2634"}),"contributed a PR that moved this behaviour into the package"),"."),(0,r.kt)("h2",a({},{id:"what-is-usequeries"}),"What is ",(0,r.kt)("inlineCode",{parentName:"h2"},"useQueries"),"?"),(0,r.kt)("p",null,"If you haven't used ",(0,r.kt)("a",a({parentName:"p"},{href:"https://react-query.tanstack.com/"}),(0,r.kt)("inlineCode",{parentName:"a"},"react-query"))," then I heartily recommend it. It provides (to quote the docs):"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hooks for fetching, caching and updating asynchronous data in React")),(0,r.kt)("p",null,"With version 3 of ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query"),", a new hook was added: ",(0,r.kt)("a",a({parentName:"p"},{href:"https://react-query.tanstack.com/reference/useQueries"}),(0,r.kt)("inlineCode",{parentName:"a"},"useQueries")),". This hook allows you fetch a variable number of queries at the same time. An example of what usage looks like is this (",(0,r.kt)("a",a({parentName:"p"},{href:"https://react-query.tanstack.com/guides/parallel-queries#dynamic-parallel-queries-with-usequeries"}),"borrowed from the excellent docs"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-tsx"}),"function App({ users }) {\n  const userQueries = useQueries(\n    users.map((user) => {\n      return {\n        queryKey: ['user', user.id],\n        queryFn: () => fetchUserById(user.id),\n      };\n    })\n  );\n}\n")),(0,r.kt)("p",null,"Whilst ",(0,r.kt)("inlineCode",{parentName:"p"},"react-query")," is written in TypeScript, the way that ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueries")," is presently written strips the types that are supplied to it. Consider ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/tannerlinsley/react-query/blob/d25ab3ef8260ea1c02b52b7082c3ce4120596b31/src/react/useQueries.ts#L8"}),"the signature of the ",(0,r.kt)("inlineCode",{parentName:"a"},"useQueries")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"export function useQueries(queries: UseQueryOptions[]): UseQueryResult[] {\n")),(0,r.kt)("p",null,"This returns an array of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/tannerlinsley/react-query/blob/d25ab3ef8260ea1c02b52b7082c3ce4120596b31/src/react/types.ts#L42"}),(0,r.kt)("inlineCode",{parentName:"a"},"UseQueryResult")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"export type UseQueryResult<\n  TData = unknown,\n  TError = unknown\n> = UseBaseQueryResult<TData, TError>;\n")),(0,r.kt)("p",null,"As you can see, no type parameters are passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"UseQueryResult")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueries")," signature and so it takes the default types of ",(0,r.kt)("inlineCode",{parentName:"p"},"unknown"),". This forces the consumer to either assert the type that they believe to be there, or to use type narrowing to ensure the type. The former approach exposes a possibility of errors (the user can specify incorrect types) and the latter approach requires our code to perform type narrowing operations which are essentially unnecessary (the type hasn't changed since it was returned; it's simply been discarded)."),(0,r.kt)("p",null,"What if there was a way to strongly type ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueries")," so we neither risked specifying incorrect types, nor wasted precious lines of code and CPU cycles performing type narrowing? There is my friends, read on!"),(0,r.kt)("h2",a({},{id:"usequeriestyped---a-strongly-typed-wrapper-for-usequeries"}),(0,r.kt)("inlineCode",{parentName:"h2"},"useQueriesTyped")," - a strongly typed wrapper for ",(0,r.kt)("inlineCode",{parentName:"h2"},"useQueries")),(0,r.kt)("p",null,"It's possible to wrap the ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueries")," hook with our own ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueriesTyped")," hook which exposes a strongly typed API. It looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"import { useQueries, UseQueryOptions, UseQueryResult } from 'react-query';\n\ntype Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;\n\nexport function useQueriesTyped<TQueries extends readonly UseQueryOptions[]>(\n  queries: [...TQueries]\n): {\n  [ArrayElement in keyof TQueries]: UseQueryResult<\n    TQueries[ArrayElement] extends { select: infer TSelect }\n      ? TSelect extends (data: any) => any\n        ? ReturnType<TSelect>\n        : never\n      : Awaited<\n          ReturnType<\n            NonNullable<\n              Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']\n            >\n          >\n        >\n  >;\n} {\n  // eslint-disable-next-line @typescript-eslint/no-explicit-any\n  return useQueries(\n    queries as UseQueryOptions<unknown, unknown, unknown>[]\n  ) as any;\n}\n")),(0,r.kt)("p",null,"Let's unpack this. The first and most significant thing to note here is that ",(0,r.kt)("inlineCode",{parentName:"p"},"queries")," moves from being ",(0,r.kt)("inlineCode",{parentName:"p"},"UseQueryOptions[]")," to being ",(0,r.kt)("inlineCode",{parentName:"p"},"TQueries extends readonly UseQueryOptions[]")," ","-"," far more fancy! The reason for this change is we want the type parameters to flow through on an element by element basis in the supplied array. ",(0,r.kt)("a",a({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types"}),"TypeScript 4's variadic tuple types")," should allow us to support this. So the new array signature looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"queries: [...TQueries];\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"TQueries")," is"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"TQueries extends readonly UseQueryOptions[]\n")),(0,r.kt)("p",null,"What this means is, that each element of the rest parameters array must have a type of ",(0,r.kt)("inlineCode",{parentName:"p"},"readonly UseQueryOptions"),". Otherwise the compiler will shout at us (and rightly so)."),(0,r.kt)("p",null,"So that's what's coming in.... What's going out? Well the return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueriesTyped")," is the tremendously verbose:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"{\n  [ArrayElement in keyof TQueries]: UseQueryResult<\n    TQueries[ArrayElement] extends { select: infer TSelect }\n      ? TSelect extends (data: any) => any\n        ? ReturnType<TSelect>\n        : never\n      : Awaited<\n          ReturnType<\n            NonNullable<\n              Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']\n            >\n          >\n        >\n  >\n}\n")),(0,r.kt)("p",null,"Let's walk this through. First of all we'll look at this bit:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"{ [ArrayElement in keyof TQueries]: /* the type has been stripped to protect your eyes */ }\n")),(0,r.kt)("p",null,"On the face of it, it looks like we're returning an ",(0,r.kt)("inlineCode",{parentName:"p"},"Object"),", not an ",(0,r.kt)("inlineCode",{parentName:"p"},"Array"),". There's nuance here; ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"}),"JavaScript ",(0,r.kt)("inlineCode",{parentName:"a"},"Array"),"s are ",(0,r.kt)("inlineCode",{parentName:"a"},"Object"),"s"),"."),(0,r.kt)("p",null,"More specifically, by approaching the signature this way, we can acquire the ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayElement")," type which represents each of the keys of the array. Consider this array:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"[1, 'two', new Date()];\n")),(0,r.kt)("p",null,"For the above, ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayElement")," would take the values ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),". And this is going to prove useful in a moment as we're going to index into our ",(0,r.kt)("inlineCode",{parentName:"p"},"TQueries")," object to surface up the return types for each element of our return array from there."),(0,r.kt)("p",null,"Now let's look at the return type for each element. The signature of that looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"UseQueryResult<\n  TQueries[ArrayElement] extends { select: infer TSelect }\n    ? TSelect extends (data: any) => any\n      ? ReturnType<TSelect>\n      : never\n    : Awaited<\n        ReturnType<\n          NonNullable<\n            Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']\n          >\n        >\n      >\n>;\n")),(0,r.kt)("p",null,"Gosh... Well there's a lot going on here. Let's start in the middle and work our way out."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"TQueries[ArrayElement];\n")),(0,r.kt)("p",null,"The above code indexes into our ",(0,r.kt)("inlineCode",{parentName:"p"},"TQueries")," array for each element of our strongly typed indexer ",(0,r.kt)("inlineCode",{parentName:"p"},"ArrayElement"),". So it might resolve the first element of an array to ",(0,r.kt)("inlineCode",{parentName:"p"},"{ queryKey: 'key1', queryFn: () =&gt; 1 }"),", for example. Next:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"Extract < TQueries[ArrayElement], UseQueryOptions > ['queryFn'];\n")),(0,r.kt)("p",null,"We're now taking the type of each element provided, and grabbing the type of the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryFn")," property. It's this type which contains the type of the data that will be passed back, that we want to make use of. So for an examples of ",(0,r.kt)("inlineCode",{parentName:"p"},"[{ queryKey: 'key1', queryFn: () =&gt; 1 }, { queryKey: 'key2', queryFn: () =&gt; 'two' }, { queryKey: 'key3', queryFn: () =&gt; new Date() }]")," we'd have the type: ",(0,r.kt)("inlineCode",{parentName:"p"},"const result: [() =&gt; number, () =&gt; string, () =&gt; Date]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>;\n")),(0,r.kt)("p",null,"The next stage is using ",(0,r.kt)("inlineCode",{parentName:"p"},"NonNullable")," on our ",(0,r.kt)("inlineCode",{parentName:"p"},"queryFn"),", given that on ",(0,r.kt)("inlineCode",{parentName:"p"},"UseQueryOptions")," it's an optional type. In our use case it is not optional / nullable and so we need to enforce that."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"ReturnType<\n  NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>\n>;\n")),(0,r.kt)("p",null,"Now we want to get the return type of our ",(0,r.kt)("inlineCode",{parentName:"p"},"queryFn")," ","-"," as that's the data type we're interested. So we use TypeScript's ",(0,r.kt)("inlineCode",{parentName:"p"},"ReturnType")," for that."),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"ReturnType<\n  NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>\n>;\n")),(0,r.kt)("p",null,"Here we're using ",(0,r.kt)("a",a({parentName:"p"},{href:"https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types"}),"TypeScript 4.1's recursive conditional types")," to unwrap a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," (or not) to the relevant type. This allows us to get the actual type we're interested in, as opposed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise")," of that type. Finally we have the type we need! So we can do this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;\n\nAwaited<\n  ReturnType<\n    NonNullable<Extract<TQueries[ArrayElement], UseQueryOptions>['queryFn']>\n  >\n>;\n")),(0,r.kt)("p",null,"It's at this point where we reach a conditional type in our type definition. Essentially, we have two different typing behaviours in play:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Where we're inferring the return type of the query"),(0,r.kt)("li",{parentName:"ol"},"Where we're inferring the return type of a ",(0,r.kt)("inlineCode",{parentName:"li"},"select"),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"select")," option can be used to transform or select a part of the data returned by the query function. It has the signature: ",(0,r.kt)("inlineCode",{parentName:"li"},"select: (data: TData) => TSelect"))),(0,r.kt)("p",null,"We've been unpacking the first of these so far. Now we encounter the conditional type that chooses between them:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"TQueries[ArrayElement] extends { select: infer TSelect }\n      ? TSelect extends (data: any) => any\n        ? ReturnType<TSelect>\n        : never\n      : Awaited< /*...*/ >\n  >\n")),(0,r.kt)("p",null,"What's happening here is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if a query includes a ",(0,r.kt)("inlineCode",{parentName:"li"},"select")," option, we infer what that is and then subsequently extract the return type of the ",(0,r.kt)("inlineCode",{parentName:"li"},"select"),"."),(0,r.kt)("li",{parentName:"ul"},"otherwise we use the query return type (as we we've previously examined)")),(0,r.kt)("p",null,"Finally, whichever type we end up with, we supply that type as a parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"UseQueryResult"),". And that is what is going to surface up our types to our users."),(0,r.kt)("h2",a({},{id:"usage"}),"Usage"),(0,r.kt)("p",null,"So what does using our ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueriesTyped")," hook look like?"),(0,r.kt)("p",null,"Well, supplying ",(0,r.kt)("inlineCode",{parentName:"p"},"queryFn"),"s with different signatures looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const result = useQueriesTyped(\n  { queryKey: 'key1', queryFn: () => 1 },\n  { queryKey: 'key2', queryFn: () => 'two' }\n);\n// const result: [QueryObserverResult<number, unknown>, QueryObserverResult<string, unknown>]\n\nif (result[0].data) {\n  // number\n}\nif (result[1].data) {\n  // string\n}\n")),(0,r.kt)("p",null,"As you can see, we're being returned a ",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple")," and the exact types are flowing through."),(0,r.kt)("p",null,"Next let's look at a ",(0,r.kt)("inlineCode",{parentName:"p"},".map")," example with identical types in our supplied array:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const resultWithAllTheSameTypes = useQueriesTyped(\n  ...[1, 2].map((x) => ({ queryKey: `${x}`, queryFn: () => x }))\n);\n// const resultWithAllTheSameTypes: QueryObserverResult<number, unknown>[]\n\nif (resultWithAllTheSameTypes[0].data) {\n  // number\n}\n")),(0,r.kt)("p",null,"The return type of ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," is flowing through for each element."),(0,r.kt)("p",null,"Finally let's look at how ",(0,r.kt)("inlineCode",{parentName:"p"},".map")," handles arrays with different types of elements:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-ts"}),"const resultWithDifferentTypes = useQueriesTyped(\n  ...[1, 'two', new Date()].map((x) => ({ queryKey: `${x}`, queryFn: () => x }))\n);\n//const resultWithDifferentTypes: QueryObserverResult<string | number | Date, unknown>[]\n\nif (resultWithDifferentTypes[0].data) {\n  // string | number | Date\n}\n\nif (resultWithDifferentTypes[1].data) {\n  // string | number | Date\n}\n\nif (resultWithDifferentTypes[2].data) {\n  // string | number | Date\n}\n")),(0,r.kt)("p",null,"Admittedly this last example is a somewhat unlikely scenario. But again we can see the types flowing through - though further narrowing would be required here to get to the exact type."),(0,r.kt)("h2",a({},{id:"in-the-box"}),"In the box?"),(0,r.kt)("p",null,"It's great that we can wrap ",(0,r.kt)("inlineCode",{parentName:"p"},"useQueries")," to get a strongly typed experience. It would be tremendous if this functionality was available by default. ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/tannerlinsley/react-query/pull/1527"}),"There's a discussion going on around this"),". It's possible that this wrapper may no longer need to exist, and that would be amazing. In the meantime; enjoy!"))}c.isMDXComponent=!0},50489:function(e,t,n){t.Z=n.p+"assets/images/strongly-typing-usequeries-f119af57c2df5e76f0d8c31836806c62.webp"}}]);