"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[91744],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82780:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return m}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"C# 9 in-process Azure Functions",authors:"johnnyreilly",tags:["C# 9","Azure Functions",".NET","in-process"],image:"./title-image.png",hide_table_of_contents:!1},l=void 0,u={permalink:"/2021/07/01/c-sharp-9-azure-functions-in-process",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-07-01-c-sharp-9-azure-functions-in-process/index.md",source:"@site/blog/2021-07-01-c-sharp-9-azure-functions-in-process/index.md",title:"C# 9 in-process Azure Functions",description:"C# 9 has some amazing features. Azure Functions are have two modes: isolated and in-process. Whilst isolated supports .NET 5 (and hence C# 9), in-process supports .NET Core 3.1 (C# 8). This post shows how we can use C# 9 with in-process Azure Functions running on .NET Core 3.1.",date:"2021-07-01T00:00:00.000Z",formattedDate:"July 1, 2021",tags:[{label:"C# 9",permalink:"/tags/c-9"},{label:"Azure Functions",permalink:"/tags/azure-functions"},{label:".NET",permalink:"/tags/net"},{label:"in-process",permalink:"/tags/in-process"}],readingTime:4.565,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Output connection strings and keys from Azure Bicep",permalink:"/2021/07/07/output-connection-strings-and-keys-from-azure-bicep"},nextItem:{title:"React 18 and TypeScript",permalink:"/2021/06/30/react-18-and-typescript"}},c={image:n(23507).Z,authorsImageUrls:[void 0]},p=[{value:"Azure Functions: in-process and isolated",id:"azure-functions-in-process-and-isolated",children:[],level:2},{value:"Setting up a C# 8 project",id:"setting-up-a-c-8-project",children:[],level:2},{value:"What does it take to get to C# 9?",id:"what-does-it-take-to-get-to-c-9",children:[],level:2},{value:"Adding C# 9 to the in-process function",id:"adding-c-9-to-the-in-process-function",children:[],level:2},{value:"Making a C# 9 program",id:"making-a-c-9-program",children:[],level:2},{value:"Best before...",id:"best-before",children:[],level:2}],d={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"C# 9 has some amazing features. Azure Functions are have two modes: isolated and in-process. Whilst isolated supports .NET 5 (and hence C# 9), in-process supports .NET Core 3.1 (C# 8). This post shows how we can use C# 9 with in-process Azure Functions running on .NET Core 3.1."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"title image showing name of post and the Azure Functions logo",src:n(23507).Z})),(0,a.kt)("h2",{id:"azure-functions-in-process-and-isolated"},"Azure Functions: in-process and isolated"),(0,a.kt)("p",null,'Historically .NET Azure Functions have been in-process. This changed with .NET 5 where a new model was introduced named "isolated". ',(0,a.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/apps-on-azure/net-on-azure-functions-roadmap/ba-p/2197916"},"To quote from the roadmap"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Running in an isolated process decouples .NET functions from the Azure Functions host\u2014allowing us to more easily support new .NET versions and address pain points associated with sharing a single process.")),(0,a.kt)("p",null,"However, the initial launch of isolated functions ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/dotnet-isolated-process-guide#differences-with-net-class-library-functions"},"does not have the full level of functionality enjoyed by in-process functions"),". This will happen, according the roadmap:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Long term, our vision is to have full feature parity out of process, bringing many of the features that are currently exclusive to the in-process model to the isolated model. We plan to begin delivering improvements to the isolated model after the .NET 6 general availability release.")),(0,a.kt)("p",null,"In the future, in-process functions will be retired in favour of isolated functions. However, it will be .NET 7 (scheduled to ship in November 2022) before that takes place:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"the Azure Functions roadmap image illustrating the future of .NET functions taken from https://techcommunity.microsoft.com/t5/apps-on-azure/net-on-azure-functions-roadmap/ba-p/2197916",src:n(10663).Z})),(0,a.kt)("p",null,"As the image taken from the roadmap shows, when .NET 5 shipped, it did not support in-process Azure Functions. When .NET 6 ships in November, it should."),(0,a.kt)("p",null,"In the meantime, we would like to use C# 9."),(0,a.kt)("h2",{id:"setting-up-a-c-8-project"},"Setting up a C# 8 project"),(0,a.kt)("p",null,"We're have the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local"},"Azure Functions Core Tools")," installed, so let's create a new function project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'func new --worker-runtime dotnet --template "Http Trigger" --name "HelloRecord"\n')),(0,a.kt)("p",null,"The above command scaffolds out a .NET Core 3.1 Azure function project which contains a single Azure function. The ",(0,a.kt)("inlineCode",{parentName:"p"},"--worker-runtime dotnet")," parameter is what causes an in-process .NET Core 3.1 function being created. You should have a ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj")," file that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<Project Sdk="Microsoft.NET.Sdk">\n  <PropertyGroup>\n    <TargetFramework>netcoreapp3.1</TargetFramework>\n    <AzureFunctionsVersion>v3</AzureFunctionsVersion>\n  </PropertyGroup>\n  <ItemGroup>\n    <PackageReference Include="Microsoft.NET.Sdk.Functions" Version="3.0.11" />\n  </ItemGroup>\n  <ItemGroup>\n    <None Update="host.json">\n      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n    </None>\n    <None Update="local.settings.json">\n      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n      <CopyToPublishDirectory>Never</CopyToPublishDirectory>\n    </None>\n  </ItemGroup>\n</Project>\n')),(0,a.kt)("p",null,"We're running with C# 8 and .NET Core 3.1 at this point. What does it take to get us to C# 9?"),(0,a.kt)("h2",{id:"what-does-it-take-to-get-to-c-9"},"What does it take to get to C# 9?"),(0,a.kt)("p",null,"There's a ",(0,a.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/csharp/comments/kiplz8/can_i_use_c90_with_aspnet_core_31/"},"great post on Reddit addressing using C# 9 with .NET Core 3.1 which says:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<LangVersion>9.0</LangVersion>"),", and VS even includes support for suggesting a language upgrade."),(0,a.kt)("p",{parentName:"blockquote"},"However, there are three categories of features in C#:"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"features that are entirely part of the compiler. Those will work.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"features that require BCL additions. Since you're on the older BCL, those will need to be backported. For example, to use init; and record, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/manuelroemer/IsExternalInit"},"https://github.com/manuelroemer/IsExternalInit"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"features that require runtime additions. Those cannot be added at all. For example, default interface members in C# 8, and covariant return types in C# 9.")))),(0,a.kt)("p",null,"Of the above, 1 and 2 add a tremendous amount of value. The features of 3 are great, but more niche. Speaking personally, I care a great deal about ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#record-types"},"Record types"),". So let's apply this."),(0,a.kt)("h2",{id:"adding-c-9-to-the-in-process-function"},"Adding C# 9 to the in-process function"),(0,a.kt)("p",null,"To get C# into the mix, we want to make two changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add a ",(0,a.kt)("inlineCode",{parentName:"li"},"<LangVersion>9.0</LangVersion>")," to the ",(0,a.kt)("inlineCode",{parentName:"li"},"<PropertyGroup>")," element of our ",(0,a.kt)("inlineCode",{parentName:"li"},".csproj")," file"),(0,a.kt)("li",{parentName:"ul"},"add a package reference to the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/manuelroemer/IsExternalInit"},(0,a.kt)("inlineCode",{parentName:"a"},"IsExternalInit")))),(0,a.kt)("p",null,"The applied changes look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'<Project Sdk="Microsoft.NET.Sdk">\n  <PropertyGroup>\n    <TargetFramework>netcoreapp3.1</TargetFramework>\n+    <LangVersion>9.0</LangVersion>\n    <AzureFunctionsVersion>v3</AzureFunctionsVersion>\n  </PropertyGroup>\n  <ItemGroup>\n    <PackageReference Include="Microsoft.NET.Sdk.Functions" Version="3.0.11" />\n+    <PackageReference Include="IsExternalInit" Version="1.0.1" PrivateAssets="all" />\n  </ItemGroup>\n  <ItemGroup>\n    <None Update="host.json">\n      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n    </None>\n    <None Update="local.settings.json">\n      <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>\n      <CopyToPublishDirectory>Never</CopyToPublishDirectory>\n    </None>\n  </ItemGroup>\n</Project>\n')),(0,a.kt)("p",null,"If we used ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet add package IsExternalInit"),", we might be using a different syntax in the ",(0,a.kt)("inlineCode",{parentName:"p"},".csproj"),". Be not afeard - that won't affect usage."),(0,a.kt)("h2",{id:"making-a-c-9-program"},"Making a C# 9 program"),(0,a.kt)("p",null,"Now we can theoretically use C# 9.... Let's use C# 9. We'll tweak our ",(0,a.kt)("inlineCode",{parentName:"p"},"HelloRecord.cs")," file, add in a simple ",(0,a.kt)("inlineCode",{parentName:"p"},"record")," named ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageRecord")," and tweak the ",(0,a.kt)("inlineCode",{parentName:"p"},"Run")," method to use it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.IO;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Azure.WebJobs;\nusing Microsoft.Azure.WebJobs.Extensions.Http;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.Extensions.Logging;\nusing Newtonsoft.Json;\n\nnamespace tmp\n{\n    public record MessageRecord(string message);\n\n    public static class HelloRecord\n    {\n        [FunctionName("HelloRecord")]\n        public static async Task<IActionResult> Run(\n            [HttpTrigger(AuthorizationLevel.Function, "get", "post", Route = null)] HttpRequest req,\n            ILogger log)\n        {\n            log.LogInformation("C# HTTP trigger function processed a request.");\n\n            string name = req.Query["name"];\n\n            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();\n            dynamic data = JsonConvert.DeserializeObject(requestBody);\n            name = name ?? data?.name;\n\n            var responseMessage = new MessageRecord(string.IsNullOrEmpty(name)\n                ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."\n                : $"Hello, {name}. This HTTP triggered function executed successfully.");\n\n            return new OkObjectResult(responseMessage);\n        }\n    }\n}\n')),(0,a.kt)("p",null,"If we kick off our function with ",(0,a.kt)("inlineCode",{parentName:"p"},"func start"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of the output of the HelloRecord function",src:n(30050).Z})),(0,a.kt)("p",null,"We can see we can compile, and output is as we might expect and hope. Likewise if we try and debug in VS Code, we can:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenshot of the output of the HelloRecord function",src:n(42910).Z})),(0,a.kt)("h2",{id:"best-before"},"Best before..."),(0,a.kt)("p",null,"So, we've now a way to use C# 9 (or most of it) with in-process .NET Core 3.1 apps. This should serve until .NET 6 ships in November 2021 and we're able to use C# 9 by default."))}m.isMDXComponent=!0},30050:function(e,t,n){t.Z=n.p+"assets/images/calling-hello-record-c27b5ee7fcbf9237913f2032469f71af.png"},42910:function(e,t,n){t.Z=n.p+"assets/images/debugging-hello-record-82617a55263870073534f4b0fbafaa61.png"},10663:function(e,t,n){t.Z=n.p+"assets/images/dotnet-functions-roadmap-57d7686ae1013727bac6e451699fd19e.png"},23507:function(e,t,n){t.Z=n.p+"assets/images/title-image-65bb0fefe08ed750046e8502086b9293.png"}}]);