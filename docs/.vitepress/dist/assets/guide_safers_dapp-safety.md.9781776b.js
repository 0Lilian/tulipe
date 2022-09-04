import{_ as s,o as n,c as a,d as e}from"./app.a0687218.js";const b=JSON.parse('{"title":"Safers ~ DApp","description":"","frontmatter":{"title":"Safers ~ DApp","layout":"doc"},"headers":[{"level":2,"title":"Strong defaults","slug":"strong-defaults","link":"#strong-defaults","children":[]},{"level":2,"title":"In scripts","slug":"in-scripts","link":"#in-scripts","children":[]},{"level":2,"title":"In templates","slug":"in-templates","link":"#in-templates","children":[]}],"relativePath":"guide/safers/dapp-safety.md"}'),p={name:"guide/safers/dapp-safety.md"},l=e(`<h1 id="dapp-safety" tabindex="-1">DApp safety <a class="header-anchor" href="#dapp-safety" aria-hidden="true">#</a></h1><p>When you build a DApp with Tulipe, this one will perform many initialization operations before it starts and accessing the <code>dapp</code> object before a part of this initialization stuff has ended is considered unsafe and can lead to errors and/or unexpected behaviors.</p><p>So Tulipe provides developers with many safers that allows you to easily write safe code when your are using the <code>dapp</code> object, here are them.</p><h2 id="strong-defaults" tabindex="-1">Strong defaults <a class="header-anchor" href="#strong-defaults" aria-hidden="true">#</a></h2><p>Most of the Tulipe&#39; components and some of its methods are DApp safe by default. Here are the elements natively safe in Tulipe :</p><ul><li>TODO</li></ul><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { ConnectWalletButton } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;tulipe&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">   &lt;</span><span style="color:#7EE787;">header</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">     &lt;</span><span style="color:#FFA198;">ConnectWalletButton</span><span style="color:#C9D1D9;">/&gt;     </span><span style="color:#8B949E;">&lt;!-- THIS IS SAFE --&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">   &lt;/</span><span style="color:#7EE787;">header</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>However you can still use safers in order to display a clean loader for example :</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#FFA198;">dapp.OnSafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">#safe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">      &lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;I&#39;m the content !&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">#unsafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">      &lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;Loading...&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">      &lt;</span><span style="color:#FFA198;">MySpinner</span><span style="color:#C9D1D9;">/&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/</span><span style="color:#FFA198;">dapp.OnSafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>For all others elements you must use safers wrappers in order to make your code safe, in the next heading you&#39;ll learn how to use them.</p><h2 id="in-scripts" tabindex="-1">In scripts <a class="header-anchor" href="#in-scripts" aria-hidden="true">#</a></h2><p>To make a piece of code that use the <code>dapp</code> object safe in scripts you can use the <code>onSafe()</code> method of the <code>dapp</code> object :</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { dapp } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;tulipe&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">dapp.</span><span style="color:#D2A8FF;">onSafe</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// Code here will be executed only when the DApp is safe to use.</span></span>
<span class="line"><span style="color:#C9D1D9;">})</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>And if at some point in your code you have to test if the <code>dapp</code> object is safe, you can use the <code>isSafe</code> computed property of the <code>dapp</code> object :</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { dapp } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;tulipe&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (dapp.isSafe.value) {</span></span>
<span class="line"><span style="color:#C9D1D9;">  console.</span><span style="color:#D2A8FF;">log</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;The DApp is safe !&quot;</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="in-templates" tabindex="-1">In templates <a class="header-anchor" href="#in-templates" aria-hidden="true">#</a></h2><p>To make a part of a template that use the <code>dapp</code> object safe, you can wrap it in the <code>OnSafe</code> component of the <code>dapp</code> object :</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#FFA198;">dapp.OnSafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;If I&#39;m rendered is that the DApp is safe to use&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/</span><span style="color:#FFA198;">dapp.OnSafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>And if you want to define a content to render when the DApp is unsafe and a content to render when the DApp is safe you can use the <code>#safe</code> and <code>#unsafe</code> slots of the component :</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#FFA198;">dapp.OnSafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">#safe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">      &lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;If I&#39;m rendered is that the DApp is safe to use&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">#unsafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">      &lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;If I&#39;m rendered is that the DApp is NOT safe to use&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/</span><span style="color:#FFA198;">dapp.OnSafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,20),o=[l];function t(r,c,i,D,y,d){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{b as __pageData,m as default};
