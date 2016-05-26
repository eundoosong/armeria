(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-zookeeper","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},"0Q2y":function(e,t,r){"use strict";r.r(t),r.d(t,"pageTitle",(function(){return i})),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return l}));r("8x/H"),r("UsjJ"),r("tKM+"),r("q1tI");var a=r("7ljp"),n=r("xCMr");var i="Decorating a service",c={},s={pageTitle:i,_frontmatter:c},o=n.a;function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(o,Object.assign({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"decorating-a-service",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h1"},{href:"#decorating-a-service","aria-label":"decorating a service permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Decorating a service"),Object(a.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#implementing-decoratinghttpservicefunction-and-decoratingrpcservicefunction"}),"Implementing DecoratingHttpServiceFunction and DecoratingRpcServiceFunction")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#extending-simpledecoratinghttpservice-and-simpledecoratingrpcservice"}),"Extending SimpleDecoratingHttpService and SimpleDecoratingRpcService")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#extending-decoratingservice"}),"Extending DecoratingService")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#unwrapping-decoration"}),"Unwrapping decoration")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#decorating-servicewithroutes"}),"Decorating ServiceWithRoutes")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#decorating-multiple-services-by-path-mapping"}),"Decorating multiple services by path mapping")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"#see-also"}),"See also"))),Object(a.b)("p",null,"A 'decorating service' (or a 'decorator') is a service that wraps another service\nto intercept an incoming request or an outgoing response. As its name says, it is an implementation of\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Decorator_pattern"}),"the decorator pattern"),". Service decoration takes a crucial role in Armeria. A lot of core features\nsuch as logging, metrics and distributed tracing are implemented as decorators and you will also find it\nuseful when ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Separation_of_concerns"}),"separating concerns"),"."),Object(a.b)("p",null,"There are basically three ways to write a decorating service:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Implementing ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"type://DecoratingHttpServiceFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingHttpServiceFunction.html"}),"type://DecoratingHttpServiceFunction")," and ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"type://DecoratingRpcServiceFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingRpcServiceFunction.html"}),"type://DecoratingRpcServiceFunction")),Object(a.b)("li",{parentName:"ul"},"Extending ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"type://SimpleDecoratingHttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/SimpleDecoratingHttpService.html"}),"type://SimpleDecoratingHttpService")," and ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"type://SimpleDecoratingRpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/SimpleDecoratingRpcService.html"}),"type://SimpleDecoratingRpcService")),Object(a.b)("li",{parentName:"ul"},"Extending ",Object(a.b)("a",Object.assign({parentName:"li"},{href:"type://DecoratingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingService.html"}),"type://DecoratingService"))),Object(a.b)("h2",{id:"implementing-decoratinghttpservicefunction-and-decoratingrpcservicefunction",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#implementing-decoratinghttpservicefunction-and-decoratingrpcservicefunction","aria-label":"implementing decoratinghttpservicefunction and decoratingrpcservicefunction permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Implementing ",Object(a.b)("inlineCode",{parentName:"h2"},"DecoratingHttpServiceFunction")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"DecoratingRpcServiceFunction")),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://DecoratingHttpServiceFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingHttpServiceFunction.html"}),"type://DecoratingHttpServiceFunction")," and ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://DecoratingRpcServiceFunction:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingRpcServiceFunction.html"}),"type://DecoratingRpcServiceFunction")," are functional interfaces that\ngreatly simplify the implementation of a decorating service. They enables you to write a decorating service\nwith a single lambda expression:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.common.HttpStatus;\nimport com.linecorp.armeria.server.HttpService;\n\nServerBuilder sb = Server.builder();\nHttpService service = ...;\nsb.serviceUnder("/web", service.decorate((delegate, ctx, req) -> {\n    if (!authenticate(req)) {\n        // Authentication failed; fail the request.\n        return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n    }\n\n    // Authenticated; pass the request to the actual service.\n    return delegate.serve(ctx, req);\n});\n')),Object(a.b)("h2",{id:"extending-simpledecoratinghttpservice-and-simpledecoratingrpcservice",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#extending-simpledecoratinghttpservice-and-simpledecoratingrpcservice","aria-label":"extending simpledecoratinghttpservice and simpledecoratingrpcservice permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Extending ",Object(a.b)("inlineCode",{parentName:"h2"},"SimpleDecoratingHttpService")," and ",Object(a.b)("inlineCode",{parentName:"h2"},"SimpleDecoratingRpcService")),Object(a.b)("p",null,"If your decorator is expected to be reusable, it is recommended to define a new top-level class that extends\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://SimpleDecoratingHttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/SimpleDecoratingHttpService.html"}),"type://SimpleDecoratingHttpService")," or ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://SimpleDecoratingRpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/SimpleDecoratingRpcService.html"}),"type://SimpleDecoratingRpcService")," depending on whether you are\ndecorating an ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://HttpService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/HttpService.html"}),"type://HttpService")," or an ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://RpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/RpcService.html"}),"type://RpcService"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.server.HttpService;\nimport com.linecorp.armeria.server.ServiceRequestContext;\nimport com.linecorp.armeria.server.SimpleDecoratingHttpService;\n\npublic class AuthService extends SimpleDecoratingHttpService {\n    public AuthService(HttpService delegate) {\n        super(delegate);\n    }\n\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) throws Exception {\n        if (!authenticate(req)) {\n            // Authentication failed; fail the request.\n            return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n        }\n\n        HttpService delegate = delegate();\n        return delegate.serve(ctx, req);\n    }\n}\n\nServerBuilder sb = Server.builder();\n// Using a lambda expression:\nsb.serviceUnder("/web", service.decorate(delegate -> new AuthService(delegate)));\n')),Object(a.b)("h2",{id:"extending-decoratingservice",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#extending-decoratingservice","aria-label":"extending decoratingservice permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Extending ",Object(a.b)("inlineCode",{parentName:"h2"},"DecoratingService")),Object(a.b)("p",null,"So far, we only demonstrated the case where a decorating service does not transform the type of the request and\nresponse. You can do that as well, of course, using ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://DecoratingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingService.html"}),"type://DecoratingService"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.server.RpcService;\n\n// Transforms an RpcService into an HttpService.\npublic class MyRpcService extends DecoratingService<RpcRequest, RpcResponse,\n                                                    HttpRequest, HttpResponse> {\n\n    public MyRpcService(Service<? super RpcRequest, ? extends RpcResponse> delegate) {\n        super(delegate);\n    }\n\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) throws Exception {\n        // This method has been greatly simplified for easier understanding.\n        // In reality, we will have to do this asynchronously.\n        RpcRequest rpcReq = convertToRpcRequest(req);\n        RpcResponse rpcRes = delegate().serve(ctx, rpcReq);\n        return convertToHttpResponse(rpcRes);\n    }\n\n    private RpcRequest convertToRpcRequest(HttpRequest req) { ... }\n    private HttpResponse convertToHttpResponse(RpcResponse res) { ... }\n}\n")),Object(a.b)("h2",{id:"unwrapping-decoration",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#unwrapping-decoration","aria-label":"unwrapping decoration permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Unwrapping decoration"),Object(a.b)("p",null,"Once a service is decorated, the type of the service is not that of the original service\nanymore. Therefore, you cannot simply down-cast it to access the method exposed by the original service.\nInstead, you need to 'unwrap' the decorator using the ",Object(a.b)("inlineCode",{parentName:"p"},"Service.as()")," method:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"MyService service = ...;\nMyDecoratedService decoratedService = service.decorate(...);\n\nassert !(decoratedService instanceof MyService);\nassert decoratedService.as(MyService.class) == service;\nassert decoratedService.as(MyDecoratedService.class) == decoratedService;\nassert decoratedService.as(SomeOtherService.class) == null;\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"as()")," is especially useful when you are looking for the service instances that implements\na certain type from a server:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.server.ServerConfig;\nimport java.util.List;\n\nServer server = ...;\nServerConfig serverConfig = server.config();\nList<ServiceConfig> serviceConfigs = serverConfig.serviceConfigs();\nfor (ServiceConfig sc : serviceConfigs) {\n    if (sc.service().as(SomeType.class) != null) {\n        // Handle the service who implements or extends SomeType.\n    }\n}\n")),Object(a.b)("h2",{id:"decorating-servicewithroutes",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#decorating-servicewithroutes","aria-label":"decorating servicewithroutes permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Decorating ",Object(a.b)("inlineCode",{parentName:"h2"},"ServiceWithRoutes")),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html"}),"type://ServiceWithRoutes")," is a special variant of service which allows a user to register multiple\nroutes for a single service. It has a method called ",Object(a.b)("inlineCode",{parentName:"p"},"routes()")," which returns a ",Object(a.b)("inlineCode",{parentName:"p"},"Set")," of\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"typeplural://Route:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Route.html"}),"typeplural://Route")," so that you do not have to specify path when registering your service:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.server.Route;\nimport com.linecorp.armeria.server.HttpServiceWithRoutes;\nimport java.util.HashSet;\nimport java.util.Set;\n\npublic class MyServiceWithRoutes implements HttpServiceWithRoutes {\n    @Override\n    public HttpResponse serve(ServiceRequestContext ctx, HttpRequest req) { ... }\n\n    @Override\n    public Set<Route> routes() {\n        Set<Route> routes = new HashSet<>();\n        routes.add(Route.builder().path("/services/greet").build());\n        routes.add(Route.builder().path("/services/hello").build());\n        return routes;\n    }\n}\n\nServerBuilder sb = Server.builder();\n// No path is specified.\nsb.service(new MyServiceWithRoutes());\n// Override the path provided by routes().\nsb.service("/services/hola", new MyServiceWithRoutes());\n')),Object(a.b)("p",null,"However, decorating a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html"}),"type://ServiceWithRoutes")," can lead to a compilation error when you attempt to\nregister it without specifying a path explicitly, because a decorated service is not a\n",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html"}),"type://ServiceWithRoutes")," anymore but just a service:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.server.logging.LoggingService;\n\nServerBuilder sb = Server.builder();\n\n// Works.\nHttpServiceWithRoutes service = new MyServiceWithRoutes();\nsb.service(service);\n\n// Does not work - not a HttpServiceWithRoutes anymore due to decoration.\nHttpService decoratedService = service.decorate(LoggingService.newDecorator());\nsb.service(decoratedService); // Compilation error\n\n// Works if a path is specified explicitly.\nsb.service("/services/bonjour", decoratedService);\n')),Object(a.b)("p",null,"Therefore, you need to specify the decorators as extra parameters:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = Server.builder();\n// Register a service decorated with two decorators at multiple routes.\nsb.service(new MyServiceWithRoutes(),\n           MyDecoratedService::new,\n           LoggingService.newDecorator())\n")),Object(a.b)("p",null,"A good real-world example of ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://ServiceWithRoutes:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceWithRoutes.html"}),"type://ServiceWithRoutes")," is ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://GrpcService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/grpc/GrpcService.html"}),"type://GrpcService"),".\nSee ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/docs/server-grpc#decorating-a-grpcservice"}),"Decorating a GrpcService")," for more information."),Object(a.b)("h2",{id:"decorating-multiple-services-by-path-mapping",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#decorating-multiple-services-by-path-mapping","aria-label":"decorating multiple services by path mapping permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Decorating multiple services by path mapping"),Object(a.b)("p",null,"If you want to decorate multiple ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"typeplural://Service:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/Service.html"}),"typeplural://Service")," by path mapping or router matching, you can specify\ndecorators using ",Object(a.b)("inlineCode",{parentName:"p"},"decoratorUnder(pathPrefix, ...)")," or ",Object(a.b)("inlineCode",{parentName:"p"},"decorator(Route, ...)"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.HttpHeaderNames;\n\nVipService vipService = ...;\nMemberService memberService = ...;\nHtmlService htmlService = ...;\nJsService jsService = ...;\n\nServerBuilder sb = new ServerBuilder();\n\n// Register vipService and memberService under \'/users\' path\nsb.annotatedService("/users/vip", vipService)\n  .annotatedService("/users/members", memberService);\n\n// Decorate all services under \'/users\' path\nsb.decoratorUnder("/users", (delegate, ctx, req) -> {\n    if (!authenticate(req)) {\n        return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n    }\n    return delegate.serve(ctx, req);\n});\n\n// Register htmlService and jsService under \'/public\' path\nsb.serviceUnder("/public/html", htmlService)\n  .serviceUnder("/public/js", jsService);\n\n// Decorate services only when a request method is \'GET\'\nsb.decorator(Route.builder().get("/public").build(), (delegate, ctx, req) -> {\n    final HttpResponse response = delegate.serve(ctx, req);\n    ctx.mutateAdditionalResponseHeaders(\n            mutator -> mutator.add(HttpHeaderNames.CACHE_CONTROL, "public"));\n    return response;\n});\n')),Object(a.b)("p",null,"You can also use fluent route builder with ",Object(a.b)("inlineCode",{parentName:"p"},"routeDecorator()")," to match services being decorated."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ServerBuilder sb = new ServerBuilder();\n\n// Register vipService and memberService under \'/users\' path\nsb.annotatedService("/users/vip", vipService)\n  .annotatedService("/users/members", memberService);\n\n// Decorate services under \'/users\' path with fluent route builder\nsb.routeDecorator()\n  .pathPrefix("/users")\n  .build((delegate, ctx, req) -> {\n      if (!authenticate(req)) {\n          return HttpResponse.of(HttpStatus.UNAUTHORIZED);\n      }\n      return delegate.serve(ctx, req);\n  });\n\n// Register htmlService and jsService under \'/public\' path\nsb.serviceUnder("/public/html", htmlService)\n  .serviceUnder("/public/js", jsService);\n\n// Decorate services under \'/public\' path using \'get\' method with path pattern\nsb.routeDecorator()\n  .get("prefix:/public")\n  .build((delegate, ctx, req) -> {\n      final HttpResponse response = delegate.serve(ctx, req);\n      ctx.mutateAdditionalResponseHeaders(\n              mutator -> mutator.add(HttpHeaderNames.CACHE_CONTROL, "public"));\n      return response;\n  });\n')),Object(a.b)("p",null,"Please refer to ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"type://DecoratingServiceBindingBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/DecoratingServiceBindingBuilder.html"}),"type://DecoratingServiceBindingBuilder")," for more information."),Object(a.b)("h2",{id:"see-also",style:{position:"relative"}},Object(a.b)("a",Object.assign({parentName:"h2"},{href:"#see-also","aria-label":"see also permalink",className:"anchor before"}),Object(a.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(a.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"See also"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"/docs/client-decorator"}),"Decorating a client")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"/docs/advanced-custom-attributes"}),Object(a.b)("inlineCode",{parentName:"a"},"RequestContext")," custom attributes"))))}l.isMDXComponent=!0},AMUl:function(e){e.exports=JSON.parse('{"data":{"allMdx":{"nodes":[{"tableOfContents":{"items":[{"url":"#using-armeria-with-dropwizard","title":"Using Armeria with Dropwizard"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-dropwizard-integration"}},{"tableOfContents":{"items":[{"url":"#requestcontext-custom-attributes","title":"RequestContext custom attributes"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-custom-attributes"}},{"tableOfContents":{"items":[{"url":"#logging-contextual-information","title":"Logging contextual information"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-logging"}},{"tableOfContents":{"items":[{"url":"#production-checklist","title":"Production checklist"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-production-checklist"}},{"tableOfContents":{"items":[{"url":"#saml-single-sign-on","title":"SAML Single Sign-On"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-saml"}},{"tableOfContents":{"items":[{"url":"#using-armeria-with-spring-webflux","title":"Using Armeria with Spring WebFlux"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-spring-webflux-integration"}},{"tableOfContents":{"items":[{"url":"#structured-logging-with-kafka","title":"Structured logging with Kafka"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging-kafka"}},{"tableOfContents":{"items":[{"url":"#structured-logging","title":"Structured logging"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-structured-logging"}},{"tableOfContents":{"items":[{"url":"#zipkin-integration","title":"Zipkin integration"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zipkin"}},{"tableOfContents":{"items":[{"url":"#unit-testing-client-and-service","title":"Unit-testing Client and Service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-unit-testing"}},{"tableOfContents":{"items":[{"url":"#service-discovery-with-zookeeper","title":"Service discovery with ZooKeeper"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"advanced-zookeeper"}},{"tableOfContents":{"items":[{"url":"#circuit-breaker","title":"Circuit breaker"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-circuit-breaker"}},{"tableOfContents":{"items":[{"url":"#sending-custom-http-headers","title":"Sending custom HTTP headers"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-custom-http-headers"}},{"tableOfContents":{"items":[{"url":"#decorating-a-client","title":"Decorating a client"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-decorator"}},{"tableOfContents":{"items":[{"url":"#calling-a-grpc-service","title":"Calling a gRPC service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-grpc"}},{"tableOfContents":{"items":[{"url":"#calling-an-http-service","title":"Calling an HTTP service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-http"}},{"tableOfContents":{"items":[{"url":"#retrofit-integration","title":"Retrofit integration"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retrofit"}},{"tableOfContents":{"items":[{"url":"#automatic-retry","title":"Automatic retry"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-retry"}},{"tableOfContents":{"items":[{"url":"#client-side-load-balancing-and-service-discovery","title":"Client-side load balancing and service discovery"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-service-discovery"}},{"tableOfContents":{"items":[{"url":"#calling-a-thrift-service","title":"Calling a Thrift service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-thrift"}},{"tableOfContents":{"items":[{"url":"#overriding-client-timeouts","title":"Overriding client timeouts"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"client-timeouts"}},{"tableOfContents":{"items":[{"url":"#user-manual","title":"User manual"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"index"}},{"tableOfContents":{"items":[{"url":"#writing-an-access-log","title":"Writing an access log"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-access-log"}},{"tableOfContents":{"items":[{"url":"#server-basics","title":"Server basics"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-basics"}},{"tableOfContents":{"items":[{"url":"#configuring-cors","title":"Configuring CORS"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-cors"}},{"tableOfContents":{"items":[{"url":"#decorating-a-service","title":"Decorating a service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-decorator"}},{"tableOfContents":{"items":[{"url":"#annotated-services","title":"Annotated services"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-annotated-service"}},{"tableOfContents":{"items":[{"url":"#browsing-and-invoking-services-with-docservice","title":"Browsing and invoking services with DocService"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-docservice"}},{"tableOfContents":{"items":[{"url":"#running-a-grpc-service","title":"Running a gRPC service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-grpc"}},{"tableOfContents":{"items":[{"url":"#serving-static-files","title":"Serving static files"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-http-file"}},{"tableOfContents":{"items":[{"url":"#embedding-a-servlet-container","title":"Embedding a servlet container"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-servlet"}},{"tableOfContents":{"items":[{"url":"#serving-server-sent-events","title":"Serving Server-Sent Events"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-sse"}},{"tableOfContents":{"items":[{"url":"#running-a-thrift-service","title":"Running a Thrift service"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"server-thrift"}},{"tableOfContents":{"items":[{"url":"#setting-up-a-project","title":"Setting up a project"}]},"parent":{"__typename":"File","sourceInstanceName":"docs","name":"setup"}}]}}}')},xCMr:function(e,t,r){"use strict";r("UsjJ");var a=r("AMUl"),n=r("q1tI"),i=r.n(n),c=r("/94A"),s=r("+ejy");t.a=function(e){var t=a.data.allMdx.nodes;return i.a.createElement(s.a,Object.assign({},e,{candidateMdxNodes:t,index:c,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-decorator-mdx-3f012041e5fa1dde0429.js.map