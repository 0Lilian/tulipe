import{r as l,o as c,f as d,w as e,e as t,u as a,a as s,t as i,b as m,g as n,I as f,c as g}from"./app.a0687218.js";const h=s("h1",null,"My DApp",-1),y=s("p",null,"A wallet is connected !",-1),k=s("p",null,"No wallet connected yet.",-1),C=m(" Cannot connect to Ethereum network, please check your Metamask. "),w={__name:"SetupYourDappDemo",setup(u){const o={networks:[{id:1}],wallets:[{name:"metamask"}]};return(_,r)=>{const p=l("VEDemoCreator");return c(),d(p,{config:o},{default:e(()=>[h,t(a(n).OnSafe,null,{default:e(()=>[t(a(n).provider.OnSafe,null,{safe:e(()=>[t(a(f)),t(a(n).signer.OnSafe,null,{safe:e(()=>[y,s("p",null,"Its address is : '"+i(a(n).signer.address.value)+"'",1)]),unsafe:e(()=>[k]),_:1})]),unsafe:e(()=>[C]),_:1})]),_:1})]),_:1})}}},S=JSON.parse('{"title":"","description":"","frontmatter":{"layout":"page"},"headers":[],"relativePath":"guide/get-started/demo/setup-your-dapp.md"}'),D={name:"guide/get-started/demo/setup-your-dapp.md"},v=Object.assign(D,{setup(u){return(o,_)=>{const r=l("ClientOnly");return c(),g("div",null,[t(r,null,{default:e(()=>[t(w)]),_:1})])}}});export{S as __pageData,v as default};