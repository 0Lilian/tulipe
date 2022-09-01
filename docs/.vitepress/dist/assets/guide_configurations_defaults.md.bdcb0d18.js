import{_ as s,o as e,c as n,d as a}from"./app.106af06f.js";const b=JSON.parse('{"title":"Configurations ~ Defaults","description":"","frontmatter":{"title":"Configurations ~ Defaults","layout":"doc"},"headers":[{"level":2,"title":"Set defaults","slug":"set-defaults","link":"#set-defaults","children":[]}],"relativePath":"guide/configurations/defaults.md"}'),l={name:"guide/configurations/defaults.md"},o=a(`<h1 id="defaults-config" tabindex="-1">Defaults config <a class="header-anchor" href="#defaults-config" aria-hidden="true">#</a></h1><p>As seen in the previous configuration section, many informations can be given to Tulipe. However in some cases your DApp has to deal with elements that are missing in your configuration file, for example and unknown network.</p><p>The <code>defaults</code> key of the <a href="/guide/configurations/intuition.html"><code>tulipe.config.js</code> file</a> can be used to define many fallback / defaults configurations that Tulipe will use in case it encounter unconfigured elements.</p><p>The <code>defaults</code> key must be filled with an object. It looks like that :</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">tulipeConfig</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  defaults: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// Defaults configs</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="set-defaults" tabindex="-1">Set defaults <a class="header-anchor" href="#set-defaults" aria-hidden="true">#</a></h2><p>Below is the list of defaults properties that are currently supported by this <code>defaults</code> object :</p><ul><li><strong><code>networks</code></strong> : contains defaults informations for networks <ul><li>type: <code>Object</code></li><li>required: <strong>false</strong></li><li>properties: <ul><li><strong><code>icon</code></strong> : the URL of the default network&#39;s icon / logo <ul><li>type: <code>String</code></li><li>required: <strong>false</strong> (defaults to <code>&quot;https://storage.tulipe.org/networks/unknown.svg&quot;</code>) <br><br></li></ul></li></ul></li></ul></li><li><strong><code>wallets</code></strong> : contains defaults informations for wallets <ul><li>type: <code>Object</code></li><li>required: <strong>false</strong></li><li>properties: <ul><li><strong><code>icon</code></strong> : the URL of the default wallet&#39;s icon / logo <ul><li>type: <code>String</code></li><li>required: <strong>false</strong> (defaults to <code>&quot;https://storage.tulipe.org/wallets/unknown.svg&quot;</code>) <br><br></li></ul></li></ul></li></ul></li></ul><p>Here is an example of <code>defaults</code> configuration:</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FFA657;">defaults</span><span style="color:#C9D1D9;">: {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">networks</span><span style="color:#C9D1D9;">: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// ---- override default networks&#39; icon URL</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">icon</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&quot;https://mydomain.com/my-custom-icon.svg&quot;</span><span style="color:#C9D1D9;">,</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div>`,10),t=[o];function i(r,p,c,u,d,f){return e(),n("div",null,t)}const y=s(l,[["render",i]]);export{b as __pageData,y as default};
