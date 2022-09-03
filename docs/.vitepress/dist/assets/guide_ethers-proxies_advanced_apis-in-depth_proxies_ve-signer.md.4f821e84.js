import{_ as e,o as i,c as n,d as t}from"./app.906b7b89.js";const u=JSON.parse('{"title":"VESigner","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ethers-proxies/advanced/apis-in-depth/proxies/ve-signer.md"}'),o={name:"guide/ethers-proxies/advanced/apis-in-depth/proxies/ve-signer.md"},a=t('<h1 id="vesigner" tabindex="-1"><code>VESigner</code> <a class="header-anchor" href="#vesigner" aria-hidden="true">#</a></h1><p>The <code>VESigner</code> class inherits from the <a href="/guide/ethers-proxies/advanced/apis-in-depth/proxies/ve-proxy.html"><code>VEProxy</code> class</a> and is used to represent the current signer of your DApp.</p><p>The Application Programming Interface of a <code>VESignerProxy</code> instance is very smilar to the one of a <code>VEProxy</code> instance, except that :</p><ul><li>If <code>ethersInstance</code> argument is not explicitly given during instantiation, the class will automatically try to find one</li><li>If <code>extensionInstance</code> argument in not explicitly given during instantiation, it defaults to a <code>VESignerExtension</code> instance</li><li>If <code>placeholderInstance</code> argument in not explicitly given during instantiation, it defaults to a <code>VESignerPlaceholder</code> instance</li></ul>',4),r=[a];function s(c,d,l,p,h,g){return i(),n("div",null,r)}const f=e(o,[["render",s]]);export{u as __pageData,f as default};
