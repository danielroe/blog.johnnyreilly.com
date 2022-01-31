"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[52741],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},c=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),d=a,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||o;return n?i.createElement(m,r(r({ref:e},p),{},{components:n})):i.createElement(m,r({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7904:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return h},default:function(){return d}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={title:"The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah",authors:"johnnyreilly",tags:["Jasmine","TFS","unit testing","javascript","Continuous Integration"],hide_table_of_contents:!1},s=void 0,u={permalink:"/2014/03/17/the-surprisingly-happy-tale-of-visual",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2014-03-17-the-surprisingly-happy-tale-of-visual/index.md",source:"@site/blog/2014-03-17-the-surprisingly-happy-tale-of-visual/index.md",title:"The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah",description:"Going off piste",date:"2014-03-17T00:00:00.000Z",formattedDate:"March 17, 2014",tags:[{label:"Jasmine",permalink:"/tags/jasmine"},{label:"TFS",permalink:"/tags/tfs"},{label:"unit testing",permalink:"/tags/unit-testing"},{label:"javascript",permalink:"/tags/javascript"},{label:"Continuous Integration",permalink:"/tags/continuous-integration"}],readingTime:5.865,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"The Surprisingly Happy Tale of Visual Studio Online, Continous Integration and Chutzpah",authors:"johnnyreilly",tags:["Jasmine","TFS","unit testing","javascript","Continuous Integration"],hide_table_of_contents:!1},prevItem:{title:"TypeScript this is what I want! (the unfortunate neglect of Instance Methods / callback functions)",permalink:"/2014/04/01/typescript-instance-methods"},nextItem:{title:"Knockout + Globalize = valueNumber Binding Handler",permalink:"/2014/03/11/knockout-globalize-valuenumber-binding"}},p={authorsImageUrls:[void 0]},h=[{value:"Going off piste",id:"going-off-piste",children:[],level:2},{value:"...Try, try, try again...",id:"try-try-try-again",children:[],level:2}],c={toc:h};function d(t){var e=t.components,n=(0,a.Z)(t,r);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"going-off-piste"},"Going off piste"),(0,o.kt)("p",null,"The post that follows is a slightly rambly affair which is pretty much my journal of the first steps of getting up and running with JavaScript unit testing. I will not claim that much of this blog is down to me. In fact in large part is me working my way through ",(0,o.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx"},"Mathew Aniyan's excellent blog post on integrating Chutzpah with TFS"),". But a few deviations from this post have made me think it worth keeping hold of this record for my benefit (if no-one else's)."),(0,o.kt)("p",null,"That's the disclaimers out of the way now..."),(0,o.kt)("h2",{id:"try-try-try-again"},"...Try, try, try again..."),(0,o.kt)("p",null,"Getting started with JavaScript unit testing has not been the breeze I\u2019d expected. Frankly I\u2019ve found the docs out there not particularly helpful. But if at first you don't succeed then try, try, try again."),(0,o.kt)("p",null,"So after a number of failed attempts I\u2019m going to give it another go. ",(0,o.kt)("a",{parentName:"p",href:"http://www.hanselminutes.com/412/getting-started-with-javascript-unit-testing-with-jasmine-and-rushaine-mcbean"},"Rushaine McBean")," says Jasmine is easiest so I'm going to follow her lead and give it a go."),(0,o.kt)("p",null,"Let\u2019s new up a new (empty) ASP.NET project. Yes, I know ASP.NET has nothing to do with JavaScript unit testing but my end goal is to be able to run JS unit tests in Visual Studio and as part of Continuous Integration. Further to that, I'm anticipating a future where I have a solution that contains JavaScript unit tests and C# unit tests as well. It is indeed a bold and visionary Brave New World. We'll see how far we get."),(0,o.kt)("p",null,"First up, download Jasmine from ",(0,o.kt)("a",{parentName:"p",href:"http://jasmine.github.io/"},"GitHub")," ","-"," I'll use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pivotal/jasmine/blob/master/dist/jasmine-standalone-2.0.0.zip"},"v2.0"),". Unzip it and fire up SpecRunner.html and whaddya know... It works!"),(0,o.kt)("p",null,"As well it might. I\u2019d be worried if it didn\u2019t. So I\u2019ll move the contents of the release package into my empty project. Now let\u2019s see if we can get those tests running inside Visual Studio. I\u2019d heard of ",(0,o.kt)("a",{parentName:"p",href:"https://chutzpah.codeplex.com/"},"Chutzpah")," which describes itself thusly:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"\u201cChutzpah is an open source JavaScript test runner which enables you to run unit tests using QUnit, Jasmine, Mocha, CoffeeScript and TypeScript.\u201d "))),(0,o.kt)("p",null,"What I\u2019m after is the Chutzpah test adapter for Visual Studio 2012/2013 which can be found ",(0,o.kt)("a",{parentName:"p",href:"http://visualstudiogallery.msdn.microsoft.com/f8741f04-bae4-4900-81c7-7c9bfb9ed1fe"},"here"),". I download the VSIX and install. Pretty painless. Once I restart Visual Studio I can see my unit tests in the test explorer. Nice! Run them and..."),(0,o.kt)("p",null,"All fail. This makes me sad. All the errors say \u201cCan\u2019t find variable: Player in file\u201d. Hmmm. Why? Dammit I\u2019m actually going to have to read the ",(0,o.kt)("a",{parentName:"p",href:"https://chutzpah.codeplex.com/wikipage?title=Chutzpah%20File%20References&referringTitle=Documentation"},"documentation"),"... It turns out the issue can be happily resolved by adding these 3 references to the top of PlayerSpec.js:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/// <reference path="../src/Player.js" />\n/// <reference path="../src/Song.js" />\n/// <reference path="SpecHelper.js" />\n')),(0,o.kt)("p",null,"Now the tests pass."),(0,o.kt)("p",null,"The question is: can we get this working with Visual Studio Online?"),(0,o.kt)("p",null,"Fortunately another has gone before me. Mathew Aniyan has written a ",(0,o.kt)("a",{parentName:"p",href:"https://blogs.msdn.com/b/visualstudioalm/archive/2012/07/09/javascript-unit-tests-on-team-foundation-service-with-chutzpah.aspx"},'superb blog post called "Javascript Unit Tests on Team Foundation Service with Chutzpah"'),". Using this post as a guide (it was written 18 months ago which is frankly aeons in the world of the web) I'm hoping that I'll be able to, without too many tweaks, get Javascript unit tests running on Team Foundation Service / Visual Studio Online ( / insert this weeks rebranding here)."),(0,o.kt)("p",null,'First of all in Visual Studio Online I\u2019ll create a new project called "GettingStartedWithJavaScriptUnitTesting" (using all the default options). Apparently ',(0,o.kt)("em",{parentName:"p"},"\u201cYour project is created and your team is going to absolutely love this.\u201d")," Hmmmm... I think I\u2019ll be judge of that."),(0,o.kt)("p",null,"Let's navigate to the project. I'll fire up Visual Studio by clicking on the \u201cOpen in Visual Studio\u201d link. Once fired up and all the workspace mapping is sorted I\u2019ll move my project into the GettingStartedWithJavaScriptUnitTesting folder that now exists on my machine and add this to source control."),(0,o.kt)("p",null,"Back to Mathew's blog. It suggests renaming Chutzpah.VS2012.vsix to Chutzpah.VS2012.zip and checking certain files into TFS. I think Chutzpah has changed a certain amount since this was written. To be on the safe side I\u2019ll create a new folder in the root of my project called Chutzpah.VS2012 and put the contents of Chutzpah.VS2012.zip in there and add it to TFS (being careful to ensure that no dll\u2019s are excluded)."),(0,o.kt)("p",null,"Then I'll follow steps 3 and 4 from the blog post:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*","3","."," In Visual Studio, Open Team Explorer & connect to Team Foundation Service. Bring up the Manage Build Controllers dialog. ","[Build \u2013> Manage Build Controllers]"," Select Hosted Build Controller Click on Properties button to bring up the Build Controller Properties dialog."),(0,o.kt)("p",{parentName:"blockquote"},"4","."," Change Version Control Path to custom Assemblies to refer to the folder where you checked in the binaries in step 2."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"}))),(0,o.kt)("p",null,"In step 5 the blog tells me to edit my build definition. Well I don\u2019t have one in this new project so let\u2019s click on \u201cNew Build Definition\u201d, create one and then follow step 5:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*","5","."," In Team Explorer, go to the Builds section and Edit your Build Definition which will run the javascript tests. Click on the Process tab Select the row named Automated Tests. Click on \u2026 button next to the value."),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"}))),(0,o.kt)("p",null,'Rather than following step 6 (which essentially nukes the running of any .NET tests you might have) I chose to add another row by clicking "Add". In the dialog presented I changed the Test assembly specification to ',"*","*","\\","*",'.js and checked the "Fail build on test failure" checkbox.'),(0,o.kt)("p",null,"Step 7 says:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"*","7","."," Create your Web application in Visual Studio and add your Qunit or Jasmine unit tests to them. ",(0,o.kt)("u",null,"Make sure that the js files (that contain the tests) are getting copied to the build output directory.")),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"}))),(0,o.kt)("p",null,"The picture below step 7 suggests that you should be setting your test / spec files to have a ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy to Output Directory")," setting of ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy always"),". ",(0,o.kt)("strong",{parentName:"p"},"This did not work for me!!!")," Instead, setting a ",(0,o.kt)("inlineCode",{parentName:"p"},"Build Action")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"Content")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Copy to Output Directory")," setting of ",(0,o.kt)("inlineCode",{parentName:"p"},"Do not copy")," did work."),(0,o.kt)("p",null,"Finally I checked everything into source control and queued a build. I honestly did not expect this to work. It couldn\u2019t be this easy could it? And..."),(0,o.kt)("p",null,"Wow! It did! Here\u2019s me cynically expecting some kind of \u201cpermission denied\u201d error and it actually works! Brilliant! Look up in the cloud it says the same thing!"),(0,o.kt)("p",null,"Fantastic!"),(0,o.kt)("p",null,"I realise that I haven\u2019t yet written a single JavaScript unit test of my own and so I\u2019ve still a way to go. What I have done is quietened those voices in my head that said \u201cthere\u2019s not too much point having a unit test suite that isn\u2019t plugged into continuous integration\u201d. Although it's not documented here I'm happy to be able to report that I have been able to follow the self-same instructions for Team Foundation Service / Visual Studio Online and get CI working with TFS 2012 on our build server as well."),(0,o.kt)("p",null,"Having got up and running off the back of other peoples hard work I best try and write some of my own tests now...."))}d.isMDXComponent=!0}}]);