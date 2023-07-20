import{r as s,b as $,d as v,o as I,c as S,a as e,f as t,w as d,l as z,t as c,i as E,h as g}from"./index-b162bc2b.js";import{p as F}from"./ProductoService-a271b993.js";import{p as C}from"./PedidoService-b2397c28.js";const M={class:"grid"},q={class:"col-7"},G={class:"card"},j=e("h5",null,"Lista Productos",-1),A=e("span",{class:"p-column-title"},"Nombre",-1),H=e("span",{class:"p-column-title"},"Imagen",-1),J=["src","alt"],Q=e("span",{class:"p-column-title"},"Precio",-1),W=e("span",{class:"p-column-title"},"Categoria",-1),X={class:"col-5"},Y={class:"grid"},Z={class:"col-12"},ee={class:"card"},oe=e("h5",null,"Carrito",-1),te={class:"col-12"},le={class:"card"},ae=e("h5",null,"Cliente",-1),ne={class:"p-input-icon-left"},se=e("i",{class:"pi pi-search"},null,-1),ie=e("label",{for:""},"Ingrese Nombre Completo",-1),re=e("label",{for:""},"Ingrese CI NIT",-1),de=e("label",{for:""},"Ingrese Telefono",-1),ce=e("label",{for:""},"Ingrese Correo",-1),ue={key:0,class:"card"},pe={class:"col-12"},me={class:"card"},fe={__name:"NuevoPedido",setup(ve){const y=s([]),u=s([]),w=s(null),P=s({}),_=s(!1),k=s(0),h=s({}),i=s({}),b=s(!1),f=s(""),r=s({nombre_completo:"",ci_nit:"",telefono:"",correo:""});$(async()=>{_.value=!0,h.value={first:0,rows:w.value.rows,sortField:null,sortOrder:null,filters:P.value},V()});const T=a=>a.toLocaleString("en-US",{style:"currency",currency:"USD"}),V=async()=>{_.value=!0;let a=h.value.page+1,l=h.value.rows;const{data:n}=await F.listar(a,l);y.value=n.data,k.value=n.total,_.value=!1},L=a=>{h.value=a,V()},R=a=>{u.value.push({id:a.id,nombre:a.nombre,precio:a.precio,cantidad:1})},U=a=>{const l=u.value.indexOf(a);u.value.splice(l-1,1)},x=async()=>{const{data:a}=await C.buscarCliente(f.value);i.value=a},B=async()=>{const{data:a}=await C.nuevoCliente(r.value);i.value=a,b.value=!1},D=async()=>{try{let a={cliente_id:i.value.id,productos:u.value};const{data:l}=await C.guardar(a);i.value={},u.value=[]}catch{alert("Error al registrar Pedido")}};return(a,l)=>{const n=v("Column"),p=v("Button"),N=v("DataTable"),m=v("InputText"),K=v("Dialog");return I(),S("div",M,[e("div",q,[e("div",G,[j,t(N,{ref_key:"dt",ref:w,value:y.value,dataKey:"id",paginator:!0,lazy:"",totalRecords:k.value,loading:_.value,onPage:l[0]||(l[0]=o=>L(o)),rows:10,filters:P.value,paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Mostrando {first} a {last} de {totalRecords} productos",responsiveLayout:"scroll"},{default:d(()=>[t(n,{field:"nombre",header:"Nombre",sortable:!0,headerStyle:"width:14%; min-width:8rem;"},{body:d(o=>[A,g(" "+c(o.data.nombre),1)]),_:1}),t(n,{header:"imagen",headerStyle:"width:14%; min-width:10rem;"},{body:d(o=>[H,e("img",{src:"http://127.0.0.1:8000/"+o.data.imagen,alt:o.data.nombre,class:"shadow-2",width:"100"},null,8,J)]),_:1}),t(n,{field:"precio",header:"Precio",sortable:!0,headerStyle:"width:14%; min-width:4rem;"},{body:d(o=>[Q,g(" "+c(T(o.data.precio)),1)]),_:1}),t(n,{field:"categoria_id",header:"Categoria",sortable:!0,headerStyle:"width:14%; min-width:10rem;"},{body:d(o=>[W,g(" "+c(o.data.categoria.nombre),1)]),_:1}),t(n,{headerStyle:"min-width:10rem;"},{body:d(o=>[t(p,{icon:"pi pi-plus",class:"p-button-rounded p-button-success mr-2",onClick:O=>R(o.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value","totalRecords","loading","filters"])])]),e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[oe,t(N,{value:u.value},{default:d(()=>[t(n,{field:"nombre",header:"Nombre"}),t(n,{field:"precio",header:"Precio"}),t(n,{field:"cantidad",header:"Cantidad"}),t(n,null,{body:d(o=>[t(p,{icon:"pi pi-plus",class:"p-button-rounded p-button-danger mr-2",onClick:O=>U(o.data)},null,8,["onClick"])]),_:1})]),_:1},8,["value"])])]),e("div",te,[e("div",le,[ae,e("span",ne,[se,t(m,{modelValue:f.value,"onUpdate:modelValue":l[1]||(l[1]=o=>f.value=o),placeholder:"Buscar",onKeyup:z(x,["enter"])},null,8,["modelValue","onKeyup"]),t(p,{label:"Buscar",icon:"pi pi-search",onClick:x})]),t(p,{label:"Nuevo Cliente",icon:"pi pi-external-link",onClick:l[2]||(l[2]=o=>b.value=!0)}),t(K,{visible:b.value,"onUpdate:visible":l[7]||(l[7]=o=>b.value=o),modal:"",header:"Nuevo Cliente",style:{width:"50vw"}},{default:d(()=>[ie,t(m,{type:"text",modelValue:r.value.nombre_completo,"onUpdate:modelValue":l[3]||(l[3]=o=>r.value.nombre_completo=o)},null,8,["modelValue"]),re,t(m,{type:"text",modelValue:r.value.ci_nit,"onUpdate:modelValue":l[4]||(l[4]=o=>r.value.ci_nit=o)},null,8,["modelValue"]),de,t(m,{type:"text",modelValue:r.value.telefono,"onUpdate:modelValue":l[5]||(l[5]=o=>r.value.telefono=o)},null,8,["modelValue"]),ce,t(m,{type:"text",modelValue:r.value.correo,"onUpdate:modelValue":l[6]||(l[6]=o=>r.value.correo=o)},null,8,["modelValue"]),t(p,{label:"Guardar Cliente",icon:"pi pi-external-link",onClick:B})]),_:1},8,["visible"]),i.value.id?(I(),S("div",ue,[e("h6",null,"Nombres: "+c(i.value.nombre_completo),1),e("h6",null,"CI/NIT: "+c(i.value.ci_nit),1),e("h6",null,"Telefono: "+c(i.value.telefono),1),e("h6",null,"Correo: "+c(i.value.correo),1)])):E("",!0)])]),e("div",pe,[e("div",me,[t(p,{label:"Registrar Pedido",icon:"pi pi-external-link",onClick:D})])])])])])}}};export{fe as default};
