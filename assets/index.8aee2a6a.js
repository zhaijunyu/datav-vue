import{x as D,_ as r,y as f,E as _,B as V,b as x,z as d,C as M,F as b,H as v}from"./App.341e2996.js";import{a2 as A,a6 as p,ba as R,a7 as j,ah as k,a3 as s,a8 as O,ab as m,aY as c,b0 as L,ac as q,a4 as $}from"./vendor.1e2d2fe8.js";import{a as C}from"./templates.79236202.js";function B(e){switch(e){case"./other/date-picker/src/date-picker.ts":return r(()=>import("./date-picker.43e6a1e6.js"),["assets/date-picker.43e6a1e6.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data-field.0ba3a232.js","assets/data.ebec61d6.js"]);default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function F(e){switch(e){case"./media/bg-box/src/bg-box.ts":return r(()=>import("./App.341e2996.js").then(function(o){return o.ad}),["assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js"]);case"./media/border-box/src/border-box.ts":return r(()=>import("./App.341e2996.js").then(function(o){return o.ac}),["assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js"]);case"./media/decoration/src/decoration.ts":return r(()=>import("./App.341e2996.js").then(function(o){return o.ae}),["assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js"]);case"./media/main-img/src/main-img.ts":return r(()=>import("./main-img.c2e6790d.js"),["assets/main-img.c2e6790d.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data.ebec61d6.js"]);default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function S(e){switch(e){case"./button/full-screen/src/full-screen.ts":return r(()=>import("./full-screen.079e78a2.js"),["assets/full-screen.079e78a2.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data.ebec61d6.js"]);default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function U(e){switch(e){case"./text/main-title/src/main-title.ts":return r(()=>import("./main-title.dcbd0438.js"),["assets/main-title.dcbd0438.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data-field.0ba3a232.js","assets/data.ebec61d6.js"]);case"./text/marquee/src/marquee.ts":return r(()=>import("./marquee.03e1bdc1.js"),["assets/marquee.03e1bdc1.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data-field.0ba3a232.js","assets/data.ebec61d6.js"]);case"./text/number-title-flop/src/number-title-flop.ts":return r(()=>import("./number-title-flop.d6c2afe6.js"),["assets/number-title-flop.d6c2afe6.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data-field.0ba3a232.js","assets/data.ebec61d6.js"]);case"./text/paragraph/src/paragraph.ts":return r(()=>import("./paragraph.0caaaf29.js"),["assets/paragraph.0caaaf29.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data-field.0ba3a232.js","assets/data.ebec61d6.js"]);case"./text/timer/src/timer.ts":return r(()=>import("./timer.a2bf3783.js"),["assets/timer.a2bf3783.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data.ebec61d6.js"]);default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function N(e){switch(e){case"./chart/word-cloud/src/word-cloud.ts":return r(()=>import("./word-cloud.22c03541.js"),["assets/word-cloud.22c03541.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data-field.0ba3a232.js","assets/data.ebec61d6.js"]);default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}function Y(e){switch(e){case"./bar/basic-bar/src/basic-bar.ts":return r(()=>import("./basic-bar.98c537f4.js"),["assets/basic-bar.98c537f4.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/data-field.0ba3a232.js","assets/data.ebec61d6.js"]);default:return new Promise(function(o,t){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(t.bind(null,new Error("Unknown variable dynamic import: "+e)))})}}async function z(e){const o=D(e.substring(1));switch(e.substring(1)){case"BasicBar":{const t=await Y(`./bar/${o}/src/${o}.ts`);return new t.default}case"WordCloud":{const t=await N(`./chart/${o}/src/${o}.ts`);return new t.default}case"MainTitle":case"Marquee":case"NumberTitleFlop":case"Paragraph":case"Timer":{const t=await U(`./text/${o}/src/${o}.ts`);return new t.default}case"FullScreen":{const t=await S(`./button/${o}/src/${o}.ts`);return new t.default}case"BgBox":case"BorderBox":case"Decoration":case"MainImg":{const t=await F(`./media/${o}/src/${o}.ts`);return new t.default}case"DatePicker":{const t=await B(`./other/${o}/src/${o}.ts`);return new t.default}default:throw Error(`Unknown component type: ${e}.`)}}const H=async()=>{const{pageConfig:e}=_,t=["VMainTitle","VNumberTitleFlop","VDatePicker","VBgBox","VBorderBox","VDecoration","VBasicBar","VMarquee","VParagraph","VTimer","VFullScreen","VMainImg","VWordCloud"].map(a=>z(a)),l=await Promise.all(t),u=l.map(a=>(a.attr.x=f(e.width-a.attr.w),a.attr.y=f(e.height-a.attr.h),_.addCom(a)));await Promise.all(u);const i=[],n=[];l.forEach(a=>{a.apis.source&&(n.push(a.id),i.push(a.loadData()))}),i.length>0&&(await Promise.all(i),setTimeout(()=>{n.forEach(a=>{V.datavComponents[a].$DATAV_requestData()})},200))};const W=A({name:"ScreenEditor",components:{HeaderToolbar:p(()=>r(()=>import("./index.8e8a07bf.js"),["assets/index.8e8a07bf.js","assets/index.891400cf.css","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/screen.49caa5a5.js","assets/layer.61a30e2b.js","assets/publish-screen.b72f169b.js","assets/publish-screen.df6080ef.css","assets/release.b91fb24f.js","assets/help.c8b97796.js"])),FooterToolbar:p(()=>r(()=>import("./index.ebea63a0.js"),["assets/index.ebea63a0.js","assets/index.9993353f.css","assets/vendor.1e2d2fe8.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/arrow-down.0a0aeec7.js"])),EditorContextMenu:p(()=>r(()=>import("./index.efc37493.js"),["assets/index.efc37493.js","assets/index.e4ffd428.css","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/dom.8af75fb2.js","assets/warning.56bc5c37.js","assets/edit.7d8f354b.js","assets/delete.d2d84629.js","assets/copy.7cb25e3a.js","assets/lock.026930a4.js","assets/show.145cf298.js","assets/hide.0d33cca9.js","assets/index.19f51b76.js"])),CanvasMain:d(()=>r(()=>import("./index.6ba28d61.js"),["assets/index.6ba28d61.js","assets/index.e3e9f1e6.css","assets/vendor.1e2d2fe8.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/dom.8af75fb2.js","assets/index.19f51b76.js","assets/templates.79236202.js"])),LayerPanel:d(()=>r(()=>import("./index.3cf1b2a1.js"),["assets/index.3cf1b2a1.js","assets/index.f8bf7f5e.css","assets/vendor.1e2d2fe8.js","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/warning.56bc5c37.js","assets/delete.d2d84629.js","assets/back.372d4368.js","assets/lock.026930a4.js","assets/hide.0d33cca9.js","assets/view-grid.9dd07edc.js","assets/index.19f51b76.js","assets/dom.8af75fb2.js"])),ComponentsPanel:d(()=>r(()=>import("./index.7e2714c5.js"),["assets/index.7e2714c5.js","assets/index.193d8278.css","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/search.9850ab84.js","assets/back.372d4368.js","assets/templates.79236202.js"])),ConfigPanel:d(()=>r(()=>import("./index.64302fba.js"),["assets/index.64302fba.js","assets/index.1e2ad6b6.css","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/interact.e6bace2b.js"])),ToolboxPanel:d(()=>r(()=>import("./index.89652462.js"),["assets/index.89652462.js","assets/index.87378182.css","assets/vendor.1e2d2fe8.js","assets/App.341e2996.js","assets/App.0e26ef44.css"])),FilterManagerDrawer:d(()=>r(()=>import("./filter-manager-drawer.9c828aba.js"),["assets/filter-manager-drawer.9c828aba.js","assets/filter-manager-drawer.24f26014.css","assets/App.341e2996.js","assets/App.0e26ef44.css","assets/vendor.1e2d2fe8.js","assets/warning.56bc5c37.js","assets/document.61510b73.js","assets/filter-collapse-panel.a29774f4.js","assets/arrow-left.01749b3f.js","assets/edit.7d8f354b.js","assets/delete.d2d84629.js","assets/release.b91fb24f.js"]))},props:{projectId:{type:[String,Number],required:!0}},setup(e){const o=R(),t=j(!0);return M.enableDebug(),_.setEditMode(),k(async()=>{var l;try{const u=parseInt(o.query.tpl);if(u>0){const{data:i}=await C(u);if(i){const{config:n}=i;_.setEditorOption({screen:{id:+e.projectId,name:i.name},config:{width:n.width,height:n.height,bgimage:n.bgimage,bgcolor:n.bgcolor,styleFilterParams:n.styleFilterParams},coms:n.coms,variables:n.variables}),b.setFilterOption({dataFilters:(l=n.dataFilters)!=null?l:[]})}u===1&&H()}else{const i=+e.projectId;_.loadScreen(i),b.loadFilters(i),await _.loadComs(i)}}catch(u){console.log(u)}finally{t.value=!1,document.title=`${_.screen.name} | \u7F16\u8F91\u5668`,_.autoCanvasScale(()=>({offsetX:v.getPanelOffsetX,offsetY:v.getPanelOffsetY}))}}),{loading:t}}}),X={class:"g-layout is-vertical edit-container"},G={class:"g-header"},J={id:"edit-main-wp",class:"g-layout edit-main-wp"},K={class:"g-layout edit-main"};function Q(e,o,t,l,u,i){const n=s("header-toolbar"),a=s("layer-panel"),g=s("components-panel"),E=s("filter-manager-drawer"),w=s("toolbox-panel"),P=s("canvas-main"),y=s("g-loading"),T=s("footer-toolbar"),h=s("config-panel"),I=s("editor-context-menu");return $(),O(q,null,[m("div",X,[m("div",G,[c(n)]),m("div",J,[c(a),c(g),c(E),m("div",K,[c(w),c(y,{spinning:e.loading},{default:L(()=>[c(P)]),_:1},8,["spinning"]),c(T)]),c(h)])]),c(I)],64)}var Z=x(W,[["render",Q],["__scopeId","data-v-b54f1d56"]]),re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Z});export{z as c,re as i};