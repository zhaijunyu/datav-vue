import{b8 as r,bj as e}from"./vendor.1e2d2fe8.js";const u=function(s){return(s||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,"")},d=function(s,i,a,t=!1){s&&i&&a&&s.addEventListener(i,a,t)},j=function(s,i,a){s&&i&&a&&s.removeEventListener(i,a,!1)};function o(s,i){if(!s||!i)return!1;if(i.indexOf(" ")!==-1)throw new Error("className should not contain space.");return s.classList?s.classList.contains(i):` ${s.className} `.indexOf(` ${i} `)>-1}function E(s,i){if(!s)return;let a=s.className;const t=(i||"").split(" ");for(let n=0,f=t.length;n<f;n++){const c=t[n];!c||(s.classList?s.classList.add(c):o(s,c)||(a+=` ${c}`))}s.classList||(s.className=a)}function F(s,i){if(!s||!i)return;const a=i.split(" ");let t=` ${s.className} `;for(let n=0,f=a.length;n<f;n++){const c=a[n];!c||(s.classList?s.classList.remove(c):o(s,c)&&(t=t.replace(` ${c} `," ")))}s.classList||(s.className=u(t))}function l(s,i,a){!s||!i||(r(i)?Object.keys(i).forEach(t=>{l(s,t,i[t])}):(i=e(i),s.style[i]=a))}export{E as a,j as b,d as o,F as r,l as s};