"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[2313],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64016:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={title:"Azure DevOps Client for Node.js - working around limitations",authors:"johnnyreilly",tags:["azure devops api","203","node.js"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,p={permalink:"/2020/10/31/azure-devops-node-api-missing-episodes",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-10-31-azure-devops-node-api-missing-episodes/index.md",source:"@site/blog/2020-10-31-azure-devops-node-api-missing-episodes/index.md",title:"Azure DevOps Client for Node.js - working around limitations",description:"The Azure DevOps Client library for Node.js has limitations and missing features, such as the ability to paginate git refs and create wiki posts. This post details some of these issues and illustrates a workaround using the Azure DevOps REST API.",date:"2020-10-31T00:00:00.000Z",formattedDate:"October 31, 2020",tags:[{label:"azure devops api",permalink:"/tags/azure-devops-api"},{label:"203",permalink:"/tags/203"},{label:"node.js",permalink:"/tags/node-js"}],readingTime:3.67,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Throttling data requests with React Hooks",permalink:"/2020/11/10/throttle-data-requests-with-react-hooks"},nextItem:{title:"Safari: The Mysterious Case of the Empty Download",permalink:"/2020/10/19/safari-empty-download-content-type"}},d={image:n(4225).Z,authorsImageUrls:[void 0]},u=[{value:"The Azure DevOps REST API and Client Libraries",id:"the-azure-devops-rest-api-and-client-libraries",children:[],level:2},{value:"<code>GitApi</code> and <code>WikiApi</code> shortcomings",id:"gitapi-and-wikiapi-shortcomings",children:[],level:2},{value:"Handrolled Wiki API",id:"handrolled-wiki-api",children:[],level:2}],c={toc:u};function h(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Azure DevOps Client library for Node.js has limitations and missing features, such as the ability to paginate git refs and create wiki posts. This post details some of these issues and illustrates a workaround using the Azure DevOps REST API."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A title image that reads &quot;Azure DevOps Client for Node.js - working around limitations&quot;",src:n(4225).Z})),(0,r.kt)("h2",{id:"the-azure-devops-rest-api-and-client-libraries"},"The Azure DevOps REST API and Client Libraries"),(0,r.kt)("p",null,"I've been taking a good look at the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1"},"REST API for Azure DevOps"),". I'm delighted to say that it's a very full API. However, there's quirks."),(0,r.kt)("p",null,"I'm writing a tool that interrogates Azure DevOps in order that it can construct release documentation. That release documentation we would like to publish to the project wiki."),(0,r.kt)("p",null,"To make integration with Azure DevOps even easier, the ADO team have put a good amount of work into ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#client-libraries"},"client libraries"),' that allow you to code in your language of choice. In my case I\'m writing a Node.js tool (using TypeScript) and happily the client lib for Node is written and published with TypeScript too. Tremendous! However, there is a "but" coming....'),(0,r.kt)("h2",{id:"gitapi-and-wikiapi-shortcomings"},(0,r.kt)("inlineCode",{parentName:"h2"},"GitApi")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"WikiApi")," shortcomings"),(0,r.kt)("p",null,"As I've been using the Node client lib, I've found minor quirks. Such as the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api/issues/415"},(0,r.kt)("inlineCode",{parentName:"a"},"GitApi.getRefs")," missing the pagination parts of the API"),"."),(0,r.kt)("p",null,"Whilst the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitApi")," was missing some parameters on a method, the ",(0,r.kt)("inlineCode",{parentName:"p"},"WikiApi")," was ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api/issues/416"},"missing whole endpoints, such as the Pages - Create Or Update")," one. The various ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api/blob/master/CONTRIBUTING/index.md#general-contribution-guide"},"client libraries are auto-generated")," which makes contribution a difficult game. The lovely ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/vtbassmatt"},"Matt Cooper")," has ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/azure-devops-node-api/issues/415#issuecomment-717991914"},"alerted the team")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"These clients are generated from the server-side controllers, and at a glance, I don't understand why those two parameters weren't included. Full transparency, we don't dedicate a lot of cycles here, but I will get it on the team's radar to investigate/improve.")),(0,r.kt)("p",null,"In the meantime, I still had a tool to write."),(0,r.kt)("h2",{id:"handrolled-wiki-api"},"Handrolled Wiki API"),(0,r.kt)("p",null,"Whilst the Node.js client lib was missing some crucial pieces, there did seem to be a way forward. Using the API directly; not using the client lib to do our HTTP and using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," instead. Happily the types we needed were still available for be leveraged."),(0,r.kt)("p",null,"Looking at the docs it seemed it ought to be simple:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#assemble-the-request"},"https://docs.microsoft.com/en-us/rest/api/azure/devops/?view=azure-devops-rest-6.1#assemble-the-request")),(0,r.kt)("p",null,"But when I attempted this I found my requests erroring out with 203 Non-Authoritative Informations. It didn't make sense. I couldn't get a single request to be successful, they all failed. It occurred to me that the answer was hiding in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),". I'd managed to make successful requests to the API using the client lib. What was it doing that I wasn't?"),(0,r.kt)("p",null,"The answer ended up being an authorization one-liner:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const request = await axios({\n        url,\n        headers: {\n            Accept: 'application/json',\n            'Content-Type': 'application/json',\n            // This!\n            Authorization: `Basic ${Buffer.from(`PAT:${adoPersonalAccessToken}`).toString('base64')}`,\n            'X-TFS-FedAuthRedirect': 'Suppress',\n        },\n    });\n}\n")),(0,r.kt)("p",null,"With this in hand everything started to work and I found myself able to write my own clients to fill in the missing pieces from the client lib:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import axios from 'axios';\nimport {\n  WikiPage,\n  WikiPageCreateOrUpdateParameters,\n  WikiType,\n} from 'azure-devops-node-api/interfaces/WikiInterfaces';\nimport { IWikiApi } from 'azure-devops-node-api/WikiApi';\n\nasync function getWikiPage({\n  adoUrl,\n  adoProject,\n  adoPat,\n  wikiId,\n  path,\n}: {\n  adoUrl: string;\n  adoProject: string;\n  adoPat: string;\n  wikiId: string;\n  path: string;\n}) {\n  try {\n    const url = `${makeBaseApiUrl({\n      adoUrl,\n      adoProject,\n    })}/wiki/wikis/${wikiId}/pages?${apiVersion}&path=${path}&includeContent=True&recursionLevel=full`;\n    const request = await axios({\n      url,\n      headers: makeHeaders(adoPat),\n    });\n\n    const page: WikiPage = request.data;\n    return page;\n  } catch (error) {\n    return undefined;\n  }\n}\n\nasync function createWikiPage({\n  adoUrl,\n  adoProject,\n  adoPat,\n  wikiId,\n  path,\n  data,\n}: {\n  adoUrl: string;\n  adoProject: string;\n  adoPat: string;\n  wikiId: string;\n  path: string;\n  data: WikiPageCreateOrUpdateParameters;\n}) {\n  try {\n    const url = `${makeBaseApiUrl({\n      adoUrl,\n      adoProject,\n    })}/wiki/wikis/${wikiId}/pages?${apiVersion}&path=${path}`;\n\n    const request = await axios({\n      method: 'PUT',\n      url,\n      headers: makeHeaders(adoPat),\n      data,\n    });\n\n    const newPage: WikiPage = request.data;\n    return newPage;\n  } catch (error) {\n    return undefined;\n  }\n}\n\nconst apiVersion = 'api-version=6.0';\n\n/**\n * Create the headers necessary to ake Azure DevOps happy\n * @param adoPat Personal Access Token from ADO\n */\nfunction makeHeaders(adoPat: string) {\n  return {\n    Accept: 'application/json',\n    'Content-Type': 'application/json',\n    Authorization: `Basic ${Buffer.from(`PAT:${adoPat}`).toString('base64')}`,\n    'X-TFS-FedAuthRedirect': 'Suppress',\n  };\n}\n\n/**\n * eg https://dev.azure.com/{organization}/{project}/_apis\n */\nfunction makeBaseApiUrl({\n  adoUrl,\n  adoProject,\n}: {\n  adoUrl: string;\n  adoProject: string;\n}) {\n  return `${adoUrl}/${adoProject}/_apis`;\n}\n")),(0,r.kt)("p",null,"With this I was able to write code like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let topLevelPage = await getWikiPage({\n  adoUrl,\n  adoProject,\n  adoPat,\n  wikiId,\n  path: config.wikiTopLevelName,\n});\n\nif (!topLevelPage)\n  topLevelPage = await createWikiPage({\n    adoUrl,\n    adoProject,\n    adoPat,\n    wikiId,\n    path: config.wikiTopLevelName,\n    data: { content: '' },\n  });\n")),(0,r.kt)("p",null,"and the wikis were ours!"))}h.isMDXComponent=!0},4225:function(e,t,n){t.Z=n.p+"assets/images/title-image-e84e21ad681ea22b692433e7b8cb2e5e.png"}}]);