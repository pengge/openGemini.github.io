import{_ as d,X as l,Y as s,Z as e,a1 as t,$ as i,a3 as a,C as r}from"./framework-a5f096d1.js";const o={},c=a(`<h2 id="文档仓库" tabindex="-1"><a class="header-anchor" href="#文档仓库" aria-hidden="true">#</a> 文档仓库</h2><p>openGemini的文档仓库是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://github.com/openGemini/openGemini.github.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="文档目录介绍" tabindex="-1"><a class="header-anchor" href="#文档目录介绍" aria-hidden="true">#</a> 文档目录介绍</h2><h3 id="中文文档路径" tabindex="-1"><a class="header-anchor" href="#中文文档路径" aria-hidden="true">#</a> 中文文档路径</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openGemini.github.io/src/zh/guide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="目录解析" tabindex="-1"><a class="header-anchor" href="#目录解析" aria-hidden="true">#</a> 目录解析</h3><table><thead><tr><th style="text-align:left;">目录名称</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">introduction</td><td style="text-align:left;">介绍</td></tr><tr><td style="text-align:left;">quick_start</td><td style="text-align:left;">快速上手</td></tr><tr><td style="text-align:left;">write_data</td><td style="text-align:left;">写数据</td></tr><tr><td style="text-align:left;">query_data</td><td style="text-align:left;">查询数据</td></tr><tr><td style="text-align:left;">schema</td><td style="text-align:left;">元数据</td></tr><tr><td style="text-align:left;">develop</td><td style="text-align:left;">应用开发</td></tr><tr><td style="text-align:left;">features</td><td style="text-align:left;">关键特性</td></tr><tr><td style="text-align:left;">functions</td><td style="text-align:left;">系统函数</td></tr><tr><td style="text-align:left;">security_user</td><td style="text-align:left;">用户与安全</td></tr><tr><td style="text-align:left;">data_migrate</td><td style="text-align:left;">数据迁移</td></tr><tr><td style="text-align:left;">maintenance</td><td style="text-align:left;">数据库运维</td></tr><tr><td style="text-align:left;">kernel</td><td style="text-align:left;">技术内幕</td></tr><tr><td style="text-align:left;">contribution</td><td style="text-align:left;">参与社区</td></tr><tr><td style="text-align:left;">reference</td><td style="text-align:left;">参考指南</td></tr><tr><td style="text-align:left;">versions</td><td style="text-align:left;">版本发布历史</td></tr><tr><td style="text-align:left;">troubleshoot</td><td style="text-align:left;">常见问题</td></tr></tbody></table><h3 id="英文文档路径" tabindex="-1"><a class="header-anchor" href="#英文文档路径" aria-hidden="true">#</a> 英文文档路径</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openGemini.github.io/src/guide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>目录说明与中文文档一致</p><h3 id="图片保存目录" tabindex="-1"><a class="header-anchor" href="#图片保存目录" aria-hidden="true">#</a> 图片保存目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openGemini.github.io/static
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参与贡献" tabindex="-1"><a class="header-anchor" href="#参与贡献" aria-hidden="true">#</a> 参与贡献</h2><h3 id="下载源码" tabindex="-1"><a class="header-anchor" href="#下载源码" aria-hidden="true">#</a> 下载源码</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&gt;</span> <span class="token function">git</span> clone https://github.com/openGemini/openGemini.github.io.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="编译-非必须-编译的目的是要在本地查看文档效果" tabindex="-1"><a class="header-anchor" href="#编译-非必须-编译的目的是要在本地查看文档效果" aria-hidden="true">#</a> 编译(非必须，编译的目的是要在本地查看文档效果）</h3>`,17),h={href:"https://github.com/openGemini/openGemini.github.io",target:"_blank",rel:"noopener noreferrer"},u={href:"https://nodejs.org/en",target:"_blank",rel:"noopener noreferrer"},g=e("li",null,"安装pnpm，版本推荐 v8.6.11",-1),m=e("li",null,[t("安装依赖 "),e("code",null,"pnpm install --frozen-lockfile"),t("或"),e("code",null,"pnpm install --nofrozen-lockfile")],-1),p=e("li",null,[t("本地运行"),e("code",null,"pnpm docs:dev"),t("，浏览器访问"),e("code",null,"http://localhost:8080")],-1),v=a(`<p>运行成功示例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>~$ pnpm docs:dev

&gt; openGemini docs@1.0.0 docs:dev /home/opengemini-1/Documents/openGemini.github.io
&gt; vuepress dev src

VuePress version mismatch: @vuepress/plugin-register-components is using 2.0.0-beta.66 while the main VuePress is using 2.0.0-beta.61
✔ Initializing and preparing data - done in 1.15s

  vite v4.1.4 dev server running at:

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.0.14:8080/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档开发" tabindex="-1"><a class="header-anchor" href="#文档开发" aria-hidden="true">#</a> 文档开发</h3><p>以开发openGemini函数功能的中文文档为例</p>`,4),b=e("li",null,[t("进入"),e("code",null,"functions"),t("目录")],-1),x={href:"http://aggregate.md",target:"_blank",rel:"noopener noreferrer"},f=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
title: 聚合函数
order: 1
---

内容略...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>title</strong>: 表示在文档标题，会在官网文档左侧导航栏上显示</p><p><strong>order</strong>: 文档的顺序，为1表示排最前面，2表示排第二位，以此类推</p><p><strong>其余部分</strong>: 文档内容, 按markdown格式编写</p>`,4),_={href:"https://markdown.com.cn/basic-syntax/",target:"_blank",rel:"noopener noreferrer"},y=a(`<ol start="3"><li><p>增加或在修改文档内容，保存</p></li><li><p>浏览器查看实际效果</p></li></ol><h3 id="文档提交" tabindex="-1"><a class="header-anchor" href="#文档提交" aria-hidden="true">#</a> 文档提交</h3><p>Git提交命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; git add *
&gt; git commit -s -m &quot;chore: update aggregate.md&quot;
&gt; git push HEAD:newbranch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提交PR略</p><h3 id="文档合并" tabindex="-1"><a class="header-anchor" href="#文档合并" aria-hidden="true">#</a> 文档合并</h3><p>提交PR后，后台自动会进行格式验证和项目构建，成功后便可合入，这使在PR下方留言，@committer，请求检视和合入</p><p>Committer</p><table><thead><tr><th>xiangyu5632</th><th>shilinlee</th></tr></thead></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>英文文档亦是如此，可参考上述步骤</p></div>`,10);function k(G,w){const n=r("ExternalLinkIcon");return l(),s("div",null,[c,e("p",null,[t("参考仓库"),e("a",h,[t("README"),i(n)]),t(" 简单来讲分为三步")]),e("ul",null,[e("li",null,[t("安装"),e("a",u,[t("node.js"),i(n)]),t(",推荐最新LTS版本")]),g,m,p]),v,e("ol",null,[b,e("li",null,[t("了解文件格式，打开任何一个MarkDown文件，例如："),e("a",x,[t("aggregate.md"),i(n)]),t("，格式如下：")])]),f,e("p",null,[e("a",_,[t("markdown语法参考"),i(n)])]),y])}const E=d(o,[["render",k],["__file","Document.html.vue"]]);export{E as default};
