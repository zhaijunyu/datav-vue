import{d as e,as as l,f as o,o as a,c as d,a as u,w as n}from"./index.3033f95e.js";var i=e({name:"VFullScreenProp",props:{com:{type:Object,required:!0}},setup:e=>({config:l(e.com,"config")})});const t={class:"setting-panel-gui"};i.render=function(e,l,i,s,f,c){const r=o("g-upload-image"),m=o("g-field"),g=o("g-color-picker"),p=o("g-slider"),V=o("el-switch");return a(),d("div",t,[u(m,{label:"全屏显示"},{default:n((()=>[u(r,{modelValue:e.config.request,"onUpdate:modelValue":l[1]||(l[1]=l=>e.config.request=l)},null,8,["modelValue"])])),_:1}),u(m,{label:"退出全屏"},{default:n((()=>[u(r,{modelValue:e.config.exit,"onUpdate:modelValue":l[2]||(l[2]=l=>e.config.exit=l)},null,8,["modelValue"])])),_:1}),u(m,{label:"背景颜色"},{default:n((()=>[u(g,{modelValue:e.config.bgColor,"onUpdate:modelValue":l[3]||(l[3]=l=>e.config.bgColor=l)},null,8,["modelValue"])])),_:1}),u(m,{label:"圆角"},{default:n((()=>[u(p,{modelValue:e.config.borderRadius,"onUpdate:modelValue":l[4]||(l[4]=l=>e.config.borderRadius=l),min:0,max:100,step:1,suffix:"%"},null,8,["modelValue"])])),_:1}),u(m,{label:"始终显示图片背景"},{default:n((()=>[u(V,{modelValue:e.config.alwaysShow,"onUpdate:modelValue":l[5]||(l[5]=l=>e.config.alwaysShow=l)},null,8,["modelValue"])])),_:1})])};export default i;
