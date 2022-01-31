"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[37486],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(n),m=a,p=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(p,r(r({ref:t},d),{},{components:n})):o.createElement(p,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var h=2;h<i;h++)r[h]=n[h];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45064:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return h},assets:function(){return d},toc:function(){return u},default:function(){return m}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",authors:"johnnyreilly",tags:["Xsd.exe","XSD/XML Schema Generator","LINQ to XML"],hide_table_of_contents:!1},l=void 0,h={permalink:"/2012/11/02/xsdxml-schema-generator-xsdexe-taking",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2012-11-02-xsdxml-schema-generator-xsdexe-taking/index.md",source:"@site/blog/2012-11-02-xsdxml-schema-generator-xsdexe-taking/index.md",title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",description:"Is it 2003 again?!?",date:"2012-11-02T00:00:00.000Z",formattedDate:"November 2, 2012",tags:[{label:"Xsd.exe",permalink:"/tags/xsd-exe"},{label:"XSD/XML Schema Generator",permalink:"/tags/xsd-xml-schema-generator"},{label:"LINQ to XML",permalink:"/tags/linq-to-xml"}],readingTime:5.89,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"XSD/XML Schema Generator + Xsd.exe:Taking the pain out of manual XML",authors:"johnnyreilly",tags:["Xsd.exe","XSD/XML Schema Generator","LINQ to XML"],hide_table_of_contents:!1},prevItem:{title:"Getting up to speed with Bloomberg's Open API...",permalink:"/2012/11/13/a-nicer-net-api-for-bloombergs-open-api"},nextItem:{title:"MVC 3 meet Dictionary",permalink:"/2012/10/22/mvc-3-meet-dictionary"}},d={authorsImageUrls:[void 0]},u=[{value:"Is it 2003 again?!?",id:"is-it-2003-again",children:[],level:2},{value:"To the XML Batman!",id:"to-the-xml-batman",children:[],level:2},{value:"We Don&#39;t Need No Validation...",id:"we-dont-need-no-validation",children:[],level:2},{value:"Tools of the Trade",id:"tools-of-the-trade",children:[],level:2},{value:"Justify Your Actions",id:"justify-your-actions",children:[],level:2},{value:"Serialization / Deserialization Helper",id:"serialization--deserialization-helper",children:[],level:2},{value:"Update - using Xsd.exe to generate XSD from XML",id:"update---using-xsdexe-to-generate-xsd-from-xml",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"is-it-2003-again"},"Is it 2003 again?!?"),(0,i.kt)("p",null,"I've just discovered Xsd.exe. It's not new. Or shiny. And in fact it's been around since .NET 1.1. Truth be told, I've been aware of it for years but up until now I've not had need of it. But now now I've investigated it a bit I've found that it, combined with the XSD/XML Schema Generator can make for a nice tool to add to the utility belt."),(0,i.kt)("p",null,"Granted XML has long since stopped being sexy. But if you need it, as I did recently, then this is for you."),(0,i.kt)("h2",{id:"to-the-xml-batman"},"To the XML Batman!"),(0,i.kt)("p",null,"Now XML is nothing new to me (or I imagine anyone who's been developing within the last 10 years). But most of the time when I use XML I'm barely aware that it's going on - by and large it's XML doing the heavy lifting underneath my web services. But the glory of this situation is, I never have to think about it. It just works. All I have to deal with are nice strongly typed objects which makes writing robust code a doddle."),(0,i.kt)("p",null,"I recently came upon a situation where I was working with XML in the raw; that is to say strings. I was going to be supplied with strings of XML which would represent various objects. It would be my job to take the supplied XML, extract out the data I needed and proceed accordingly."),(0,i.kt)("h2",{id:"we-dont-need-no-validation"},"We Don't Need No Validation..."),(0,i.kt)("p",null,"I lied!"),(0,i.kt)("p",null,"In order to write something reliable I needed to be able to validate that the supplied XML was as I expected. So, ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/XML_Schema_(W3C)"},"XSD")," time. If you're familiar with XML then you're probably equally familar with XSD which, to quote Wikipedia ",(0,i.kt)("em",{parentName:"p"},"\"can be used to express a set of rules to which an XML document must conform in order to be considered 'valid'\""),"."),(0,i.kt)("p",null,"Now I've written my fair share of XSDs over the years and I've generally found it a slightly tedious exercise. So I was delighted to discover an online tool to simplify the task. It's called the ",(0,i.kt)("a",{parentName:"p",href:"http://www.freeformatter.com/xsd-generator.html"},"XSD/XML Schema Generator"),". What this marvellous tool does is allow you to enter an example of your XML which it then uses to reverse engineer an XSD."),(0,i.kt)("p",null,"Here's an example. I plugged in this:"),(0,i.kt)("script",{src:"https://gist.github.com/4000326.js?file=contact.xml"}),(0,i.kt)("p",null,"And pulled out this:"),(0,i.kt)("script",{src:"https://gist.github.com/4000326.js?file=contact.xsd"}),(0,i.kt)("p",null,"Fantastic! It doesn't matter if the tool gets something slightly wrong; you can tweak the generated XSD to your hearts content. This is great because it does the hard work for you, allowing you to step back, mop your brow and then heartily approve the results. This tool is a labour saving device. Put simply, it's a dishwasher."),(0,i.kt)("h2",{id:"tools-of-the-trade"},"Tools of the Trade"),(0,i.kt)("p",null,"How to get to the actual data? I was initially planning to break out the ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/system.xml.linq.xdocument(v=vs.100).aspx"},(0,i.kt)("inlineCode",{parentName:"a"},"XDocument")),", plug in my XSD and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Validate")," method. Which would do the job just dandy."),(0,i.kt)("p",null,"However I resisted. As much as I like LINQ to XML I turned to use ",(0,i.kt)("a",{parentName:"p",href:"http://msdn.microsoft.com/en-us/library/x6c1kb0s(v=vs.100).aspx"},"Xsd.exe")," instead. As I've mentioned, this tool is as old as the hills. But there's gold in them thar hills, listen: ",(0,i.kt)("em",{parentName:"p"},'"The XML Schema Definition (Xsd.exe) tool generates XML schema or common language runtime classes from XDR, XML, and XSD files, or from classes in a runtime assembly."')),(0,i.kt)("p",null,"Excited? Thought not. But what this means is we can hurl our XSD at this tool and it will toss back a nicely formatted C# class for me to use. Good stuff! So how's it done? Well MSDN is roughly as informative as it ever is (which is to say, not terribly) but fortunately there's not a great deal to it. You fire up the Visual Studio Command Prompt (and I advise doing this in Administrator mode to escape permissions pain). Then you enter a command to generate your class. Here's an example using the Contact.xsd file we generated earlier:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'xsd.exe "C:\\\\Contact.xsd" /classes /out:"C:\\\\" /namespace:"MyNameSpace"')),(0,i.kt)("p",null,"And you're left with the lovely Contact.cs class:"),(0,i.kt)("script",{src:"https://gist.github.com/4000326.js?file=Contact.cs"}),(0,i.kt)("h2",{id:"justify-your-actions"},"Justify Your Actions"),(0,i.kt)("p",null,"But why is this good stuff? Indeed why is this more interesting than the newer, and hence obviously cooler, LINQ to XML? Well for my money it's the following reasons that are important:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Intellisense - I have always loved this. Call me lazy but I think intellisense frees up the mind to think about what problem you're actually trying to solve. Xsd.exe's generated classes give me that; I don't need to hold the whole data structure in my head as I code."),(0,i.kt)("li",{parentName:"ol"},"Terse code - I'm passionate about less code. I think that a noble aim in software development is to write as little code as possible in order to achieve your aims. I say this as generally I have found that writing a minimal amount of code expresses the intention of the code in a far clearer fashion. In service of that aim Xsd.exe's generated classes allow me to write less code than would be required with LINQ to XML."),(0,i.kt)("li",{parentName:"ol"},'To quote Scott Hanselman "',(0,i.kt)("a",{parentName:"li",href:"http://www.hanselman.com/blog/NuGetPackageOfTheWeek6DynamicMalleableEnjoyableExpandoObjectsWithClay.aspx"},"successful compilation is just the first unit test"),"\". That it is but it's a doozy. If I'm making changes to the code and I've been using LINQ to XML I'm not going to see the benefits of strong typing that I would with Xsd.exe's generated classes. I like learning if I've broken the build sooner rather than later; strong typing gives me that safety net.")),(0,i.kt)("h2",{id:"serialization--deserialization-helper"},"Serialization / Deserialization Helper"),(0,i.kt)("p",null,"As you read this you're no doubt thinking \"but wait he's shown us how to create XSDs from XML and classes from XSDs but how do we take XML and turn it into objects? And how do we turn those objects back into XML?\""),(0,i.kt)("p",null,"See how I read your mind just there? It's a gift. Well, I've written a little static helper class for the very purpose:"),(0,i.kt)("script",{src:"https://gist.github.com/4000326.js?file=XmlConverter.cs"}),(0,i.kt)("p",null,"And here's an example of how to use it:"),(0,i.kt)("script",{src:"https://gist.github.com/4000326.js?file=XmlConverterUsage.cs"}),(0,i.kt)("p",null,"I was tempted to name my methods in tribute to Crockford's JSON (namely ",(0,i.kt)("inlineCode",{parentName:"p"},"ToXML")," becoming ",(0,i.kt)("inlineCode",{parentName:"p"},"stringify")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ToObject")," becoming ",(0,i.kt)("inlineCode",{parentName:"p"},"parse"),"). Maybe later."),(0,i.kt)("p",null,"And that's us done. Whilst it's no doubt unfashionable I think that this is a very useful approach indeed and I commend it to the interweb!"),(0,i.kt)("h2",{id:"update---using-xsdexe-to-generate-xsd-from-xml"},"Update - using Xsd.exe to generate XSD from XML"),(0,i.kt)("p",null,"I was chatting to a friend about this blog post and he mentioned that you can actually use Xsd.exe to generate XSD files from XML as well. He's quite right - this feature does exist. To go back to our example from earlier we can execute the following command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'xsd.exe "C:\\\\Contact.xml" /out:"C:\\\\" '),"And this will generate the following file:"),(0,i.kt)("script",{src:"https://gist.github.com/4000326.js?file=Generated by XSD contact.xsd"}),(0,i.kt)("p",null,"However, the XSD generated above is very much a \"Microsoft XSD\"; it's an XSD which features MS properties and so on. It's fine but I think that generally I prefer my XSDs to be as vanilla as possible. To that end I'm likely to stick to using the XSD/XML Schema Generator as it doesn't appear to be possible to get Xsd.exe to generate \"vanilla XSD\"."),(0,i.kt)("p",null,"Thanks to Ajay for bringing it to my attention though."))}m.isMDXComponent=!0}}]);