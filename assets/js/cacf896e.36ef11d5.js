"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[16023],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={title:"Autofac, WebApplicationFactory and integration tests",authors:"johnnyreilly",tags:["autofac","WebApplicationFactory","ASP.Net Core","ConfigureTestContainer","Integration Testing"],image:"./autofac-webapplicationfactory-tests.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/2020/05/21/autofac-webapplicationfactory-integration-tests",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2020-05-21-autofac-webapplicationfactory-integration-tests/index.md",source:"@site/blog/2020-05-21-autofac-webapplicationfactory-integration-tests/index.md",title:"Autofac, WebApplicationFactory and integration tests",description:"Updated 2nd Oct 2020: for an approach that works with Autofac 6 and ConfigureTestContainer see this post.",date:"2020-05-21T00:00:00.000Z",formattedDate:"May 21, 2020",tags:[{label:"autofac",permalink:"/tags/autofac"},{label:"WebApplicationFactory",permalink:"/tags/web-application-factory"},{label:"ASP.Net Core",permalink:"/tags/asp-net-core"},{label:"ConfigureTestContainer",permalink:"/tags/configure-test-container"},{label:"Integration Testing",permalink:"/tags/integration-testing"}],readingTime:3.56,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Task.WhenAll / Select is a footgun \ud83d\udc5f\ud83d\udd2b",permalink:"/2020/06/21/taskwhenall-select-is-footgun"},nextItem:{title:"From react-window to react-virtual",permalink:"/2020/05/10/from-react-window-to-react-virtual"}},u={image:n(6270).Z,authorsImageUrls:[void 0]},p=[],m={toc:p};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Updated 2nd Oct 2020:")," ",(0,i.kt)("em",{parentName:"p"},"for an approach that works with Autofac 6 and ",(0,i.kt)("inlineCode",{parentName:"em"},"ConfigureTestContainer")," see ",(0,i.kt)("a",{parentName:"em",href:"/2020/10/02/autofac-6-integration-tests-and-generic-hosting"},"this post"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A title image for the blog featuring the Autofac logo",src:n(6270).Z})),(0,i.kt)("p",null,"This is one of those occasions where I'm not writing up my own work so much as my discovery after in depth googling."),(0,i.kt)("p",null,"Integration tests with ASP.NET Core are the best. They spin up an in memory version of your application and let you fire requests at it. They've gone through a number of iterations since ASP.NET Core has been around. You may also be familiar with the ",(0,i.kt)("inlineCode",{parentName:"p"},"TestServer")," approach of earlier versions. For some time, the advised approach has been using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-3.1#basic-tests-with-the-default-webapplicationfactory"},(0,i.kt)("inlineCode",{parentName:"a"},"WebApplicationFactory")),"."),(0,i.kt)("p",null,"What makes this approach particularly useful / powerful is that you can swap out dependencies of your running app with fakes / stubs etc. Just like unit tests! But potentially more useful because they run your whole app and hence give you a greater degree of confidence. What does this mean? Well, imagine you changed a piece of middleware in your application; this could potentially break functionality. Unit tests would probably not reveal this. Integration tests would."),(0,i.kt)("p",null,"There is a fly in the ointment. A hair in the gazpacho. ASP.NET Core ships with dependency injection in the box. It has its own Inversion of Control container which is perfectly fine. However, many people are accustomed to using other IOC containers such as ",(0,i.kt)("a",{parentName:"p",href:"https://autofac.org/"},"Autofac"),"."),(0,i.kt)("p",null,"What's the problem? Well, swapping out dependencies registered using ASP.NET Core's IOC requires using a hook called ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/test/integration-tests?view=aspnetcore-3.1#inject-mock-services"},(0,i.kt)("inlineCode",{parentName:"a"},"ConfigureTestServices")),". There's an equivalent hook for swapping out services registered using a custom IOC container: ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.testhost.webhostbuilderextensions.configuretestcontainer?view=aspnetcore-3.0"},(0,i.kt)("inlineCode",{parentName:"a"},"ConfigureTestContainer")),". Unfortunately, there is a bug in ASP.NET Core as of version 3.0: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907"},"When using GenericHost, in tests ",(0,i.kt)("inlineCode",{parentName:"a"},"ConfigureTestContainer")," is not executed")),(0,i.kt)("p",null,"This means you cannot swap out dependencies that have been registered with Autofac and the like. According to the tremendous ",(0,i.kt)("a",{parentName:"p",href:"https://www.twitter.com/davidfowl"},"David Fowler")," of the ASP.NET team, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-592102145"},"this will hopefully be resolved"),"."),(0,i.kt)("p",null,"In the meantime, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-620750841"},"there's a workaround thanks to various commenters on the thread"),". Instead of using ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplicationFactory")," directly, subclass it and create a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"AutofacWebApplicationFactory")," (the name is not important). This custom class overrides the behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CreateHost")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomServiceProviderFactory"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'namespace My.Web.Tests.Helpers {\n    /// <summary>\n    /// Based upon https://github.com/dotnet/AspNetCore.Docs/tree/master/aspnetcore/test/integration-tests/samples/3.x/IntegrationTestsSample\n    /// </summary>\n    /// <typeparam name="TStartup"></typeparam>\n    public class AutofacWebApplicationFactory<TStartup> : WebApplicationFactory<TStartup> where TStartup : class {\n        protected override void ConfigureWebHost(IWebHostBuilder builder) {\n            builder.ConfigureServices(services => {\n                    services.AddSingleton<IAuthorizationHandler>(new PassThroughPermissionedRolesHandler());\n                })\n                .ConfigureTestServices(services => {\n                }).ConfigureTestContainer<Autofac.ContainerBuilder>(builder => {\n                    // called after Startup.ConfigureContainer\n                });\n        }\n\n        protected override IHost CreateHost(IHostBuilder builder) {\n            builder.UseServiceProviderFactory(new CustomServiceProviderFactory());\n            return base.CreateHost(builder);\n        }\n    }\n\n    /// <summary>\n    /// Based upon https://github.com/dotnet/aspnetcore/issues/14907#issuecomment-620750841 - only necessary because of an issue in ASP.NET Core\n    /// </summary>\n    public class CustomServiceProviderFactory : IServiceProviderFactory<CustomContainerBuilder> {\n        public CustomContainerBuilder CreateBuilder(IServiceCollection services) => new CustomContainerBuilder(services);\n\n        public IServiceProvider CreateServiceProvider(CustomContainerBuilder containerBuilder) =>\n        new AutofacServiceProvider(containerBuilder.CustomBuild());\n    }\n\n    public class CustomContainerBuilder : Autofac.ContainerBuilder {\n        private readonly IServiceCollection services;\n\n        public CustomContainerBuilder(IServiceCollection services) {\n            this.services = services;\n            this.Populate(services);\n        }\n\n        public Autofac.IContainer CustomBuild() {\n            var sp = this.services.BuildServiceProvider();\n#pragma warning disable CS0612 // Type or member is obsolete\n            var filters = sp.GetRequiredService<IEnumerable<IStartupConfigureContainerFilter<Autofac.ContainerBuilder>>>();\n#pragma warning restore CS0612 // Type or member is obsolete\n\n            foreach (var filter in filters) {\n                filter.ConfigureContainer(b => { }) (this);\n            }\n\n            return this.Build();\n        }\n    }\n}\n')),(0,i.kt)("p",null,"I'm going to level with you; I don't understand all of this code. I'm not au fait with the inner workings of ASP.NET Core or Autofac but I can tell you what this allows. With this custom ",(0,i.kt)("inlineCode",{parentName:"p"},"WebApplicationFactory")," in play you get ",(0,i.kt)("inlineCode",{parentName:"p"},"ConfigureTestContainer")," back in the mix! You get to write code like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'using System;\nusing System.Net;\nusing System.Net.Http.Headers;\nusing System.Threading.Tasks;\nusing FakeItEasy;\nusing FluentAssertions;\nusing Microsoft.AspNetCore.TestHost;\nusing Microsoft.Extensions.DependencyInjection;\nusing Xunit;\nusing Microsoft.Extensions.Options;\nusing Autofac;\nusing System.Net.Http;\nusing Newtonsoft.Json;\n\nnamespace My.Web.Tests.Controllers\n{\n    public class MyControllerTests : IClassFixture<AutofacWebApplicationFactory<My.Web.Startup>> {\n        private readonly AutofacWebApplicationFactory<My.Web.Startup> _factory;\n\n        public MyControllerTests(\n            AutofacWebApplicationFactory<My.Web.Startup> factory\n        ) {\n            _factory = factory;\n        }\n\n        [Fact]\n        public async Task My() {\n            var fakeSomethingService = A.Fake<IMySomethingService>();\n            var fakeConfig = Options.Create(new MyConfiguration {\n                SomeConfig = "Important thing",\n                OtherConfigMaybeAnEmailAddress = "johnny_reilly@hotmail.com"\n            });\n\n            A.CallTo(() => fakeSomethingService.DoSomething(A<string>.Ignored))\n                .Returns(Task.FromResult(true));\n\n            void ConfigureTestServices(IServiceCollection services) {\n                services.AddSingleton(fakeConfig);\n            }\n\n            void ConfigureTestContainer(ContainerBuilder builder) {\n                builder.RegisterInstance(fakeSomethingService);\n            }\n\n            var client = _factory\n                .WithWebHostBuilder(builder => {\n                    builder.ConfigureTestServices(ConfigureTestServices);\n                    builder.ConfigureTestContainer<Autofac.ContainerBuilder>(ConfigureTestContainer);\n                })\n                .CreateClient();\n\n            // Act\n            var request = StringContent("{\\"sommat\\":\\"to see\\"}");\n            request.Headers.ContentType = MediaTypeHeaderValue.Parse("application/json");\n            var response = await client.PostAsync("/something/submit", request);\n\n            // Assert\n            response.StatusCode.Should().Be(HttpStatusCode.OK);\n\n            A.CallTo(() => fakeSomethingService.DoSomething(A<string>.Ignored))\n                .MustHaveHappened();\n        }\n\n    }\n}\n')))}f.isMDXComponent=!0},6270:function(e,t,n){t.Z=n.p+"assets/images/autofac-webapplicationfactory-tests-7c8017cf9919642beee16f4f9b5a59b3.png"}}]);