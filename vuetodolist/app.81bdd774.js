(function(t){function e(e){for(var n,d,a=e[0],r=e[1],l=e[2],u=0,m=[];u<a.length;u++)d=a[u],Object.prototype.hasOwnProperty.call(i,d)&&i[d]&&m.push(i[d][0]),i[d]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);c&&c(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,a=1;a<o.length;a++){var r=o[a];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=d(d.s=o[0]))}return t}var n={},i={app:0},s=[];function d(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=t,d.c=n,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(o,n,function(e){return t[e]}.bind(null,n));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var c=r;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),i=o.n(n);i.a},"080e":function(t,e,o){"use strict";var n=o("8c5f"),i=o.n(n);i.a},"22d7":function(t,e,o){"use strict";var n=o("be87"),i=o.n(n);i.a},"2de8":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("p",{staticClass:"todo__info"},[o("span",{staticClass:"todo__id"},[t._v("#"+t._s(t.todo.id+1))]),"read"==t.mode?o("span",{staticClass:"todo__title"},[t._v(t._s(t.todo.title))]):t._e(),"write"!=t.mode||t.changeflag?t._e():o("span",{staticClass:"todo__title"},[t._v(t._s(t.todoedit.title))]),"write"==t.mode&&t.changeflag?o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoedit.title,expression:"todoedit.title"}],staticClass:"todo__input",attrs:{type:"text"},domProps:{value:t.todoedit.title},on:{input:function(e){e.target.composing||t.$set(t.todoedit,"title",e.target.value)}}}):t._e()]),o("p",{staticClass:"todo__status"},["write"==t.mode&&t.changeflag?o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoedit.done,expression:"todoedit.done"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.todoedit.done)?t._i(t.todoedit.done,null)>-1:t.todoedit.done},on:{change:function(e){var o=t.todoedit.done,n=e.target,i=!!n.checked;if(Array.isArray(o)){var s=null,d=t._i(o,s);n.checked?d<0&&t.$set(t.todoedit,"done",o.concat([s])):d>-1&&t.$set(t.todoedit,"done",o.slice(0,d).concat(o.slice(d+1)))}else t.$set(t.todoedit,"done",i)}}}):t._e(),"read"==t.mode?o("span",{class:t.todo.done?"todo__done":""},[t._v(" "+t._s(t.todo.done?"выполнено":"в очереди")+" ")]):t._e(),"write"==t.mode?o("span",{class:t.todoedit.done?"todo__done":""},[t._v(" "+t._s(t.todoedit.done?"выполнено":"в очереди")+" ")]):t._e(),"write"==t.mode?o("button",{staticClass:"todo__button todo__delete",on:{click:function(e){return t.deleteTodo(t.todo.id)}}},[t._v(" Удалить ")]):t._e(),"write"==t.mode?o("button",{staticClass:"todo__button todo__delete",on:{click:t.changeTodo}},[t._v(" Изменить ")]):t._e()])])},i=[],s={name:"TodoItem",props:{todo:{type:Object,required:!0},mode:{type:String,default:"read"}},data:function(){return{todoedit:{},changeflag:!1}},methods:{deleteTodo:function(t){this.$emit("delete",t)},changeTodo:function(){this.changeflag?(this.$emit("changetodo",this.todoedit),this.changeflag=!1):this.changeflag=!0}},created:function(){"write"==this.mode&&(this.todoedit={id:this.todo.id,title:this.todo.title,done:this.todo.done})}},d=s,a=(o("97fb"),o("2877")),r=Object(a["a"])(d,n,i,!1,null,"2ccd5e23",null);e["a"]=r.exports},"4e76":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[t._v(" "+t._s(t.s)+" "),o("router-view"),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"copyright"},[t._v("(C) 2020 "),o("a",{attrs:{href:"https://github.com/IvanShavliuga"}},[t._v("Ivan Ivanov (Shavliuga)")]),t._v(", Belarus, Novopolotsk")])}],d={name:"App",data:function(){return{s:"dd"}},created:function(){this.$store.dispatch("initData"),this.$router.push("/")},beforeDestory:function(){this.$store.dispatch("toStorage","redo")}},a=d,r=(o("034f"),o("2877")),l=Object(r["a"])(a,i,s,!1,null,null,null),c=l.exports,u=(o("d3b7"),o("8c4f")),m=(o("bb51"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"edit"},[t.modalShow?o("div",{staticClass:"edit__modal"},[o("Modal",{on:{answer:t.send}})],1):o("div",{staticClass:"edit__form"},[o("h1",[t._v(t._s(t.modeedit?"Редактировать":"Добавить")+" задачу")]),o("div",{staticClass:"form__panel"},[o("button",{staticClass:"form__button button__close",attrs:{title:"Вернуть на главную"},on:{click:t.rethome}},[t._v(" Главная ")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.addtasktext,expression:"addtasktext"}],staticClass:"form__addtext",attrs:{type:"text"},domProps:{value:t.addtasktext},on:{input:function(e){e.target.composing||(t.addtasktext=e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.addtaskdone,expression:"addtaskdone"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.addtaskdone)?t._i(t.addtaskdone,null)>-1:t.addtaskdone},on:{change:function(e){var o=t.addtaskdone,n=e.target,i=!!n.checked;if(Array.isArray(o)){var s=null,d=t._i(o,s);n.checked?d<0&&(t.addtaskdone=o.concat([s])):d>-1&&(t.addtaskdone=o.slice(0,d).concat(o.slice(d+1)))}else t.addtaskdone=i}}}),t._v(" Выполнено "),o("button",{staticClass:"form__button button__add",attrs:{title:"Добавить задачу"},on:{click:t.addTodoSend}},[t._v(" Добавить ")]),o("button",{staticClass:"form__button button__save",attrs:{title:"Сохранить изменения"},on:{click:t.saveNote}},[t._v(" Сохранить ")])]),o("form",{staticClass:"form"},[t.note.id>=0?o("input",{staticClass:"form__id",attrs:{type:"text",disabled:""},domProps:{value:"#"+(t.note.id+1)}}):t._e(),o("input",{directives:[{name:"model",rawName:"v-model",value:t.note.title,expression:"note.title"}],staticClass:"form__title",attrs:{type:"text"},domProps:{value:t.note.title},on:{input:function(e){e.target.composing||t.$set(t.note,"title",e.target.value)}}})]),o("div",{staticClass:"edit__list"},t._l(t.todosnew,(function(e,n){return o("TodoItem",{key:n,attrs:{todo:e,mode:"write"},on:{changetodo:t.changeitem,delete:t.deleteTodoClick}})})),1),0===t.todosnew.length?o("div",[o("p",[t._v("Нет задач в списке")])]):t._e()])])}),_=[],f=(o("c740"),o("a434"),o("714b")),p=o("2de8"),h={props:["id"],data:function(){return{modalShow:!1,note:{id:0,title:"test",todos:[]},todosnew:[],modeedit:!0,addtaskform:!1,addtasktext:"Текст задачи",addtaskdone:!1}},created:function(){if(this.id>=0){this.note=this.$store.getters.allNotes[this.id];for(var t=0;t<this.note.todos.length;t++)this.todosnew.push(this.note.todos[t]);this.modeedit=!0}else this.modeedit=!1,this.note.id=this.$store.getters.allNotes.length,this.todosnew=[];this.$store.dispatch("toStorage","redo")},name:"Edit",methods:{change:function(){this.modalShow=!0},changeitem:function(t){var e=this.todosnew.findIndex((function(e){return e.id===t.id}));-1!==e&&this.todosnew.splice(e,1,t)},deleteTodoClick:function(t){var e=this.todosnew.findIndex((function(e){return e.id===t}));-1!==e&&this.todosnew.splice(e,1)},addTodoSend:function(){var t={id:this.todosnew.length,title:this.addtasktext,done:this.addtaskdone};this.todosnew.push(t)},saveNote:function(){this.note.todos=this.todosnew,this.$store.dispatch("saveNote",this.note),this.$router.push({path:"/"})},rethome:function(){this.modalShow=!0},send:function(t){"yes"==t&&this.$router.push({path:"/"}),this.modalShow=!1}},components:{Modal:f["a"],TodoItem:p["a"]}},v=h,g=(o("d572"),Object(r["a"])(v,m,_,!1,null,null,null)),y=g.exports;n["a"].use(u["a"]);var b=[{path:"/",name:"Home",component:function(){return Promise.resolve().then(o.bind(null,"bb51"))}},{path:"/edit/:id",props:!0,name:"Edit",component:y}],x=new u["a"]({mode:"history",base:"https://ivanshavliuga.github.io/vuetodolist/index.html",routes:b}),w=x,k=o("2f62");n["a"].use(k["a"]);var N=new k["a"].Store({state:{notes:[{id:0,title:"Lorem Ipsum is simply dummy text",todos:[{id:0,title:"Lorem Ipsum is simply dummy text",done:!0},{id:1,title:"Lorem Ipsum is simply dummy text",done:!1},{id:2,title:"Lorem Ipsum is simply dummy text",done:!0},{id:3,title:"Lorem Ipsum is simply dummy text",done:!1},{id:4,title:"Lorem Ipsum is simply dummy text",done:!1}]},{id:1,title:"Lorem Ipsum is simply dummy text",todos:[{id:0,title:"Lorem Ipsum is simply dummy text",done:!1},{id:1,title:"Lorem Ipsum is simply dummy text",done:!1},{id:2,title:"Lorem Ipsum is simply dummy text",done:!1},{id:3,title:"Lorem Ipsum is simply dummy text",done:!0},{id:4,title:"Lorem Ipsum is simply dummy text",done:!0}]},{id:2,title:"Lorem Ipsum is simply dummy text",todos:[{id:0,title:"Lorem Ipsum is simply dummy text",done:!0},{id:1,title:"Lorem Ipsum is simply dummy text",done:!1},{id:2,title:"Lorem Ipsum is simply dummy text",done:!0},{id:3,title:"Lorem Ipsum is simply dummy text",done:!1},{id:4,title:"Lorem Ipsum is simply dummy text",done:!0}]}]},mutations:{INIT_DATA:function(t){var e=localStorage.getItem("vuetodolist_undo");console.log(e),console.log(t.notes)},SAVE_NOTE:function(t,e){for(var o=0;o<t.notes.length;o++)console.log("save #"+o+": "+t.notes[o].todos[0].title);var n={id:e.id,title:e.title,todos:e.todos},i=t.notes.findIndex((function(t){return t.id===e.id}));-1!==i?t.notes.splice(i,1,n):(t.notes.push(n),t.addnote=!1),t.note={}},DELETE_NOTE:function(t,e){localStorage.setItem("vuetodolist_undo",JSON.stringify(t.notes));var o=t.notes.findIndex((function(t){return t.id===e}));-1!==o&&t.notes.splice(o,1)},UNDO_NOTE:function(t){var e=t.notes,o=localStorage.getItem("vuetodolist_undo");o&&(t.notes=JSON.parse(o),localStorage.setItem("vuetodolist_redo",JSON.stringify(e)))},REDO_NOTE:function(t){var e=t.notes,o=localStorage.getItem("vuetodolist_redo");o&&(t.notes=JSON.parse(o),localStorage.setItem("vuetodolist_undo",JSON.stringify(e)))},TO_STORAGE:function(t,e){"undo"===e&&localStorage.setItem("vuetodolist_undo",JSON.stringify(t.notes)),"redo"===e&&localStorage.setItem("vuetodolist_redo",JSON.stringify(t.notes))}},actions:{initData:function(t){var e=t.commit;try{e("INIT_DATA")}catch(o){console.log(o)}},toStorage:function(t,e){var o=t.commit;try{o("TO_STORAGE",e)}catch(n){console.log(n)}},deleteNote:function(t,e){var o=t.commit;try{o("DELETE_NOTE",e)}catch(n){console.log(n)}},undoNote:function(t){var e=t.commit;try{e("UNDO_NOTE")}catch(o){console.log(o)}},redoNote:function(t){var e=t.commit;try{e("REDO_NOTE")}catch(o){console.log(o)}},saveNote:function(t,e){var o=t.commit;try{o("SAVE_NOTE",e)}catch(n){console.log(n)}}},getters:{allNotes:function(t){return t.notes}}});n["a"].config.productionTip=!0,new n["a"]({router:w,store:N,render:function(t){return t(c)}}).$mount("#app")},"5ced":function(t,e,o){},"714b":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal"},[o("div",{staticClass:"modal__box"},[o("p",{staticClass:"modal__text"},[t._v("Вы не сохранили изменения. Все равно продолжить")]),o("i",{staticClass:"modal__close",attrs:{role:"button"},on:{click:function(e){return t.submit("no")}}},[t._v("X")]),o("button",{staticClass:"modal__button modal__yes",on:{click:function(e){return t.submit("yes")}}},[t._v("Yes")]),o("button",{staticClass:"modal__button modal__no",on:{click:function(e){return t.submit("no")}}},[t._v("No")])])])},i=[],s={methods:{submit:function(t){this.$emit("answer",t)}}},d=s,a=(o("22d7"),o("2877")),r=Object(a["a"])(d,n,i,!1,null,null,null);e["a"]=r.exports},"85ec":function(t,e,o){},"8c5f":function(t,e,o){},"97fb":function(t,e,o){"use strict";var n=o("4e76"),i=o.n(n);i.a},bb51:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[t.modalShow?o("div",[o("Modal",{on:{answer:t.send}})],1):o("div",{staticClass:"edit__form"},[o("h1",{staticClass:"home__title"},[t._v("Список заметок")]),o("div",{staticClass:"form__panel"},[o("button",{staticClass:"form__button button__cancel",attrs:{title:"Отменить изменения"},on:{click:t.undoNote}},[t._v(" Отмена ")]),o("button",{staticClass:"form__button button__retry",attrs:{title:"Повторить изменения"},on:{click:t.redoNote}},[t._v(" Повторить ")]),o("button",{staticClass:"form__button botton__add",attrs:{title:"добавить заметку"}},[o("router-link",{attrs:{to:"/edit/add"}},[t._v("Добавить")])],1)]),t.allNotes.length?o("div",{staticClass:"home__list"},t._l(t.allNotes,(function(e,n){return o("Note",{key:n,attrs:{note:e},on:{delete:t.delnote}})})),1):o("div",[t._v(" Здесь нет заметок ")])])])},i=[],s=o("5530"),d=o("2f62"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",{staticClass:"note"},[o("h3",{staticClass:"note__title"},[t._v("#"+t._s(t.note.id+1)+" "+t._s(t.note.title))]),o("ul",{staticClass:"note__menu"},[o("li",{staticClass:"note__item"},[o("router-link",{attrs:{to:"/edit/"+t.note.id}},[t._v("Редактировать")])],1),o("li",{staticClass:"note__item",on:{click:function(e){return t.deletenote(t.note.id)}}},[t._v("Удалить")])]),o("div",t._l(t.note.todos,(function(t,e){return o("TodoItem",{key:e,attrs:{todo:t}})})),1),0===t.note.todos.length?o("div",[o("p",[t._v("Нет задач в списке")])]):t._e()])},r=[],l=o("2de8"),c=o("714b"),u={name:"Note",props:{note:{type:Object,required:!0}},data:function(){return{filter:"all",modalShow:!1,indDelete:-1}},methods:{deletenote:function(t){this.$emit("delete",t)}},components:{TodoItem:l["a"],Modal:c["a"]},updated:function(){this.$store.dispatch("toStorage","undo")}},m=u,_=(o("080e"),o("2877")),f=Object(_["a"])(m,a,r,!1,null,null,null),p=f.exports,h={name:"Home",components:{Note:p,Modal:c["a"]},data:function(){return{modalShow:!1,idDelete:-1}},computed:Object(s["a"])({},Object(d["c"])(["allNotes"])),methods:Object(s["a"])(Object(s["a"])({},Object(d["b"])(["undoNote","redoNote"])),{},{delnote:function(t){this.modalShow=!0,this.idDelete=t},send:function(t){"yes"==t&&this.$store.dispatch("deleteNote",this.idDelete),this.modalShow=!1}})},v=h,g=(o("cccb"),Object(_["a"])(v,n,i,!1,null,null,null));e["default"]=g.exports},be87:function(t,e,o){},cccb:function(t,e,o){"use strict";var n=o("5ced"),i=o.n(n);i.a},d572:function(t,e,o){"use strict";var n=o("fea3"),i=o.n(n);i.a},fea3:function(t,e,o){}});
//# sourceMappingURL=app.81bdd774.js.map