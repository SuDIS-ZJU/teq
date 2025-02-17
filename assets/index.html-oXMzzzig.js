import{_ as n,c as r,d as t,e as i,f as a,r as s,o as l}from"./app-Ci9VTA8t.js";const d={};function c(u,e){const o=s("VideoDemo");return l(),r("div",null,[e[0]||(e[0]=t('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>Edge computing is ideally suited for querying populations of fast data streams. However, developing and evaluating edge-based query processing algorithms is challenging due to the decentralized setting and the lack of effective tools. For example, current simulators fail to execute real queries. To rectify these shortcomings, we propose TEQ, a <strong>T</strong>estbed for <strong>E</strong>dge-based <strong>Q</strong>uery processing algorithms, designed expressly to be open, enabling extensible simulation and algorithm deployment, and to be developer-friendly, simplifying otherwise cumbersome simulation, complex algorithm management, and tedious evaluation.</p><p>TEQ encompasses novel techniques to achieve these capabilities, including:</p><ol><li>a streamlined framework for implementing decentralized algorithms as modular, Docker-based executables;</li><li>data and query playback controls to enable reproducible and consistent evaluations;</li><li>mechanisms for transforming runtime metrics into system-wide metrics desired by algorithm developers.</li></ol><p>Currently in the open-source process, TEQ aims to foster community contributions and drive innovation in edge-based query processing.</p>',5)),i(` Unfortunately, in order to deploy all the necessary code to the corresponding docker container, TEQ currently only supports direct source builds. TEQ will be open source for everyone in the near future.

In the near future, we will also introduce a way to use TEQ throgh JAR package. `),e[1]||(e[1]=t('<h2 id="run-teq" tabindex="-1"><a class="header-anchor" href="#run-teq"><span>Run TEQ</span></a></h2><p>Since TEQ uses some Linux kernel tools, TEQ is currently only supported on Linux. On Windows system, you can use WSL to run TEQ.<br> In addition, the TEQ needs the following environments:</p><ul><li>Docker, and the image required by TEQ (the image is automatically downloaded from the image repository when it is run for the first time)</li><li>tc (Traffic Control) for network model. This is part of the Linux kernel and is usually already installed.</li></ul><p>These environments are usually very easy to install.</p><p>Once you have ensured that your environment meets the requirements, you can clone a copy directly from our repository, and in the <code>./src/example</code> folder, you can find an example of using out testbed.</p><p>in this folder, we have a main class <code>Main.java</code> that you can run directly. This class will start the simulator and run the example code.</p><h2 id="implement-your-own-algorithm" tabindex="-1"><a class="header-anchor" href="#implement-your-own-algorithm"><span>Implement Your Own Algorithm</span></a></h2><p>To implement your own algorithm, you need to create a <code>Simulator</code> object to operate the entire simulator first. The <code>Simulator</code> requires a <code>Network</code> class as the <code>networkHost</code> node. If no additional operations are needed, you can directly use the default constructor.</p><p>The simulator by default contains four layers, and for each layer, you need to implement an abstract class to describe the data processing logic at each layer in edge computing. In the example, we implemented a local STkFIQ model based on Flink. You can read the code in the example folder (which is very easy to understand) to learn about the TEQ programming process.</p><p>After adding all the layer needed to the simulator, finally, you can run the simulator by calling the <code>start</code> method of the <code>Simulator</code> object. The simulator will start the simulation process and run the algorithm you implemented.</p>',10)),a(o)])}const p=n(d,[["render",c],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/docs/","title":"Get Started","lang":"en-US","frontmatter":{"title":"Get Started","icon":"book","description":"Introduction Edge computing is ideally suited for querying populations of fast data streams. However, developing and evaluating edge-based query processing algorithms is challen...","head":[["meta",{"property":"og:url","content":"https://sudis-zju.github.io/teq/teq/docs/"}],["meta",{"property":"og:site_name","content":"Project TEQ"}],["meta",{"property":"og:title","content":"Get Started"}],["meta",{"property":"og:description","content":"Introduction Edge computing is ideally suited for querying populations of fast data streams. However, developing and evaluating edge-based query processing algorithms is challen..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-17T11:15:36.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-17T11:15:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Get Started\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-17T11:15:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Yu Lei\\",\\"url\\":\\"https://github.com/leiyu-dev\\"}]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Run TEQ","slug":"run-teq","link":"#run-teq","children":[]},{"level":2,"title":"Implement Your Own Algorithm","slug":"implement-your-own-algorithm","link":"#implement-your-own-algorithm","children":[]}],"git":{"createdTime":1739790936000,"updatedTime":1739790936000,"contributors":[{"name":"lei_yu","username":"lei_yu","email":"1799726703@qq.com","commits":1,"url":"https://github.com/lei_yu"}]},"readingTime":{"minutes":1.66,"words":499},"filePathRelative":"docs/README.md","localizedDate":"February 17, 2025","autoDesc":true}');export{p as comp,h as data};
