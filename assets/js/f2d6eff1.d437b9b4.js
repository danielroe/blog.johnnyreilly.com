"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[55851],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=s,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10799:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});n(67294);var a=n(3905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const i={title:"Azure standard availability tests with Bicep",authors:"johnnyreilly",tags:["Azure","Bicep","standard tests"],image:"./title-image.webp",hide_table_of_contents:!1},o=void 0,l={permalink:"/2021/11/18/azure-standard-tests-with-bicep",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-11-18-azure-standard-tests-with-bicep/index.md",source:"@site/blog/2021-11-18-azure-standard-tests-with-bicep/index.md",title:"Azure standard availability tests with Bicep",description:"Azure standard tests are a tremendous way to monitor the uptime of your services in Azure. Sometimes also called availability tests, web tests and ping tests, this post goes through how to deploy one using Bicep. It also looks at some of the gotchas that you may encounter as you're setting it up.",date:"2021-11-18T00:00:00.000Z",formattedDate:"November 18, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"Bicep",permalink:"/tags/bicep"},{label:"standard tests",permalink:"/tags/standard-tests"}],readingTime:5.745,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure standard availability tests with Bicep",authors:"johnnyreilly",tags:["Azure","Bicep","standard tests"],image:"./title-image.webp",hide_table_of_contents:!1},prevItem:{title:"TypeScript vs JSDoc JavaScript",permalink:"/2021/11/22/typescript-vs-jsdoc-javascript"},nextItem:{title:"NSwag generated C# client: Open API property name clashes and decimal types rather than double",permalink:"/2021/10/31/nswag-generated-c-sharp-client-property-name-clash"}},u={image:n(3914).Z,authorsImageUrls:[void 0]},p=[{value:"What are standard tests?",id:"what-are-standard-tests",level:2},{value:"Standard test Bicep",id:"standard-test-bicep",level:2},{value:"Locations / populations",id:"locations--populations",level:3},{value:"The <code>hidden-link</code> tag",id:"the-hidden-link-tag",level:3},{value:"App insights and standard tests share a resource group",id:"app-insights-and-standard-tests-share-a-resource-group",level:3},{value:"Using <code>standard-test.bicep</code>",id:"using-standard-testbicep",level:2},{value:"Azure Pipelines test",id:"azure-pipelines-test",level:2}],d={toc:p};function c(e){var{components:t}=e,i=r(e,["components"]);return(0,a.kt)("wrapper",s({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Azure standard tests are a tremendous way to monitor the uptime of your services in Azure. Sometimes also called availability tests, web tests and ping tests, this post goes through how to deploy one using Bicep. It also looks at some of the gotchas that you may encounter as you're setting it up."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image reading &quot;Azure standard availability tests with Bicep&quot; with a Bicep logo and Azure logos",src:n(3914).Z,width:"1600",height:"900"})),(0,a.kt)("h2",s({},{id:"what-are-standard-tests"}),"What are standard tests?"),(0,a.kt)("p",null,"To quote the ",(0,a.kt)("a",s({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/availability-standard-tests"}),"docs"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Standard tests are a single request test that is similar to the URL ping test but more advanced. In addition to validating whether an endpoint is responding and measuring the performance, Standard tests also includes SSL certificate validity, proactive lifetime check, HTTP request verb (for example GET,HEAD,POST, etc.), custom headers, and custom data associated with your HTTP request.")),(0,a.kt)("p",null,"So we can use these to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"send requests to a URL"),(0,a.kt)("li",{parentName:"ul"},"from a variety of geographic locations"),(0,a.kt)("li",{parentName:"ul"},"and determine if it is responding with a 200 status code")),(0,a.kt)("p",null,"The URL may be one of our own service URLs, but it could be checking any kind of URL. It's web specific, not Azure specific."),(0,a.kt)("h2",s({},{id:"standard-test-bicep"}),"Standard test Bicep"),(0,a.kt)("p",null,"Now we're going to write a Bicep module that provisions a standard test named ",(0,a.kt)("inlineCode",{parentName:"p"},"standard-test.bicep"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bicep"}),"@description('Tags that our resources need')\nparam tags object\n\n@description('The resource id of the app insights which the webtest will reference')\nparam appInsightsResourceId string\n\n@description('The name of the webtest to create')\nparam standardTestName string\n\n@description('URL to test')\nparam urlToTest string\n\n@description('Interval in seconds between test runs for this WebTest. Default value is 300.')\nparam frequency int = 300\n\n@description('Seconds until this WebTest will timeout and fail. Default value is 30.')\nparam timeout int = 30\n\n// useful reference:\n// https://docs.microsoft.com/en-us/azure/azure-monitor/app/monitor-web-app-availability#azure\n@allowed([\n  'emea-au-syd-edge' // Australia\u202fEast\n  'latam-br-gru-edge' // Brazil South\n  'us-fl-mia-edge' // Central US\n  'apac-hk-hkn-azr' // East Asia\n  'us-va-ash-azr' // East US\n  'emea-ch-zrh-edge' // France South (Formerly France Central)\n  'emea-fr-pra-edge' // France Central\n  'apac-jp-kaw-edge' // Japan East\n  'emea-gb-db3-azr' // North Europe\n  'us-il-ch1-azr' // North Central US\n  'us-tx-sn1-azr' // South Central US\n  'apac-sg-sin-azr' // Southeast Asia\n  'emea-se-sto-edge' // UK West\n  'emea-nl-ams-azr' // West Europe\n  'us-ca-sjc-azr' // West US\n  'emea-ru-msa-edge' // UK South\n])\n@description('The populations (locations) for the test')\nparam testPopulations array = [\n  'emea-se-sto-edge' // UK West\n  'emea-ru-msa-edge' // UK South\n  'emea-gb-db3-azr' // North Europe\n  'us-va-ash-azr' // East US\n  'apac-sg-sin-azr' // Southeast Asia\n]\n\nvar tagsWithHiddenLink = union({\n  'hidden-link:${appInsightsResourceId}': 'Resource'\n}, tags)\n\nresource standardWebTest 'Microsoft.Insights/webtests@2018-05-01-preview' = {\n  name: standardTestName\n  location: resourceGroup().location\n  tags: tagsWithHiddenLink\n  kind: 'ping'\n  properties: {\n    SyntheticMonitorId: urlToTest\n    Name: urlToTest\n    Description: null\n    Enabled: true\n    Frequency: frequency\n    Timeout: timeout\n    Kind: 'standard'\n    RetryEnabled: true\n    Locations: [for testPopulation in testPopulations: {\n      Id: testPopulation\n    }]\n    Configuration: null\n    Request: {\n      RequestUrl: urlToTest\n      Headers: null\n      HttpVerb: 'GET'\n      RequestBody: null\n      ParseDependentRequests: false\n      FollowRedirects: null\n    }\n    ValidationRules: {\n      ExpectedHttpStatusCode: 200\n      IgnoreHttpsStatusCode: false\n      ContentValidation: null\n      SSLCheck: true\n      SSLCertRemainingLifetimeCheck: 7\n    }\n  }\n}\n\noutput standardWebTestName string = standardWebTest.name\noutput standardWebTestId string = standardWebTest.id\n")),(0,a.kt)("h3",s({},{id:"locations--populations"}),"Locations / populations"),(0,a.kt)("p",null,"You'll note that a parameter to the Bicep module is ",(0,a.kt)("inlineCode",{parentName:"p"},"testPopulations"),". These are the geographical places where requests will be sent from. You'll note we have a default value of five populations, but these could be any of the (presently) sixteen valid values. If you were wondering where those are sourced from, ",(0,a.kt)("a",s({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/availability-standard-tests#location-population-tags"}),"here is the link to the Azure docs"),"."),(0,a.kt)("h3",s({},{id:"the-hidden-link-tag"}),"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"hidden-link")," tag"),(0,a.kt)("p",null,"Another significant call out should go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-link")," tag. The ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-link"),' tag is a mandatory tag that connects the test (known in Azure as a "webtest") to an app insights instance.'),(0,a.kt)("p",null,"If you do not provide a ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-link")," tag, or if you try to specify a resource group other than the app insights resource group, Azure will fail to deploy your test and you may find yourself presented with an error like this in the deployments section of the Azure Portal."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Resource should exist in the same resource group as the linked component")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of the Azure Portal Deployments section saying &quot;Resource should exist in the same resource group as the linked component&quot;",src:n(5099).Z,width:"1102",height:"241"})),(0,a.kt)("p",null,"In our module we set both the ",(0,a.kt)("inlineCode",{parentName:"p"},"hidden-link")," tag as well as the tags that have been supplied via the ",(0,a.kt)("inlineCode",{parentName:"p"},"tags")," parameter."),(0,a.kt)("h3",s({},{id:"app-insights-and-standard-tests-share-a-resource-group"}),"App insights and standard tests share a resource group"),(0,a.kt)("p",null,"Another thing that can cause issues is the deployment of your app insights resource. It's not unusual to spin up Azure resources on demand, for a given branch of your source code. Those resources will be named in relation to the branch and will depend upon one another. I've never managed to successfully create an app insights resource, and reference it from a standard test within the same Bicep file. It appears to be necessary to separate the two actions, such that Azure recognises the existence of the app insights resource when the standard test is deployed."),(0,a.kt)("p",null,"If you are working with long-lived app insights it won't be an issue for you, but if you aren't it's worth being aware of."),(0,a.kt)("h2",s({},{id:"using-standard-testbicep"}),"Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"standard-test.bicep")),(0,a.kt)("p",null,"Our Bicep module can be invoked from another Bicep module named ",(0,a.kt)("inlineCode",{parentName:"p"},"ping-them.bicep")," like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bicep"}),"@description('Tags that our resources need')\nparam tags object\n\n@description('The name of the app insights')\nparam appInsightsName string\n\n@description('An object where the keys are the name of the web test and the values are the URL eg {\"my-standard-test\": \"https://status.azure.com/en-gb/status\"} ')\nparam standardTests object\n\nvar appInsightsResourceId = resourceId('Microsoft.Insights/components', appInsightsName)\n\nmodule standardTestsToCreate 'standard-test.bicep' = [for standardTest in items(standardTests): {\n  name: standardTest.key\n  params: {\n    tags: tags\n    appInsightsResourceId: appInsightsResourceId\n    standardTestName: standardTest.key\n    urlToTest: standardTest.value\n  }\n}]\n")),(0,a.kt)("p",null,"As you can see, this module itself takes a number of parameters, and will typically be invoked from some kind of continuous integration mechanism such as Azure Pipelines or GitHub Actions."),(0,a.kt)("p",null,"This module is written in the expectation that multiple URLs will need to be pinged, and so it has a parameter named ",(0,a.kt)("inlineCode",{parentName:"p"},"standardTests")," which is effectively a dictionary of key-value pairs, where the key is the name of the standard test, and the value is the URL to test."),(0,a.kt)("p",null,"The module makes use of the ",(0,a.kt)("a",s({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/bicep-functions-array#items"}),(0,a.kt)("inlineCode",{parentName:"a"},"items"))," array helper in Bicep to convert the object into an array that can be iterated over."),(0,a.kt)("h2",s({},{id:"azure-pipelines-test"}),"Azure Pipelines test"),(0,a.kt)("p",null,"We're going to use Azure Pipelines to test this out. Here's an ",(0,a.kt)("inlineCode",{parentName:"p"},"azure-pipelines.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-yml"}),'trigger:\n  - main\n\npool:\n  vmImage: ubuntu-latest\n\nsteps:\n  - checkout: self\n    submodules: true\n\n  - bash: az bicep build --file ping-them.bicep\n    displayName: \'Compile Bicep to ARM\'\n\n  - task: AzureResourceManagerTemplateDeployment@3\n    name: DeploySharedWebTests\n    displayName: Deploy Shared Web Tests\n    inputs:\n      deploymentScope: Resource Group\n      azureResourceManagerConnection: ${{ variables.serviceConnection }}\n      subscriptionId: $(subscriptionId)\n      action: Create Or Update Resource Group\n      resourceGroupName: $(resourceGroup)\n      location: $(location)\n      templateLocation: Linked artifact\n      csmFile: \'ping-them.json\' # created by bash script\n      overrideParameters: >-\n        -tags {"owner": "@johnny_reilly", "branch": "$(Build.SourceBranchName)"}\n        -appInsightsName $(appInsightsName)\n        -standardTests {"my-standard-test": "https://status.azure.com/en-gb/status"}\n      deploymentMode: Incremental\n')),(0,a.kt)("p",null,"When run, it invokes our ",(0,a.kt)("inlineCode",{parentName:"p"},"ping-them.bicep")," module, passing two URLs to test."),(0,a.kt)("p",null,'When executed, you end up with a delightful "availability test" (which is your standard test) in Azure:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of an Availability test in the Azure Portal",src:n(77840).Z,width:"3016",height:"1310"})))}c.isMDXComponent=!0},77840:function(e,t,n){t.Z=n.p+"assets/images/screenshot-azure-portal-availability-4639f627993291117dc4b932a56b6415.png"},5099:function(e,t){t.Z="data:image/webp;base64,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"},3914:function(e,t,n){t.Z=n.p+"assets/images/title-image-90f6b7716712d9f72a72a2d0895cb8f7.webp"}}]);