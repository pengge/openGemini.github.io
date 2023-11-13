import{_ as n,X as s,Y as a,a3 as e}from"./framework-a5f096d1.js";const t={},p=e(`<h1 id="最小拓扑架构" tabindex="-1"><a class="header-anchor" href="#最小拓扑架构" aria-hidden="true">#</a> 最小拓扑架构</h1><p>本文档介绍 openGemini 集群最小部署的拓扑架构。</p><h2 id="拓扑信息" tabindex="-1"><a class="header-anchor" href="#拓扑信息" aria-hidden="true">#</a> 拓扑信息</h2><table><thead><tr><th style="text-align:left;">实例</th><th style="text-align:left;">个数</th><th style="text-align:left;">物理机配置</th><th style="text-align:left;">IP</th><th style="text-align:left;">配置</th></tr></thead><tbody><tr><td style="text-align:left;">ts-sql</td><td style="text-align:left;">4</td><td style="text-align:left;">16 VCore 32 GiB 100 GiB 用于存储</td><td style="text-align:left;">192.168.1.1 192.168.1.2 192.168.1.3 192.168.1.4</td><td style="text-align:left;">默认端口 全局目录配置</td></tr><tr><td style="text-align:left;">ts-meta</td><td style="text-align:left;">3</td><td style="text-align:left;">4 VCore 8 GiB 100 GiB 用于存储</td><td style="text-align:left;">192.168.1.1 192.168.1.2 192.168.1.3</td><td style="text-align:left;">默认端口 全局目录配置</td></tr><tr><td style="text-align:left;">ts-store</td><td style="text-align:left;">4</td><td style="text-align:left;">16 VCore 32 GiB 2 TiB (NVMe SSD) 用于存储</td><td style="text-align:left;">192.168.1.1 192.168.1.2 192.168.1.3 192.168.1.4</td><td style="text-align:left;">默认端口 全局目录配置</td></tr></tbody></table><h2 id="拓扑模版" tabindex="-1"><a class="header-anchor" href="#拓扑模版" aria-hidden="true">#</a> 拓扑模版</h2><details><summary>最小配置模板</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
  <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&quot;root&quot;</span>
  <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/logs&quot;</span>
  <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
<span class="token key atrule">ts-meta</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.1
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.2
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.3
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
<span class="token key atrule">ts-sql</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.1
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.2
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.3
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.4
<span class="token key atrule">ts-store</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.1
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data&quot;</span>
    <span class="token key atrule">meta_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.2
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data&quot;</span>
    <span class="token key atrule">meta_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.3
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data&quot;</span>
    <span class="token key atrule">meta_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.4
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data&quot;</span>
    <span class="token key atrule">meta_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><br><details><summary>最小配置模板详解</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Global variables are applied to all deployments and used as the default value of</span>
<span class="token comment"># the deployments if a specific deployment value is missing.</span>
<span class="token key atrule">global</span><span class="token punctuation">:</span>
  <span class="token comment"># SSH port of servers in the managed cluster.</span>
  <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
  <span class="token comment"># user who started the openGemini process.</span>
  <span class="token key atrule">user</span><span class="token punctuation">:</span> <span class="token string">&quot;gemini&quot;</span>
  <span class="token comment"># openGemini Cluster log file storage directory.</span>
  <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/logs&quot;</span>
  <span class="token comment"># Storage directory for cluster deployment files, startup scripts, and configuration files.</span>
  <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
  <span class="token comment"># operating system, linux/darwin.</span>
  <span class="token key atrule">os</span><span class="token punctuation">:</span> <span class="token string">&quot;linux&quot;</span>
  <span class="token comment"># Supported values: &quot;amd64&quot;, &quot;arm64&quot; (default: &quot;amd64&quot;).</span>
  <span class="token key atrule">arch</span><span class="token punctuation">:</span> <span class="token string">&quot;amd64&quot;</span>

<span class="token comment"># Server configs are used to specify the configuration of ts-meta Servers.</span>
<span class="token key atrule">ts-meta</span><span class="token punctuation">:</span>
  <span class="token comment"># The ip address of the ts-meta Server.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.1
    <span class="token comment"># SSH port of the server. (same on same server)</span>
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token comment"># [meta].http-bind-address in openGemini.conf.</span>
    <span class="token key atrule">client_port</span><span class="token punctuation">:</span> <span class="token number">8091</span>
    <span class="token comment"># [meta].rpc-bind-address in openGemini.conf.</span>
    <span class="token key atrule">peer_port</span><span class="token punctuation">:</span> <span class="token number">8092</span>
    <span class="token comment"># [meta].bind-address in openGemini.conf.</span>
    <span class="token key atrule">raft_port</span><span class="token punctuation">:</span> <span class="token number">8088</span>
    <span class="token comment"># [gossip].meta-bind-port in openGemini.conf.</span>
    <span class="token key atrule">gossip_port</span><span class="token punctuation">:</span> <span class="token number">8010</span>
    <span class="token comment"># [meta].dir in openGemini.conf.</span>
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
    <span class="token comment"># openGemini Cluster log file storage directory. (same on same server)</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token comment"># Storage directory for cluster deployment files, startup scripts, and configuration files. (same on same server)</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.2
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token key atrule">client_port</span><span class="token punctuation">:</span> <span class="token number">8091</span>
    <span class="token key atrule">peer_port</span><span class="token punctuation">:</span> <span class="token number">8092</span>
    <span class="token key atrule">raft_port</span><span class="token punctuation">:</span> <span class="token number">8088</span>
    <span class="token key atrule">gossip_port</span><span class="token punctuation">:</span> <span class="token number">8010</span>
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.3
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token key atrule">client_port</span><span class="token punctuation">:</span> <span class="token number">8091</span>
    <span class="token key atrule">peer_port</span><span class="token punctuation">:</span> <span class="token number">8092</span>
    <span class="token key atrule">raft_port</span><span class="token punctuation">:</span> <span class="token number">8088</span>
    <span class="token key atrule">gossip_port</span><span class="token punctuation">:</span> <span class="token number">8010</span>
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/meta&quot;</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>

<span class="token comment"># Server configs are used to specify the configuration of ts-sql Servers.</span>
<span class="token key atrule">ts-sql</span><span class="token punctuation">:</span>
  <span class="token comment"># The ip address of the ts-sql Server.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.1
    <span class="token comment"># SSH port of the server. (same on same server)</span>
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token comment"># [http].bind-address in openGemini.conf.</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8086</span>
    <span class="token comment"># [http].flight-address in openGemini.conf.</span>
    <span class="token key atrule">flight_port</span><span class="token punctuation">:</span> <span class="token number">8087</span>
    <span class="token comment"># openGemini Cluster log file storage directory. (same on same server)</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token comment"># Storage directory for cluster deployment files, startup scripts, and configuration files. (same on same server)</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.2
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8086</span>
    <span class="token key atrule">flight_port</span><span class="token punctuation">:</span> <span class="token number">8087</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.3
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8086</span>
    <span class="token key atrule">flight_port</span><span class="token punctuation">:</span> <span class="token number">8087</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>

<span class="token comment"># Server configs are used to specify the configuration of ts-store Servers.</span>
<span class="token key atrule">ts-store</span><span class="token punctuation">:</span>
  <span class="token comment"># The ip address of the ts-store Server.</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.1
    <span class="token comment"># SSH port of the server. (same on same server)</span>
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token comment"># [data].store-ingest-addr in openGemini.conf.</span>
    <span class="token key atrule">ingest_port</span><span class="token punctuation">:</span> <span class="token number">8400</span>
    <span class="token comment"># [data].store-select-addr in openGemini.conf.</span>
    <span class="token key atrule">select_port</span><span class="token punctuation">:</span> <span class="token number">8401</span>
    <span class="token comment"># [gossip].store-bind-port in openGemini.conf.</span>
    <span class="token key atrule">gossip_port</span><span class="token punctuation">:</span> <span class="token number">8011</span>
    <span class="token comment"># [data].store-data-dir &amp; [data].store-wal-dir in openGemini.conf.</span>
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data&quot;</span>
    <span class="token comment"># [data].store-meta-dir in openGemini.conf.</span>
    <span class="token key atrule">meta_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data/meta&quot;</span>
    <span class="token comment"># openGemini Cluster log file storage directory. (same on same server)</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token comment"># Storage directory for cluster deployment files, startup scripts, and configuration files. (same on same server)</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.2
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token key atrule">ingest_port</span><span class="token punctuation">:</span> <span class="token number">8400</span>
    <span class="token key atrule">select_port</span><span class="token punctuation">:</span> <span class="token number">8401</span>
    <span class="token key atrule">gossip_port</span><span class="token punctuation">:</span> <span class="token number">8011</span>
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data&quot;</span>
    <span class="token key atrule">meta_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data/meta&quot;</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
  <span class="token punctuation">-</span> <span class="token key atrule">host</span><span class="token punctuation">:</span> 192.168.1.3
    <span class="token key atrule">ssh_port</span><span class="token punctuation">:</span> <span class="token number">22</span>
    <span class="token key atrule">ingest_port</span><span class="token punctuation">:</span> <span class="token number">8400</span>
    <span class="token key atrule">select_port</span><span class="token punctuation">:</span> <span class="token number">8401</span>
    <span class="token key atrule">gossip_port</span><span class="token punctuation">:</span> <span class="token number">8011</span>
    <span class="token key atrule">data_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data&quot;</span>
    <span class="token key atrule">meta_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-data/data/meta&quot;</span>
    <span class="token key atrule">log_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy/log&quot;</span>
    <span class="token key atrule">deploy_dir</span><span class="token punctuation">:</span> <span class="token string">&quot;/gemini-deploy&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,8),l=[p];function i(o,c){return s(),a("div",null,l)}const r=n(t,[["render",i],["__file","minimal_deployment_topology.html.vue"]]);export{r as default};
