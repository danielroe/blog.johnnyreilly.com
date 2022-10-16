"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[35087],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},75890:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={title:"Hello World Bicep",authors:"johnnyreilly",tags:["Bicep","ARM templates"],image:"./hello-world-bicep.webp",hide_table_of_contents:!1},i=void 0,p={permalink:"/2021/04/10/hello-world-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-04-10-hello-world-bicep/index.md",source:"@site/blog/2021-04-10-hello-world-bicep/index.md",title:"Hello World Bicep",description:'Bicep makes Azure Resource Management a great deal simpler than ARM templates. The selling point here is grokkability. This post takes a look at the "Hello World" example recently added to the Bicep repo to appreciate quite what a difference it makes.',date:"2021-04-10T00:00:00.000Z",formattedDate:"April 10, 2021",tags:[{label:"Bicep",permalink:"/tags/bicep"},{label:"ARM templates",permalink:"/tags/arm-templates"}],readingTime:2.675,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Hello World Bicep",authors:"johnnyreilly",tags:["Bicep","ARM templates"],image:"./hello-world-bicep.webp",hide_table_of_contents:!1},prevItem:{title:"ts-loader goes webpack 5",permalink:"/2021/04/20/ts-loader-goes-webpack-5"},nextItem:{title:"Bicep meet Azure Pipelines 2",permalink:"/2021/03/23/bicep-meet-azure-pipelines-2"}},s={image:n(3700).Z,authorsImageUrls:[void 0]},c=[{value:"More than configuration",id:"more-than-configuration",level:2},{value:"From terse to verbose",id:"from-terse-to-verbose",level:2}],m={toc:c};function u(e){var{components:t}=e,l=o(e,["components"]);return(0,r.kt)("wrapper",a({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bicep makes Azure Resource Management a great deal simpler than ARM templates. The selling point here is grokkability. This post takes a look at the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Azure/bicep/pull/2011"}),'"Hello World" example recently added to the Bicep repo')," to appreciate quite what a difference it makes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hello world bicep",src:n(3700).Z,width:"255",height:"255"})),(0,r.kt)("h2",a({},{id:"more-than-configuration"}),"More than configuration"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Azure/bicep/tree/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world"}),'"Hello World"')," added to the Bicep repo by ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/ChristopherGLewis"}),"Chris Lewis")," illustrates the simplest usage of Bicep:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This bicep file takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"yourName")," parameter and adds that to a ",(0,r.kt)("inlineCode",{parentName:"p"},"hello")," variable and returns the concatenated string as an ARM output.")),(0,r.kt)("p",null,"This is, when you consider it, the very essence of a computer program. Taking an input, doing some computation and providing an output. When I think about ARM templates, (and because Bicep is transpiled into ARM templates I mentally bracket the two together) I tend to think about resources being deployed. I focus on ",(0,r.kt)("em",{parentName:"p"},"configuration"),", not ",(0,r.kt)("em",{parentName:"p"},"computation")),(0,r.kt)("p",null,"This is an imperfect mental model. ARM templates can do so much more than deploy by slinging strings and numbers. Thanks to the wealth of ",(0,r.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/template-functions"}),"template functions")," that exist they have much more power. They can do computation."),(0,r.kt)("p",null,"The Hello World example focuses just on computation."),(0,r.kt)("h2",a({},{id:"from-terse-to-verbose"}),"From terse to verbose"),(0,r.kt)("p",null,"The Hello World example is made up of two significant files:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"main.bicep")," - the bicep code"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"main.json")," - the ARM template compiled from the Bicep file")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Azure/bicep/blob/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world/main.bicep"}),(0,r.kt)("inlineCode",{parentName:"a"},"main.bicep"))," file amounts to 3 lines of code (I have omitted the comment line):"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-bicep"}),"param yourName string\nvar hello = 'Hello World! - Hi'\n\noutput helloWorld string = '${hello} ${yourName}'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the first line takes the ",(0,r.kt)("em",{parentName:"li"},"input")," of ",(0,r.kt)("inlineCode",{parentName:"li"},"yourName")),(0,r.kt)("li",{parentName:"ul"},"the second line declares a ",(0,r.kt)("inlineCode",{parentName:"li"},"hello")," variable"),(0,r.kt)("li",{parentName:"ul"},"the third line ",(0,r.kt)("em",{parentName:"li"},"computes")," the new value of ",(0,r.kt)("inlineCode",{parentName:"li"},"helloWorld")," based upon ",(0,r.kt)("inlineCode",{parentName:"li"},"hello")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"yourName"),", then passes it as ",(0,r.kt)("em",{parentName:"li"},"output"))),(0,r.kt)("p",null,"Gosh is it ever simple. It's easy to read and it's simple to understand. Even if you don't know Bicep, if you've experience in another language you can likely guess what's happening."),(0,r.kt)("p",null,"Let's compare this with the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://github.com/Azure/bicep/blob/187d4d2047dc83c69695ba79761f552bcb00c319/docs/examples/000/01-hello-world/main.json"}),(0,r.kt)("inlineCode",{parentName:"a"},"main.json"))," that ",(0,r.kt)("inlineCode",{parentName:"p"},"main.bicep")," is transpiled into:"),(0,r.kt)("pre",null,(0,r.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",\n  "contentVersion": "1.0.0.0",\n  "metadata": {\n    "_generator": {\n      "name": "bicep",\n      "version": "dev",\n      "templateHash": "6989941473549654446"\n    }\n  },\n  "parameters": {\n    "yourName": {\n      "type": "string"\n    }\n  },\n  "functions": [],\n  "variables": {\n    "hello": "Hello World! - Hi"\n  },\n  "resources": [],\n  "outputs": {\n    "helloWorld": {\n      "type": "string",\n      "value": "[format(\'{0} {1}\', variables(\'hello\'), parameters(\'yourName\'))]"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"The above ARM template expresses exactly the same thing as the Bicep alternative. But that 3 lines of logic has become 27 lines of JSON. We've lost something in the transition. Intent is no longer clear. We've gone from something easy to reason about, to something that is hard to reason about. You need to think a lot less to write the Bicep alternative and that's a ",(0,r.kt)("em",{parentName:"p"},"good")," thing."),(0,r.kt)("p",null,"I was chatting to someone recently who expressed it well by saying:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ARM is the format that the resource providers understand, so really it\u2019s the Azure equivalent of Assembler \u2013 and I don\u2019t know anyone who enjoys coding in Assembler.")),(0,r.kt)("p",null,"This is a great example of the value that Bicep provides. If you'd like to play with the Hello World a little, why not ",(0,r.kt)("a",a({parentName:"p"},{href:"https://aka.ms/bicepdemo#eJzT1w9OzC3ISVXISM3JyVcozy/KSeEqSCxKzFWozC8t8kvMTVUoLinKzEvnKkssgqqyVVD3ADPCQcoVFXQVPDLVubjyS0sKSksgasAyUJ0g9SrVYOFaBZVqmLm16gCvlitr"}),"take it for a spin in the Bicep playground"),"."))}u.isMDXComponent=!0},3700:function(e,t){t.Z="data:image/webp;base64,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"}}]);