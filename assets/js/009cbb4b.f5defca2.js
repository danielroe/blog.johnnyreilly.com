"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[38176],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),d=o,h=c["".concat(s,".").concat(d)]||c[d]||g[d]||r;return t?i.createElement(h,a(a({ref:n},u),{},{components:t})):i.createElement(h,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},39227:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return g},default:function(){return d}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],l={title:"ASP.NET, Serilog and Application Insights",authors:"johnnyreilly",image:"./application-insights-properties.png",tags:["asp.net","Azure","Application Insights","Serilog"],hide_table_of_contents:!1},s=void 0,p={permalink:"/2021/01/30/aspnet-serilog-and-application-insights",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-01-30-aspnet-serilog-and-application-insights/index.md",source:"@site/blog/2021-01-30-aspnet-serilog-and-application-insights/index.md",title:"ASP.NET, Serilog and Application Insights",description:"If you're deploying an ASP.NET application to Azure App Services, there's a decent chance you'll also be using the fantastic Serilog and will want to plug it into Azure's Application Insights.",date:"2021-01-30T00:00:00.000Z",formattedDate:"January 30, 2021",tags:[{label:"asp.net",permalink:"/tags/asp-net"},{label:"Azure",permalink:"/tags/azure"},{label:"Application Insights",permalink:"/tags/application-insights"},{label:"Serilog",permalink:"/tags/serilog"}],readingTime:3.75,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Azure RBAC: role assignments and ARM templates",permalink:"/2021/02/08/arm-templates-security-role-assignments"},nextItem:{title:"Azure Pipelines Build Info in an ASP.NET React app",permalink:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"}},u={image:t(49733).Z,authorsImageUrls:[void 0]},g=[{value:"Let&#39;s plug it together",id:"lets-plug-it-together",children:[],level:2}],c={toc:g};function d(e){var n=e.components,l=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you're deploying an ASP.NET application to Azure App Services, there's a decent chance you'll also be using the fantastic ",(0,r.kt)("a",{parentName:"p",href:"https://serilog.net/"},"Serilog")," and will want to plug it into Azure's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview"},"Application Insights"),"."),(0,r.kt)("p",null,"This post will show you how it's done, and it'll also build upon the ",(0,r.kt)("a",{parentName:"p",href:"/2021/01/29/surfacing-azure-pipelines-build-info-in-an-aspnet-react-app"},"build info work from our previous post"),". In what way? Great question. Well logs are a tremendous diagnostic tool. If you have logs which display some curious behaviour, and you'd like to replicate that in another environment, you really want to take exactly that version of the codebase out to play. Our last post introduced build info into our application in the form of our ",(0,r.kt)("inlineCode",{parentName:"p"},"AppVersionInfo")," class that looks something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "buildNumber": "20210130.1",\n  "buildId": "123456",\n  "branchName": "main",\n  "commitHash": "7089620222c30c1ad88e4b556c0a7908ddd34a8e"\n}\n')),(0,r.kt)("p",null,"We'd initially exposed an endpoint in our application which surfaced up this information. Now we're going to take that self same information and bake it into our log messages by making use of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/serilog/serilog/wiki/Enrichment"},"Serilog's enrichment functionality"),". Build info and Serilog's enrichment are the double act your logging has been waiting for."),(0,r.kt)("h2",{id:"lets-plug-it-together"},"Let's plug it together"),(0,r.kt)("p",null,"We're going to need a number of Serilog dependencies added to our ",(0,r.kt)("inlineCode",{parentName:"p"},".csproj"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Serilog.AspNetCore" Version="3.4.0" />\n<PackageReference Include="Serilog.Enrichers.Environment" Version="2.1.3" />\n<PackageReference Include="Serilog.Enrichers.Thread" Version="3.1.0" />\n<PackageReference Include="Serilog.Sinks.ApplicationInsights" Version="3.1.0" />\n<PackageReference Include="Serilog.Sinks.Async" Version="1.4.0" />\n')),(0,r.kt)("p",null,"The earlier in your application lifetime you get logging wired up, the happier you will be. Earlier, means more information when you're diagnosing issues. So we want to start in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Program.cs"),"; ",(0,r.kt)("inlineCode",{parentName:"p"},"Startup.cs")," would be just ",(0,r.kt)("em",{parentName:"p"},"way")," too late."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'public class Program {\n    const string APP_NAME = "MyAmazingApp";\n\n    public static int Main(string[] args) {\n        AppVersionInfo.InitialiseBuildInfoGivenPath(Directory.GetCurrentDirectory());\n        LoggerConfigurationExtensions.SetupLoggerConfiguration(APP_NAME, AppVersionInfo.GetBuildInfo());\n\n        try\n        {\n            Log.Information("Starting web host");\n            CreateHostBuilder(args).Build().Run();\n            return 0;\n        }\n        catch (Exception ex)\n        {\n            Log.Fatal(ex, "Host terminated unexpectedly");\n            return 1;\n        }\n        finally\n        {\n            Log.CloseAndFlush();\n        }\n    }\n\n    public static IHostBuilder CreateHostBuilder(string[] args) =>\n        Host.CreateDefaultBuilder(args)\n            .UseSerilog((hostBuilderContext, services, loggerConfiguration) => {\n                loggerConfiguration.ConfigureBaseLogging(APP_NAME, AppVersionInfo.GetBuildInfo());\n                loggerConfiguration.AddApplicationInsightsLogging(services, hostBuilderContext.Configuration);\n            })\n            .ConfigureWebHostDefaults(webBuilder => {\n                webBuilder\n                    .UseStartup<Startup>();\n            });\n}\n')),(0,r.kt)("p",null,"If you look at the code above you'll see that the first line of code that executes is ",(0,r.kt)("inlineCode",{parentName:"p"},"AppVersionInfo.InitialiseBuildInfoGivenPath"),". This initialises our ",(0,r.kt)("inlineCode",{parentName:"p"},"AppVersionInfo")," so we have meaningful build info to pump into our logs. The next thing we do is to configure Serilog with ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerConfigurationExtensions.SetupLoggerConfiguration"),". This provides us with a configured logger so we are free to log any issues that take place during startup. (Incidentally, after startup you'll likely inject an ",(0,r.kt)("inlineCode",{parentName:"p"},"ILogger")," into your classes rather than using the static ",(0,r.kt)("inlineCode",{parentName:"p"},"Log")," directly.)"),(0,r.kt)("p",null,"Finally, we call ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateHostBuilder")," which in turn calls ",(0,r.kt)("inlineCode",{parentName:"p"},"UseSerilog")," to plug Serilog into ASP.NET. If you take a look inside the body of ",(0,r.kt)("inlineCode",{parentName:"p"},"UseSerilog")," you'll see we configure the logging of ASP.NET (in the same way we did for Serilog) and we hook into Application Insights as well. There's been a number of references to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoggerConfigurationExtensions"),". Let's take a look at it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'internal static class LoggerConfigurationExtensions {\n    internal static void SetupLoggerConfiguration(string appName, BuildInfo buildInfo) {\n        Log.Logger = new LoggerConfiguration()\n            .ConfigureBaseLogging(appName, buildInfo)\n            .CreateLogger();\n    }\n\n    internal static LoggerConfiguration ConfigureBaseLogging(\n        this LoggerConfiguration loggerConfiguration,\n        string appName,\n        BuildInfo buildInfo\n    ) {\n        loggerConfiguration\n            .MinimumLevel.Debug()\n            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)\n            // AMAZING COLOURS IN THE CONSOLE!!!!\n            .WriteTo.Async(a => a.Console(theme: AnsiConsoleTheme.Code))\n            .Enrich.FromLogContext()\n            .Enrich.WithMachineName()\n            .Enrich.WithThreadId()\n            // Build information as custom properties\n            .Enrich.WithProperty(nameof(buildInfo.BuildId), buildInfo.BuildId)\n            .Enrich.WithProperty(nameof(buildInfo.BuildNumber), buildInfo.BuildNumber)\n            .Enrich.WithProperty(nameof(buildInfo.BranchName), buildInfo.BranchName)\n            .Enrich.WithProperty(nameof(buildInfo.CommitHash), buildInfo.CommitHash)\n            .Enrich.WithProperty("ApplicationName", appName);\n\n        return loggerConfiguration;\n    }\n\n    internal static LoggerConfiguration AddApplicationInsightsLogging(this LoggerConfiguration loggerConfiguration, IServiceProvider services, IConfiguration configuration)\n    {\n        if (!string.IsNullOrWhiteSpace(configuration.GetValue<string>("APPINSIGHTS_INSTRUMENTATIONKEY")))\n        {\n            loggerConfiguration.WriteTo.ApplicationInsights(\n                services.GetRequiredService<TelemetryConfiguration>(),\n                TelemetryConverter.Traces);\n        }\n\n        return loggerConfiguration;\n    }\n}\n')),(0,r.kt)("p",null,"If we take a look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigureBaseLogging")," method above, we can see that our logs are being enriched with the build info, property by property. We're also giving ourselves a beautifully coloured console thanks to Serilog's glorious ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/serilog/serilog-sinks-console#themes"},"theme support"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of the console featuring coloured output",src:t(74313).Z})),(0,r.kt)("p",null,"Take a moment to admire the salmon pinks. Is it not lovely?"),(0,r.kt)("p",null,"Finally we come to the main act. Plugging in Application Insights is as simple as dropping in ",(0,r.kt)("inlineCode",{parentName:"p"},"loggerConfiguration.WriteTo.ApplicationInsights")," into our configuration. You'll note that this depends upon the existence of an application setting of ",(0,r.kt)("inlineCode",{parentName:"p"},"APPINSIGHTS_INSTRUMENTATIONKEY")," - this is the secret sauce that we need to be in place so we can pipe logs merrily to Application Insights. So you'll need this configuration in place so this works."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"screenshot of application insights with our output",src:t(49733).Z})),(0,r.kt)("p",null,"As you can see, we now have the likes of ",(0,r.kt)("inlineCode",{parentName:"p"},"BuildNumber"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"CommitHash")," and friends visible on each log. Happy diagnostic days!"),(0,r.kt)("p",null,"I'm indebted to the marvellous ",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/MarcelMichau"},"Marcel Michau")," who showed me how to get the fiddlier parts of how to get Application Insights plugged in the right way. Thanks chap!"))}d.isMDXComponent=!0},49733:function(e,n,t){n.Z=t.p+"assets/images/application-insights-properties-c84e0ad0dbfa43565e738f78f016dbba.png"},74313:function(e,n,t){n.Z=t.p+"assets/images/coloured-console-3892238b0e9a0355da8015effe4544d5.png"}}]);