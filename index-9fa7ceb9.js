import{d as g,o as f,c as I,w as o,r as u,a as e,u as i,m as M,l as C,b as d,p as y,e as $,f as s,_ as w,g as h,F as k,h as B,n as S}from"./index-bbfac4a2.js";const m=l=>(y("data-v-9af94c56"),l=l(),$(),l),N=m(()=>s("span",null,"采购后台管理系统",-1)),O=m(()=>s("span",null,"首页",-1)),z=m(()=>s("span",null,"产品管理",-1)),F=m(()=>s("span",null,"订单管理",-1)),R=m(()=>s("span",null,"广告管理",-1)),E=g({__name:"Menu",props:{isCollapse:{type:Boolean}},setup(l){const t=l,p=(a,c)=>{console.log("sub-menu 展开的回调"),console.log(a,c)},r=(a,c)=>{console.log("sub-menu 收起的回调"),console.log(a,c)},v=(a,c,n,_)=>{console.log("菜单激活回调"),console.log(a,c,n,_)};return(a,c)=>{const n=u("el-menu-item"),_=u("el-icon"),x=u("el-sub-menu"),V=u("el-menu-item-group"),b=u("el-menu");return f(),I(b,{"default-active":a.$route.meta.activeMenu||a.$route.path,router:"",collapse:t.isCollapse,"text-color":"#fff","active-text-color":"#ffd04b","background-color":"#112f50",class:"el-menu-vertical-demo",onOpen:p,onClose:r,onSelect:v},{default:o(()=>[e(n,{index:""},{title:o(()=>[N]),_:1}),e(n,{index:"/"},{title:o(()=>[O]),default:o(()=>[e(_,null,{default:o(()=>[e(i(M))]),_:1})]),_:1}),e(x,{index:"/product"},{title:o(()=>[e(_,null,{default:o(()=>[e(i(C))]),_:1}),z]),default:o(()=>[e(n,{index:"/product/list"},{default:o(()=>[d("产品列表")]),_:1}),e(n,{index:"/product/category"},{default:o(()=>[d("产品分类")]),_:1})]),_:1}),e(x,{index:"/order"},{title:o(()=>[e(_,null,{default:o(()=>[e(i(C))]),_:1}),F]),default:o(()=>[e(n,{index:"/order/order-list"},{default:o(()=>[d("订单列表")]),_:1}),e(n,{index:"/order/collect"},{default:o(()=>[d("汇总清单")]),_:1}),e(n,{index:"3-3"},{default:o(()=>[d("产品审核")]),_:1})]),_:1}),e(x,{index:"4"},{title:o(()=>[e(_,null,{default:o(()=>[e(i(C))]),_:1}),R]),default:o(()=>[e(V,null,{default:o(()=>[e(n,{index:"4-1"},{default:o(()=>[d("广告列表")]),_:1}),e(n,{index:"4-2"},{default:o(()=>[d("广告分类")]),_:1})]),_:1})]),_:1})]),_:1},8,["default-active","collapse"])}}});const T=w(E,[["__scopeId","data-v-9af94c56"]]),j=l=>(y("data-v-4a92d974"),l=l(),$(),l),q={class:"header"},A=j(()=>s("div",{class:"right"},"22",-1)),D={class:"wrapper"},G=g({__name:"MainView",props:{isCollapse:{type:Boolean}},emits:["changeCollapse"],setup(l,{emit:t}){const p=l,r=()=>{t("changeCollapse")};return(v,a)=>{const c=u("el-col"),n=u("el-row"),_=u("RouterView");return f(),h(k,null,[s("div",q,[e(n,null,{default:o(()=>[e(c,{span:4},{default:o(()=>[p.isCollapse?(f(),h("span",{key:1,class:"iconfont icon-shousuo_zuo",onClick:r})):(f(),h("span",{key:0,class:"iconfont icon-shousuo_you",onClick:r}))]),_:1}),e(c,{span:20},{default:o(()=>[A]),_:1})]),_:1})]),s("div",D,[e(_)])],64)}}});const H=w(G,[["__scopeId","data-v-4a92d974"]]),J={class:"menu"},K=g({__name:"index",setup(l){let t=B(!1);const p=()=>{t.value=!t.value,console.log("=====",t.value)};return(r,v)=>(f(),h(k,null,[s("div",J,[e(T,{isCollapse:i(t)},null,8,["isCollapse"])]),s("div",{class:S(["content",{isClose:i(t)}])},[e(H,{isCollapse:i(t),onChangeCollapse:p},null,8,["isCollapse"])],2)],64))}});const P=w(K,[["__scopeId","data-v-ce304e78"]]);export{P as default};
