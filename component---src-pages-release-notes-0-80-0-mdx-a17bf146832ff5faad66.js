(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/f20":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return b}));a("8x/H"),a("UsjJ"),a("tKM+"),a("q1tI");var n=a("7ljp"),r=a("JkCF");var i={},s={_frontmatter:i},c=r.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"new-features",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#new-features","aria-label":"new features permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"New features"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A user now can see the content of HTTP request/response in logs. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1574"}),"#1574")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = new ServerBuilder();\n// Enables previewing the content with the maximum length of 100 for textual contents.\nsb.contentPreview(100);\n\n// A user can use their customized previewer factory.\nsb.contentPreviewerFactory((ctx, headers) -> {\n    return ContentPreviewer.ofBinary(100, byteBuf -> {\n        byte[] contents = new byte[Math.min(byteBuf.readableBytes(), 100)];\n        byteBuf.readBytes(contents);\n        return BaseEncoding.base16().encode(contents);\n    });\n});\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added ",Object(n.b)("inlineCode",{parentName:"p"},"ClientRequestContextBuilder")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ServiceRequestContextBuilder"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1548"}),"#1548")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A user can create a mock of ",Object(n.b)("inlineCode",{parentName:"li"},"RequestContext"),"."),Object(n.b)("li",{parentName:"ul"},"A user can emulate an incoming request and feed it into his or her processing pipeline.")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'@Test\npublic void testService() throws Exception {\n    // Given\n    HttpRequest req = HttpRequest.of(HttpMethod.POST, "/greet",\n                                     MediaType.JSON_UTF_8,\n                                     "{ \\"name\\": \\"foo\\" }");\n    ServiceRequestContext sctx = ServiceRequestContext.of(req);\n\n    // When\n    HttpResponse res = service.serve(sctx, req);\n\n    // Then\n    AggregatedHttpMessage aggregatedRes = res.aggregate().get();\n    assertEquals(200, aggregatedRes.status().code());\n}\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A user can use ",Object(n.b)("inlineCode",{parentName:"p"},"@CorsDecorator")," in annotated services. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1547"}),"#1547")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'sb.annotatedService("/cors6", new Object() {\n\n    @Get("/any/get")\n    @CorsDecorator(origins = "*", exposedHeaders = { "expose_header_1", "expose_header_2" },\n        allowedRequestHeaders = { "allow_request_1", "allow_request_2" },\n        allowedRequestMethods = HttpMethod.GET, maxAge = 3600,\n        preflightRequestHeaders = {\n            @AdditionalHeader(name = "x-preflight-cors", value = "Hello CORS")\n        })\n    public HttpResponse anyoneGet() {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n}\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added ",Object(n.b)("inlineCode",{parentName:"p"},"ClientFactoryBuilder.domainNameResolverCustomizer()")," so that a user can customize the resolver easily. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1553"}),"#1553")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ClientFactory f = new ClientFactoryBuilder()\n    .domainNameResolverCustomizer(resolverBuilder -> {\n        resolverBuilder.maxQueriesPerResolve(10);\n        resolverBuilder.traceEnabled(false);\n    })\n    .build();\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A user can define a custome annotation which attaches other annotations for simplicity. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1560"}),"#1560")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'// Define a custom annotation:\n@ProducesJson\n@LoggingDecorator\n@interface MyApiSpecification {}\n\n// Apply it to the annotated HTTP service:\n@Get("/api")\n@MyApiSpecification // You can use one annotation which holds other other annotations.\npublic Something getSomething() {}\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added ",Object(n.b)("inlineCode",{parentName:"p"},"@AdditionalHeader")," and ",Object(n.b)("inlineCode",{parentName:"p"},"@AdditionalTrailer")," to insert headers easily in annotated services. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1555"}),"#1555"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added a way to add multiple gRPC services with a single method call. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1563"}),"#1563")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"// Before\nGrpcService s = new GrpcServiceBuilder().addService(a)\n                                        .addService(b)\n                                        .build();\n// After\nGrpcService s = new GrpcServiceBuilder().addServices(a, b).build();\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added more shortcut methods for convenience. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1576"}),"#1576")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"HttpRequest req = ...;\nAggregatedHttpMessage aggregated = ...;\nMediaType contentType;\nString content;\n\n// Before\ncontentType = req.headers().contentType();\ncontentType = aggregated.headers().contentType();\ncontent = aggregated.content().toStringUtf8();\n\n// After\ncontentType = req.contentType();\ncontentType = aggregated.contentType();\ncontent = aggregated.contentUtf8();\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("inlineCode",{parentName:"p"},"RequestObject")," is shown in ",Object(n.b)("inlineCode",{parentName:"p"},"DocService"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1557"}),"#1557")," ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added ",Object(n.b)("inlineCode",{parentName:"p"},"verboseSocketExceptions")," flag so that a user can ignore harmless socket-related error message. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1577"}),"#1577"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added automatic directory listing generation to ",Object(n.b)("inlineCode",{parentName:"p"},"HttpFileService"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1573"}),"#1573"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added ",Object(n.b)("inlineCode",{parentName:"p"},"armeria-spring-boot-actuator")," dependency. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1578"}),"#1578")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Works without Spring Web or Webflux."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added metrics related to timeouts. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1589"}),"#1589"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Added ",Object(n.b)("inlineCode",{parentName:"p"},"responseCauseSanitizer")," to ",Object(n.b)("inlineCode",{parentName:"p"},"LoggingDecoratorBuilder"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1594"}),"#1594")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"A user can sanitize the stack trace of ",Object(n.b)("inlineCode",{parentName:"li"},"RequestLog.responseCause()")," or avoid logging the stack trace completely.")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = ...\nfinal Function<Throwable, Throwable> responseCauseSanitizer = cause -> {\n    if (cause instanceOf AnticipatedException) {\n        return null; // Do not log when AnticipatedException is raised. \n    }\n    return cause;\n };\n\n sb.decorator(new LoggingServiceBuilder().requestLogLevel(LogLevel.INFO)                                                    \n                                         .successfulResponseLogLevel(LogLevel.INFO)                                                    \n                                         .responseCauseSanitizer(responseCauseSanitizer)\n                                         .newDecorator());\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"A user can easily send ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.w3.org/TR/2009/WD-eventsource-20090421/"}),"Server-Sent Events"),". ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/line/armeria/issues/1551"}),"#1551")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'public class MyAnnotatedService {\n    @Get("/publisher")\n    @ProducesEventStream\n    public Publisher<ServerSentEvent<?>> publisher() {\n        return Flux.just(ServerSentEvent.ofData("foo"),\n                         ServerSentEvent.ofData("bar"),\n                         ServerSentEvent.ofData("baz"),\n                         ServerSentEvent.ofData("qux"));\n    }\n}\n')))),Object(n.b)("h2",{id:"improvements",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#improvements","aria-label":"improvements permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Improvements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"User-friendly message when ",Object(n.b)("inlineCode",{parentName:"li"},"400 Bad Request")," happens. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1575"}),"#1575")),Object(n.b)("li",{parentName:"ul"},"Enabled DNS query traces by default. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1553"}),"#1553")),Object(n.b)("li",{parentName:"ul"},"Added ",Object(n.b)("inlineCode",{parentName:"li"},"armeria-retry-count")," header when ",Object(n.b)("inlineCode",{parentName:"li"},"RetryingClient")," is used. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1593"}),"#1593"))),Object(n.b)("h2",{id:"bug-fixes",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#bug-fixes","aria-label":"bug fixes permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Bug fixes"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Fixed a bug where ",Object(n.b)("inlineCode",{parentName:"li"},"httpStatus")," tag is not set properly. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1559"}),"#1559")),Object(n.b)("li",{parentName:"ul"},"Do not set ",Object(n.b)("inlineCode",{parentName:"li"},"Content-length")," header when HTTP trailers exist. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1566"}),"#1566")),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where max request length is not set correctly in ",Object(n.b)("inlineCode",{parentName:"li"},"GrpcService")," when the value is ",Object(n.b)("inlineCode",{parentName:"li"},"0")," or ",Object(n.b)("inlineCode",{parentName:"li"},"Long.MAX_VALUE"),". ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1549"}),"#1549")),Object(n.b)("li",{parentName:"ul"},"Fixed a but where gRPC JSON marshaller is initialized even when unnecessary. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1558"}),"#1558")),Object(n.b)("li",{parentName:"ul"},"Fixed a bug where gRPC callbacks are not executed in order. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1600"}),"#1600"))),Object(n.b)("h2",{id:"breaking-change",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#breaking-change","aria-label":"breaking change permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Breaking Change"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The ",Object(n.b)("inlineCode",{parentName:"li"},"HttpHeaders")," in ",Object(n.b)("inlineCode",{parentName:"li"},"AggregatedHttpMessage")," is immutable.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You should call ",Object(n.b)("inlineCode",{parentName:"li"},"headers.toMutable()")," to set or remove a header. ")))),Object(n.b)("h2",{id:"deprecations",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#deprecations","aria-label":"deprecations permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Deprecations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"RequestContext.isTimedOut()")," has been deprecated. ",Object(n.b)("a",Object.assign({parentName:"li"},{href:"https://github.com/line/armeria/issues/1589"}),"#1589"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Use ",Object(n.b)("inlineCode",{parentName:"li"},"ServiceRequestContext.isTimedOut()")," instead.")))),Object(n.b)("h2",{id:"dependencies",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#dependencies","aria-label":"dependencies permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Dependencies"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bouncy Castle 1.60 -> 1.61"),Object(n.b)("li",{parentName:"ul"},"Brave 5.6.0 -> 5.6.1"),Object(n.b)("li",{parentName:"ul"},"java-jwt 3.5.0 -> 3.7.0"),Object(n.b)("li",{parentName:"ul"},"Micrometer 1.1.2 -> 1.1.3"),Object(n.b)("li",{parentName:"ul"},"Netty 4.1.32 -> 4.1.33"),Object(n.b)("li",{parentName:"ul"},"Project Reactor 3.2.5 -> 3.2.6"),Object(n.b)("li",{parentName:"ul"},"protobuf-jackson 0.3.0 -> 0.3.1"),Object(n.b)("li",{parentName:"ul"},"RxJava 2.2.5 -> 2.2.6"),Object(n.b)("li",{parentName:"ul"},"Thrift 0.11.0 -> 0.12.0"),Object(n.b)("li",{parentName:"ul"},"Tomcat 9.0.14 -> 9.0.16, 8.5.37 -> 8.5.38"),Object(n.b)("li",{parentName:"ul"},"spring-boot-starter-actuator has benn removed from the transitive dependencies.")))}b.isMDXComponent=!0},"1lec":function(e){e.exports=JSON.parse('{"/release-notes/0.99.8":"v0.99.8","/release-notes/0.99.7":"v0.99.7","/release-notes/0.99.6":"v0.99.6","/release-notes/0.99.5":"v0.99.5","/release-notes/0.99.4":"v0.99.4","/release-notes/0.99.3":"v0.99.3","/release-notes/0.99.2":"v0.99.2","/release-notes/0.99.1":"v0.99.1","/release-notes/0.99.0":"v0.99.0","/release-notes/0.98.7":"v0.98.7","/release-notes/0.98.6":"v0.98.6","/release-notes/0.98.5":"v0.98.5","/release-notes/0.98.4":"v0.98.4","/release-notes/0.98.3":"v0.98.3","/release-notes/0.98.2":"v0.98.2","/release-notes/0.98.1":"v0.98.1"}')},"2+3N":function(e){e.exports=JSON.parse('{"/news/20200703-newsletter-1":"Armeria Newsletter vol. 1","/news/20200514-newsletter-0":"Armeria Newsletter vol. 0"}')},JkCF:function(e,t,a){"use strict";a("njko"),a("XOI/"),a("UsjJ"),a("Pw7m"),a("LrLq"),a("YmQD"),a("JGbM");var n=a("q1tI"),r=a.n(n),i=a("2+3N"),s=a("1lec"),c=a("+ejy"),b=a("+9zj");t.a=function(e){var t={},a={},n={root:{"Latest news items":"/news","Latest release notes":"/release-notes","Past news items":"/news/list","Past release notes":"/release-notes/list"},"Recent news items":t,"Recent releases":a};Object.entries(i).forEach((function(e){var a=e[0],n=e[1];t[n]=a})),Object.entries(s).forEach((function(e){var t=e[0],n=e[1];a[n]=t}));var l=Object(b.a)(e.location),o=e.version||l.substring(l.lastIndexOf("/")+1);return o.match(/^[0-9]/)||(o=void 0),r.a.createElement(c.a,Object.assign({},e,{candidateMdxNodes:[],index:n,prefix:"release-notes",pageTitle:o?o+" release notes":e.pageTitle,pageTitleSuffix:"Armeria release notes"}),o?r.a.createElement("h1",{id:"release-notes"},r.a.createElement("a",{href:"#release-notes","aria-label":"release notes permalink",className:"anchor before"},r.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"},r.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),o," release notes"):"",e.children)}}}]);
//# sourceMappingURL=component---src-pages-release-notes-0-80-0-mdx-a17bf146832ff5faad66.js.map