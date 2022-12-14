import{_ as s,o as n,c as a,d as e}from"./app.6a6ad51a.js";const h=JSON.parse(`{"title":"Get started ~ Intuition","description":"","frontmatter":{"title":"Get started ~ Intuition","layout":"doc"},"headers":[{"level":2,"title":"Current context","slug":"current-context","link":"#current-context","children":[]},{"level":2,"title":"DApp requirements / problems","slug":"dapp-requirements-problems","link":"#dapp-requirements-problems","children":[]},{"level":2,"title":"Tulipe' approach","slug":"tulipe-approach","link":"#tulipe-approach","children":[{"level":3,"title":"Final words","slug":"final-words","link":"#final-words","children":[]}]},{"level":2,"title":"How does it tastes ? \u{1F60B}","slug":"how-does-it-tastes-\u{1F60B}","link":"#how-does-it-tastes-\u{1F60B}","children":[]}],"relativePath":"guide/get-started/intuition.md"}`),l={name:"guide/get-started/intuition.md"},p=e(`<h1 id="intuition" tabindex="-1">Intuition <a class="header-anchor" href="#intuition" aria-hidden="true">#</a></h1><h2 id="current-context" tabindex="-1">Current context <a class="header-anchor" href="#current-context" aria-hidden="true">#</a></h2><p>Nowadays, libraries like <a href="https://web3js.org/" target="_blank" rel="noreferrer">Web3.js</a> and <a href="https://ethers.org/" target="_blank" rel="noreferrer">Ethers.js</a> provide robust interfaces to interact with EVM blockchains from any Javascript environment.</p><p>Those libraries allow to abstract blockchain-related concepts like nodes, smart contracts, wallets, transactions, etc. as simple JS objects. Thanks to them we can already interact with blockchains from any popular web JS framework like <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a>, <a href="https://vuejs.org/" target="_blank" rel="noreferrer">VueJS</a>, <a href="https://angular.io/" target="_blank" rel="noreferrer">Angular</a>, etc.</p><p>At writing time, React is the mainly used framework for DApps development.</p><h2 id="dapp-requirements-problems" tabindex="-1">DApp requirements / problems <a class="header-anchor" href="#dapp-requirements-problems" aria-hidden="true">#</a></h2><p>So easily requesting EVM blockchain is solved by libraries mentioned above, but a DApp has many other requirements to work properly, here are some of them :</p><ul><li>it has to detect and communicate with user&#39;s wallet</li><li>it has to track on-chain datas to display up-to-date content to users</li><li>it has to provides users with an easy way to interact with chain and contracts</li><li>it has to perform <strong>a lot</strong> of checks to ensure all those actions always remain safe</li></ul><p>However very few libraries exist to help developers to fill those requirements, and it&#39;s especially true for VueJS : <strong>there is currently no complete library to achieve that</strong>.</p><h2 id="tulipe-approach" tabindex="-1">Tulipe&#39; approach <a class="header-anchor" href="#tulipe-approach" aria-hidden="true">#</a></h2><p>Tulipe provides developers with <strong>a fully simplified environment making the development of maintainable, robust and safe DApps a real piece of cake.</strong></p><p>Firstly, the entire DApp configuration is managed in a single file called <code>tulipe.config.js</code>.</p><p>The DApp is represented by a <code>dapp</code> object. This object is initialized with everything required to safely interact with the networks, contracts and wallets defined by the developer in the <code>tulipe.config.js</code> file. By the way, Tulipe comes with 20+ EVM and 5+ wallets pre-configured allowing to use them by simply indicating their chain ID or wallet name in the <code>tulipe.config.js</code> file.</p><p>Then, all the safety checks are internally managed and developers are provided with tools called <a href="/guide/safers/intuition.html">safers</a> allowing them to write safe pieces of code by simply wrapping them in functions or components.</p><p>Also, <a href="/guide/chain-watchers/intuition.html">chain watchers</a> allows developer to efficiently track an on-chain data with a single line of code.</p><p>Finally, a lot of Vue <a href="/guide/components/intuition.html">components</a> are included in order to provide developers with pre-made and robust components for the most common parts of a DApp : <strong>allowing them to focus more on the real innovation of their DApps</strong>.</p><p>All of those components are thought to be flexible and to allows developers to choose to be more or less free :</p><ul><li>they are made of smaller components that can be used to re-build bigger custom components</li><li>3 levels of styling are offered from &quot;unstylized&quot; to &quot;opinionated&quot;, leaving the choice to developers of being more or less helped in the style of their DApp</li></ul><h3 id="final-words" tabindex="-1">Final words <a class="header-anchor" href="#final-words" aria-hidden="true">#</a></h3><p>Here are only exposed the major functionalities offered by Tulipe, there are much more in reality and you can find them in the rest of this documentation.</p><h2 id="how-does-it-tastes-\u{1F60B}" tabindex="-1">How does it tastes ? \u{1F60B} <a class="header-anchor" href="#how-does-it-tastes-\u{1F60B}" aria-hidden="true">#</a></h2><p>Firstly, you can configure your entire DApp frontend in a single file called <code>tulipe.config.js</code>.</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">export</span><span style="color:#C9D1D9;"> tulipeConfig = {</span></span>
<span class="line"><span style="color:#C9D1D9;">  networks: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    id: 1</span></span>
<span class="line"><span style="color:#C9D1D9;">  },</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FFA657;">wallets</span><span style="color:#C9D1D9;">: {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FFA657;">id</span><span style="color:#C9D1D9;">: </span><span style="color:#A5D6FF;">&quot;metamask&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">  }</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>This minimalist configuration file make your DApp frontend support the Ethereum Mainnet network (chain ID : 1) and allows users to connect to it using the <a href="https://metamask.io/" target="_blank" rel="noreferrer">Metamask</a> wallet.</p><p>Then, with Tulipe most of the things you need to build your DApp fronted is available the <code>dapp</code> object. This one can easily be imported from the <code>tulipe</code> package :</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { dapp } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;tulipe&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>For example if you have configured a <code>MyToken</code> ERC20 contract in <code>tulipe.config.js</code>, you can access its Ethers.js object at :</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C9D1D9;">dapp.contracts.MyToken</span></span>
<span class="line"><span style="color:#8B949E;">// Get the balance of userAddress</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">userAddress</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;0xf39Fd6e5...&quot;</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">userBalance</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> dapp.contracts.MyToken.</span><span style="color:#D2A8FF;">balanceOf</span><span style="color:#C9D1D9;">(userAddress)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>And your DApp signer and provider are also accessible under the <code>dapp</code> object :</p><div class="language-js line-numbers-mode"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#C9D1D9;">console.(</span><span style="color:#A5D6FF;">&quot;Connected wallet address is : &quot;</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">+</span><span style="color:#C9D1D9;"> dapp.signer.address)</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">block</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> dapp.provider.</span><span style="color:#D2A8FF;">getBlock</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">123456</span><span style="color:#C9D1D9;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>You don&#39;t have anymore to deal with multiple manual instantiations.</p><div class="tip custom-block"><p class="custom-block-title">Explanations</p><p>When your DApp initializes, Tulipe will populate the <code>dapp</code> object with all the networks, wallets and contracts you have configured, and much more !</p></div><p>Also, while a DApp has a very volatile context (eg. a user can connect/deconnect a wallet, chain connection can be lost, etc.) it may be difficult to always write safe code.</p><p>To solve that, Tulipe provides developers with many safers which helps making a piece of code safe by simply wrapping it in a method / component.</p><p>For example if we want to ensure our interaction with MyToken contract is safe in script :</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { dapp } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;tulipe&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">userAddress</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;0xf39Fd6e5...&quot;</span></span>
<span class="line"><span style="color:#FF7B72;">let</span><span style="color:#C9D1D9;"> userBalance </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">$ref</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">null</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">dapp.contracts.MyToken.</span><span style="color:#D2A8FF;">onReadSafe</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// Will be executed only when MyToken contract will be safe to read</span></span>
<span class="line"><span style="color:#C9D1D9;">  userBalance </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> dapp.contracts.MyToken.</span><span style="color:#D2A8FF;">balanceOf</span><span style="color:#C9D1D9;">(userAddress)</span></span>
<span class="line"><span style="color:#C9D1D9;">})</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">Explanations</p><p>By wrapping our code in the <code>dapp.contracts.MyToken.onReadSafe()</code>method, we ensure that it will be executed only when the <code>MyToken</code> contract is safe to be read.</p></div><p>Or if we want to ensure our interaction with MyToken contract is safe in template :</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#FFA198;">dapp.contracts.MyToken.OnReadSafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">&lt;!-- Will be rendered only when MyToken contract will be safe to read --&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;Address : {{ userAddress }}&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;Balance : {{ userBalance }}&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/</span><span style="color:#FFA198;">dapp.contracts.MyToken.OnReadSafe</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">Explanations</p><p>By wrapping our content in the <code>dapp.contracts.MyToken.OnReadSafe</code>component, we ensure that it will be rendered only when the <code>MyToken</code> contract is safe to be read.</p></div><p>With Tulipe you can also track an on-chain data and it feels like using VueJS watchers methods (<code>watch()</code>, etc.)</p><p>Here is how we can track and display an always up-to-date balance to the user :</p><div class="language-html line-numbers-mode"><button class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { dapp } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;tulipe&quot;</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">userAddress</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&quot;0xf39Fd6e5...&quot;</span></span>
<span class="line"><span style="color:#FF7B72;">let</span><span style="color:#C9D1D9;"> userBalance </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">$ref</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">null</span><span style="color:#C9D1D9;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">dapp.contracts.MyToken.</span><span style="color:#D2A8FF;">watch</span><span style="color:#C9D1D9;">(</span><span style="color:#A5D6FF;">&quot;balanceOf&quot;</span><span style="color:#C9D1D9;">, [userAddress], (</span><span style="color:#FFA657;">newValue</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#8B949E;">// Will be executed each time &#39;balanceOf&#39; of &#39;userAddress&#39; changes</span></span>
<span class="line"><span style="color:#C9D1D9;">  userBalance </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> newValue;</span></span>
<span class="line"><span style="color:#C9D1D9;">})</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;Your balance is : {{ userBalance }} MTK&lt;/</span><span style="color:#7EE787;">p</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">Explanations</p><p>The <code>dapp.contracts.MyToken.watch()</code> method allows to efficiently watch for mutations of an on-chain data and to run a given callback each time it occurs.</p></div><p>Tulipe offers a lot more things to makes safe DApp development a real piece of cake.</p><p>You can find them all on <a href="https://tuli.pe/" target="_blank" rel="noreferrer">its documentations</a>.</p>`,46),o=[p];function t(r,c,i,d,u,y){return n(),a("div",null,o)}const b=s(l,[["render",t]]);export{h as __pageData,b as default};
