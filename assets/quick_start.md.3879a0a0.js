import{_ as s,o as n,h as a,Q as l}from"./chunks/framework.79314373.js";const p="/assets/img.6ea216cb.png",e="/assets/img_1.60f8a950.png",g=JSON.parse('{"title":"快速开始 | PlantUml","description":"","frontmatter":{"title":"快速开始","head":[["link",{"rel":"canonical","href":"https://umlcn.com/quick_start.html"}],["meta",{"name":"keywords","content":"快速开始 | PlantUml | PlantUml | UMLCn ｜ 软件方法 | NoGeek ｜不止极客 | UML中国 | UML ｜ PlantUML ｜不止极客,nogeek,educode,教育编程,编程教育|Java基础, 多线程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, 系统设计, 分布式, RPC, 高可用, 高并发"}],["meta",{"name":"og:url","content":"https://umlcn.com"}],["meta",{"name":"og:type","content":"website"}],["meta",{"name":"og:image","content":"https://umlcn.com/og.png"}],["meta",{"name":"og:title","content":"快速开始 | PlantUml | PlantUml | UMLCn ｜ 软件方法 | NoGeek ｜不止极客"}],["meta",{"name":"og:description","content":"快速开始 | PlantUml | PlantUml | UMLCn ｜ 软件方法 | NoGeek ｜不止极客 | 始于极客，不止极客｜educode｜educode.cn|nogeek|nogeek.cn｜CTO|架构师｜后端组长｜创业者｜高并发｜高性能｜高可用|技术合伙人｜架构咨询"}],["meta",{"name":"twitter:site","content":"https://umlcn.com"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:creator","content":"nogeek.cn"}],["meta",{"name":"twitter:title","content":"快速开始 | PlantUml | PlantUml | UMLCn ｜ 软件方法 | NoGeek ｜不止极客"}],["meta",{"name":"twitter:description","content":"快速开始 | PlantUml | PlantUml | UMLCn ｜ 软件方法 | NoGeek ｜不止极客 | 始于极客，不止极客｜educode｜educode.cn|nogeek|nogeek.cn｜CTO|架构师｜后端组长｜创业者｜高并发｜高性能｜高可用|技术合伙人｜架构咨询"}],["meta",{"name":"twitter:image","content":"https://umlcn.com/og.png"}],["meta",{"name":"baidu-site-verification","content":"codeva-E8fDj2NXib"}],["meta",{"name":"msvalidate.01","content":"9F2D57CFC59E8031212A166878638B15"}]]},"headers":[],"relativePath":"quick_start.md","filePath":"quick_start.md","lastUpdated":1740372378000}'),t={name:"quick_start.md"},o=l(`<h1 id="核心秘诀" tabindex="-1">核心秘诀 <a class="header-anchor" href="#核心秘诀" aria-label="Permalink to &quot;核心秘诀&quot;">​</a></h1><p>编写的 plantUML 文件之时，添加一行秘密文件</p><div class="language-plantuml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plantuml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">include </span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//f.umlcn.com/c4.puml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">!</span><span style="color:#24292E;">include </span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//f.umlcn.com/c4.puml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>牢记于心，然后就可以做了，这里的下边是一个例子，新旧时序图就差一行代码，但是天壤之别，完全是因为 <code>!include https://f.umlcn.com/c4.puml</code> 这一行代码的功劳</p><blockquote><p>相关 plantuml语法 看这里：<a href="/plantuml语法/">plantuml语法</a></p></blockquote><h2 id="旧时序图" tabindex="-1">旧时序图 <a class="header-anchor" href="#旧时序图" aria-label="Permalink to &quot;旧时序图&quot;">​</a></h2><h3 id="旧时序图-文本文档" tabindex="-1">旧时序图-文本文档 <a class="header-anchor" href="#旧时序图-文本文档" aria-label="Permalink to &quot;旧时序图-文本文档&quot;">​</a></h3><div class="language-plantuml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plantuml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@startuml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">actor 架构师</span></span>
<span class="line"><span style="color:#E1E4E8;">participant </span><span style="color:#9ECBFF;">&quot;&lt;b&gt;&lt;font size=20&gt;UMLcn.com&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UMLcn</span></span>
<span class="line"><span style="color:#E1E4E8;">actor 老板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">UMLcn </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UMLcn</span><span style="color:#E1E4E8;">: 梳理建模相关知识精华</span></span>
<span class="line"><span style="color:#E1E4E8;">activate UMLcn</span></span>
<span class="line"><span style="color:#E1E4E8;">deactivate UMLcn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">架构师 </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UMLcn</span><span style="color:#E1E4E8;"> : 学习架构建模知识</span></span>
<span class="line"><span style="color:#E1E4E8;">activate 架构师</span></span>
<span class="line"><span style="color:#E1E4E8;">deactivate 架构师</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">架构师 </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">老板</span><span style="color:#E1E4E8;"> : 升职加薪</span></span>
<span class="line"><span style="color:#E1E4E8;">activate 老板</span></span>
<span class="line"><span style="color:#E1E4E8;">deactivate 老板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">footer </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">@nogeek.cn</span></span>
<span class="line"><span style="color:#E1E4E8;">@enduml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@startuml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">actor 架构师</span></span>
<span class="line"><span style="color:#24292E;">participant </span><span style="color:#032F62;">&quot;&lt;b&gt;&lt;font size=20&gt;UMLcn.com&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UMLcn</span></span>
<span class="line"><span style="color:#24292E;">actor 老板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">UMLcn </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UMLcn</span><span style="color:#24292E;">: 梳理建模相关知识精华</span></span>
<span class="line"><span style="color:#24292E;">activate UMLcn</span></span>
<span class="line"><span style="color:#24292E;">deactivate UMLcn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">架构师 </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UMLcn</span><span style="color:#24292E;"> : 学习架构建模知识</span></span>
<span class="line"><span style="color:#24292E;">activate 架构师</span></span>
<span class="line"><span style="color:#24292E;">deactivate 架构师</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">架构师 </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">老板</span><span style="color:#24292E;"> : 升职加薪</span></span>
<span class="line"><span style="color:#24292E;">activate 老板</span></span>
<span class="line"><span style="color:#24292E;">deactivate 老板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">footer </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">@nogeek.cn</span></span>
<span class="line"><span style="color:#24292E;">@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h3 id="旧时序图-图片" tabindex="-1">旧时序图-图片 <a class="header-anchor" href="#旧时序图-图片" aria-label="Permalink to &quot;旧时序图-图片&quot;">​</a></h3><p><img src="`+p+`" alt="img.png"></p><h2 id="新时序图" tabindex="-1">新时序图 <a class="header-anchor" href="#新时序图" aria-label="Permalink to &quot;新时序图&quot;">​</a></h2><h3 id="新时序图-文本文档" tabindex="-1">新时序图-文本文档 <a class="header-anchor" href="#新时序图-文本文档" aria-label="Permalink to &quot;新时序图-文本文档&quot;">​</a></h3><div class="language-plantuml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">plantuml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">@startuml</span></span>
<span class="line"><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">include </span><span style="color:#B392F0;">https</span><span style="color:#E1E4E8;">:</span><span style="color:#6A737D;">//f.umlcn.com/c4.puml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">actor 架构师</span></span>
<span class="line"><span style="color:#E1E4E8;">participant </span><span style="color:#9ECBFF;">&quot;&lt;b&gt;&lt;font size=20&gt;UMLcn.com&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">as</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UMLcn</span></span>
<span class="line"><span style="color:#E1E4E8;">actor 老板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">UMLcn </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UMLcn</span><span style="color:#E1E4E8;">: 梳理建模相关知识精华</span></span>
<span class="line"><span style="color:#E1E4E8;">activate UMLcn</span></span>
<span class="line"><span style="color:#E1E4E8;">deactivate UMLcn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">架构师 </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">UMLcn</span><span style="color:#E1E4E8;"> : 学习架构建模知识</span></span>
<span class="line"><span style="color:#E1E4E8;">activate 架构师</span></span>
<span class="line"><span style="color:#E1E4E8;">deactivate 架构师</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">架构师 </span><span style="color:#F97583;">-&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">老板</span><span style="color:#E1E4E8;"> : 升职加薪</span></span>
<span class="line"><span style="color:#E1E4E8;">activate 老板</span></span>
<span class="line"><span style="color:#E1E4E8;">deactivate 老板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">footer </span><span style="color:#F97583;">&lt;</span><span style="color:#E1E4E8;">b</span><span style="color:#F97583;">&gt;</span><span style="color:#E1E4E8;">@nogeek.cn</span></span>
<span class="line"><span style="color:#E1E4E8;">@enduml</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@startuml</span></span>
<span class="line"><span style="color:#D73A49;">!</span><span style="color:#24292E;">include </span><span style="color:#6F42C1;">https</span><span style="color:#24292E;">:</span><span style="color:#6A737D;">//f.umlcn.com/c4.puml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">actor 架构师</span></span>
<span class="line"><span style="color:#24292E;">participant </span><span style="color:#032F62;">&quot;&lt;b&gt;&lt;font size=20&gt;UMLcn.com&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">as</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UMLcn</span></span>
<span class="line"><span style="color:#24292E;">actor 老板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">UMLcn </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UMLcn</span><span style="color:#24292E;">: 梳理建模相关知识精华</span></span>
<span class="line"><span style="color:#24292E;">activate UMLcn</span></span>
<span class="line"><span style="color:#24292E;">deactivate UMLcn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">架构师 </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">UMLcn</span><span style="color:#24292E;"> : 学习架构建模知识</span></span>
<span class="line"><span style="color:#24292E;">activate 架构师</span></span>
<span class="line"><span style="color:#24292E;">deactivate 架构师</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">架构师 </span><span style="color:#D73A49;">-&gt;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">老板</span><span style="color:#24292E;"> : 升职加薪</span></span>
<span class="line"><span style="color:#24292E;">activate 老板</span></span>
<span class="line"><span style="color:#24292E;">deactivate 老板</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">footer </span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">b</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">@nogeek.cn</span></span>
<span class="line"><span style="color:#24292E;">@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="新时序图-图片" tabindex="-1">新时序图-图片 <a class="header-anchor" href="#新时序图-图片" aria-label="Permalink to &quot;新时序图-图片&quot;">​</a></h3><p><img src="`+e+'" alt="img_1.png"></p>',15),c=[o];function r(i,E,y,m,u,b){return n(),a("div",null,c)}const h=s(t,[["render",r]]);export{g as __pageData,h as default};
