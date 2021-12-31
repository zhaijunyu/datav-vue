import{a2 as $,a$ as N,a7 as _,b9 as z,aF as O,ah as R,a3 as f,a8 as g,aY as l,b0 as i,ac as D,n as U,a4 as h,ab as s,ad as T,ae as B,a9 as q,af as M,bb as Y,bc as G,b1 as C}from"./vendor.1e2d2fe8.js";import{P as W}from"./project.9690eea6.js";import{b as X,j as H,w as J}from"./App.341e2996.js";import{g as K}from"./templates.79236202.js";import{I as Q}from"./arrow-left.01749b3f.js";import{I as Z}from"./arrow-right.1b66f904.js";import{I as x}from"./plus.a06f20f9.js";import{I as ee}from"./back.372d4368.js";function se(e,o){if(typeof window=="undefined")return 0;const c=o?"pageYOffset":"pageXOffset",u=o?"scrollTop":"scrollLeft",r=e===window;let d=r?e[c]:e[u];return r&&typeof d!="number"&&(d=window.document.documentElement[u]),d}const S=window.requestAnimationFrame||(e=>setTimeout(e,16));function te(e,o,c,u){const r=c-o;return e/=u/2,e<1?r/2*e*e*e+o:r/2*((e-=2)*e*e+2)+o}function oe(e,o={}){const{getContainer:c=()=>window,callback:u,duration:r=450}=o,d=c(),m=se(d,!1),v=Date.now(),b=()=>{const p=Date.now()-v,F=te(p>r?r:p,m,e,r);d===window?window.scrollTo(F,window.pageYOffset):d.scrollLeft=F,p<r?S(b):typeof u=="function"&&u()};S(b)}const ae=$({name:"CreateScreen",components:{IconArrowLeft:Q,IconArrowRight:Z,IconBack:ee,IconPlus:x},setup(){const e=N(),o=_(!0),c=_([]),u=_(!1),r=_(!1),d=_(""),m=_({}),v=_(0),b=_([new W(0,"\u672A\u5206\u7EC4")]),y=_(!1),p=z(),F=_(null),E=O(()=>b.value.map(a=>({value:a.id,label:a.name})));R(async()=>{const a=await K();o.value=!1,c.value=a.data,H().then(({data:n})=>{n.code===0&&b.value.push(...n.data.map(({id:w,name:V})=>({id:w,name:V})))})});const j=a=>{m.value=a!=null?a:{},u.value=!0},A=(a,n)=>{m.value=a,r.value=!0,U(()=>{I(a,n)})},I=(a,n)=>{m.value=a,oe(149*n-350,{getContainer:()=>F.value})};return{loading:o,templates:c,visibleCreateDialog:u,visiblePreviewDialog:r,projectName:d,template:m,groupId:v,groups:b,groupOpts:E,saveLoading:y,scrollRef:F,confirmCreate:j,previewTemplate:A,togglePreviewTemplate:I,prevPreviewTemplate:()=>{const a=c.value.findIndex(n=>n.id===m.value.id);if(a>0){const n=a-1,w=c.value[n];I(w,n)}},nextPreviewTemplate:()=>{const a=c.value.findIndex(n=>n.id===m.value.id);if(a<c.value.length-1){const n=a+1,w=c.value[n];I(w,n)}},doCreate:async()=>{var a;try{if(!d.value){e.error("\u8BF7\u8F93\u5165\u5927\u5C4F\u540D\u79F0");return}y.value=!0;const n=(a=m.value)==null?void 0:a.id,w=await J({name:d.value,groupId:v.value,templateId:n!=null?n:0});if(w.data.code===0)u.value=!1,r.value=!1,p.push({name:"ScreenEditor",params:{projectId:w.data.data},query:{tpl:n}});else throw Error(w.data.message)}catch(n){e.error(n.message)}finally{y.value=!1}}}}}),k=e=>(Y("data-v-615587f1"),e=e(),G(),e),ne={class:"create-screen"},le={class:"top-bar"},ie=k(()=>s("div",{class:"right-bar"},null,-1)),re=k(()=>s("div",{class:"left-bar"},null,-1)),ce={class:"return-text"},ue=C(" \u53D6\u6D88\u521B\u5EFA "),de={class:"creator-wp"},pe={class:"template-list"},me={class:"template-item --blank"},fe={class:"template-image"},ve=C(" \u521B\u5EFA\u9879\u76EE "),_e=k(()=>s("div",{class:"template-info"}," \u7A7A\u767D\u753B\u677F ",-1)),we={class:"template-image"},ge=["src"],he={class:"template-mask"},Ce=C(" \u521B\u5EFA\u9879\u76EE "),be=C(" \u9884\u89C8 "),ke={class:"template-info"},Fe={class:"template-name"},ye={class:"template-size"},Ie={class:"create-dialog"},De=k(()=>s("p",{class:"name-title"},[s("span",{class:"required"},"*"),C("\u6570\u636E\u5927\u5C4F\u540D\u79F0 ")],-1)),Ee=k(()=>s("p",{class:"name-title"},"\u5927\u5C4F\u5206\u7EC4",-1)),je=C(" \u53D6\u6D88 "),Ae=C(" \u521B\u5EFA "),Pe={class:"preview-dialog"},Te={class:"preview-list"},Be=k(()=>s("p",{class:"template-list-title"},"\u6A21\u677F\u5217\u8868",-1)),Le={class:"blur-wp"},Se={ref:"scrollRef",class:"scroll-wp"},Ve=["onClick"],$e=["src"],Ne={class:"preview-screen-name"},ze={class:"preview-gif"},Oe={class:"gif-wp"},Re=["src"],Ue={class:"preview-create"},qe={class:"create-dialog"},Me={key:0,class:"template-desc"},Ye=k(()=>s("p",{class:"name-title"},[s("span",{class:"required"},"*"),C("\u6570\u636E\u5927\u5C4F\u540D\u79F0 ")],-1)),Ge=k(()=>s("p",{class:"name-title"},"\u5927\u5C4F\u5206\u7EC4",-1)),We=C(" \u521B\u5EFA\u5927\u5C4F ");function Xe(e,o,c,u,r,d){const m=f("IconBack"),v=f("n-icon"),b=f("router-link"),y=f("IconPlus"),p=f("n-button"),F=f("g-loading"),E=f("new-input"),j=f("n-select"),A=f("n-modal"),I=f("IconArrowLeft"),L=f("IconArrowRight");return h(),g(D,null,[l(F,{type:"square",spinning:e.loading},{default:i(()=>[s("div",ne,[s("div",le,[ie,re,l(b,{to:"/",class:"return-btn"},{default:i(()=>[s("span",ce,[l(v,{class:"return-icon"},{default:i(()=>[l(m)]),_:1}),ue])]),_:1})]),s("div",de,[s("div",pe,[s("div",me,[s("div",fe,[l(p,{type:"primary",focusable:!1,style:{"--n-icon-size":"12px"},onClick:o[0]||(o[0]=t=>e.confirmCreate(null))},{icon:i(()=>[l(v,{size:12},{default:i(()=>[l(y)]),_:1})]),default:i(()=>[ve]),_:1})]),_e]),(h(!0),g(D,null,T(e.templates,(t,P)=>(h(),g("div",{key:t.id,class:"template-item"},[s("div",we,[s("img",{src:t.thumbnail,alt:"",class:"preview-image"},null,8,ge),s("div",he,[l(p,{type:"primary",focusable:!1,class:"create-btn",onClick:a=>e.confirmCreate(t)},{default:i(()=>[Ce]),_:2},1032,["onClick"]),l(p,{class:"preview-btn",focusable:!1,onClick:a=>e.previewTemplate(t,P)},{default:i(()=>[be]),_:2},1032,["onClick"])])]),s("div",ke,[s("div",Fe,B(t.name),1),s("div",ye,[(h(!0),g(D,null,T(t.size,(a,n)=>(h(),g("p",{key:n},B(a),1))),128))])])]))),128)),(h(),g(D,null,T(3,t=>s("div",{key:t,class:"template-item-placehoder"})),64))])])])]),_:1},8,["spinning"]),l(A,{show:e.visibleCreateDialog,"onUpdate:show":o[4]||(o[4]=t=>e.visibleCreateDialog=t),preset:"dialog","show-icon":!1,title:"\u521B\u5EFA\u6570\u636E\u5927\u5C4F",style:{width:"400px"}},{action:i(()=>[l(p,{focusable:!1,onClick:o[3]||(o[3]=t=>e.visibleCreateDialog=!1)},{default:i(()=>[je]),_:1}),l(p,{type:"primary",focusable:!1,loading:e.saveLoading,onClick:e.doCreate},{default:i(()=>[Ae]),_:1},8,["loading","onClick"])]),default:i(()=>[s("div",Ie,[De,l(E,{modelValue:e.projectName,"onUpdate:modelValue":o[1]||(o[1]=t=>e.projectName=t),placeholder:"\u8BF7\u8F93\u5165\u5927\u5C4F\u540D\u79F0",spellcheck:"false",class:"name-input"},null,8,["modelValue"]),Ee,l(j,{value:e.groupId,"onUpdate:value":o[2]||(o[2]=t=>e.groupId=t),options:e.groupOpts,size:"small"},null,8,["value","options"])])]),_:1},8,["show"]),l(A,{show:e.visiblePreviewDialog,"onUpdate:show":o[7]||(o[7]=t=>e.visiblePreviewDialog=t),preset:"dialog","show-icon":!1,title:"\u9884\u89C8",style:{width:"895px","padding-bottom":"0"}},{default:i(()=>[s("div",Pe,[s("div",Te,[Be,s("div",Le,[s("div",Se,[(h(!0),g(D,null,T(e.templates,(t,P)=>(h(),g("div",{key:t.id,class:q(["preview-wp",{selected:t.id===e.template.id}]),onClick:a=>e.togglePreviewTemplate(t,P)},[s("img",{src:t.thumbnail,class:"preview-small-img"},null,8,$e),s("div",Ne,B(t.name),1)],10,Ve))),128))],512)])]),s("div",ze,[s("div",Oe,[s("img",{class:"snapshot-gif",src:e.template.snapshot},null,8,Re),l(v,{class:"prev-icon",onClick:e.prevPreviewTemplate},{default:i(()=>[l(I)]),_:1},8,["onClick"]),l(v,{class:"next-icon",onClick:e.nextPreviewTemplate},{default:i(()=>[l(L)]),_:1},8,["onClick"])]),s("div",Ue,[s("div",qe,[e.template.description?(h(),g("p",Me,B(e.template.description),1)):M("",!0),Ye,l(E,{modelValue:e.projectName,"onUpdate:modelValue":o[5]||(o[5]=t=>e.projectName=t),placeholder:"\u8BF7\u8F93\u5165\u5927\u5C4F\u540D\u79F0",spellcheck:"false",class:"name-input"},null,8,["modelValue"]),Ge,l(j,{value:e.groupId,"onUpdate:value":o[6]||(o[6]=t=>e.groupId=t),options:e.groupOpts,size:"small"},null,8,["value","options"])]),l(p,{type:"primary",size:"tiny",focusable:!1,"icon-placement":"right",loading:e.saveLoading,class:"preview-create-btn",onClick:e.doCreate},{icon:i(()=>[l(v,{class:"next-icon"},{default:i(()=>[l(L)]),_:1})]),default:i(()=>[We]),_:1},8,["loading","onClick"])])])])]),_:1},8,["show"])],64)}var ts=X(ae,[["render",Xe],["__scopeId","data-v-615587f1"]]);export{ts as default};