import{d as e,aK as a,az as t,h as l,p as n,aN as s,aI as o,C as c,D as i,f as d,o as _,c as f,a as p,E as r}from"./index.2e5e3d31.js";var u=e({name:"ConfigPanel",components:{PageConfig:a((()=>t((()=>import("./page-config.3008b15d.js")),["/assets/page-config.3008b15d.js","/assets/page-config.69361705.css","/assets/index.2e5e3d31.js","/assets/index.a59a93be.css","/assets/qiniu.464dd484.js"]))),SettingPanel:a((()=>t((()=>import("./setting-panel.a9132e1f.js")),["/assets/setting-panel.a9132e1f.js","/assets/setting-panel.14d87943.css","/assets/index.2e5e3d31.js","/assets/index.a59a93be.css","/assets/config-title.b7b90bb1.js","/assets/config-title.9336ab86.css"]))),DataCenterPanel:a((()=>t((()=>import("./index.c5c766eb.js")),["/assets/index.c5c766eb.js","/assets/index.1e687938.css","/assets/index.2e5e3d31.js","/assets/index.a59a93be.css","/assets/config-title.b7b90bb1.js","/assets/config-title.9336ab86.css","/assets/empty-panel.93fbf1a0.js","/assets/empty-panel.ca321ed2.css"]))),InteractionPanel:a((()=>t((()=>import("./index.4d07139b.js")),["/assets/index.4d07139b.js","/assets/index.54e6a962.css","/assets/index.2e5e3d31.js","/assets/index.a59a93be.css","/assets/config-title.b7b90bb1.js","/assets/config-title.9336ab86.css","/assets/empty-panel.93fbf1a0.js","/assets/empty-panel.ca321ed2.css"])))},setup(){const e=l((()=>s.config.show)),a=l((()=>o.selectedCom));return n("com",a),{visiblePanel:e,selectedCom:a}}});const m=r();c("data-v-79f587b9");const b={class:"config-manager"},g=p("i",{class:"v-icon-setting"},null,-1),y=p("i",{class:"v-icon-cloud"},null,-1),P=p("i",{class:"v-icon-interact"},null,-1);i();const C=m(((e,a,t,l,n,s)=>{const o=d("page-config"),c=d("el-tooltip"),i=d("setting-panel"),r=d("el-tab-pane"),u=d("data-center-panel"),C=d("interaction-panel"),v=d("el-tabs"),E=d("el-aside");return _(),f(E,{width:"auto",class:["config-panel-wp",{"--hide":!e.visiblePanel}]},{default:m((()=>[p("div",b,[e.selectedCom?(_(),f(v,{key:1,type:"card",stretch:!0},{default:m((()=>[p(r,null,{label:m((()=>[p(c,{effect:"blue","open-delay":500,content:"配置"},{default:m((()=>[g])),_:1})])),default:m((()=>[p(i,{key:e.selectedCom.id})])),_:1}),p(r,{lazy:""},{label:m((()=>[p(c,{effect:"blue","open-delay":500,content:"数据"},{default:m((()=>[y])),_:1})])),default:m((()=>[p(u,{key:e.selectedCom.id})])),_:1}),p(r,{lazy:""},{label:m((()=>[p(c,{effect:"blue","open-delay":500,content:"交互"},{default:m((()=>[P])),_:1})])),default:m((()=>[p(C,{key:e.selectedCom.id})])),_:1})])),_:1})):(_(),f(o,{key:0}))])])),_:1},8,["class"])}));u.render=C,u.__scopeId="data-v-79f587b9";export default u;
