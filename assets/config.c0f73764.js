import{b as d,L as r}from"./App.1a480446.js";import{a3 as f,aH as _,a4 as n,a9 as b,aZ as l,b3 as i,a5 as V}from"./vendor.60e09344.js";const v=f({name:"VDecorationProp",props:{com:{type:Object,required:!0}},setup(e){const o=_(e.com,"config"),s=[];for(const a in r){const m=r[a];s.push({id:a,name:a,src:m.url})}return{config:o,images:s}}}),C={class:"setting-panel-gui"};function y(e,o,s,a,m,$){const c=n("g-select-image"),p=n("g-field"),u=n("g-slider"),g=n("g-field-collapse");return V(),b("div",C,[l(g,{label:"\u5168\u5C40"},{default:i(()=>[l(p,{level:2,label:"\u88C5\u9970\u5143\u7D20"},{default:i(()=>[l(c,{modelValue:e.config.global.img,"onUpdate:modelValue":o[0]||(o[0]=t=>e.config.global.img=t),images:e.images},null,8,["modelValue","images"])]),_:1}),l(p,{level:2,label:"\u900F\u660E\u5EA6"},{default:i(()=>[l(u,{modelValue:e.config.global.opacity,"onUpdate:modelValue":o[1]||(o[1]=t=>e.config.global.opacity=t),min:0,max:1,step:.1},null,8,["modelValue","step"])]),_:1})]),_:1})])}var E=d(v,[["render",y]]);export{E as default};