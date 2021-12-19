"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[71456],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),g=i,d=m["".concat(p,".").concat(g)]||m[g]||c[g]||o;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},21862:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},assets:function(){return u},toc:function(){return c},default:function(){return g}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],s={title:"Azure Container Apps, Bicep and GitHub Actions",authors:"johnnyreilly",tags:["Azure Container Apps","Bicep","GitHub Actions"],image:"./title-image.png",hide_table_of_contents:!1},p=void 0,l={permalink:"/2021/12/19/azure-container-apps-bicep-and-github-actions",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-12-19-azure-container-apps-bicep-and-github-actions/index.md",source:"@site/blog/2021-12-19-azure-container-apps-bicep-and-github-actions/index.md",title:"Azure Container Apps, Bicep and GitHub Actions",description:"Azure Container Apps are an exciting way to deploy containers to Azure. This post shows how to deploy the infrastructure for an Azure Container App to Azure using Bicep and GitHub Actions. The Azure Container App documentation features quickstarts for deploying your first container app using both the Azure Portal and the Azure CLI. These are great, but there's a gap if you prefer to deploy using Bicep and you'd like to get your CI/CD setup right from the beginning. This post aims to fill that gap.",date:"2021-12-19T00:00:00.000Z",formattedDate:"December 19, 2021",tags:[{label:"Azure Container Apps",permalink:"/tags/azure-container-apps"},{label:"Bicep",permalink:"/tags/bicep"},{label:"GitHub Actions",permalink:"/tags/git-hub-actions"}],readingTime:3.905,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],nextItem:{title:"Open Graph: a guide to sharable social media previews",permalink:"/2021/12/12/open-graph-sharing-previews-guide"}},u={image:t(25232).Z,authorsImageUrls:[void 0]},c=[{value:"Bicep",id:"bicep",children:[],level:2},{value:"Setting up a resource group",id:"setting-up-a-resource-group",children:[],level:2},{value:"Deploying with the Azure CLI",id:"deploying-with-the-azure-cli",children:[],level:2},{value:"Deploying with GitHub Actions",id:"deploying-with-github-actions",children:[],level:2},{value:"Running it",id:"running-it",children:[],level:2}],m={toc:c};function g(e){var n=e.components,s=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Azure Container Apps are an exciting way to deploy containers to Azure. This post shows how to deploy the infrastructure for an Azure Container App to Azure using Bicep and GitHub Actions. The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/container-apps/"},"Azure Container App documentation")," features quickstarts for deploying your first container app using both the Azure Portal and the Azure CLI. These are great, but there's a gap if you prefer to deploy using Bicep and you'd like to get your CI/CD setup right from the beginning. This post aims to fill that gap."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"title image reading &quot;Azure Container Apps, Bicep and GitHub Actions&quot; with the Bicep, Azure Container Apps and GitHub Actions logos",src:t(25232).Z})),(0,o.kt)("h2",{id:"bicep"},"Bicep"),(0,o.kt)("p",null,"Let's begin with the Bicep required to deploy an Azure Container App."),(0,o.kt)("p",null,"In our new repository we'll create an ",(0,o.kt)("inlineCode",{parentName:"p"},"infra")," directory, into which we'll place a ",(0,o.kt)("inlineCode",{parentName:"p"},"main.bicep")," file which will contain our Bicep template."),(0,o.kt)("p",null,"I've pared this down to the simplest Bicep template that I can; it only requires a name and the subscription to which it's going to be deployed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bicep"},"param subscriptionId string\nparam name string\nparam secrets array = []\n\nvar location = resourceGroup().location\nvar kubeEnvironmentId = '/subscriptions/${subscriptionId}/resourceGroups/${resourceGroup().name}/providers/Microsoft.Web/kubeEnvironments/Production'\nvar environmentName = 'Production'\nvar workspaceName = '${name}-log-analytics'\n\nresource workspace 'Microsoft.OperationalInsights/workspaces@2020-08-01' = {\n  name: workspaceName\n  location: location\n  properties: {\n    sku: {\n      name: 'PerGB2018'\n    }\n    retentionInDays: 30\n    workspaceCapping: {}\n  }\n}\n\nresource environment 'Microsoft.Web/kubeEnvironments@2021-03-01' = {\n  name: environmentName\n  location: location\n  properties: {\n    type: 'managed'\n    internalLoadBalancerEnabled: false\n    appLogsConfiguration: {\n      destination: 'log-analytics'\n      logAnalyticsConfiguration: {\n        customerId: workspace.properties.customerId\n        sharedKey: listKeys(workspace.id, workspace.apiVersion).primarySharedKey\n      }\n    }\n  }\n}\n\nresource containerApp 'Microsoft.Web/containerapps@2021-03-01' = {\n  name: name\n  kind: 'containerapps'\n  location: location\n  properties: {\n    kubeEnvironmentId: kubeEnvironmentId\n    configuration: {\n      secrets: secrets\n      registries: []\n      ingress: {\n        'external':true\n        'targetPort':80\n      }\n    }\n    template: {\n      containers: [\n        {\n          'name':'simple-hello-world-container'\n          'image':'mcr.microsoft.com/azuredocs/containerapps-helloworld:latest'\n          'command':[]\n          'resources':{\n            'cpu':'.25'\n            'memory':'.5Gi'\n          }\n        }\n      ]\n    }\n  }\n  dependsOn: [\n    environment\n  ]\n}\n")),(0,o.kt)("p",null,"Some things to note from the template:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We're deploying three resources; a container app, a kube environment and an operational insights."),(0,o.kt)("li",{parentName:"ul"},"Just like the official quickstarts we're going to use the ",(0,o.kt)("inlineCode",{parentName:"li"},"containerapps-helloworld")," image.")),(0,o.kt)("h2",{id:"setting-up-a-resource-group"},"Setting up a resource group"),(0,o.kt)("p",null,"In order that you can deploy your Bicep, we're going to need a resource group to send it to. Right now, Azure Container Apps aren't available everywhere. So we're going to create ourselves a resource group in North Europe which does support ACAs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az group create -g rg-aca -l northeurope\n")),(0,o.kt)("h2",{id:"deploying-with-the-azure-cli"},"Deploying with the Azure CLI"),(0,o.kt)("p",null,"With this resource group in place, we could simply deploy using the Azure CLI like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"az deployment group create \\\n  --resource-group rg-aca \\\n  --template-file ./infra/main.bicep \\\n  --parameters \\\n    subscriptionId='your-subscription-id-here' \\\n    name='container-app'\n")),(0,o.kt)("h2",{id:"deploying-with-github-actions"},"Deploying with GitHub Actions"),(0,o.kt)("p",null,"However, we're aiming to set up a GitHub Action to do this for us. We'll create a ",(0,o.kt)("inlineCode",{parentName:"p"},".github/workflows/deploy.yaml")," file in our repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Deploy\non:\n  push:\n    branches: [main]\n  workflow_dispatch:\n\nenv:\n  RESOURCE_GROUP: rg-aca\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout repository\n        uses: actions/checkout@v2\n\n      - name: Azure Login\n        uses: azure/login@v1\n        with:\n          creds: ${{ secrets.AZURE_CREDENTIALS }}\n\n      - name: Deploy bicep\n        uses: azure/CLI@v1\n        with:\n          inlineScript: |\n            az deployment group create \\\n              --resource-group ${{ env.RESOURCE_GROUP }} \\\n              --template-file ./infra/main.bicep \\\n              --parameters \\\n                subscriptionId='${{ secrets.SUBSCRIPTION_ID }}' \\\n                name='container-app'\n")),(0,o.kt)("p",null,"The above GitHub action is very simple. It:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Logs into Azure using some ",(0,o.kt)("inlineCode",{parentName:"li"},"AZURE_CREDENTIALS")," we'll set up in a moment."),(0,o.kt)("li",{parentName:"ol"},"Invokes the Azure CLI to deploy our Bicep template, passing the ",(0,o.kt)("inlineCode",{parentName:"li"},"SUBSCRIPTION_ID")," which is (as the name suggests) the Azure subscription id.")),(0,o.kt)("p",null,"Let's create those two secrets in GitHub:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of GitHub Secrets in the GitHub website that we need to create",src:t(18519).Z})),(0,o.kt)("p",null,"The subscription id can be found by looking up your subscription inside the Azure Portal:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Screenshot of the Azure Portal displaying the subscription id",src:t(43310).Z})),(0,o.kt)("p",null,"Save that away as the ",(0,o.kt)("inlineCode",{parentName:"p"},"SUBSCRIPTION_ID")," secret in GitHub."),(0,o.kt)("p",null,"Then you need create the ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_CREDENTIALS"),", for which we'll use the Azure CLI once more:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'az ad sp create-for-rbac --name "myApp" --role contributor \\\n    --scopes /subscriptions/{subscription-id}/resourceGroups/{resource-group} \\\n    --sdk-auth\n')),(0,o.kt)("p",null,"Remember to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"{subscription-id}")," with your subscription id and ",(0,o.kt)("inlineCode",{parentName:"p"},"{resource-group}")," with the name of your resource group (",(0,o.kt)("inlineCode",{parentName:"p"},"rg-aca")," if you're following along). This command will pump out a lump of JSON that looks something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientId": "a-client-id",\n  "clientSecret": "a-client-secret",\n  "subscriptionId": "a-subscription-id",\n  "tenantId": "a-tenant-id",\n  "activeDirectoryEndpointUrl": "https://login.microsoftonline.com",\n  "resourceManagerEndpointUrl": "https://management.azure.com/",\n  "activeDirectoryGraphResourceId": "https://graph.windows.net/",\n  "sqlManagementEndpointUrl": "https://management.core.windows.net:8443/",\n  "galleryEndpointUrl": "https://gallery.azure.com/",\n  "managementEndpointUrl": "https://management.core.windows.net/"\n}\n')),(0,o.kt)("p",null,"Take this and save it as the ",(0,o.kt)("inlineCode",{parentName:"p"},"AZURE_CREDENTIALS")," secret in Azure."),(0,o.kt)("h2",{id:"running-it"},"Running it"),(0,o.kt)("p",null,"When the GitHub Action has been run you'll find that Azure Container App is now showing up inside the Azure Portal:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the Azure Container App in the Azure Portal",src:t(90030).Z})),(0,o.kt)("p",null,"You'll see a URL is displayed, when you go that URL you'll find the hello world image is running!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"screenshot of the running Azure Container App",src:t(52937).Z})))}g.isMDXComponent=!0},90030:function(e,n,t){n.Z=t.p+"assets/images/screenshot-azure-portal-container-app-78ff79ba2dcae59afd03efd3285fd490.png"},43310:function(e,n,t){n.Z=t.p+"assets/images/screenshot-azure-portal-subscription-4a831de1647e167d5707ea1415e42c87.png"},18519:function(e,n,t){n.Z=t.p+"assets/images/screenshot-github-secrets-1b3a4481052cd5a210fcc6416fd73393.png"},52937:function(e,n,t){n.Z=t.p+"assets/images/screenshot-of-running-container-app-a96a08c0f50bfdd9f21b8ca90c1bb3b4.png"},25232:function(e,n,t){n.Z=t.p+"assets/images/title-image-77a00ce5109282712322616d4a314924.png"}}]);