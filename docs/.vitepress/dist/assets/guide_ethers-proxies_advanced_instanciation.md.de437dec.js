import{_ as s,o as n,c as e,d as a}from"./app.906b7b89.js";const _=JSON.parse('{"title":"Ethers proxies ~ Instantiation","description":"","frontmatter":{"title":"Ethers proxies ~ Instantiation","layout":"doc"},"headers":[],"relativePath":"guide/ethers-proxies/advanced/instantiation.md"}'),t={name:"guide/ethers-proxies/advanced/instantiation.md"},o=a(`<h1 id="instantiation" tabindex="-1">Instantiation <a class="header-anchor" href="#instantiation" aria-hidden="true">#</a></h1><p>In some advanced cases you may need to directly instanciate the Ethers proxies classes.</p><p>Firstly all those classes are available through the <code>tulipe</code> package :</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  VEProviderProxy,</span></span>
<span class="line"><span style="color:#C9D1D9;">  VESignerProxy,</span></span>
<span class="line"><span style="color:#C9D1D9;">  VEContractProxy,</span></span>
<span class="line"><span style="color:#C9D1D9;">  VETransactionProxy</span></span>
<span class="line"><span style="color:#C9D1D9;">} </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;tulipe&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Each of them wait for 3 <strong>optional</strong> arguments during instantiation :</p><ul><li><code>ethersInstance</code><ul><li>type: any <a href="https://ethers.org/" target="_blank" rel="noreferrer">Ethers.js</a> instance <br><br></li></ul></li><li><code>extensionInstance</code><ul><li>type: <code>VEExtension</code> instance <br><br></li></ul></li><li><code>placeholderInstance</code><ul><li>type: <code>VEPlaceholder</code> instance</li></ul></li></ul><p>Some of those class will try to automatically retrieve an <code>ethersInstance</code> if this one is done explicitely provided.</p>`,7),l=[o];function i(r,c,p,d,u,h){return n(),e("div",null,l)}const m=s(t,[["render",i]]);export{_ as __pageData,m as default};
