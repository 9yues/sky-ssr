import{b as k,E as y,_ as h,w as b}from"./base.e6995ea7.js";import{i as v}from"./icon.49ab387f.js";import{a as u,i as E,H as C,o,f as t,c as r,w as _,q as w,u as l,y as i,l as c,k as d}from"./entry.a62c01a8.js";const g=k({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:v}}),B={click:a=>a instanceof MouseEvent},L=["href"],$=u({name:"ElLink"}),P=u({...$,props:g,emits:B,setup(a,{emit:f}){const s=a,n=E("link"),p=C(()=>[n.b(),n.m(s.type),n.is("disabled",s.disabled),n.is("underline",s.underline&&!s.disabled)]);function m(e){s.disabled||f("click",e)}return(e,I)=>(o(),t("a",{class:c(l(p)),href:e.disabled||!e.href?void 0:e.href,onClick:m},[e.icon?(o(),r(l(y),{key:0},{default:_(()=>[(o(),r(w(e.icon)))]),_:1})):i("v-if",!0),e.$slots.default?(o(),t("span",{key:1,class:c(l(n).e("inner"))},[d(e.$slots,"default")],2)):i("v-if",!0),e.$slots.icon?d(e.$slots,"icon",{key:2}):i("v-if",!0)],10,L))}});var S=h(P,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const D=b(S);export{D as E};