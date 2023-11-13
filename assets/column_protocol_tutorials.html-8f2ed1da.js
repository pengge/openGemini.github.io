import{_ as e,X as i,Y as n,a3 as l}from"./framework-a5f096d1.js";const r={},a=l(`<p>InfluxDB Line Protocol协议是行协议，数据的解析与路由在写入的开销占比高达50%，对写性能影响很大。因此为提升整体写性能，拥抱大数据开源生态，采用Apache Arrow Flight协议(简称列协议)，建立常连接，使用Apache Arrow Record零拷贝对接内存数据格式Record，用随机均匀打散替代哈希打散方式，保证批量数据的并发写与追加，最大限度地提升写性能与线性度。</p><p>列协议写入目前采用GO API调用，具体流程如下：</p><h2 id="列协议写入" tabindex="-1"><a class="header-anchor" href="#列协议写入" aria-hidden="true">#</a> 列协议写入</h2><h3 id="环境信息" tabindex="-1"><a class="header-anchor" href="#环境信息" aria-hidden="true">#</a> 环境信息</h3><ul><li>go version 1.18+</li><li>grpc v1.49.0</li><li>apache arrow go实现 v0.0.0-20211112161151-bc219186db40</li></ul><h3 id="数据写入步骤" tabindex="-1"><a class="header-anchor" href="#数据写入步骤" aria-hidden="true">#</a> 数据写入步骤</h3><ol><li><p>构造数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>func genArrowRecord(size int) array.Record{
    schema := arrow.NewSchema(
            []arrow.Field{
                {Name: &quot;age&quot;, Type: arrow.PrimitiveTypes.Int64},
                {Name: &quot;height&quot;, Type: arrow.PrimitiveTypes.Float64},
                {Name: &quot;address&quot;, Type: &amp;arrow.StringType{}},
                {Name: &quot;alive&quot;, Type: &amp;arrow.BooleanType{}},
                {Name: &quot;time&quot;, Type: arrow.PrimitiveTypes.Int64},
            },
            nil,
    )

    b := array.NewRecordBuilder(memory.DefaultAllocator, schema)
    defer b.Release()

    for i := 0; i &lt; size; i++ {
            b.Field(0).(*array.Int64Builder).AppendValues([]int64{12, 20, 3, 30}, nil)
            b.Field(1).(*array.Float64Builder).AppendValues([]float64{70.0, 80.0, 90.0, 121.0}, nil)
            b.Field(2).(*array.StringBuilder).AppendValues([]string{&quot;shenzhen&quot;, &quot;shanghai&quot;, &quot;beijin&quot;, &quot;guangzhou&quot;}, nil)
            b.Field(3).(*array.BooleanBuilder).AppendValues([]bool{true, false, true, false}, nil)
            b.Field(4).(*array.Int64Builder).AppendValues([]int64{1629129600000000000, 1629129601000000000, 1629129602000000000, 1629129603000000000}, nil)
    }
    return b.NewRecord()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>建立GRPC网络连接</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Address := &quot;127.0.0.1:8087&quot; 
client, err := flight.NewFlightClient(Address, nil, grpc.WithTransportCredentials(insecure.NewCredentials()))
if err != nil {
		t.Fatal(err)
}
defer client.Close()

doPutClient, _ := client.DoPut(context.WithValue(ctx, Token, token))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>建立写入者writer</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data := genArrowRecord(10)
wr := flight.NewRecordWriter(doPutClient, ipc.WithSchema(data.Schema()))
wr.SetFlightDescriptor(&amp;flight.FlightDescriptor{Path: []string{&quot;{\\&quot;db\\&quot;: \\&quot;db1\\&quot;, \\&quot;rp\\&quot;: \\&quot;rp1\\&quot;, \\&quot;mst\\&quot;: \\&quot;mst1\\&quot;}&quot;}}) //告诉server，这批数据属于的db和rp以及表
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>写入数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wr.Write(data)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,7),d=[a];function t(s,u){return i(),n("div",null,d)}const c=e(r,[["render",t],["__file","column_protocol_tutorials.html.vue"]]);export{c as default};
