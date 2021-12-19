"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[74375],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return h}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(t),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||a;return t?i.createElement(d,o(o({ref:n},u),{},{components:t})):i.createElement(d,o({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},65738:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return u},toc:function(){return c},default:function(){return h}});var i=t(87462),r=t(63366),a=(t(67294),t(3905)),o=["components"],l={title:"Create a Pipeline with the Azure DevOps API",authors:"johnnyreilly",tags:["Azure Pipelines","Azure DevOps API"],image:"./new-pipeline.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/2021/05/08/create-pipeline-with-azure-devops-api",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-05-08-create-pipeline-with-azure-devops-api/index.md",source:"@site/blog/2021-05-08-create-pipeline-with-azure-devops-api/index.md",title:"Create a Pipeline with the Azure DevOps API",description:"Creating an Azure Pipeline using the Azure DevOps REST API is possible, but badly documented. This post goes through how to do this.",date:"2021-05-08T00:00:00.000Z",formattedDate:"May 8, 2021",tags:[{label:"Azure Pipelines",permalink:"/tags/azure-pipelines"},{label:"Azure DevOps API",permalink:"/tags/azure-dev-ops-api"}],readingTime:1.745,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Azurite and Table Storage in a dev container",permalink:"/2021/05/15/azurite-and-table-storage-dev-container"},nextItem:{title:"Blog Archive for Docusaurus",permalink:"/2021/05/01/blog-archive-for-docusaurus"}},u={image:t(13951).Z,authorsImageUrls:[void 0]},c=[{value:"curling a pipeline",id:"curling-a-pipeline",children:[],level:2}],m={toc:c};function h(e){var n=e.components,l=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Creating an Azure Pipeline using the Azure DevOps REST API is possible, but badly documented. This post goes through how to do this."),(0,a.kt)("h2",{id:"curling-a-pipeline"},"curling a pipeline"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/rest/api/azure/devops/pipelines/pipelines/create?view=azure-devops-rest-6.1"},"documentation")," for creating an Azure Pipeline using the Azure DevOps API is somewhat lacking. However it isn't actually too hard, you just need the recipe."),(0,a.kt)("p",null,"Here's a curl to make you a pipeline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl  --user '':'PERSONAL_ACCESS_TOKEN' --header \"Content-Type: application/json\" --header \"Accept:application/json\" https://dev.azure.com/organisation-name/sandbox/_apis/pipelines?api-version=6.1-preview.1 -d @makepipeline.json\n")),(0,a.kt)("p",null,"Looking at the above there's two things you need:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A personal access token. You can make one of those here: ",(0,a.kt)("a",{parentName:"li",href:"https://dev.azure.com/organisation-name/_usersSettings/tokens"},"https://dev.azure.com/organisation-name/_usersSettings/tokens")," (where ",(0,a.kt)("inlineCode",{parentName:"li"},"organisation-name")," is the name of your organisation)"),(0,a.kt)("li",{parentName:"ol"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"makepipeline.json")," file, which contains the details of the pipeline you want to create:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "folder": null,\n  "name": "pipeline-made-by-api",\n  "configuration": {\n    "type": "yaml",\n    "path": "/azure-pipelines.yml",\n    "repository": {\n      "id": "guid-of-repo-id",\n      "name": "my-repo",\n      "type": "azureReposGit"\n    }\n  }\n}\n')),(0,a.kt)("p",null,"Let's talk through the significant properties above:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"folder")," - can be ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," if you'd like the pipeline to be created in the root of Pipelines; otherwise provide the folder name. Incidentally a ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," will be translated into a value of ",(0,a.kt)("inlineCode",{parentName:"li"},"\\\\")," which appears to be the magic value which represents the root."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," - your pipeline needs a name"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path")," - this is the path to the yaml pipelines file in the repo. Note we're creating the pipeline itself here; what's actually in the pipeline sits in that file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repository.id")," - this is the guid that represents the repo you're creating the pipeline for. You can find this out by going to your equivalent ",(0,a.kt)("a",{parentName:"li",href:"https://dev.azure.com/organisation-name/project-name/_settings/repositories"},"https://dev.azure.com/organisation-name/project-name/_settings/repositories")," (substituting in appropriate values) and looking up your repository there."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repository.name")," - the name of your repo")),(0,a.kt)("p",null,"When you execute your curl you should be returned some JSON along these lines:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "_links": {\n    "self": {\n      "href": "https://dev.azure.com/organisation-name/2184049d-8bc4-484a-91e6-00fca6b5b19f/_apis/pipelines/975?revision=1"\n    },\n    "web": {\n      "href": "https://dev.azure.com/organisation-name/2184049d-8bc4-484a-91e6-00fca6b5b19f/_build/definition?definitionId=975"\n    }\n  },\n  "configuration": {\n    "path": "/azure-pipelines.yml",\n    "repository": {\n      "id": "9a72560d-1622-4016-93dd-32ac85b96d03",\n      "type": "azureReposGit"\n    },\n    "type": "yaml"\n  },\n  "url": "https://dev.azure.com/organisation-name/2184049d-8bc4-484a-91e6-00fca6b5b19f/_apis/pipelines/975?revision=1",\n  "id": 975,\n  "revision": 1,\n  "name": "pipeline-made-by-api",\n  "folder": "\\\\"\n}\n')),(0,a.kt)("p",null,"And inside Azure DevOps you'll now have a shiny new pipeline:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The new pipeline",src:t(13951).Z})))}h.isMDXComponent=!0},13951:function(e,n,t){n.Z=t.p+"assets/images/new-pipeline-5ffa84d339569b71990ea4cbf7519080.png"}}]);