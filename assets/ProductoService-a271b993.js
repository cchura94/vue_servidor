import{k as t}from"./index-b162bc2b.js";const u={listar(r=1,o=5){return t().get(`/producto?page=${r}&q=&limit=${o}`)},guardar:r=>t().post("/producto",r),mostrar:function(r){return t().get(`/producto/${r}`)},modificar:(r,o)=>t().put(`/producto/${o}`,r),eliminar:r=>t().delete(`/producto/${r}`),actualizarImagen:(r,o)=>t().post(`/producto/${r}/update-image`,o)};export{u as p};
