import{_ as t,c as a,o as s,b as n,d as e}from"./app.5aaa6b63.js";var i="/Titans-UI/assets/image-20220414102019042.cf2738ac.png",l="/Titans-UI/assets/image-20220414102224464.5957ad48.png",o="/Titans-UI/assets/image-20220414102606898.738f1bcd.png",r="/Titans-UI/assets/image-20220414175543051.ea8f85b3.png",c="/Titans-UI/assets/image-20220414180826979.8c5c529f.png",p="/Titans-UI/assets/image-20220414175821938.d863c034.png",d="/Titans-UI/assets/image-20220414180130388.544ac88a.png",u="/Titans-UI/assets/image-20220414180320727.82ef3bc0.png",_="/Titans-UI/assets/image-20220414180556877.6d8ce854.png";const V='{"title":"\u667A\u6167\u68EE\u9632\u7684\u90E8\u7F72\u4FE1\u606F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5F00\u53D1\u73AF\u5883\u670D\u52A1\u5668\u4FE1\u606F","slug":"\u5F00\u53D1\u73AF\u5883\u670D\u52A1\u5668\u4FE1\u606F"},{"level":2,"title":"\u5F00\u53D1\u73AF\u5883docker\u4FE1\u606F","slug":"\u5F00\u53D1\u73AF\u5883docker\u4FE1\u606F"},{"level":2,"title":"nginx\u914D\u7F6E\u4FE1\u606F","slug":"nginx\u914D\u7F6E\u4FE1\u606F"},{"level":2,"title":"\u9ED1\u9F99\u6C5F\u73AF\u5883\u90E8\u7F72\u6559\u7A0B","slug":"\u9ED1\u9F99\u6C5F\u73AF\u5883\u90E8\u7F72\u6559\u7A0B"}],"relativePath":"handover/deploy.md","lastUpdated":1649992621678}',g={},h=n("h1",{id:"\u667A\u6167\u68EE\u9632\u7684\u90E8\u7F72\u4FE1\u606F",tabindex:"-1"},[e("\u667A\u6167\u68EE\u9632\u7684\u90E8\u7F72\u4FE1\u606F "),n("a",{class:"header-anchor",href:"#\u667A\u6167\u68EE\u9632\u7684\u90E8\u7F72\u4FE1\u606F","aria-hidden":"true"},"#")],-1),m=n("h2",{id:"\u5F00\u53D1\u73AF\u5883\u670D\u52A1\u5668\u4FE1\u606F",tabindex:"-1"},[e("\u5F00\u53D1\u73AF\u5883\u670D\u52A1\u5668\u4FE1\u606F "),n("a",{class:"header-anchor",href:"#\u5F00\u53D1\u73AF\u5883\u670D\u52A1\u5668\u4FE1\u606F","aria-hidden":"true"},"#")],-1),f=n("ul",null,[n("li",null,"\u670D\u52A1\u5668\u5730\u5740\uFF1A192.168.0.18"),n("li",null,"\u7528\u6237\u540D/\u5BC6\u7801\uFF1Aroot/root")],-1),x=n("h2",{id:"\u5F00\u53D1\u73AF\u5883docker\u4FE1\u606F",tabindex:"-1"},[e("\u5F00\u53D1\u73AF\u5883docker\u4FE1\u606F "),n("a",{class:"header-anchor",href:"#\u5F00\u53D1\u73AF\u5883docker\u4FE1\u606F","aria-hidden":"true"},"#")],-1),v=n("p",null,"\u6B64\u9879\u76EE\u4F7F\u7528docker\u8FDB\u884C\u90E8\u7F72\u3002",-1),k=n("ul",null,[n("li",null,"\u955C\u50CF\u540D\u79F0\uFF1Aproduction/frontend/ffp-web-frontend"),n("li",null,"\u5BB9\u5668\u540D\u79F0\uFF1Affp-web-frontend"),n("li",null,"\u6302\u8F7D\u5377\u4FE1\u606F\u53EF\u53C2\u8003\u521B\u5EFA\u5BB9\u5668\u65F6\u6267\u884C\u7684\u547D\u4EE4(\u8BE6\u67E5\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u7684Jenkinsfile\u6587\u4EF6)\uFF1A")],-1),b=n("div",{class:"language-shell"},[n("pre",null,[n("code",null,[n("span",{class:"token function"},"docker"),e(" run -itd -p "),n("span",{class:"token variable"},"${_project_port}"),e(":80 "),n("span",{class:"token punctuation"},"\\"),e(`
--name `),n("span",{class:"token variable"},"${_container_name}"),e(),n("span",{class:"token punctuation"},"\\"),e(`
--restart always `),n("span",{class:"token punctuation"},"\\"),e(`
-v /home/docker/`),n("span",{class:"token variable"},"${_project_name}"),e("/nginx/webgis:/usr/share/nginx/html/webgis "),n("span",{class:"token punctuation"},"\\"),e(`
-v /home/docker/`),n("span",{class:"token variable"},"${_project_name}"),e("/nginx/conf:/etc/nginx/conf.d "),n("span",{class:"token punctuation"},"\\"),e(`
-v /home/docker/`),n("span",{class:"token variable"},"${_project_name}"),e("/nginx/log:/var/log/nginx "),n("span",{class:"token punctuation"},"\\"),e(`
`),n("span",{class:"token variable"},"${_image_tag_prefix}"),n("span",{class:"token variable"},"${_container_name}"),e(`
`)])])],-1),y=n("h2",{id:"nginx\u914D\u7F6E\u4FE1\u606F",tabindex:"-1"},[e("nginx\u914D\u7F6E\u4FE1\u606F "),n("a",{class:"header-anchor",href:"#nginx\u914D\u7F6E\u4FE1\u606F","aria-hidden":"true"},"#")],-1),$=n("p",null,"nginx\u914D\u7F6E\u6587\u4EF6\u7684\u4F4D\u7F6E\uFF1A/home/docker/forest-fire-prevention/nginx/conf/default.conf gis\u9700\u8981\u7684\u8D44\u6E90\u90E8\u7F72\u4F4D\u7F6E\uFF1A/home/docker/forest-fire-prevention/nginx/webgis/ nginx\u914D\u7F6E\u6587\u4EF6\u7684\u5185\u5BB9\u4E3A(\u6709\u7684\u914D\u7F6E\u9879\u53EF\u80FD\u6682\u65F6\u4E0D\u5728\u7528)\uFF1A",-1),I=n("div",{class:"language-text"},[n("pre",null,[n("code",null,`server {
    listen       80;
    listen  [::]:80;
    server_name  localhost;

    #charset koi8-r;
    #access_log  /var/log/nginx/host.access.log  main;
    absolute_redirect off;

    location / {
        root   /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
        index  index.html index.htm;
    }
    location /resource/ { # gis\u6A21\u5757\u9700\u8981\u7684\u8D44\u6E90
        alias /usr/share/nginx/html/webgis/;
    }

    location /api/device/ { # \u8BBE\u5907\u4E0A\u4E0B\u7EBF\u6A21\u5757\u7684\u63A5\u53E3
        proxy_pass http://192.168.0.15:18082/device/;
    }

    location /api/kunming/ { # \u8C03\u7528\u6606\u660E\u9879\u76EE\u4E2D\u7684\u6606\u660E\u706B\u60C5\u63A5\u53E3
        proxy_pass http://39.129.3.99:8001/;
    }

    location /UpLoadFiles/ { # \u6606\u660E\u706B\u60C5\u56FE\u7247
        proxy_pass http://39.129.3.99:8001;
    }

    location /api/api/ { # \u6606\u660E\u6C14\u8C61\u4FE1\u606F\u67E5\u8BE2\u7684\u63A5\u53E3
        proxy_pass http://39.129.3.99:8006/api/;
    }

    location /wms/ { // gis\u9700\u8981\u83B7\u53D6\u7684\u8D44\u6E90\u8DEF\u5F84
        proxy_pass http://39.129.3.99:8010;
    }

    location /api/v1/ {  # \u89C6\u9891\u76D1\u63A7\u5E73\u53F0\uFF08LiveGBS\uFF09\u5BF9\u5E94\u7684\u63A5\u53E3
        proxy_pass http://39.129.3.99:8011;
    }
    location /sms/ { # \u89C6\u9891\u76D1\u63A7\u5E73\u53F0\u5BF9\u5E94\u7684\u63A5\u53E3
        proxy_pass http://39.129.3.99:8011;
    }
    
    location /api/ys/ { # \u5927\u6570\u636E\u7EDF\u8BA1\u6A21\u5757\u5BF9\u5E94\u7684\u63A5\u53E3
        proxy_pass http://192.168.0.40:8000/ys/;
    }

    location @router {
	    rewrite ^.*$ /index.html last;
    }


    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
`)])],-1),w=n("h2",{id:"\u9ED1\u9F99\u6C5F\u73AF\u5883\u90E8\u7F72\u6559\u7A0B",tabindex:"-1"},[e("\u9ED1\u9F99\u6C5F\u73AF\u5883\u90E8\u7F72\u6559\u7A0B "),n("a",{class:"header-anchor",href:"#\u9ED1\u9F99\u6C5F\u73AF\u5883\u90E8\u7F72\u6559\u7A0B","aria-hidden":"true"},"#")],-1),U=n("p",null,"\u56E0\u4E3A12\u73AF\u5883\u7684Jenkins\u65E0\u6CD5\u8BBF\u95EE\u9ED1\u9F99\u6C5F\u73AF\u5883\uFF0C\u6240\u4EE5\u9700\u8981\u5728\u672C\u5730\u73AF\u5883\u624B\u52A8\u6784\u5EFA\u90E8\u7F72\u3002\u4F7F\u7528Intellij Idea\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C\uFF1A",-1),T=n("blockquote",null,[n("p",null,"\u5207\u8BB0\u8981\u5148\u6253\u5F00vpn~")],-1),D=n("ol",null,[n("li",null,[n("p",null,"\u5148\u5B89\u88C5IDEA\u7684\u63D2\u4EF6\uFF1ADocker,\u518D\u627E\u5230Services\u89C6\u56FE"),n("p",null,[n("img",{src:i,alt:"image-20220414102019042"})])]),n("li",null,[n("p",null,"Docker Connection"),n("p",null,[n("img",{src:l,alt:"image-20220414102224464"})])]),n("li",null,[n("p",null,"\u8F93\u5165\u914D\u7F6E\uFF0C\u5982\u4E0B\u56FE"),n("p",null,[n("img",{src:o,alt:"image-20220414102606898"})])]),n("li",null,[n("p",null,[e("\u5148\u8FD0\u884Cbuild\u547D\u4EE4\u6253\u5305\u524D\u7AEF\u4EE3\u7801\u5230dist\u76EE\u5F55\u3002\u7136\u540E\u53EF\u4EE5\u65B0\u5EFA\u4E2A\u76EE\u5F55\uFF08\u6BD4\u5982docker\uFF09\uFF0C\u628Adist\u76EE\u5F55\u4E2D\u7684\u6253\u5305\u540E\u7684\u6587\u4EF6\u548C\u6839\u76EE\u5F55\u7684Dockerfile\u6587\u4EF6\u62F7\u8D1D\u5230docker\u76EE\u5F55\u3002\uFF08Dockerfile\u6587\u4EF6\u62F7\u8D1D\u5230docker\u6587\u4EF6\u5939\u540E\uFF0C\u8BB0\u5F97\u6539\u4E0B\u5185\u5BB9\uFF0C\u53C2\u8003\u4E0B\u9762\u56FE\u7247\u4E3A\u4FEE\u6539\u5185\u5BB9\u540E\u7684\uFF01\uFF09 "),n("img",{src:r,alt:"image-20220414175543051"})]),n("p",null,[n("img",{src:c,alt:"image-20220414180826979"})])]),n("li",null,[n("p",null,[e("\u5728IDEA\u4E2D\u7684run\u83DC\u5355\u4E2D\u627E\u5230 "),n("strong",null,"Edit Configurations"),e(",\u6309\u5982\u4E0B\u56FE\u914D\u7F6E\uFF1A")]),n("p",null,[n("img",{src:p,alt:"image-20220414175821938"})]),n("p",null,[n("img",{src:d,alt:"image-20220414180130388"})])]),n("li",null,[n("p",null,"\u914D\u7F6E\u5B8C\u6210\u540E\uFF0C\u8FD0\u884C\uFF1A"),n("p",null,[n("img",{src:u,alt:"image-20220414180320727"})])]),n("li",null,[n("p",null,"\u67E5\u770BServices\u9762\u677F\uFF1A"),n("p",null,[n("img",{src:_,alt:"image-20220414180556877"})])])],-1),j=n("blockquote",null,[n("p",null,[e("\u955C\u50CF\u540D\u79F0\uFF1Aproduction/frontend/ffp-web-frontend"),n("br"),e(" \u5BB9\u5668\u540D\u79F0\uFF1Affp-web-frontend"),n("br"),e(" nginx\u914D\u7F6E\u8DEF\u5F84\uFF1A/home/docker/forest-fire-prevention/nginx/conf"),n("br"),e(" \u670D\u52A1\u8BBF\u95EE\u5730\u5740\uFF1A"),n("a",{href:"http://192.168.230.26:12345",target:"_blank",rel:"noopener noreferrer"},"http://192.168.230.26:12345")]),n("p",null,"\u4E0D\u8981\u5FD8\u8BB0\u6253\u5F00vpn")],-1),B=[h,m,f,x,v,k,b,y,$,I,w,U,T,D,j];function E(S,q,A,C,J,L){return s(),a("div",null,B)}var F=t(g,[["render",E]]);export{V as __pageData,F as default};
