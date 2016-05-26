(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-zookeeper","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},"5h1i":function(e,t,n){"use strict";n.r(t),n.d(t,"pageTitle",(function(){return i})),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return o}));n("8x/H"),n("UsjJ"),n("tKM+"),n("q1tI");var a=n("7ljp"),r=n("xCMr");var i="Calling a Thrift service",c={},s={pageTitle:i,_frontmatter:c},l=r.a;function o(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(l,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"calling-a-thrift-service",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h1"},{href:"#calling-a-thrift-service","aria-label":"calling a thrift service permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Calling a Thrift service"),Object(a.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#see-also"}),"See also"))),Object(a.b)("p",null,"Let's assume we have the following Thrift IDL, served at ",Object(a.b)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080/hello"),", just like what we\nused in ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/docs/server-thrift"}),"Running a Thrift service"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-protobuf"}),"namespace java com.example.thrift.hello\n\nservice HelloService {\n    string hello(1:string name)\n}\n")),Object(a.b)("p",null,"Making a call starts from creating a client:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.client.Clients;\n\nHelloService.Iface helloService = Clients.newClient(\n        "tbinary+http://127.0.0.1:8080/hello",\n        HelloService.Iface.class); // or AsyncIface.class\n\nString greeting = helloService.hello("Armerian World");\nassert greeting.equals("Hello, Armerian World!");\n')),Object(a.b)("p",null,"Note that we added the serialization format of the call using the ",Object(a.b)("inlineCode",{parentName:"p"},"+")," operator in the scheme part of the URI.\nBecause we are calling a Thrift server, we should choose: ",Object(a.b)("inlineCode",{parentName:"p"},"tbinary"),", ",Object(a.b)("inlineCode",{parentName:"p"},"tcompact"),", ",Object(a.b)("inlineCode",{parentName:"p"},"tjson")," or ",Object(a.b)("inlineCode",{parentName:"p"},"ttext"),"."),Object(a.b)("p",null,"Since we specified ",Object(a.b)("inlineCode",{parentName:"p"},"HelloService.Iface")," as the client type, ",Object(a.b)("inlineCode",{parentName:"p"},"Clients.newClient()")," will return a synchronous\nclient implementation.  If we specified ",Object(a.b)("inlineCode",{parentName:"p"},"HelloService.AsyncIface"),", the calling code would have looked like\nthe following:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.thrift.ThriftFuture;\nimport com.linecorp.armeria.common.util.CompletionActions;\nimport com.linecorp.armeria.client.Clients;\n\nHelloService.AsyncIface helloService = Clients.newClient(\n        "tbinary+http://127.0.0.1:8080/hello",\n        HelloService.AsyncIface.class);\n\nThriftFuture<String> future = new ThriftFuture<String>();\nhelloService.hello("Armerian World", future);\n\nfuture.thenAccept(response -> assert response.equals("Hello, Armerian World!"))\n      .exceptionally(cause -> {\n          cause.printStackTrace();\n          return null;\n      });\n\n// You can also wait until the call is finished.\nString reply = future.get();\n')),Object(a.b)("p",null,"The example above introduces a new class called ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ThriftFuture:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/thrift/ThriftFuture.html"}),"type://ThriftFuture"),". It is a subtype of Java 8\nCompletableFuture_ that implements Thrift ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/apache/thrift/blob/bd964c7f3460c308161cb6eb90583874a7d8d848/lib/java/src/org/apache/thrift/async/AsyncMethodCallback.java#L22"}),"AsyncMethodCallback"),". Once passed as a callback of an asynchronous\nThrift call, ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ThriftFuture:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/common/thrift/ThriftFuture.html"}),"type://ThriftFuture")," will complete itself when the reply is received or the call\nfails. You'll find it way more convenient to consume the reply than ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/apache/thrift/blob/bd964c7f3460c308161cb6eb90583874a7d8d848/lib/java/src/org/apache/thrift/async/AsyncMethodCallback.java#L22"}),"AsyncMethodCallback")," thanks to the rich set\nof methods provided by ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://docs.oracle.com/javase/10/docs/api/java/util/concurrent/CompletableFuture.html"}),"CompletableFuture"),"."),Object(a.b)("p",null,"You can also use the builder pattern for client construction:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\n\nHelloService.Iface helloService =\n    Clients.builder("tbinary+http://127.0.0.1:8080/hello")\n           .responseTimeoutMillis(10000)\n           .decorator(LoggingClient.newDecorator())\n           .build(HelloService.Iface.class); // or AsyncIface.class\n\nString greeting = helloService.hello("Armerian World");\nassert greeting.equals("Hello, Armerian World!");\n')),Object(a.b)("p",null,"As you might have noticed already, we decorated the client using ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://LoggingClient:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/logging/LoggingClient.html"}),"type://LoggingClient"),", which logs all\nrequests and responses. You might be interested in decorating a client using other decorators, for example\nto gather metrics. Please also refer to ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ClientBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/client/ClientBuilder.html"}),"type://ClientBuilder")," for more configuration options."),Object(a.b)("h2",{id:"see-also",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#see-also","aria-label":"see also permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"See also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"/docs/server-thrift"}),"Running a Thrift service")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"/docs/client-decorator"}),"Decorating a client")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"/docs/client-custom-http-headers"}),"Sending custom HTTP headers"))))}o.isMDXComponent=!0},AMUl:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"nodes":[{"tableOfContents":{"items":[{"url":"#using-armeria-with-dropwizard","title":"Using Armeria with Dropwizard"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-dropwizard-integration"}},{"tableOfContents":{"items":[{"url":"#requestcontext-custom-attributes","title":"RequestContext custom attributes"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-custom-attributes"}},{"tableOfContents":{"items":[{"url":"#logging-contextual-information","title":"Logging contextual information"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-logging"}},{"tableOfContents":{"items":[{"url":"#production-checklist","title":"Production checklist"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-production-checklist"}},{"tableOfContents":{"items":[{"url":"#saml-single-sign-on","title":"SAML Single Sign-On"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-saml"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-spring-webflux","title":"Using Armeria with Spring WebFlux"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-spring-webflux-integration"}},{"tableOfContents":{"items":[{"url":"#structured-logging-with-kafka","title":"Structured logging with Kafka"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging-kafka"}},{"tableOfContents":{"items":[{"url":"#structured-logging","title":"Structured logging"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging"}},{"tableOfContents":{"items":[{"url":"#zipkin-integration","title":"Zipkin integration"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zipkin"}},{"tableOfContents":{"items":[{"url":"#unit-testing-client-and-service","title":"Unit-testing Client and Service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-unit-testing"}},{"tableOfContents":{"items":[{"url":"#service-discovery-with-zookeeper","title":"Service discovery with ZooKeeper"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zookeeper"}},{"tableOfContents":{"items":[{"url":"#circuit-breaker","title":"Circuit breaker"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-circuit-breaker"}},{"tableOfContents":{"items":[{"url":"#sending-custom-http-headers","title":"Sending custom HTTP headers"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-custom-http-headers"}},{"tableOfContents":{"items":[{"url":"#decorating-a-client","title":"Decorating a client"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-decorator"}},{"tableOfContents":{"items":[{"url":"#calling-a-grpc-service","title":"Calling a gRPC service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-grpc"}},{"tableOfContents":{"items":[{"url":"#calling-an-http-service","title":"Calling an HTTP service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-http"}},{"tableOfContents":{"items":[{"url":"#retrofit-integration","title":"Retrofit integration"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retrofit"}},{"tableOfContents":{"items":[{"url":"#automatic-retry","title":"Automatic retry"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retry"}},{"tableOfContents":{"items":[{"url":"#client-side-load-balancing-and-service-discovery","title":"Client-side load balancing and service discovery"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-service-discovery"}},{"tableOfContents":{"items":[{"url":"#calling-a-thrift-service","title":"Calling a Thrift service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-thrift"}},{"tableOfContents":{"items":[{"url":"#overriding-client-timeouts","title":"Overriding client timeouts"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-timeouts"}},{"tableOfContents":{"items":[{"url":"#user-manual","title":"User manual"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"index"}},{"tableOfContents":{"items":[{"url":"#writing-an-access-log","title":"Writing an access log"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-access-log"}},{"tableOfContents":{"items":[{"url":"#server-basics","title":"Server basics"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-basics"}},{"tableOfContents":{"items":[{"url":"#configuring-cors","title":"Configuring CORS"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-cors"}},{"tableOfContents":{"items":[{"url":"#decorating-a-service","title":"Decorating a service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-decorator"}},{"tableOfContents":{"items":[{"url":"#annotated-services","title":"Annotated services"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-annotated-service"}},{"tableOfContents":{"items":[{"url":"#browsing-and-invoking-services-with-docservice","title":"Browsing and invoking services with DocService"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-docservice"}},{"tableOfContents":{"items":[{"url":"#running-a-grpc-service","title":"Running a gRPC service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-grpc"}},{"tableOfContents":{"items":[{"url":"#serving-static-files","title":"Serving static files"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-http-file"}},{"tableOfContents":{"items":[{"url":"#embedding-a-servlet-container","title":"Embedding a servlet container"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-servlet"}},{"tableOfContents":{"items":[{"url":"#serving-server-sent-events","title":"Serving Server-Sent Events"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-sse"}},{"tableOfContents":{"items":[{"url":"#running-a-thrift-service","title":"Running a Thrift service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-thrift"}},{"tableOfContents":{"items":[{"url":"#setting-up-a-project","title":"Setting up a project"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"setup"}}]}}}')},xCMr:function(e,t,n){"use strict";n("UsjJ");var a=n("AMUl"),r=n("q1tI"),i=n.n(r),c=n("/94A"),s=n("+ejy");t.a=function(e){var t=a.data.allMdx.nodes;return i.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-client-thrift-mdx-70472c259e88f3a4ae94.js.map