"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[29297],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82735:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const i={title:"Azure RBAC: role assignments and ARM templates",authors:"johnnyreilly",image:"./with-great-power-comes-great-responsibility.webp",tags:["Azure","ARM templates","role assignments","permissions"],hide_table_of_contents:!1},s=void 0,l={permalink:"/2021/02/08/arm-templates-security-role-assignments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/2021-02-08-arm-templates-security-role-assignments/index.md",source:"@site/blog/2021-02-08-arm-templates-security-role-assignments/index.md",title:"Azure RBAC: role assignments and ARM templates",description:'This post is about Azure\'s role assignments and ARM templates. Role assignments can be thought of as "permissions for Azure".',date:"2021-02-08T00:00:00.000Z",formattedDate:"February 8, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"ARM templates",permalink:"/tags/arm-templates"},{label:"role assignments",permalink:"/tags/role-assignments"},{label:"permissions",permalink:"/tags/permissions"}],readingTime:6.015,hasTruncateMarker:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],frontMatter:{title:"Azure RBAC: role assignments and ARM templates",authors:"johnnyreilly",image:"./with-great-power-comes-great-responsibility.webp",tags:["Azure","ARM templates","role assignments","permissions"],hide_table_of_contents:!1},prevItem:{title:"Azure App Service, Health checks and zero downtime deployments",permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"},nextItem:{title:"ASP.NET, Serilog and Application Insights",permalink:"/2021/01/30/aspnet-serilog-and-application-insights"}},c={image:r(32398).Z,authorsImageUrls:[void 0]},u=[{value:"Role (up for your) assignments",id:"role-up-for-your-assignments",level:2},{value:"Creating a role assignment",id:"creating-a-role-assignment",level:2}],p={toc:u};function d(e){var{components:t}=e,i=o(e,["components"]);return(0,n.kt)("wrapper",a({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'This post is about Azure\'s role assignments and ARM templates. Role assignments can be thought of as "permissions for Azure".'),(0,n.kt)("p",null,"If you're deploying to Azure, there's a good chance you're using ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview"}),"ARM templates")," to do so. Once you've got past \"Hello World\", you'll probably find yourself in a situation when you're deploying multiple types of resource to make your solution. For instance, you may be deploying an ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/app-service/quickstart-arm-template?pivots=platform-linux#review-the-template"}),"App Service")," alongside ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.keyvault/vaults"}),"Key Vault")," and ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts"}),"Storage"),"."),(0,n.kt)("p",null,"One of the hardest things when it comes to deploying software and having it work, is permissions. Without adequate permissions configured, the most beautiful code can do ",(0,n.kt)("em",{parentName:"p"},"nothing"),". Incidentally, this is a good thing. We're deploying to the web; many people are there, not all good. As a different kind of web-head once said:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Spider-man saying with great power, comes great responsibility",src:r(32398).Z,width:"269",height:"187"})),(0,n.kt)("p",null,"Azure has great power and ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices#use-role-based-access-control"}),"suggests you use it wisely"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Access management for cloud resources is critical for any organization that uses the cloud. ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/overview"}),"Azure role-based access control (Azure RBAC)")," helps you manage who has access to Azure resources, what they can do with those resources, and what areas they have access to."),(0,n.kt)("p",{parentName:"blockquote"},"Designating groups or individual roles responsible for specific functions in Azure helps avoid confusion that can lead to human and automation errors that create security risks. Restricting access based on the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Need_to_know"}),"need to know")," and ",(0,n.kt)("a",a({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"}),"least privilege")," security principles is imperative for organizations that want to enforce security policies for data access.")),(0,n.kt)("p",null,"This is good advice. With that in mind, how can we ensure that the different resources we're deploying to Azure can talk to one another?"),(0,n.kt)("h2",a({},{id:"role-up-for-your-assignments"}),"Role (up for your) assignments"),(0,n.kt)("p",null,"The answer is roles. There's a number of roles that exist in Azure that can be assigned to users, groups, service principals and managed identities. In our own case we're using managed identity for our resources. What we can do is use ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/overview#how-azure-rbac-works"}),'"role assignments"')," to give our managed identity access to given resources. ",(0,n.kt)("a",a({parentName:"p"},{href:"https://twitter.com/ArLucaID"}),"Arturo Lucatero")," gives a great short explanation of this:"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Dzhm-garKBM",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:""}),(0,n.kt)("p",null,'Whilst this explanation is delightfully simple, the actual implementation when it comes to ARM templates is a little more involved. Because now it\'s time to talk "magic" GUIDs. Consider the following truncated ARM template, which gives our managed identity (and hence our App Service which uses this identity) access to Key Vault and Storage:'),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",\n  // ...\n  "variables": {\n    // ...\n    "managedIdentity": "[concat(\'mi-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n    "appInsightsName": "[concat(\'appi-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n    "keyVaultName": "[concat(\'kv-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n    "storageAccountName": "[concat(\'st\', parameters(\'applicationName\'), parameters(\'environment\'), \'001\')]",\n    "storageBlobDataContributor": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'ba92f5b4-2d11-453d-a403-e96b0029c9fe\')]",\n    "keyVaultSecretsOfficer": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'b86a8fe4-44ce-4948-aee5-eccb2c155cd7\')]",\n    "keyVaultCryptoOfficer": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'14b46e9e-c2b7-41b4-b07b-48a6ebf60603\')]",\n    "uniqueRoleGuidKeyVaultSecretsOfficer": "[guid(resourceId(\'Microsoft.KeyVault/vaults\',  variables(\'keyVaultName\')), variables(\'keyVaultSecretsOfficer\'), resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\')))]",\n    "uniqueRoleGuidKeyVaultCryptoOfficer": "[guid(resourceId(\'Microsoft.KeyVault/vaults\',  variables(\'keyVaultName\')), variables(\'keyVaultCryptoOfficer\'), resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\')))]",\n    "uniqueRoleGuidStorageAccount": "[guid(resourceId(\'Microsoft.Storage/storageAccounts\',  variables(\'storageAccountName\')), variables(\'storageBlobDataContributor\'), resourceId(\'Microsoft.Storage/storageAccounts\', variables(\'storageAccountName\')))]"\n  },\n  "resources": [\n    {\n      "type": "Microsoft.ManagedIdentity/userAssignedIdentities",\n      "name": "[variables(\'managedIdentity\')]",\n      "apiVersion": "2018-11-30",\n      "location": "[parameters(\'location\')]"\n    },\n    // ...\n    {\n      "type": "Microsoft.Storage/storageAccounts/providers/roleAssignments",\n      "apiVersion": "2020-04-01-preview",\n      "name": "[concat(variables(\'storageAccountName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidStorageAccount\'))]",\n      "dependsOn": [\n        "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n      ],\n      "properties": {\n        "roleDefinitionId": "[variables(\'storageBlobDataContributor\')]",\n        "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n        "scope": "[resourceId(\'Microsoft.Storage/storageAccounts\', variables(\'storageAccountName\'))]",\n        "principalType": "ServicePrincipal"\n      }\n    },\n    {\n      "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n      "apiVersion": "2018-01-01-preview",\n      "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultSecretsOfficer\'))]",\n      "dependsOn": [\n        "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n      ],\n      "properties": {\n        "roleDefinitionId": "[variables(\'keyVaultSecretsOfficer\')]",\n        "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n        "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n        "principalType": "ServicePrincipal"\n      }\n    },\n    {\n      "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n      "apiVersion": "2018-01-01-preview",\n      "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultCryptoOfficer\'))]",\n      "dependsOn": [\n        "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n      ],\n      "properties": {\n        "roleDefinitionId": "[variables(\'keyVaultCryptoOfficer\')]",\n        "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n        "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n        "principalType": "ServicePrincipal"\n      }\n    }\n  ]\n}\n')),(0,n.kt)("p",null,"Let's take a look at these three variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-json"}),"\"storageBlobDataContributor\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]\",\n\"keyVaultSecretsOfficer\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'b86a8fe4-44ce-4948-aee5-eccb2c155cd7')]\",\n\"keyVaultCryptoOfficer\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '14b46e9e-c2b7-41b4-b07b-48a6ebf60603')]\",\n")),(0,n.kt)("p",null,"The three variables above contain the subscription resource ids for the roles ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor"}),"Storage Blob Data Contributor"),", ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-secrets-officer-preview"}),"Key Vault Secrets Officer")," and ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-crypto-officer-preview"}),"Key Vault Crypto Officer"),'. The first question on your mind is likely: "what is ',(0,n.kt)("inlineCode",{parentName:"p"},"ba92f5b4-2d11-453d-a403-e96b0029c9fe"),' and where does it come from?" Great question! Well, each of these GUIDs represents a built-in role in Azure RBAC. The ',(0,n.kt)("inlineCode",{parentName:"p"},"ba92f5b4-2d11-453d-a403-e96b0029c9fe")," represents the Storage Blob Data Contributor role."),(0,n.kt)("p",null,"How can I look these up? Well, there's two ways; ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles"}),"there's an article which documents them here")," or you could crack open the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://azure.microsoft.com/en-gb/features/cloud-shell/"}),"Cloud Shell")," and look up a role by GUID like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ps"}),'Get-AzRoleDefinition | ? {$_.id -eq "ba92f5b4-2d11-453d-a403-e96b0029c9fe" }\n\nName             : Storage Blob Data Contributor\nId               : ba92f5b4-2d11-453d-a403-e96b0029c9fe\nIsCustom         : False\nDescription      : Allows for read, write and delete access to Azure Storage blob containers and data\nActions          : {Microsoft.Storage/storageAccounts/blobServices/containers/delete, Microsoft.Storage/storageAccounts/blobServices/containers/read,\n                   Microsoft.Storage/storageAccounts/blobServices/containers/write, Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action}\nNotActions       : {}\nDataActions      : {Microsoft.Storage/storageAccounts/blobServices/containers/blobs/delete, Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read,\n                   Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write, Microsoft.Storage/storageAccounts/blobServices/containers/blobs/move/action\u2026}\nNotDataActions   : {}\nAssignableScopes : {/}\n')),(0,n.kt)("p",null,"Or by name like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-ps"}),"Get-AzRoleDefinition | ? {$_.name -like \"*Crypto Officer*\" }\n\nName             : Key Vault Crypto Officer\nId               : 14b46e9e-c2b7-41b4-b07b-48a6ebf60603\nIsCustom         : False\nDescription      : Perform any action on the keys of a key vault, except manage permissions. Only works for key vaults that use the 'Azure role-based access control' permission model.\nActions          : {Microsoft.Authorization/*/read, Microsoft.Insights/alertRules/*, Microsoft.Resources/deployments/*, Microsoft.Resources/subscriptions/resourceGroups/read\u2026}\nNotActions       : {}\nDataActions      : {Microsoft.KeyVault/vaults/keys/*}\nNotDataActions   : {}\nAssignableScopes : {/}\n")),(0,n.kt)("p",null,"As you can see, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Actions")," section of the output above (and in even more detail on the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles"}),"linked article"),") provides information about what the different roles can do. So if you're looking to enable one Azure resource to talk to another, you should be able to refer to these to identify a role that you might want to use."),(0,n.kt)("h2",a({},{id:"creating-a-role-assignment"}),"Creating a role assignment"),(0,n.kt)("p",null,"So now we understand how you identify the roles in question, let's take the final leap and look at assigning those roles to our managed identity. For each role assignment, you'll need a ",(0,n.kt)("inlineCode",{parentName:"p"},"roleAssignments")," resource defined that looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-json"}),'{\n  "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n  "apiVersion": "2018-01-01-preview",\n  "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultCryptoOfficer\'))]",\n  "dependsOn": [\n    "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n  ],\n  "properties": {\n    "roleDefinitionId": "[variables(\'keyVaultCryptoOfficer\')]",\n    "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n    "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n    "principalType": "ServicePrincipal"\n  }\n}\n')),(0,n.kt)("p",null,"Let's go through the above, significant property by significant property (it's also worth checking the official reference ",(0,n.kt)("a",a({parentName:"p"},{href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.authorization/roleassignments"}),"here"),"):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type")," ","-"," the type of role assignment we want to create, for a key vault it's ",(0,n.kt)("inlineCode",{parentName:"li"},'"Microsoft.KeyVault/vaults/providers/roleAssignments"'),", for storage it's ",(0,n.kt)("inlineCode",{parentName:"li"},'"Microsoft.Storage/storageAccounts/providers/roleAssignments"'),". The pattern is that it's the resource type, followed by ",(0,n.kt)("inlineCode",{parentName:"li"},'"/providers/roleAssignments"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dependsOn")," ","-"," before we can create a role assignment, we need the service principal we desire to permission (in our case a managed identity) to exist"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"properties.roleDefinitionId")," ","-"," the role that we're assigning, provided as an id. So for this example it's the ",(0,n.kt)("inlineCode",{parentName:"li"},"keyVaultCryptoOfficer")," variable, which was earlier defined as ",(0,n.kt)("inlineCode",{parentName:"li"},"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]"),". (Note the use of the GUID)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"properties.principalId")," ","-"," the id of the principal we're adding permissions for. In our case this is a managed identity (a type of service principal)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"properties.scope")," ","-"," we're modifying another resource; our key vault isn't defined in this ARM template and we want to specify the resource we're granting permissions to."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"properties.principalType")," ","-"," the type of principal that we're creating an assignment for; in our this is ",(0,n.kt)("inlineCode",{parentName:"li"},'"ServicePrincipal"')," ","-"," our managed identity.")),(0,n.kt)("p",null,"There is an alternate approach that you can use where the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,n.kt)("inlineCode",{parentName:"p"},'"Microsoft.Authorization/roleAssignments"'),". Whilst this also works, it displayed errors in the ",(0,n.kt)("a",a({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools"}),"Azure tooling for VS Code"),". As such, we've opted not to use that approach in our ARM templates."),(0,n.kt)("p",null,"Many thanks to the awesome ",(0,n.kt)("a",a({parentName:"p"},{href:"https://github.com/jmccor99"}),"John McCormick")," who wrangled permissions with me until we bent Azure RBAC to our will."))}d.isMDXComponent=!0},32398:function(e,t){t.Z="data:image/webp;base64,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"}}]);