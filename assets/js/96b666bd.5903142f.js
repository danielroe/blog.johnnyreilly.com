"use strict";(self.webpackChunkblog_johnnyreilly_com=self.webpackChunkblog_johnnyreilly_com||[]).push([[2402],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||n;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18920:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var o=r(87462),a=r(63366),n=(r(67294),r(3905)),i=["components"],s={title:"Azure RBAC: role assignments and ARM templates",authors:"johnnyreilly",image:"./with-great-power-comes-great-responsibility.jpg",tags:["Azure","ARM templates","role assignments","permissions"],hide_table_of_contents:!1},l=void 0,c={permalink:"/2021/02/08/arm-templates-security-role-assignments",editUrl:"https://github.com/johnnyreilly/blog.johnnyreilly.com/edit/main/blog-website/blog/blog/2021-02-08-arm-templates-security-role-assignments/index.md",source:"@site/blog/2021-02-08-arm-templates-security-role-assignments/index.md",title:"Azure RBAC: role assignments and ARM templates",description:'This post is about Azure\'s role assignments and ARM templates. Role assignments can be thought of as "permissions for Azure".',date:"2021-02-08T00:00:00.000Z",formattedDate:"February 8, 2021",tags:[{label:"Azure",permalink:"/tags/azure"},{label:"ARM templates",permalink:"/tags/arm-templates"},{label:"role assignments",permalink:"/tags/role-assignments"},{label:"permissions",permalink:"/tags/permissions"}],readingTime:6.015,truncated:!1,authors:[{name:"John Reilly",url:"https://twitter.com/johnny_reilly",imageURL:"https://blog.johnnyreilly.com/img/profile.jpg",key:"johnnyreilly"}],prevItem:{title:"Azure App Service, Health checks and zero downtime deployments",permalink:"/2021/02/11/azure-app-service-health-checks-and-zero-downtime-deployments"},nextItem:{title:"ASP.NET, Serilog and Application Insights",permalink:"/2021/01/30/aspnet-serilog-and-application-insights"}},u={image:r(48290).Z,authorsImageUrls:[void 0]},p=[{value:"Role (up for your) assignments",id:"role-up-for-your-assignments",children:[],level:2},{value:"Creating a role assignment",id:"creating-a-role-assignment",children:[],level:2}],d={toc:p};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'This post is about Azure\'s role assignments and ARM templates. Role assignments can be thought of as "permissions for Azure".'),(0,n.kt)("p",null,"If you're deploying to Azure, there's a good chance you're using ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/overview"},"ARM templates")," to do so. Once you've got past \"Hello World\", you'll probably find yourself in a situation when you're deploying multiple types of resource to make your solution. For instance, you may be deploying an ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/app-service/quickstart-arm-template?pivots=platform-linux#review-the-template"},"App Service")," alongside ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.keyvault/vaults"},"Key Vault")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.storage/storageaccounts"},"Storage"),"."),(0,n.kt)("p",null,"One of the hardest things when it comes to deploying software and having it work, is permissions. Without adequate permissions configured, the most beautiful code can do ",(0,n.kt)("em",{parentName:"p"},"nothing"),". Incidentally, this is a good thing. We're deploying to the web; many people are there, not all good. As a different kind of web-head once said:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Spider-man saying with great power, comes great responsibility",src:r(48290).Z})),(0,n.kt)("p",null,"Azure has great power and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/security/fundamentals/identity-management-best-practices#use-role-based-access-control"},"suggests you use it wisely"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Access management for cloud resources is critical for any organization that uses the cloud. ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/overview"},"Azure role-based access control (Azure RBAC)")," helps you manage who has access to Azure resources, what they can do with those resources, and what areas they have access to."),(0,n.kt)("p",{parentName:"blockquote"},"Designating groups or individual roles responsible for specific functions in Azure helps avoid confusion that can lead to human and automation errors that create security risks. Restricting access based on the ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Need_to_know"},"need to know")," and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Principle_of_least_privilege"},"least privilege")," security principles is imperative for organizations that want to enforce security policies for data access.")),(0,n.kt)("p",null,"This is good advice. With that in mind, how can we ensure that the different resources we're deploying to Azure can talk to one another?"),(0,n.kt)("h2",{id:"role-up-for-your-assignments"},"Role (up for your) assignments"),(0,n.kt)("p",null,"The answer is roles. There's a number of roles that exist in Azure that can be assigned to users, groups, service principals and managed identities. In our own case we're using managed identity for our resources. What we can do is use ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/overview#how-azure-rbac-works"},'"role assignments"')," to give our managed identity access to given resources. ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/ArLucaID"},"Arturo Lucatero")," gives a great short explanation of this:"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Dzhm-garKBM",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:""}),(0,n.kt)("p",null,'Whilst this explanation is delightfully simple, the actual implementation when it comes to ARM templates is a little more involved. Because now it\'s time to talk "magic" GUIDs. Consider the following truncated ARM template, which gives our managed identity (and hence our App Service which uses this identity) access to Key Vault and Storage:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#",\n  // ...\n  "variables": {\n    // ...\n    "managedIdentity": "[concat(\'mi-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n    "appInsightsName": "[concat(\'appi-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n    "keyVaultName": "[concat(\'kv-\', parameters(\'applicationName\'), \'-\', parameters(\'environment\'), \'-\', \'001\')]",\n    "storageAccountName": "[concat(\'st\', parameters(\'applicationName\'), parameters(\'environment\'), \'001\')]",\n    "storageBlobDataContributor": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'ba92f5b4-2d11-453d-a403-e96b0029c9fe\')]",\n    "keyVaultSecretsOfficer": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'b86a8fe4-44ce-4948-aee5-eccb2c155cd7\')]",\n    "keyVaultCryptoOfficer": "[subscriptionResourceId(\'Microsoft.Authorization/roleDefinitions\', \'14b46e9e-c2b7-41b4-b07b-48a6ebf60603\')]",\n    "uniqueRoleGuidKeyVaultSecretsOfficer": "[guid(resourceId(\'Microsoft.KeyVault/vaults\',  variables(\'keyVaultName\')), variables(\'keyVaultSecretsOfficer\'), resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\')))]",\n    "uniqueRoleGuidKeyVaultCryptoOfficer": "[guid(resourceId(\'Microsoft.KeyVault/vaults\',  variables(\'keyVaultName\')), variables(\'keyVaultCryptoOfficer\'), resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\')))]",\n    "uniqueRoleGuidStorageAccount": "[guid(resourceId(\'Microsoft.Storage/storageAccounts\',  variables(\'storageAccountName\')), variables(\'storageBlobDataContributor\'), resourceId(\'Microsoft.Storage/storageAccounts\', variables(\'storageAccountName\')))]"\n  },\n  "resources": [\n    {\n      "type": "Microsoft.ManagedIdentity/userAssignedIdentities",\n      "name": "[variables(\'managedIdentity\')]",\n      "apiVersion": "2018-11-30",\n      "location": "[parameters(\'location\')]"\n    },\n    // ...\n    {\n      "type": "Microsoft.Storage/storageAccounts/providers/roleAssignments",\n      "apiVersion": "2020-04-01-preview",\n      "name": "[concat(variables(\'storageAccountName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidStorageAccount\'))]",\n      "dependsOn": [\n        "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n      ],\n      "properties": {\n        "roleDefinitionId": "[variables(\'storageBlobDataContributor\')]",\n        "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n        "scope": "[resourceId(\'Microsoft.Storage/storageAccounts\', variables(\'storageAccountName\'))]",\n        "principalType": "ServicePrincipal"\n      }\n    },\n    {\n      "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n      "apiVersion": "2018-01-01-preview",\n      "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultSecretsOfficer\'))]",\n      "dependsOn": [\n        "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n      ],\n      "properties": {\n        "roleDefinitionId": "[variables(\'keyVaultSecretsOfficer\')]",\n        "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n        "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n        "principalType": "ServicePrincipal"\n      }\n    },\n    {\n      "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n      "apiVersion": "2018-01-01-preview",\n      "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultCryptoOfficer\'))]",\n      "dependsOn": [\n        "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n      ],\n      "properties": {\n        "roleDefinitionId": "[variables(\'keyVaultCryptoOfficer\')]",\n        "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n        "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n        "principalType": "ServicePrincipal"\n      }\n    }\n  ]\n}\n')),(0,n.kt)("p",null,"Let's take a look at these three variables:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},"\"storageBlobDataContributor\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]\",\n\"keyVaultSecretsOfficer\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'b86a8fe4-44ce-4948-aee5-eccb2c155cd7')]\",\n\"keyVaultCryptoOfficer\": \"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', '14b46e9e-c2b7-41b4-b07b-48a6ebf60603')]\",\n")),(0,n.kt)("p",null,"The three variables above contain the subscription resource ids for the roles ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor"},"Storage Blob Data Contributor"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-secrets-officer-preview"},"Key Vault Secrets Officer")," and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#key-vault-crypto-officer-preview"},"Key Vault Crypto Officer"),'. The first question on your mind is likely: "what is ',(0,n.kt)("inlineCode",{parentName:"p"},"ba92f5b4-2d11-453d-a403-e96b0029c9fe"),' and where does it come from?" Great question! Well, each of these GUIDs represents a built-in role in Azure RBAC. The ',(0,n.kt)("inlineCode",{parentName:"p"},"ba92f5b4-2d11-453d-a403-e96b0029c9fe")," represents the Storage Blob Data Contributor role."),(0,n.kt)("p",null,"How can I look these up? Well, there's two ways; ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles"},"there's an article which documents them here")," or you could crack open the ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-gb/features/cloud-shell/"},"Cloud Shell")," and look up a role by GUID like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ps"},'Get-AzRoleDefinition | ? {$_.id -eq "ba92f5b4-2d11-453d-a403-e96b0029c9fe" }\n\nName             : Storage Blob Data Contributor\nId               : ba92f5b4-2d11-453d-a403-e96b0029c9fe\nIsCustom         : False\nDescription      : Allows for read, write and delete access to Azure Storage blob containers and data\nActions          : {Microsoft.Storage/storageAccounts/blobServices/containers/delete, Microsoft.Storage/storageAccounts/blobServices/containers/read,\n                   Microsoft.Storage/storageAccounts/blobServices/containers/write, Microsoft.Storage/storageAccounts/blobServices/generateUserDelegationKey/action}\nNotActions       : {}\nDataActions      : {Microsoft.Storage/storageAccounts/blobServices/containers/blobs/delete, Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read,\n                   Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write, Microsoft.Storage/storageAccounts/blobServices/containers/blobs/move/action\u2026}\nNotDataActions   : {}\nAssignableScopes : {/}\n')),(0,n.kt)("p",null,"Or by name like so:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ps"},"Get-AzRoleDefinition | ? {$_.name -like \"*Crypto Officer*\" }\n\nName             : Key Vault Crypto Officer\nId               : 14b46e9e-c2b7-41b4-b07b-48a6ebf60603\nIsCustom         : False\nDescription      : Perform any action on the keys of a key vault, except manage permissions. Only works for key vaults that use the 'Azure role-based access control' permission model.\nActions          : {Microsoft.Authorization/*/read, Microsoft.Insights/alertRules/*, Microsoft.Resources/deployments/*, Microsoft.Resources/subscriptions/resourceGroups/read\u2026}\nNotActions       : {}\nDataActions      : {Microsoft.KeyVault/vaults/keys/*}\nNotDataActions   : {}\nAssignableScopes : {/}\n")),(0,n.kt)("p",null,"As you can see, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Actions")," section of the output above (and in even more detail on the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/role-based-access-control/built-in-roles"},"linked article"),") provides information about what the different roles can do. So if you're looking to enable one Azure resource to talk to another, you should be able to refer to these to identify a role that you might want to use."),(0,n.kt)("h2",{id:"creating-a-role-assignment"},"Creating a role assignment"),(0,n.kt)("p",null,"So now we understand how you identify the roles in question, let's take the final leap and look at assigning those roles to our managed identity. For each role assignment, you'll need a ",(0,n.kt)("inlineCode",{parentName:"p"},"roleAssignments")," resource defined that looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Microsoft.KeyVault/vaults/providers/roleAssignments",\n  "apiVersion": "2018-01-01-preview",\n  "name": "[concat(variables(\'keyVaultName\'), \'/Microsoft.Authorization/\', variables(\'uniqueRoleGuidKeyVaultCryptoOfficer\'))]",\n  "dependsOn": [\n    "[resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities\', variables(\'managedIdentity\'))]"\n  ],\n  "properties": {\n    "roleDefinitionId": "[variables(\'keyVaultCryptoOfficer\')]",\n    "principalId": "[reference(resourceId(\'Microsoft.ManagedIdentity/userAssignedIdentities/\', variables(\'managedIdentity\')), \'2018-11-30\').principalId]",\n    "scope": "[resourceId(\'Microsoft.KeyVault/vaults\', variables(\'keyVaultName\'))]",\n    "principalType": "ServicePrincipal"\n  }\n}\n')),(0,n.kt)("p",null,"Let's go through the above, significant property by significant property (it's also worth checking the official reference ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/templates/microsoft.authorization/roleassignments"},"here"),"):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"type")," ","-"," the type of role assignment we want to create, for a key vault it's ",(0,n.kt)("inlineCode",{parentName:"li"},'"Microsoft.KeyVault/vaults/providers/roleAssignments"'),", for storage it's ",(0,n.kt)("inlineCode",{parentName:"li"},'"Microsoft.Storage/storageAccounts/providers/roleAssignments"'),". The pattern is that it's the resource type, followed by ",(0,n.kt)("inlineCode",{parentName:"li"},'"/providers/roleAssignments"'),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"dependsOn")," ","-"," before we can create a role assignment, we need the service principal we desire to permission (in our case a managed identity) to exist"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"properties.roleDefinitionId")," ","-"," the role that we're assigning, provided as an id. So for this example it's the ",(0,n.kt)("inlineCode",{parentName:"li"},"keyVaultCryptoOfficer")," variable, which was earlier defined as ",(0,n.kt)("inlineCode",{parentName:"li"},"[subscriptionResourceId('Microsoft.Authorization/roleDefinitions', 'ba92f5b4-2d11-453d-a403-e96b0029c9fe')]"),". (Note the use of the GUID)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"properties.principalId")," ","-"," the id of the principal we're adding permissions for. In our case this is a managed identity (a type of service principal)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"properties.scope")," ","-"," we're modifying another resource; our key vault isn't defined in this ARM template and we want to specify the resource we're granting permissions to."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"properties.principalType")," ","-"," the type of principal that we're creating an assignment for; in our this is ",(0,n.kt)("inlineCode",{parentName:"li"},'"ServicePrincipal"')," ","-"," our managed identity.")),(0,n.kt)("p",null,"There is an alternate approach that you can use where the ",(0,n.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,n.kt)("inlineCode",{parentName:"p"},'"Microsoft.Authorization/roleAssignments"'),". Whilst this also works, it displayed errors in the ",(0,n.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=msazurermtools.azurerm-vscode-tools"},"Azure tooling for VS Code"),". As such, we've opted not to use that approach in our ARM templates."),(0,n.kt)("p",null,"Many thanks to the awesome ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/jmccor99"},"John McCormick")," who wrangled permissions with me until we bent Azure RBAC to our will."))}m.isMDXComponent=!0},48290:function(e,t,r){t.Z=r.p+"assets/images/with-great-power-comes-great-responsibility-be2ae78bc5a7371b606fc4ea7d0f83fa.jpg"}}]);