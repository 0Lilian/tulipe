import{_ as e,o as i,c as o,d as t}from"./app.106af06f.js";const u=JSON.parse('{"title":"VEProvider","description":"","frontmatter":{},"headers":[],"relativePath":"guide/ethers-proxies/advanced/apis-in-depth/proxies/ve-provider.md"}'),r={name:"guide/ethers-proxies/advanced/apis-in-depth/proxies/ve-provider.md"},n=t('<h1 id="veprovider" tabindex="-1"><code>VEProvider</code> <a class="header-anchor" href="#veprovider" aria-hidden="true">#</a></h1><p>The <code>VEProvider</code> class inherits from the <a href="/guide/ethers-proxies/advanced/apis-in-depth/proxies/ve-proxy.html"><code>VEProxy</code> class</a> and is used to represent the current provider of your DApp.</p><p>The Application Programming Interface of a <code>VEProviderProxy</code> instance is very smilar to the one of a <code>VEProxy</code> instance, except that :</p><ul><li>If <code>ethersInstance</code> argument is not explicitly given during instanciation, the class will automatically try to find one</li><li>If <code>extensionInstance</code> argument in not explicitly given during instanciation, it defaults to a <code>VEProviderExtension</code> instance</li><li>If <code>placeholderInstance</code> argument in not explicitly given during instanciation, it defaults to a <code>VEProviderPlaceholder</code> instance</li></ul>',4),a=[n];function d(c,s,p,l,h,v){return i(),o("div",null,a)}const f=e(r,[["render",d]]);export{u as __pageData,f as default};
