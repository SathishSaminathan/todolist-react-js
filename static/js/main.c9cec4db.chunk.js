(this["webpackJsonptracer-app"]=this["webpackJsonptracer-app"]||[]).push([[0],{130:function(e,t,a){e.exports=a(204)},140:function(e,t,a){},202:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),l=a.n(c),o=a(61),i=(a(139),a(140),a(108)),s=a(109),u=a(128),d=a(123),m=a(15),E=a(37),f=function(e){var t={};return e&&Object.keys(e).forEach((function(a){t[a]=function e(t){if("object"!==typeof t)return t;var a={};return Object.keys(t).forEach((function(n){var r=t[n];"object"===typeof r?a[n]=e(r):"function"===typeof r&&(a[n]=r)})),Object(E.c)(a)}(e[a])})),Object(E.c)(Object(m.a)({},t))};var p=function(e,t){var a=t.key,n=t.saga;n&&function(e,t){return!!t&&!Object.keys(e.injectedEffects).includes(t)}(e,a)&&(e.injectedEffects[a]=n,e.attachSaga(n))},O=f,h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(i.a)(this,a),n=t.call(this,e);var r=e.store,c=e.keyName,l=e.reducer,o=e.saga;return c&&(!function(e,t){var a=t.key,n=t.reducer,r=a.split(".");if(n)(function e(t,a,n){var r=a.shift();0!==a.length?(t[r]||(t[r]={}),e(t[r],a,n)):t[r]=n})(e.asyncReducers,r,n),e.replaceReducer(f(e.asyncReducers))}(r,{key:c,reducer:l}),p(r,{key:c,saga:o})),n}return Object(s.a)(a,[{key:"render",value:function(){return this.props.children}}]),a}(r.a.Component),v=a(57),y=a(69),T=a(212),g=a(38),b=a.n(g),D=a(83),_=a(125),j={ADD_TODO_LIST:"ADD_TODO_LIST",ADD_TODO_LIST_COMPLETED:"ADD_TODO_LIST_COMPLETED",DELETE_TODO_LIST:"DELETE_TODO_LIST",SET_TIME:"SET_TIME"},L={addTodo:function(e){return{type:"ADD_TODO_LIST",todo:e}},addTodoCompleted:function(e){return{type:"ADD_TODO_LIST_COMPLETED",todo:e}},deleteTodo:function(e){return{type:"DELETE_TODO_LIST",todoId:e}},setCurrentTime:function(e){return{type:"SET_TIME",time:e}}},N="DD/MM/YYYY hh:mm:ss",C="d/MM/yyyy hh:mm:ss",S="SUCCESS",w="ERROR",A="WARNING",x="CRITICAL",I="ALL",k="ACTIVE",M="COMPLETED",R={todoList:[],loading:!1,time:b()().format(N)},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.ADD_TODO_LIST:return Object(m.a)(Object(m.a)({},e),{},{loading:!e.loading});case j.SET_TIME:return Object(m.a)(Object(m.a)({},e),{},{time:t.time});case j.ADD_TODO_LIST_COMPLETED:return Object(m.a)(Object(m.a)({},e),{},{loading:!e.loading,todoList:[].concat(Object(_.a)(e.todoList),[t.todo])});case j.DELETE_TODO_LIST:return Object(m.a)(Object(m.a)({},e),{},{todoList:e.todoList.filter((function(e){return e.id!==t.todoId}))});default:return e}},W=function(e){return e.todo||R},Y={counterState:W,todoList:Object(D.a)(W,(function(e){return e.todoList})),loading:Object(D.a)(W,(function(e){return e.loading})),time:Object(D.a)(W,(function(e){return e.time}))},B=a(214),V=a(215),F=a(210),J=a(209),z=a(97),G=a(110),H=a.n(G),U=F.a.TextArea,X=J.a.Option,$=function(e){var t=e.loading,a=e.handleAdd,n=e.handleChange,c=e.todo,l=c.title,o=c.message,i=c.dueAt,s=c.type;return r.a.createElement(V.a,{xl:12,className:"input_area"},r.a.createElement(V.a,null,r.a.createElement(B.a,{className:"input_container"},r.a.createElement(V.a,{className:"label",xl:24},"Title"),r.a.createElement(V.a,{className:"input_style"},r.a.createElement(F.a,{value:l,placeholder:"enter todo",onChange:function(e){return n("title",e.target.value)}}))),r.a.createElement(B.a,{className:"input_container"},r.a.createElement(V.a,{className:"label",xl:24},"Message"),r.a.createElement(V.a,{className:"input_style",style:{width:"100%"}},r.a.createElement(U,{value:o,onChange:function(e){return n("message",e.target.value)},rows:4,placeholder:"enter todo message"}))),r.a.createElement(B.a,{className:"input_container"},r.a.createElement(V.a,{className:"label",xl:24},"Type"),r.a.createElement(V.a,{className:"input_style",style:{width:"100%"}},r.a.createElement(J.a,{onChange:function(e){return n("type",e)},value:s,style:{width:120}},r.a.createElement(X,{value:S},"Success"),r.a.createElement(X,{value:w},"Error"),r.a.createElement(X,{value:A},"Warning"),r.a.createElement(X,{value:x},"Critical")))),r.a.createElement(B.a,{className:"input_container"},r.a.createElement(V.a,{className:"label",xl:24},"Due at"),r.a.createElement(V.a,{className:"input_style",style:{width:"100%"}},r.a.createElement(H.a,{minDate:new Date,className:"date_picker_style",onChange:function(e){return n("dueAt",e)},value:i,format:C}))),r.a.createElement(B.a,{className:"input_container"},r.a.createElement(V.a,{className:"",xl:24},r.a.createElement(z.a,{loading:t,disabled:!(l&&o&&i),onClick:a,type:"primary",style:{width:"100%"}},"Add")))),r.a.createElement("audio",{className:"audio-element"},r.a.createElement("source",{src:"https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"})))},q=a(120),K=a(213),Q=a(211),Z=function(e){var t=e.todoList,a=e.time,n=e.handleDelete;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{enterAnimation:"accordionVertical",leaveAnimation:"none"},t.map((function(e,t){return r.a.createElement(V.a,{key:t,xl:24,className:"card_style"},r.a.createElement(B.a,null,r.a.createElement(V.a,{xl:18},r.a.createElement(V.a,{xl:24,className:"title_area"},r.a.createElement("span",{className:"title"},e.title),r.a.createElement("span",{className:"description"},"Due in ",function(e,t){var a=b()(e,N).diff(b()(t,N)),n=b.a.duration(a);return"".concat(n.days(),"d ").concat(parseInt(n.asHours()),"h ").concat(n.minutes(),"m ").concat(n.seconds(),"s")}(b()(e.dueAt).format(N),a))),r.a.createElement(V.a,{xl:24},r.a.createElement("div",{className:"message"},e.message))),r.a.createElement(V.a,{xl:6,className:"card_right"},r.a.createElement(K.a,null),r.a.createElement(z.a,{onClick:function(){return n(e.id)},type:"primary",icon:r.a.createElement(Q.a,null),size:"middle"}))))}))))},ee=J.a.Option,te=function(e){var t=e.time,a=e.todoList,n=e.handleChange,c=e.handleDelete,l=e.filter,o=l.type,i=l.status;return r.a.createElement(V.a,{xl:12,className:"list_area"},r.a.createElement(B.a,{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},r.a.createElement(B.a,{className:"input_container"},r.a.createElement(V.a,{className:"label",xl:24},"Task Status"),r.a.createElement(V.a,{className:"input_style"},r.a.createElement(J.a,{onChange:function(e){return n("status",e)},value:i,style:{width:120}},r.a.createElement(ee,{value:I},"All"),r.a.createElement(ee,{value:k},"Active"),r.a.createElement(ee,{value:M},"Completed")))),r.a.createElement(B.a,{className:"input_container"},r.a.createElement(V.a,{className:"label",xl:24},"Type"),r.a.createElement(V.a,{className:"input_style"},r.a.createElement(J.a,{onChange:function(e){return n("type",e)},value:o,style:{width:120}},r.a.createElement(ee,{value:I},"All"),r.a.createElement(ee,{value:S},"Success"),r.a.createElement(ee,{value:w},"Error"),r.a.createElement(ee,{value:A},"Warning"),r.a.createElement(ee,{value:x},"Critical"))))),r.a.createElement(Z,{todoList:a,time:t,handleDelete:c}))},ae=function(e){var t=e.todoList,a=e.time,c=e.handleDelete,l=Object(n.useState)([]),o=Object(y.a)(l,2),i=o[0],s=o[1],u=Object(n.useState)({type:I,status:I}),d=Object(y.a)(u,2),E=d[0],f=d[1];Object(n.useEffect)((function(){!function(e){var t=E.type,a=(E.status,[]);t===I?s(e):(a=e.filter((function(e){return e.type===t})),s(a))}(t)}),[t,E]);return r.a.createElement(te,{time:a,filter:E,handleChange:function(e,t){var a=Object(m.a)(Object(m.a)({},E),{},Object(v.a)({},e,t));f(a)},handleDelete:c,todoList:i})},ne=function(e){var t=e.todoList,a=e.handleAdd,n=e.handleDelete,c=e.handleChange,l=e.todo,o=e.loading,i=e.time;return r.a.createElement(B.a,{className:"todo_container"},r.a.createElement(V.a,{className:"todo_box",xl:16},r.a.createElement(B.a,null,r.a.createElement(V.a,{xl:24,className:"header"},"Todo App"),r.a.createElement($,{loading:o,handleAdd:a,handleChange:c,todo:l}),r.a.createElement(ae,{time:i,todoList:t,handleDelete:n}))))},re={title:"",message:"",type:S,status:k,dueAt:new Date,timestamp:b()().format("X")},ce=Object(o.c)((function(e){return{todoList:Y.todoList(e),loading:Y.loading(e),time:Y.time(e)}}),(function(e){return{addTodo:function(t){return e(L.addTodo(t))},deleteTodo:function(t){return e(L.deleteTodo(t))},setCurrentTime:function(t){return e(L.setCurrentTime(t))}}}))((function(e){var t=e.todoList,a=e.addTodo,c=e.deleteTodo,l=e.loading,o=e.time,i=e.setCurrentTime,s=Object(n.useState)(re),u=Object(y.a)(s,2),d=u[0],E=u[1];Object(n.useEffect)((function(){setInterval((function(){t.length>0&&i(b()().format(N))}),1e3)}),[t]);var f=function(){document.getElementsByClassName("audio-element")[0].play()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{time:o,loading:l,todoList:t,handleAdd:function(){a(Object(m.a)(Object(m.a)({},d),{},{id:Object(T.a)()})),E(re),f()},handleChange:function(e,t){var a=Object(m.a)(Object(m.a)({},d),{},Object(v.a)({},e,t));E(a)},handleDelete:function(e){console.log("todoList",t),c(e)},todo:d}))})),le=a(50),oe=a.n(le),ie=a(70),se=oe.a.mark(de),ue=oe.a.mark(me);function de(e){return oe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(ie.b)(L.addTodoCompleted(e.todo));case 2:case"end":return t.stop()}}),se)}function me(e){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.c)(j.ADD_TODO_LIST,de);case 2:case"end":return e.stop()}}),ue)}var Ee=oe.a.mark(fe);function fe(e){return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ie.a)([me()]);case 2:case"end":return e.stop()}}),Ee)}a(202);var pe,Oe,he,ve=(pe="todo",Oe=P,he=fe,function(e){return function(t){return r.a.createElement(o.b.Consumer,null,(function(a){var n=a.store,c=a.storeState;return r.a.createElement(h,{keyName:pe,reducer:Oe,saga:he,store:n,storeState:c},r.a.createElement(e,t))}))}})((function(){return r.a.createElement(ce,null)}));var ye=function(){return r.a.createElement(ve,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=a(127),ge=function(e){},be={init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e}},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(Te.a)(),a=[t],n=[],r=void 0;console.log("process.env.NODE_ENV: ".concat("production")),r=E.d;var c=Object(E.e)(O(be),e,r.apply(void 0,[E.a.apply(void 0,a)].concat(n)));return c.asyncReducers={},c.sagaMiddleware=t,c.injectedEffects={},c.attachSaga=function(e){c.sagaMiddleware.run(e)},ge(c),c}();l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:De},r.a.createElement(ye,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[130,1,2]]]);
//# sourceMappingURL=main.c9cec4db.chunk.js.map