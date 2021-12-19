"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[55144],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76828:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return h}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],i={title:"Blog Archive for Docusaurus",authors:"johnnyreilly",tags:["Docusaurus","blog archive","webpack"],image:"./docusaurus-blog-archive.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2021/05/01/blog-archive-for-docusaurus",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-05-01-blog-archive-for-docusaurus/index.md",source:"@site/blog/2021-05-01-blog-archive-for-docusaurus/index.md",title:"Blog Archive for Docusaurus",description:'Docusaurus doesn\'t ship with "blog archive" functionality. By which I mean, something that allows you to look at an overview of your historic blog posts. It turns out it is fairly straightforward to implement your own. This post does just that.',date:"2021-05-01T00:00:00.000Z",formattedDate:"May 1, 2021",tags:[{label:"Docusaurus",permalink:"/tags/docusaurus"},{label:"blog archive",permalink:"/tags/blog-archive"},{label:"webpack",permalink:"/tags/webpack"}],readingTime:5.37,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Create a Pipeline with the Azure DevOps API",permalink:"/2021/05/08/create-pipeline-with-azure-devops-api"},nextItem:{title:"The Service Now API and TypeScript Conditional Types",permalink:"/2021/04/24/service-now-api-and-typescript-conditional-types"}},c={image:n(54742).Z,authorsImageUrls:[void 0]},u=[{value:"Update 2021-09-01",id:"update-2021-09-01",children:[],level:2},{value:"Blogger&#39;s blog archive",id:"bloggers-blog-archive",children:[],level:2},{value:"Handrolling a Docusaurus blog archive",id:"handrolling-a-docusaurus-blog-archive",children:[],level:2},{value:"Obtaining the blog data",id:"obtaining-the-blog-data",children:[],level:2},{value:"Presenting it",id:"presenting-it",children:[],level:2},{value:"Bringing it all together",id:"bringing-it-all-together",children:[],level:2}],d={toc:u};function h(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Docusaurus doesn\'t ship with "blog archive" functionality. By which I mean, something that allows you to look at an overview of your historic blog posts. It turns out it is fairly straightforward to implement your own. This post does just that.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus blog archive",src:n(54742).Z})),(0,r.kt)("h2",{id:"update-2021-09-01"},"Update 2021-09-01"),(0,r.kt)("p",null,"As of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/releases/tag/v2.0.0-beta.6"},"v2.0.0-beta.6"),", Docusauras ",(0,r.kt)("em",{parentName:"p"},"does")," ship with blog archive functionality that lives at the ",(0,r.kt)("inlineCode",{parentName:"p"},"archive")," route. This is down to the work of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gabrielcsapo"},"Gabriel Csapo")," in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/pull/5428"},"this PR"),"."),(0,r.kt)("p",null,"If you'd like to know how to build your own, read on... But you may not need to!"),(0,r.kt)("h2",{id:"bloggers-blog-archive"},"Blogger's blog archive"),(0,r.kt)("p",null,"I recently went through the exercise of ",(0,r.kt)("a",{parentName:"p",href:"/2021/03/15/from-blogger-to-docusaurus"},"migrating my blog from Blogger to Docusaurus"),". I found that ",(0,r.kt)("a",{parentName:"p",href:"https://docusaurus.io/"},"Docusaurus")," was a tremendous platform upon which to build a blog, but it was missing a feature from Blogger that I valued highly; the blog archive:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Blogger blog archive",src:n(66198).Z})),(0,r.kt)("p",null,"The blog archive is a way by which you can browse through your historic blog posts. A place where you can see all that you've written and when. I find this very helpful. I didn't really want to make the jump without having something like that around."),(0,r.kt)("h2",{id:"handrolling-a-docusaurus-blog-archive"},"Handrolling a Docusaurus blog archive"),(0,r.kt)("p",null,"Let's create our own blog archive in the land of the Docusaurus."),(0,r.kt)("p",null,"We'll create a new page under the ",(0,r.kt)("inlineCode",{parentName:"p"},"pages")," directory called ",(0,r.kt)("inlineCode",{parentName:"p"},"blog-archive.js")," and we'll add a link to it in our ",(0,r.kt)("inlineCode",{parentName:"p"},"docusaurus.config.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    navbar: {\n      // ...\n      items: [\n        // ...\n        { to: "blog-archive", label: "Blog Archive", position: "left" },\n        // ...\n      ],\n    },\n')),(0,r.kt)("h2",{id:"obtaining-the-blog-data"},"Obtaining the blog data"),(0,r.kt)("p",null,"This page will be powered by webpack's ",(0,r.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/dependency-management/#requirecontext"},(0,r.kt)("inlineCode",{parentName:"a"},"require.context"))," function. ",(0,r.kt)("inlineCode",{parentName:"p"},"require.context")," allows us to use webpack to obtain all of the blog modules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"require.context('../../blog', false, //index.md/);\n")),(0,r.kt)("p",null,"The code snippet above looks in the ",(0,r.kt)("inlineCode",{parentName:"p"},"blog")," directory for files / modules ending with the suffix ",(0,r.kt)("inlineCode",{parentName:"p"},'"/index.md"'),". Each one of these represents a blog post. The function returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," object, which contains all of the data about these modules."),(0,r.kt)("p",null,"By reducing over that data we can construct an array of objects called ",(0,r.kt)("inlineCode",{parentName:"p"},"allPosts")," that could drive a blog archive screen. Let's do this below, and we'll use ",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html"},"TypeScripts JSDoc support")," to type our JavaScript:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/**\n * @typedef {Object} BlogPost - creates a new type named \'BlogPost\'\n * @property {string} date - eg "2021-04-24T00:00:00.000Z"\n * @property {string} formattedDate - eg "April 24, 2021"\n * @property {string} title - eg "The Service Now API and TypeScript Conditional Types"\n * @property {string} permalink - eg "/2021/04/24/service-now-api-and-typescript-conditional-types"\n */\n\n/** @type {BlogPost[]} */\nconst allPosts = ((ctx) => {\n  /** @type {string[]} */\n  const blogpostNames = ctx.keys();\n\n  return blogpostNames.reduce(\n    (blogposts, blogpostName, i) => {\n      const module = ctx(blogpostName);\n      const { date, formattedDate, title, permalink } = module.metadata;\n      return [\n        ...blogposts,\n        {\n          date,\n          formattedDate,\n          title,\n          permalink,\n        },\n      ];\n    },\n    /** @type {string[]}>} */ []\n  );\n})(require.context(\'../../blog\', false, //index.md/));\n')),(0,r.kt)("p",null,"Observe the ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," property in the screenshot below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"require.context",src:n(90213).Z})),(0,r.kt)("p",null,"This gives us a flavour of the data available in the modules and shows how we pull out the bits that we need; ",(0,r.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"formattedDate"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"permalink"),"."),(0,r.kt)("h2",{id:"presenting-it"},"Presenting it"),(0,r.kt)("p",null,"Now we have our data in the form of ",(0,r.kt)("inlineCode",{parentName:"p"},"allPosts"),", let's display it. We'd like to break it up into posts by year, which we can do by reducing and looking at the ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," property which is an ISO-8601 style date string taking a format that begins ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const postsByYear = allPosts.reduceRight((posts, post) => {\n  const year = post.date.split('-')[0];\n  const yearPosts = posts.get(year) || [];\n  return posts.set(year, [post, ...yearPosts]);\n}, /** @type {Map<string, BlogPost[]>}>} */ new Map());\n\nconst yearsOfPosts = Array.from(postsByYear, ([year, posts]) => ({\n  year,\n  posts,\n}));\n")),(0,r.kt)("p",null,"Now we're ready to blast it onto the screen. We'll create two components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Year")," - which is a list of the posts for a given year and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BlogArchive")," - which is the overall page and maps over ",(0,r.kt)("inlineCode",{parentName:"li"},"yearsOfPosts")," to render ",(0,r.kt)("inlineCode",{parentName:"li"},"Year"),"s")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'function Year(\n  /** @type {{ year: string; posts: BlogPost[]}} */ { year, posts }\n) {\n  return (\n    <div className={clsx(\'col col--4\', styles.feature)}>\n      <h3>{year}</h3>\n      <ul>\n        {posts.map((post) => (\n          <li key={post.date}>\n            <Link to={post.permalink}>\n              {post.formattedDate} - {post.title}\n            </Link>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nfunction BlogArchive() {\n  return (\n    <Layout title="Blog Archive">\n      <header className={clsx(\'hero hero--primary\', styles.heroBanner)}>\n        <div className="container">\n          <h1 className="hero__title">Blog Archive</h1>\n          <p className="hero__subtitle">Historic posts</p>\n        </div>\n      </header>\n      <main>\n        {yearsOfPosts && yearsOfPosts.length > 0 && (\n          <section className={styles.features}>\n            <div className="container">\n              <div className="row">\n                {yearsOfPosts.map((props, idx) => (\n                  <Year key={idx} {...props} />\n                ))}\n              </div>\n            </div>\n          </section>\n        )}\n      </main>\n    </Layout>\n  );\n}\n')),(0,r.kt)("h2",{id:"bringing-it-all-together"},"Bringing it all together"),(0,r.kt)("p",null,"We're finished! We have a delightful looking blog archive plumbed into our blog:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Docusaurus blog archive",src:n(54742).Z})),(0,r.kt)("p",null,"It is possible that a blog archive may become natively available in Docusaurus in future. If you're interested in this, you can track ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/facebook/docusaurus/issues/4431"},"this issue"),"."),(0,r.kt)("p",null,"Here's the final code - which you can see ",(0,r.kt)("a",{parentName:"p",href:"https://blog.johnnyreilly.com/blog-archive"},"powering this screen"),". And you can see the code that backs it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/johnnyreilly/blog.johnnyreilly.com/blob/main/blog-website/src/pages/blog-archive.js"},"here"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport clsx from 'clsx';\nimport Layout from '@theme/Layout';\nimport Link from '@docusaurus/Link';\nimport styles from './styles.module.css';\n\n/**\n * @typedef {Object} BlogPost - creates a new type named 'BlogPost'\n * @property {string} date - eg \"2021-04-24T00:00:00.000Z\"\n * @property {string} formattedDate - eg \"April 24, 2021\"\n * @property {string} title - eg \"The Service Now API and TypeScript Conditional Types\"\n * @property {string} permalink - eg \"/2021/04/24/service-now-api-and-typescript-conditional-types\"\n */\n\n/** @type {BlogPost[]} */\nconst allPosts = ((ctx) => {\n  /** @type {string[]} */\n  const blogpostNames = ctx.keys();\n\n  return blogpostNames.reduce(\n    (blogposts, blogpostName, i) => {\n      const module = ctx(blogpostName);\n      const { date, formattedDate, title, permalink } = module.metadata;\n      return [\n        ...blogposts,\n        {\n          date,\n          formattedDate,\n          title,\n          permalink,\n        },\n      ];\n    },\n    /** @type {string[]}>} */ []\n  );\n})(require.context('../../blog', false, //index.md/));\n\nconst postsByYear = allPosts.reduceRight((posts, post) => {\n  const year = post.date.split('-')[0];\n  const yearPosts = posts.get(year) || [];\n  return posts.set(year, [post, ...yearPosts]);\n}, /** @type {Map<string, BlogPost[]>}>} */ new Map());\n\nconst yearsOfPosts = Array.from(postsByYear, ([year, posts]) => ({\n  year,\n  posts,\n}));\n\nfunction Year(\n  /** @type {{ year: string; posts: BlogPost[]}} */ { year, posts }\n) {\n  return (\n    <div className={clsx('col col--4', styles.feature)}>\n      <h3>{year}</h3>\n      <ul>\n        {posts.map((post) => (\n          <li key={post.date}>\n            <Link to={post.permalink}>\n              {post.formattedDate} - {post.title}\n            </Link>\n          </li>\n        ))}\n      </ul>\n    </div>\n  );\n}\n\nfunction BlogArchive() {\n  return (\n    <Layout title=\"Blog Archive\">\n      <header className={clsx('hero hero--primary', styles.heroBanner)}>\n        <div className=\"container\">\n          <h1 className=\"hero__title\">Blog Archive</h1>\n          <p className=\"hero__subtitle\">Historic posts</p>\n        </div>\n      </header>\n      <main>\n        {yearsOfPosts && yearsOfPosts.length > 0 && (\n          <section className={styles.features}>\n            <div className=\"container\">\n              <div className=\"row\">\n                {yearsOfPosts.map((props, idx) => (\n                  <Year key={idx} {...props} />\n                ))}\n              </div>\n            </div>\n          </section>\n        )}\n      </main>\n    </Layout>\n  );\n}\n\nexport default BlogArchive;\n")))}h.isMDXComponent=!0},66198:function(e,t,n){t.Z=n.p+"assets/images/blogger-blog-archive-small-88f92dd3143b630a3fca60a6c27079ab.png"},54742:function(e,t,n){t.Z=n.p+"assets/images/docusaurus-blog-archive-ffd8e634aa9debe0fd6a492c7c9b5bae.png"},90213:function(e,t,n){t.Z=n.p+"assets/images/require.context-353322993776d9b19c36467370636437.png"}}]);