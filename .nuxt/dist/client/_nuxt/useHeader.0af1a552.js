import{b as a,e as u,H as f,I as A}from"./entry.a62c01a8.js";const _=e=>e;function E(e){return{all:e=e||new Map,on:function(i,r){var t=e.get(i);t?t.push(r):e.set(i,[r])},off:function(i,r){var t=e.get(i);t&&(r?t.splice(t.indexOf(r)>>>0,1):e.set(i,[]))},emit:function(i,r){var t=e.get(i);t&&t.slice().map(function(s){s(r)}),(t=e.get("*"))&&t.slice().map(function(s){s(i,r)})}}}var c=(e=>(e.HEADER_SELECT_EVENT="HEADER_SELECT_EVENT",e.CHANGE_TO_HOME="CHANGE_TO_HOME",e.CHANGE_TO_BUSINESS="CHANGE_TO_BUSINESS",e.CHANGE_TO_DATA="CHANGE_TO_DATA",e.CHANGE_TO_TECHNOLOGY="CHANGE_TO_TECHNOLOGY",e.CHANGE_TO_QUALITY="CHANGE_TO_QUALITY",e.CHANGE_TO_ABOUT="CHANGE_TO_ABOUT",e))(c||{});const n=E();function O(){return{MITT_KEY:c,$on:n.on,$emit:n.emit}}O();const l=a();u();const h=[{href:"/home",title:"首页"},{href:"/introduce",title:"赛项介绍",children:[]},{href:"/specialist",title:"专家团队",children:[{href:"/specialist/1",title:"行业专家"},{href:"/specialist/2",title:"航空专家"},{href:"/specialist/3",title:"航天专家"}]},{href:"/works",title:"精彩展示",children:[{href:"/works/1",title:"优秀作品"},{href:"/works/2",title:"优秀组织单位"}]},{href:"/news",title:"新闻中心"},{href:"/connect",title:"联系我们"}],o=f(()=>(console.log("route",l.fullPath),l.fullPath.value));A(o,e=>{console.log("activeIndex",o)});const C=()=>({activeIndex:o,headerList:h});export{C as a,_ as m,O as u};