import{b,c as r}from"./App.341e2996.js";import{a2 as g,a3 as a,a8 as d,aY as t,b0 as m,ae as p,af as S,a9 as _,a4 as u,ab as h,b2 as y,b1 as z}from"./vendor.1e2d2fe8.js";const N=g({name:"GSlider",props:{modelValue:{type:[String,Number],default:""},label:{type:String,default:""},size:{type:String,default:"small"},min:{type:Number,default:-1/0},max:{type:Number,default:1/0},step:{type:Number,default:1},inline:{type:[Boolean,String],default:!1},suffix:String,disabled:Boolean},emits:[r],setup(e,s){const o=l=>{s.emit(r,l)},n={Button:{textColorText:"var(--datav-font-color)",fontSizeMedium:"12px",iconSizeMedium:"12px"}};return e.size==="medium"&&(n.Button.fontSizeMedium="14px",n.Button.iconSizeMedium="14px"),{themeOverrides:n,handleInput:o}}}),B={class:"g-slider-main"},V={key:0,class:"g-input__caption"};function C(e,s,o,n,l,x){const f=a("n-slider"),v=a("n-input-number"),c=a("n-config-provider");return u(),d("div",{class:_(["datav-gui g-slider",[{"--inline --single":!!e.inline}]])},[t(c,{"theme-overrides":e.themeOverrides,abstract:""},{default:m(()=>[h("div",B,[t(f,{value:e.modelValue,min:e.min,max:e.max,step:e.step,tooltip:!1,"onUpdate:value":e.handleInput},null,8,["value","min","max","step","onUpdate:value"]),t(v,{value:e.modelValue,min:e.min,max:e.max,step:e.step,size:e.size,"onUpdate:value":e.handleInput},y({_:2},[e.suffix?{name:"suffix",fn:m(()=>[z(p(e.suffix),1)])}:void 0]),1032,["value","min","max","step","size","onUpdate:value"])])]),_:1},8,["theme-overrides"]),e.label?(u(),d("span",V,p(e.label),1)):S("",!0)],2)}var i=b(N,[["render",C]]);i.install=e=>{e.component(i.name,i)};export{i as default};