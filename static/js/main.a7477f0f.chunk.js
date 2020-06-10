(window["webpackJsonpmy-simple-trello"]=window["webpackJsonpmy-simple-trello"]||[]).push([[0],{55:function(e,t,a){e.exports=a(96)},60:function(e,t,a){},92:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),s=a.n(l),o=(a(60),a(5)),c=a(6),i=a(8),u=a(7),m=a(25),d=a(11),p=a(28),f=a(14),k=a(3),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={fname:"",email:"",email_confirm:"",password:""},e.submitHandler=function(e){e.preventDefault(),e.target.className+=" was-validated"},e.changeHandler=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(k.g,{className:"mt-5"},r.a.createElement(k.z,null,r.a.createElement(k.e,{md:"6"},r.a.createElement("form",null,r.a.createElement("p",{className:"h3 text-center mb-4"},"Register"),r.a.createElement("div",{className:"grey-text"},r.a.createElement(k.k,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"fname",required:!0}),r.a.createElement(k.k,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"email",required:!0}),r.a.createElement(k.k,{label:"Confirm your email",icon:"exclamation-triangle",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"email_confirm",required:!0}),r.a.createElement(k.k,{label:"Your password",icon:"lock",group:!0,type:"password",validate:!0,name:"password",required:!0})),r.a.createElement("div",{className:"text-center"},r.a.createElement(k.c,{color:"primary",type:"submit"},"Register"))))))}}]),a}(n.Component),g=Object(f.a)(h),b="/my-simple-trello/register",E="/my-simple-trello/login",v="/my-simple-trello/account",y=a(53),T=a.n(y),O=(a(92),a(4)),j=a(19),w=a.n(j),N=function e(){var t=this;Object(o.a)(this,e),this.idCounter=1,this.labelOptions=["New Feature","Defect","Invalid","Emergency Repair"],this.pendingTasks=[],this.todayTasks=[],this.futureTasks=[],this.tomorrowTasks=[],this.doneTasks=[],this.addTask=function(e,a,n,r){var l={title:e,details:a,due:n,labels:r,id:t.idCounter};if(t.idCounter++,t.pendingTasks.push(l),console.log(n.diff(w()(),"day")),n&&1===n.diff(w()(),"day")){var s=t.tomorrowTasks;s.push(l),t.tomorrowTasks=s}else if(n&&n.isAfter(w()(),"day")){var o=t.futureTasks;o.push(l),t.futureTasks=o}else{var c=t.todayTasks;c.push(l),t.todayTasks=c}t.updateLocalStorage()},this.deleteTask=function(e){t.todayTasks=t.todayTasks.filter((function(t){return t.id!==e})),t.tomorrowTasks=t.tomorrowTasks.filter((function(t){return t.id!==e})),t.futureTasks=t.futureTasks.filter((function(t){return t.id!==e})),t.pendingTasks=t.pendingTasks.filter((function(t){return t.id!==e})),t.doneTasks=t.doneTasks.filter((function(t){return t.id!==e})),t.updateLocalStorage()},this.checkTask=function(e){var a=t.pendingTasks.find((function(t){return t.id===e}));t.pendingTasks=t.pendingTasks.filter((function(t){return t.id!==e})),t.tomorrowTasks=t.tomorrowTasks.filter((function(t){return t.id!==e})),t.todayTasks=t.todayTasks.filter((function(t){return t.id!==e})),t.futureTasks=t.futureTasks.filter((function(t){return t.id!==e})),t.doneTasks.push(a),t.updateLocalStorage()},this.updateLocalStorage=function(){var e=JSON.stringify({todayTasks:t.todayTasks,tomorrowTasks:t.tomorrowTasks,futureTasks:t.futureTasks,pendingTasks:t.pendingTasks,doneTasks:t.doneTasks,labels:t.labelOptions,idCounter:t.idCounter});localStorage.setItem("tasks",e)},this.retrieveFromLocalStorage=function(){var e=JSON.parse(localStorage.getItem("tasks"));e&&(e.todayTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),e.tomorrowTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),e.futureTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),e.pendingTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),e.doneTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),t.todayTasks=e.todayTasks,t.tomorrowTasks=e.tomorrowTasks,t.futureTasks=e.futureTasks,t.pendingTasks=e.pendingTasks,t.doneTasks=e.doneTasks,t.labelOptions=e.labels,t.idCounter=e.idCounter)}};Object(O.h)(N,{todayTasks:O.m,futureTasks:O.m,doneTasks:O.m,tomorrowTasks:O.m});var C=new N,x=a(54),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={title:"",details:"",due:"",labels:[],modal:!1},e.addTask=function(){e.state.title&&(C.addTask(e.state.title,e.state.details,e.state.due,e.state.labels),e.setState({title:"",details:"",due:"",labels:[]}),e.toggleModal())},e.toggleModal=function(){e.setState({modal:!e.state.modal})},e.cancelTask=function(){e.setState({title:"",details:"",due:""}),e.toggleModal()},e.labelSelect=function(t,a){e.setState({labels:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=C.labelOptions.map((function(e){return{value:e,label:e}}));return r.a.createElement(k.z,{className:"mt-3 mb-3 ml-2"},r.a.createElement(k.c,{outline:!0,color:"primary",onClick:this.toggleModal.bind(this)},"New Task"),r.a.createElement(k.n,{isOpen:this.state.modal,toggle:this.toggleModal.bind(this),size:"sm"},r.a.createElement(k.q,null,"Add a New Task"),r.a.createElement(k.o,null,r.a.createElement(k.k,{type:"text",label:"Task",onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title,placeholder:"Task"}),r.a.createElement(k.k,{type:"textarea",placeholder:"Optional details",label:"Details (Optional)",value:this.state.details,onChange:function(t){return e.setState({details:t.target.value})}}),r.a.createElement(x.a,{options:t,isMulti:!0,value:this.state.labels,onChange:this.labelSelect.bind(this)}),r.a.createElement(T.a,{className:"mt-3",defaultValue:"Optional Due Date",value:this.state.due,onChange:function(t){e.setState({due:t})}})),r.a.createElement(k.p,null,r.a.createElement(k.c,{color:"secondary",size:"sm",onClick:this.cancelTask.bind(this)},"Cancel"),r.a.createElement(k.c,{color:"primary",size:"sm",onClick:this.addTask.bind(this)},"Add Task"))))}}]),a}(n.Component),D=Object(f.a)(S),M=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={modal:!1},e.deleteTask=function(){e.toggleDeleteModal(),C.deleteTask(e.props.task.id)},e.toggleDeleteModal=function(){e.setState({modal:!e.state.modal})},e.checkTask=function(){C.checkTask(e.props.task.id)},e}return Object(c.a)(a,[{key:"render",value:function(){var e,t;return this.props.task.labels&&this.props.task.labels.length>0&&(e=this.props.task.labels.map((function(e){return r.a.createElement(k.b,{pill:!0,color:"primary",className:"mr-2"},e.label)}))),this.props.task.due&&(t=r.a.createElement("span",{className:"light-blue-text"}," ",this.props.task.due.fromNow())),r.a.createElement(k.m,{className:"rgba(3, 169, 244, 0.1) rgba-blue-slight",color:"primary-color-dark"},r.a.createElement(k.n,{modalStyle:"danger",className:"text-white",size:"sm",position:"top",isOpen:this.state.modal,toggle:this.toggleDeleteModal.bind(this)},r.a.createElement(k.q,{className:"text-center",titleClass:"w-100",tag:"p",toggle:this.toggleDeleteModal.bind(this)},"Are you sure?"),r.a.createElement(k.o,{className:"text-center"},"delete task - ",r.a.createElement("strong",null,'"',this.props.task.title,'"')),r.a.createElement(k.p,{className:"justify-content-center"},r.a.createElement(k.c,{color:"danger",onClick:this.deleteTask.bind(this)},"Yes"),r.a.createElement(k.c,{color:"danger",outline:!0,onClick:this.toggleDeleteModal.bind(this)},"No"))),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("div",{className:"d-flex align-items-start flex-column"},r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("div",{className:"align-self-center"},r.a.createElement(k.i,{far:!0,icon:"square",size:"2x",onClick:this.checkTask.bind(this)}))),r.a.createElement("div",{className:"flex-grow-1 pb-3 pt-3 text-wrap"},r.a.createElement("h5",{className:"mb-1 blue-text"},r.a.createElement("strong",null,this.props.task.title)))),r.a.createElement("div",null,r.a.createElement(k.d,{className:"ml-auto",onClick:this.toggleDeleteModal.bind(this)}))),r.a.createElement("p",{className:"mb-1"},this.props.task.details),r.a.createElement("small",{className:"mb-3 mt-3"},"Due: ",t),r.a.createElement("div",{className:"flex-row mb-2"},e))}}]),a}(n.Component),A=Object(f.a)(M),q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=C.todayTasks.map((function(e){return r.a.createElement(A,{task:e,key:e.title})}));return r.a.createElement(k.e,{md:"4",className:"mb-5"},r.a.createElement("h3",{className:"red-text"},"Today's Deadline"),r.a.createElement(k.l,null,e))}}]),a}(n.Component),z=Object(f.a)(q),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=C.tomorrowTasks.map((function(e){return r.a.createElement(A,{task:e,key:e.title})}));return r.a.createElement("div",{className:"mb-5"},r.a.createElement("h3",null,"Tomorrow's Deadline"),r.a.createElement(k.l,null,e))}}]),a}(n.Component),F=Object(f.a)(L),Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=C.futureTasks.map((function(e){return r.a.createElement(A,{task:e,key:e.title})}));return r.a.createElement("div",{className:"mb-5"},r.a.createElement("h3",null,"Future Deadline"),r.a.createElement(k.l,null,e))}}]),a}(n.Component),H=Object(f.a)(Y),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=C.doneTasks.map((function(e){return r.a.createElement(A,{task:e,key:e.title})}));return r.a.createElement(k.e,{md:"4",className:"mb-5"},r.a.createElement("h3",{className:"success-text"},"Completed ",r.a.createElement(k.i,{far:!0,icon:"thumbs-up"})),r.a.createElement(k.l,null,e))}}]),a}(n.Component),J=Object(f.a)(I),R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){C.retrieveFromLocalStorage()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(k.z,null,r.a.createElement(z,null),r.a.createElement(k.e,null,r.a.createElement(F,null),r.a.createElement(H,null)),r.a.createElement(J,null)))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(k.t,{color:"indigo",dark:!0,expand:"md"},r.a.createElement(k.u,null,r.a.createElement("img",{src:"logo.png",width:"40",height:"40",className:"d-inline-block align-top",alt:"logo"})),r.a.createElement(k.w,{onClick:this.toggleCollapse}),r.a.createElement(k.f,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(k.v,{left:!0},r.a.createElement(k.r,{active:!0},r.a.createElement(k.s,{to:"/my-simple-trello/"},"Board")),r.a.createElement(k.r,null,r.a.createElement(k.s,{to:b},"Register")),r.a.createElement(k.r,null,r.a.createElement(k.s,{to:E},"Login")),r.a.createElement(k.r,null,r.a.createElement(k.s,{to:v},"Account"))),r.a.createElement(k.v,{right:!0})))}}]),a}(n.Component),W=Object(f.a)(B),_=function(){return r.a.createElement(k.h,{color:"blue",className:"font-small mt-lg-5"},r.a.createElement(k.g,{fluid:!0,className:"footer-copyright text-center py-3"},"\xa9 ",(new Date).getFullYear()," Copyright: ",r.a.createElement("a",{href:"https://aralovelace.dev"}," aralovelace.dev ")))},P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.submitHandler=function(e){e.preventDefault(),e.target.className+=" was-validated"},e.changeHandler=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(k.g,{className:"mt-5"},r.a.createElement(k.z,null,r.a.createElement(k.e,{md:"6"},r.a.createElement("form",null,r.a.createElement("p",{className:"h3 text-center mb-4"},"Login"),r.a.createElement("div",{className:"grey-text"},r.a.createElement(k.k,{label:"Type your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",required:!0}),r.a.createElement(k.k,{label:"Type your password",icon:"lock",group:!0,type:"password",validate:!0,required:!0})),r.a.createElement("div",{className:"text-center"},r.a.createElement(k.c,{color:"primary",type:"submit"},"Login"))))))}}]),a}(n.Component),V=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(k.g,{className:"mt-5"},r.a.createElement("p",{className:"h3 text-center mb-4"},"Account Page"))}}]),a}(n.Component),$=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(W,null),r.a.createElement(d.a,{exact:!0,path:"/my-simple-trello/",component:R}),r.a.createElement(d.a,{path:b,component:g}),r.a.createElement(d.a,{path:E,component:P}),r.a.createElement(d.a,{path:v,component:V})),r.a.createElement(_,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(93),a(94),a(95);s.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.a7477f0f.chunk.js.map