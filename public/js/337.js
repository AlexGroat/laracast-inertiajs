"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[337,897],{7897:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(5548);const l={props:{links:Array}};const a=(0,r(3744).Z)(l,[["render",function(e,t,r,l,a,s){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.links,(function(e){return(0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.url?"Link":"span"),{href:e.url,innerHTML:e.label,class:(0,n.normalizeClass)(["px-1",{"text-gray-500":!e.url,"font-bold":e.active}])},null,8,["href","innerHTML","class"])})),256))])}]])},5337:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(5548),l={class:"flex justify-between mb-4"},a={class:"flex items-center"},s=(0,n.createElementVNode)("h1",{class:"mx-3 my-2 font-bold text-3xl"},"Users",-1),c=(0,n.createTextVNode)("New User "),o={class:"flex flex-col"},i={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},d={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},m={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},u={class:"min-w-full divide-y divide-gray-200"},p={class:"bg-white divide-y divide-gray-200"},f={class:"px-6 py-4 whitespace-nowrap"},x={class:"flex items-center"},h={class:"text-sm font-medium text-gray-900"},v={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},k=(0,n.createTextVNode)("Edit"),N={class:"mt-6 space-x-2"};var V=r(7897),g=r(9038),E=r(3279),y=r.n(E);const b={components:{Pagination:V.default,Link:g.rU},props:{users:Object,filters:Object,can:Object},data:function(){return{search:this.filters.search}},watch:{search:y()((function(e){this.$inertia.get("/users",{search:e},{preserveState:!0,replace:!0})}),500)}};const w=(0,r(3744).Z)(b,[["render",function(e,t,r,V,g,E){var y=(0,n.resolveComponent)("Head"),b=(0,n.resolveComponent)("Link"),w=(0,n.resolveComponent)("Pagination");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(y,{title:"Users"}),(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",a,[s,r.can.createUser?((0,n.openBlock)(),(0,n.createBlock)(b,{key:0,href:"/users/create",class:"text-blue-600"},{default:(0,n.withCtx)((function(){return[c]})),_:1})):(0,n.createCommentVNode)("",!0)]),(0,n.withDirectives)((0,n.createElementVNode)("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return g.search=e}),class:"border rounded-lg border-gray-300 px-2",type:"text",placeholder:"Search users.."},null,512),[[n.vModelText,g.search]])]),(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("table",u,[(0,n.createElementVNode)("tbody",p,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(r.users.data,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:e.id},[(0,n.createElementVNode)("td",f,[(0,n.createElementVNode)("div",x,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("div",h,(0,n.toDisplayString)(e.name),1)])])]),(0,n.createElementVNode)("td",v,[(0,n.createVNode)(b,{href:"/users/".concat(e.id,"/edit"),class:"text-indigo-600 hover:text-indigo-900"},{default:(0,n.withCtx)((function(){return[k]})),_:2},1032,["href"])])])})),128))])])])])])]),(0,n.createElementVNode)("div",N,[(0,n.createVNode)(w,{links:r.users.links},null,8,["links"])])],64)}]])}}]);