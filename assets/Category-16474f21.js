import{d as p,h as _,o as v,g as u,a as h,r as b,_ as f}from"./index-e49a65c4.js";const m=p({__name:"Category",setup(x){let o=1e3;const d=e=>{const l={id:o++,label:"testtest",children:[]};e.children||(e.children=[]),e.children.push(l),t.value=[...t.value]},c=(e,l)=>{const n=e.parent,a=n.data.children||n.data,s=a.findIndex(i=>i.id===l.id);a.splice(s,1),t.value=[...t.value]},r=(e,{node:l,data:n,store:a})=>e("span",{class:"custom-tree-node"},e("span",null,l.label),e("span",null,e("a",{onClick:()=>d(n)},"Append "),e("a",{style:"margin-left: 8px",onClick:()=>c(l,n)},"Delete"))),t=_([{id:1,label:"Level one 1",children:[{id:4,label:"Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}]);return(e,l)=>{const n=b("el-tree");return v(),u("div",null,[h(n,{data:t.value,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":r},null,8,["data"])])}}});const C=f(m,[["__scopeId","data-v-1295f658"]]);export{C as default};
