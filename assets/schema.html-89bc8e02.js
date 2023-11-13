import{_ as d,X as u,Y as k,$ as e,a0 as a,Z as n,a1 as s,a3 as t,C as r}from"./framework-a5f096d1.js";const m={},v=t(`<p>本章主要包括如下内容</p><ul><li><a href="#show-tag-keys">SHOW TAG KEYS (查看表中所有TAG字段)</a></li><li><a href="#show-tag-values">SHOW TAG VALUES (查看表中所有TAG字段及其对应的值)</a></li><li><a href="#show-field-keys">SHOW FIELD KEYS (查看表中全部Field字段及其数据类型)</a></li><li><a href="#show-series">SHOW SERIES (查看全部时间线)</a></li><li><a href="#show-series-cardinality">SHOW SERIES CARDINALITY (查询时间线统计数量)</a></li><li><a href="#show-shards">SHOW SHARDS (查看数据分片信息)</a></li><li><a href="#show-shard-groups">SHOW SHARD GROUPS(查看分片组信息)</a></li></ul><h2 id="show-tag-keys" tabindex="-1"><a class="header-anchor" href="#show-tag-keys" aria-hidden="true">#</a> SHOW TAG KEYS</h2><p>查看表中所有TAG字段</p><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> TAG <span class="token keyword">KEYS</span> <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>FROM_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span>OFFSET_CLAUSE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ON &lt;database_name&gt;</code>是可选项。<br><code>FROM</code>子句是可选项。</p><p>如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在openGemini API请求中使用参数<code>db</code>指定数据库。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><ul><li><strong>运行带有<code>ON</code>子句的<code>SHOW TAG KEYS</code>查询</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">KEYS</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span>
name: average_temperature
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_feet
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_pH
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_quality
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">|</span> randtag  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_temperature
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中的tag key。查询结果按measurement的名字进行分组；它展示了每个measurement都有一个名为<code>location</code>的tag key，并且，measurement <code>h2o_quality</code>还具有另外一个tag key <code>randtag</code>。</p><ul><li><strong>运行不带有<code>ON</code>子句的<code>SHOW TAG KEYS</code>查询</strong></li></ul>`,13),b=n("p",null,[s("使用"),n("code",null,"USE <database_name>"),s("指定数据库：")],-1),g=n("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[n("pre",{class:"language-sql"},[n("code",null,[n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"use"),s(` NOAA_water_database
Elapsed: `),n("span",{class:"token number"},"452"),s(`ns
`),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"SHOW"),s(" TAG "),n("span",{class:"token keyword"},"KEYS"),s(`
name: average_temperature
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`

name: h2o_feet
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`

name: h2o_pH
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`

name: h2o_quality
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" randtag  "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`

name: h2o_temperature
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,[s("使用参数"),n("code",null,"db"),s("指定数据库")],-1),h=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-G"),s(),n("span",{class:"token string"},'"http://localhost:8086/query?db=NOAA_water_database&pretty=true"'),s(" --data-urlencode "),n("span",{class:"token string"},'"q=SHOW TAG KEYS"'),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"results"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token string"},'"statement_id"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token number"},"0"),s(`,
            `),n("span",{class:"token string"},'"series"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"average_temperature"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_feet"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_pH"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_quality"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"randtag"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_temperature"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=t(`<ul><li><strong>运行带有多个子句的<code>SHOW TAG KEYS</code>查询</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">KEYS</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">FROM</span> <span class="token string">&quot;h2o_quality&quot;</span> <span class="token keyword">LIMIT</span> <span class="token number">1</span> <span class="token keyword">OFFSET</span> <span class="token number">1</span>
name: h2o_quality
<span class="token operator">+</span><span class="token comment">---------+</span>
<span class="token operator">|</span> tagKey  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+</span>
<span class="token operator">|</span> randtag <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中名为<code>h2o_quality</code>的measurement里的tag key。<code>LIMIT</code>子句将返回的tag key的个数限制为1，<code>OFFSET</code>子句将输出结果偏移一个。</p><ul><li><strong>查看TAG的统计数量</strong> 在某些场景下，仅需要了解TAG数量，不关心具体的TAG，可以使用SHOW TAG KEY CARDINALITY命令，使用方式如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW TAG KEY CARDINALITY [ON &lt;database_name&gt;] [FROM_CLAUSE]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">KEY</span> CARDINALITY
<span class="token comment">#TODO</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-tag-values" tabindex="-1"><a class="header-anchor" href="#show-tag-values" aria-hidden="true">#</a> SHOW TAG VALUES</h2><p>返回数据库中指定tag key的tag value。</p><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> TAG <span class="token keyword">VALUES</span> <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>FROM_CLAUSE<span class="token punctuation">]</span> <span class="token keyword">WITH</span> <span class="token keyword">KEY</span> <span class="token punctuation">[</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>operator<span class="token operator">&gt;</span> <span class="token string">&quot;&lt;tag_key&gt;&quot;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>regular_expression<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&quot;&lt;tag_key1&gt;&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;&lt;tag_key2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">WHERE</span> <span class="token operator">&lt;</span>tag_key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>operator<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;tag_value&gt;&#39;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>regular_expression<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span>OFFSET_CLAUSE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ON &lt;database_name&gt;</code>是可选的。如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在HTTP API请求中使用参数<code>db</code>指定数据库。</p><p><code>WITH</code>子句是必须要有的，它支持指定一个tag key、一个正则表达式或多个tag key。</p><p><code>FROM</code>子句、<code>WHERE</code>子句、<code>LIMIT</code>子句和<code>OFFSET</code>子句是可选的。<code>WHERE</code>子句支持tag比较；在<code>SHOW TAG VALUES</code>查询中，field比较是无效的。</p><p><code>WITH</code>子句和<code>WHERE</code>子句中支持的操作符：</p><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td><code>=</code></td><td>等于</td></tr><tr><td><code>&lt;&gt;</code></td><td>不等于</td></tr><tr><td><code>!=</code></td><td>不等于</td></tr><tr><td><code>=~</code></td><td>匹配</td></tr><tr><td><code>!~</code></td><td>不匹配</td></tr></tbody></table>`,16),w=n("code",null,"FROM",-1),S=n("code",null,"LIMIT、OFFSET",-1),O=t(`<h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><ul><li><strong>运行带有<code>ON</code>子句的<code>SHOW TAG VALUES</code>查询</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">VALUES</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">WITH</span> <span class="token keyword">KEY</span> <span class="token operator">=</span> <span class="token string">&quot;randtag&quot;</span>

name: h2o_quality
<span class="token keyword">key</span>       <span class="token keyword">value</span>
<span class="token comment">---       -----</span>
randtag   <span class="token number">1</span>
randtag   <span class="token number">2</span>
randtag   <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中的tag key <code>randtag</code>的所有tag value。<code>SHOW TAG VALUES</code>将查询结果按measurement的名字进行分组。</p><ul><li><strong>运行不带有<code>ON</code>子句的<code>SHOW TAG KEYS</code>查询</strong></li></ul>`,5),A=n("p",null,[s("使用"),n("code",null,"USE <database_name>"),s("指定数据库：")],-1),q=n("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[n("pre",{class:"language-sql"},[n("code",null,[n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"USE"),s(` NOAA_water_database
`),n("span",{class:"token keyword"},"Using"),s(),n("span",{class:"token keyword"},"database"),s(` NOAA_water_database

`),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"SHOW"),s(" TAG "),n("span",{class:"token keyword"},"VALUES"),s(),n("span",{class:"token keyword"},"WITH"),s(),n("span",{class:"token keyword"},"KEY"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'"randtag"'),s(`

name: h2o_quality
`),n("span",{class:"token keyword"},"key"),s("       "),n("span",{class:"token keyword"},"value"),s(`
`),n("span",{class:"token comment"},"---       -----"),s(`
randtag   `),n("span",{class:"token number"},"1"),s(`
randtag   `),n("span",{class:"token number"},"2"),s(`
randtag   `),n("span",{class:"token number"},"3"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("p",null,[s("使用参数"),n("code",null,"db"),s("指定数据库")],-1),f=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-G"),s(),n("span",{class:"token string"},'"http://localhost:8086/query?db=NOAA_water_database&pretty=true"'),s(" --data-urlencode "),n("span",{class:"token string"},`'q=SHOW TAG VALUES WITH KEY = "randtag"'`),s(`

`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"results"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token string"},'"statement_id"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token number"},"0"),s(`,
            `),n("span",{class:"token string"},'"series"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_quality"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"key"'),s(`,
                        `),n("span",{class:"token string"},'"value"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"randtag"'),s(`,
                            `),n("span",{class:"token string"},'"1"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"randtag"'),s(`,
                            `),n("span",{class:"token string"},'"2"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"randtag"'),s(`,
                            `),n("span",{class:"token string"},'"3"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=t(`<ul><li><strong>运行带有多个子句的<code>SHOW TAG VALUES</code>查询</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">VALUES</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">WITH</span> <span class="token keyword">KEY</span> <span class="token operator">IN</span> <span class="token punctuation">(</span><span class="token string">&quot;location&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;randtag&quot;</span><span class="token punctuation">)</span> <span class="token keyword">WHERE</span> <span class="token string">&quot;randtag&quot;</span> <span class="token operator">=</span><span class="token operator">~</span> <span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">/</span> <span class="token keyword">LIMIT</span> <span class="token number">3</span>

name: h2o_quality
<span class="token keyword">key</span>        <span class="token keyword">value</span>
<span class="token comment">---        -----</span>
location   coyote_creek
location   santa_monica
randtag	   <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询从数据库<code>NOAA_water_database</code>的所有measurement中返回<code>location</code>或<code>randtag</code>的tag value，并且返回的数据还需满足条件：<code>randtag</code>的tag value不为空。<code>LIMIT</code>子句将返回的tag value的个数限制为3。</p><h2 id="show-field-keys" tabindex="-1"><a class="header-anchor" href="#show-field-keys" aria-hidden="true">#</a> SHOW FIELD KEYS</h2><p>返回field key和field value的数据类型。</p><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> FIELD <span class="token keyword">KEYS</span> <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">FROM</span> <span class="token operator">&lt;</span>measurement_name<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),H=n("code",null,"ON <database_name>",-1),I=n("br",null,null,-1),W=n("code",null,"FROM",-1),N=n("code",null,"FROM",-1),K=t(`<p>如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在openGemini API请求中使用参数<code>db</code>指定数据库。</p><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2" aria-hidden="true">#</a> 示例</h3><ul><li><strong>运行带有<code>ON</code>子句的<code>SHOW FIELD KEYS</code>查询</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> FIELD <span class="token keyword">KEYS</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span>

name: average_temperature
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
degrees             <span class="token keyword">float</span>

name: h2o_feet
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
<span class="token keyword">level</span> description   string
water_level         <span class="token keyword">float</span>

name: h2o_pH
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
pH                  <span class="token keyword">float</span>

name: h2o_quality
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
<span class="token keyword">index</span>               <span class="token keyword">float</span>

name: h2o_temperature
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
degrees             <span class="token keyword">float</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中每个measurement的field key以及对应的field value的数据类型。</p><ul><li><strong>运行不带有<code>ON</code>子句的<code>SHOW FIELD KEYS</code>查询</strong></li></ul>`,6),L=n("p",null,[s("使用"),n("code",null,"USE <database_name>"),s("指定数据库：")],-1),x=n("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[n("pre",{class:"language-sql"},[n("code",null,[n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"USE"),s(` NOAA_water_database
`),n("span",{class:"token keyword"},"Using"),s(),n("span",{class:"token keyword"},"database"),s(` NOAA_water_database

`),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"SHOW"),s(" FIELD "),n("span",{class:"token keyword"},"KEYS"),s(`

name: average_temperature
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
degrees             `),n("span",{class:"token keyword"},"float"),s(`

name: h2o_feet
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
`),n("span",{class:"token keyword"},"level"),s(` description   string
water_level         `),n("span",{class:"token keyword"},"float"),s(`

name: h2o_pH
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
pH                  `),n("span",{class:"token keyword"},"float"),s(`

name: h2o_quality
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
`),n("span",{class:"token keyword"},"index"),s("               "),n("span",{class:"token keyword"},"float"),s(`

name: h2o_temperature
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
degrees             `),n("span",{class:"token keyword"},"float"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("p",null,[s("使用参数"),n("code",null,"db"),s("指定数据库")],-1),F=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-G"),s(),n("span",{class:"token string"},'"http://localhost:8086/query?db=NOAA_water_database&pretty=true"'),s(" --data-urlencode "),n("span",{class:"token string"},"'q=SHOW FIELD KEYS'"),s(`

`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"results"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token string"},'"statement_id"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token number"},"0"),s(`,
            `),n("span",{class:"token string"},'"series"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"average_temperature"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"degrees"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_feet"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"level description"'),s(`,
                            `),n("span",{class:"token string"},'"string"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"water_level"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_pH"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"pH"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_quality"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"index"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_temperature"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"degrees"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),G=t(`<ul><li><strong>运行带有<code>FROM</code>子句的<code>SHOW FIELD KEYS</code>查询</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> FIELD <span class="token keyword">KEYS</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">FROM</span> <span class="token string">&quot;h2o_feet&quot;</span>

name: h2o_feet
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
<span class="token keyword">level</span> description   string
water_level         <span class="token keyword">float</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中measurement <code>h2o_feet</code>里的fields key以及对应的field value的数据类型。</p><h2 id="show-series" tabindex="-1"><a class="header-anchor" href="#show-series" aria-hidden="true">#</a> SHOW SERIES</h2><p>返回指定数据库的系列。</p><h3 id="语法-3" tabindex="-1"><a class="header-anchor" href="#语法-3" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> SERIES <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>FROM_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">WHERE</span> <span class="token operator">&lt;</span>tag_key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>operator<span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token string">&#39;&lt;tag_value&gt;&#39;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>regular_expression<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span>OFFSET_CLAUSE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>ON &lt;database_name&gt;</code>是可选的。如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在openGemini API请求中使用参数<code>db</code>指定数据库。</p><p><code>WHERE</code>子句支持<code>tag</code>比较；在<code>SHOW SERIES</code>查询中，<code>field</code>比较是无效的。</p><p><code>WHERE</code>子句中支持的操作符：</p><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td><code>=</code></td><td>等于</td></tr><tr><td><code>&lt;&gt;</code></td><td>不等于</td></tr><tr><td><code>!=</code></td><td>不等于</td></tr><tr><td><code>=~</code></td><td>匹配</td></tr><tr><td><code>!~</code></td><td>不匹配</td></tr></tbody></table>`,11),U=n("code",null,"FROM",-1),Y=n("code",null,"LIMIT、OFFSET",-1),M=t(`<h3 id="示例-3" tabindex="-1"><a class="header-anchor" href="#示例-3" aria-hidden="true">#</a> 示例</h3><ul><li><strong>运行带有<code>ON</code>子句的<code>SHOW SERIES</code>查询</strong></li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> SERIES <span class="token keyword">ON</span> NOAA_water_database
<span class="token operator">+</span><span class="token comment">---------------------------------------------+</span>
<span class="token operator">|</span> <span class="token keyword">key</span>                                         <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------------+</span>
<span class="token operator">|</span> average_temperature<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek   <span class="token operator">|</span>
<span class="token operator">|</span> average_temperature<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica   <span class="token operator">|</span>
<span class="token operator">|</span> h2o_feet<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek              <span class="token operator">|</span>
<span class="token operator">|</span> h2o_feet<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica              <span class="token operator">|</span>
<span class="token operator">|</span> h2o_pH<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek                <span class="token operator">|</span>
<span class="token operator">|</span> h2o_pH<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica                <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_temperature<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek       <span class="token operator">|</span>
<span class="token operator">|</span> h2o_temperature<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">14</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询的输出类似行协议格式。第一个逗号之前的所有内容是<code>measurement</code>的名字。第一个逗号之后的所有内容都是<code>tag key</code>或者<code>tag value</code>。数据库<code>NOAA_water_database</code>有五个不同的<code>measurement</code>和14个不同的系列。</p><ul><li><strong>运行不带有<code>ON</code>子句的<code>SHOW SERIES</code>查询</strong></li></ul>`,5),D=n("p",null,[s("使用"),n("code",null,"USE <database_name>"),s("指定数据库：")],-1),C=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token operator"},">"),s(` USE NOAA_water_database
Elapsed: 561ns
`),n("span",{class:"token operator"},">"),s(` SHOW SERIES
+---------------------------------------------+
`),n("span",{class:"token operator"},"|"),s(" key                                         "),n("span",{class:"token operator"},"|"),s(`
+---------------------------------------------+
`),n("span",{class:"token operator"},"|"),s(" average_temperature,location"),n("span",{class:"token operator"},"="),s("coyote_creek   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" average_temperature,location"),n("span",{class:"token operator"},"="),s("santa_monica   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_feet,location"),n("span",{class:"token operator"},"="),s("coyote_creek              "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_feet,location"),n("span",{class:"token operator"},"="),s("santa_monica              "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_pH,location"),n("span",{class:"token operator"},"="),s("coyote_creek                "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_pH,location"),n("span",{class:"token operator"},"="),s("santa_monica                "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_quality,location"),n("span",{class:"token operator"},"="),s("coyote_creek,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_quality,location"),n("span",{class:"token operator"},"="),s("coyote_creek,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_quality,location"),n("span",{class:"token operator"},"="),s("coyote_creek,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"3"),s(),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_quality,location"),n("span",{class:"token operator"},"="),s("santa_monica,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_quality,location"),n("span",{class:"token operator"},"="),s("santa_monica,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_quality,location"),n("span",{class:"token operator"},"="),s("santa_monica,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"3"),s(),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_temperature,location"),n("span",{class:"token operator"},"="),s("coyote_creek       "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" h2o_temperature,location"),n("span",{class:"token operator"},"="),s("santa_monica       "),n("span",{class:"token operator"},"|"),s(`
+---------------------------------------------+
`),n("span",{class:"token number"},"1"),s(" columns, "),n("span",{class:"token number"},"14"),s(" rows "),n("span",{class:"token keyword"},"in"),s(),n("span",{class:"token builtin class-name"},"set"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),P=n("p",null,[s("使用参数"),n("code",null,"db"),s("指定数据库")],-1),V=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token operator"},">"),s(),n("span",{class:"token function"},"curl"),s(),n("span",{class:"token parameter variable"},"-G"),s(),n("span",{class:"token string"},'"http://localhost:8086/query?db=NOAA_water_database&pretty=true"'),s(" --data-urlencode "),n("span",{class:"token string"},'"q=SHOW SERIES"'),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"results"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token string"},'"statement_id"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token number"},"0"),s(`,
            `),n("span",{class:"token string"},'"series"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"key"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"average_temperature,location=coyote_creek"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"average_temperature,location=santa_monica"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_feet,location=coyote_creek"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_feet,location=santa_monica"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_pH,location=coyote_creek"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_pH,location=santa_monica"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=coyote_creek,randtag=1"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=coyote_creek,randtag=2"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=coyote_creek,randtag=3"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=santa_monica,randtag=1"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=santa_monica,randtag=2"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=santa_monica,randtag=3"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_temperature,location=coyote_creek"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"h2o_temperature,location=santa_monica"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=t(`<ul><li><strong>运行带有多个子句的<code>SHOW SERIES</code>查询</strong></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; SHOW SERIES ON NOAA_water_database FROM &quot;h2o_quality&quot; WHERE &quot;location&quot; = &#39;coyote_creek&#39; LIMIT 2
+---------------------------------------------+
| key                                         |
+---------------------------------------------+
| h2o_quality,location=coyote_creek,randtag=1 |
| h2o_quality,location=coyote_creek,randtag=2 |
+---------------------------------------------+
1 columns, 2 rows in set
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中，与measurement <code>h2o_quality</code>和tag <code>location = coyote_creek</code>相关联的所有系列。<code>LIMIT</code>子句将返回的系列个数限制为2。</p><h2 id="show-series-cardinality" tabindex="-1"><a class="header-anchor" href="#show-series-cardinality" aria-hidden="true">#</a> SHOW SERIES CARDINALITY</h2><p>##TODO</p><h2 id="show-shards" tabindex="-1"><a class="header-anchor" href="#show-shards" aria-hidden="true">#</a> SHOW SHARDS</h2><p>##TODO</p><h2 id="show-shard-groups" tabindex="-1"><a class="header-anchor" href="#show-shard-groups" aria-hidden="true">#</a> SHOW SHARD GROUPS</h2><p>##TODO</p>`,9);function B(X,Z){const p=r("Tabs"),i=r("RouterLink");return u(),k("div",null,[v,e(p,{id:"77",data:[{title:"ts-cli"},{title:"HTTP API"}]},{tab0:a(({title:l,value:o,isActive:c})=>[b,g]),tab1:a(({title:l,value:o,isActive:c})=>[_,h]),_:1}),y,n("p",null,[s("请查阅DML章节获得关于"),e(i,{to:"/zh/guide/query_data/select.html#select"},{default:a(()=>[w,s("子句")]),_:1}),s("、"),e(i,{to:"/zh/guide/query_data/select.html#limit-offset"},{default:a(()=>[S,s("子句")]),_:1}),s("、和正则表达式的介绍。")]),O,e(p,{id:"214",data:[{title:"ts-cli"},{title:"HTTP API"}]},{tab0:a(({title:l,value:o,isActive:c})=>[A,q]),tab1:a(({title:l,value:o,isActive:c})=>[E,f]),_:1}),T,n("p",null,[H,s("是可选的"),I,W,s("子句是可选的。请参考"),e(i,{to:"/zh/guide/query_data/select.html"},{default:a(()=>[N,s("子句")]),_:1}),s("的介绍。")]),K,e(p,{id:"276",data:[{title:"ts-cli"},{title:"HTTP API"}]},{tab0:a(({title:l,value:o,isActive:c})=>[L,x]),tab1:a(({title:l,value:o,isActive:c})=>[R,F]),_:1}),G,n("p",null,[s("参考"),e(i,{to:"/zh/guide/query_data/select.html#select"},{default:a(()=>[U,s("子句")]),_:1}),s("、"),e(i,{to:"/zh/guide/query_data/select.html#limit-offset"},{default:a(()=>[Y,s("子句")]),_:1}),s("、和正则表达式的介绍。")]),M,e(p,{id:"398",data:[{title:"TS-CLI"},{title:"HTTP API"}]},{tab0:a(({title:l,value:o,isActive:c})=>[D,C]),tab1:a(({title:l,value:o,isActive:c})=>[P,V]),_:1}),z])}const j=d(m,[["render",B],["__file","schema.html.vue"]]);export{j as default};
