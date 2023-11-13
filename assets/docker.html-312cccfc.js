import{_ as l,X as c,Y as d,Z as e,a1 as n,$ as a,a0 as o,a3 as t,C as r}from"./framework-a5f096d1.js";const p={},u={href:"https://github.com/openGemini/openGemini",target:"_blank",rel:"noopener noreferrer"},m=e("h2",{id:"使用-docker-体验",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用-docker-体验","aria-hidden":"true"},"#"),n(" 使用 docker 体验")],-1),h={href:"https://www.docker.com/products/docker-desktop/",target:"_blank",rel:"noopener noreferrer"},k=t(`<li><p>使用最新的 openGemini 容器镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> opengemini opengeminidb/opengemini-server:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者指定版本的容器镜像：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> opengemini opengeminidb/opengemini-server:v1.0.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>使用openGemini cli 连接：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> opengemini ts-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,2),_=e("p",null,"基本操作",-1),b=t(`<li><p>停止/删除容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop opengemini
<span class="token function">docker</span> <span class="token function">rm</span> opengemini
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),v=e("p",null,"更多用法请参考：",-1),g={href:"https://hub.docker.com/r/opengeminidb/opengemini-server",target:"_blank",rel:"noopener noreferrer"};function f(x,G){const i=r("RouterLink"),s=r("ExternalLinkIcon");return c(),d("div",null,[e("p",null,[n("本节首先介绍如何通过 Docker 快速体验 openGemini，然后介绍如何在 Docker 环境下体验 openGemini 的写入和查询功能。如果你不熟悉 Docker，请使用"),a(i,{to:"/zh/guide/quick_start/get_started.html"},{default:o(()=>[n("手动安装")]),_:1}),n("的方式快速体验。如果您希望为 openGemini 贡献代码或对内部技术实现感兴趣，请参考 "),e("a",u,[n("openGemini GitHub"),a(s)]),n(" 主页下载源码构建和安装。")]),m,e("ol",null,[e("li",null,[e("p",null,[n("安装 "),e("a",h,[n("Docker"),a(s)]),n(" 环境。")])]),k,e("li",null,[_,e("p",null,[n("可以参考"),a(i,{to:"/zh/guide/quick_start/get_started.html#%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C-ts-cli"},{default:o(()=>[n("安装部署章节的基本操作")]),_:1})])]),b,e("li",null,[v,e("p",null,[e("a",g,[n("docker hub官网"),a(s)])])])])])}const C=l(p,[["render",f],["__file","docker.html.vue"]]);export{C as default};
