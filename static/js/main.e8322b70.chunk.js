(window["webpackJsonpmy-simple-trello"]=window["webpackJsonpmy-simple-trello"]||[]).push([[0],{159:function(e,t,a){e.exports=a(354)},164:function(e,t,a){},350:function(e,t,a){},354:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(11),s=a.n(r),o=(a(164),a(15)),c=a(21),i=a(23),u=a(22),m=a(40),d=a(24),p=a(67),f=a(28),h=a(5),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={fname:"",email:"",email_confirm:"",password:""},e.submitHandler=function(e){e.preventDefault(),e.target.className+=" was-validated"},e.changeHandler=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(h.h,{className:"mt-5"},l.a.createElement(h.A,null,l.a.createElement(h.f,{md:"6"},l.a.createElement("form",null,l.a.createElement("p",{className:"h3 text-center mb-4"},"Register"),l.a.createElement("div",{className:"grey-text"},l.a.createElement(h.l,{label:"Your name",icon:"user",group:!0,type:"text",validate:!0,error:"wrong",success:"right",name:"fname",required:!0}),l.a.createElement(h.l,{label:"Your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"email",required:!0}),l.a.createElement(h.l,{label:"Confirm your email",icon:"exclamation-triangle",group:!0,type:"email",validate:!0,error:"wrong",success:"right",name:"email_confirm",required:!0}),l.a.createElement(h.l,{label:"Your password",icon:"lock",group:!0,type:"password",validate:!0,name:"password",required:!0})),l.a.createElement("div",{className:"text-center"},l.a.createElement(h.d,{color:"primary",type:"submit"},"Register"))))))}}]),a}(n.Component),g=Object(f.a)(k),b="/my-simple-trello/register",E="/my-simple-trello/login",v="/my-simple-trello/account",y=a(156),T=a.n(y),O=(a(350),a(10)),j=a(35),w=a.n(j),N=function e(){var t=this;Object(o.a)(this,e),this.idCounter=1,this.labelOptions=["New Feature","Defect","Invalid","Emergency Repair"],this.pendingTasks=[],this.todayTasks=[],this.futureTasks=[],this.tomorrowTasks=[],this.doneTasks=[],this.addTask=function(e,a,n,l){var r={title:e,details:a,due:n,labels:l,id:t.idCounter};if(t.idCounter++,t.pendingTasks.push(r),console.log(n.diff(w()(),"day")),n&&1===n.diff(w()(),"day")){var s=t.tomorrowTasks;s.push(r),t.tomorrowTasks=s}else if(n&&n.isAfter(w()(),"day")){var o=t.futureTasks;o.push(r),t.futureTasks=o}else{var c=t.todayTasks;c.push(r),t.todayTasks=c}t.updateLocalStorage()},this.deleteTask=function(e){t.todayTasks=t.todayTasks.filter((function(t){return t.id!==e})),t.tomorrowTasks=t.tomorrowTasks.filter((function(t){return t.id!==e})),t.futureTasks=t.futureTasks.filter((function(t){return t.id!==e})),t.pendingTasks=t.pendingTasks.filter((function(t){return t.id!==e})),t.doneTasks=t.doneTasks.filter((function(t){return t.id!==e})),t.updateLocalStorage()},this.checkTask=function(e){var a=t.pendingTasks.find((function(t){return t.id===e}));t.pendingTasks=t.pendingTasks.filter((function(t){return t.id!==e})),t.tomorrowTasks=t.tomorrowTasks.filter((function(t){return t.id!==e})),t.todayTasks=t.todayTasks.filter((function(t){return t.id!==e})),t.futureTasks=t.futureTasks.filter((function(t){return t.id!==e})),t.doneTasks.push(a),t.updateLocalStorage()},this.updateLocalStorage=function(){var e=JSON.stringify({todayTasks:t.todayTasks,tomorrowTasks:t.tomorrowTasks,futureTasks:t.futureTasks,pendingTasks:t.pendingTasks,doneTasks:t.doneTasks,labels:t.labelOptions,idCounter:t.idCounter});localStorage.setItem("tasks",e)},this.retrieveFromLocalStorage=function(){var e=JSON.parse(localStorage.getItem("tasks"));e&&(e.todayTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),e.tomorrowTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),e.futureTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),e.pendingTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),e.doneTasks.forEach((function(e){e.due&&(e.due=w()(e.due))})),t.todayTasks=e.todayTasks,t.tomorrowTasks=e.tomorrowTasks,t.futureTasks=e.futureTasks,t.pendingTasks=e.pendingTasks,t.doneTasks=e.doneTasks,t.labelOptions=e.labels,t.idCounter=e.idCounter)}};Object(O.h)(N,{todayTasks:O.m,futureTasks:O.m,doneTasks:O.m,tomorrowTasks:O.m});var C=new N,x=a(157),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",details:"",due:"",labels:[],modal:!1},e.addTask=function(){e.state.title&&(C.addTask(e.state.title,e.state.details,e.state.due,e.state.labels),e.setState({title:"",details:"",due:"",labels:[]}),e.toggleModal())},e.toggleModal=function(){e.setState({modal:!e.state.modal})},e.cancelTask=function(){e.setState({title:"",details:"",due:""}),e.toggleModal()},e.labelSelect=function(t,a){e.setState({labels:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=C.labelOptions.map((function(e){return{value:e,label:e}}));return l.a.createElement(h.A,{className:"mt-3 mb-3 ml-2"},l.a.createElement(h.d,{outline:!0,color:"primary",onClick:this.toggleModal.bind(this)},"New Task"),l.a.createElement(h.o,{isOpen:this.state.modal,toggle:this.toggleModal.bind(this),size:"sm"},l.a.createElement(h.r,null,"Add a New Task"),l.a.createElement(h.p,null,l.a.createElement(h.l,{type:"text",label:"Task",onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title,placeholder:"Task"}),l.a.createElement(h.l,{type:"textarea",placeholder:"Optional details",label:"Details (Optional)",value:this.state.details,onChange:function(t){return e.setState({details:t.target.value})}}),l.a.createElement(x.a,{options:t,isMulti:!0,value:this.state.labels,onChange:this.labelSelect.bind(this)}),l.a.createElement(T.a,{className:"mt-3",defaultValue:"Optional Due Date",value:this.state.due,onChange:function(t){e.setState({due:t})}})),l.a.createElement(h.q,null,l.a.createElement(h.d,{color:"secondary",size:"sm",onClick:this.cancelTask.bind(this)},"Cancel"),l.a.createElement(h.d,{color:"primary",size:"sm",onClick:this.addTask.bind(this)},"Add Task"))))}}]),a}(n.Component),D=Object(f.a)(S),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={modal:!1},e.deleteTask=function(){e.toggleDeleteModal(),C.deleteTask(e.props.task.id)},e.toggleDeleteModal=function(){e.setState({modal:!e.state.modal})},e.checkTask=function(){C.checkTask(e.props.task.id)},e}return Object(c.a)(a,[{key:"render",value:function(){var e,t;return this.props.task.labels&&this.props.task.labels.length>0&&(e=this.props.task.labels.map((function(e){return l.a.createElement(h.b,{pill:!0,color:"primary",className:"mr-2"},e.label)}))),this.props.task.due&&(t=l.a.createElement("span",{className:"light-blue-text"}," ",this.props.task.due.fromNow())),l.a.createElement(h.n,{className:"rgba(3, 169, 244, 0.1) rgba-blue-slight",color:"primary-color-dark"},l.a.createElement(h.o,{modalStyle:"danger",className:"text-white",size:"sm",position:"top",isOpen:this.state.modal,toggle:this.toggleDeleteModal.bind(this)},l.a.createElement(h.r,{className:"text-center",titleClass:"w-100",tag:"p",toggle:this.toggleDeleteModal.bind(this)},"Are you sure?"),l.a.createElement(h.p,{className:"text-center"},"delete task - ",l.a.createElement("strong",null,'"',this.props.task.title,'"')),l.a.createElement(h.q,{className:"justify-content-center"},l.a.createElement(h.d,{color:"danger",onClick:this.deleteTask.bind(this)},"Yes"),l.a.createElement(h.d,{color:"danger",outline:!0,onClick:this.toggleDeleteModal.bind(this)},"No"))),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement("div",{className:"d-flex align-items-start flex-column"},l.a.createElement("div",{className:"d-flex justify-content-start"},l.a.createElement("div",{className:"align-self-center"},l.a.createElement(h.j,{far:!0,icon:"square",size:"2x",onClick:this.checkTask.bind(this)}))),l.a.createElement("div",{className:"flex-grow-1 pb-3 pt-3 text-wrap"},l.a.createElement("h5",{className:"mb-1 blue-text"},l.a.createElement("strong",null,this.props.task.title)))),l.a.createElement("div",null,l.a.createElement(h.e,{className:"ml-auto",onClick:this.toggleDeleteModal.bind(this)}))),l.a.createElement("p",{className:"mb-1"},this.props.task.details),l.a.createElement("small",{className:"mb-3 mt-3"},"Due: ",t),l.a.createElement("div",{className:"flex-row mb-2"},e))}}]),a}(n.Component),M=Object(f.a)(A),q=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=C.todayTasks.map((function(e){return l.a.createElement(M,{task:e,key:e.title})}));return l.a.createElement(h.f,{md:"4",className:"mb-5"},l.a.createElement("h3",{className:"red-text"},"Today's Deadline"),l.a.createElement(h.m,null,e))}}]),a}(n.Component),L=Object(f.a)(q),z=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=C.tomorrowTasks.map((function(e){return l.a.createElement(M,{task:e,key:e.title})}));return l.a.createElement("div",{className:"mb-5"},l.a.createElement("h3",null,"Tomorrow's Deadline"),l.a.createElement(h.m,null,e))}}]),a}(n.Component),F=Object(f.a)(z),Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=C.futureTasks.map((function(e){return l.a.createElement(M,{task:e,key:e.title})}));return l.a.createElement("div",{className:"mb-5"},l.a.createElement("h3",null,"Future Deadline"),l.a.createElement(h.m,null,e))}}]),a}(n.Component),H=Object(f.a)(Y),I=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=C.doneTasks.map((function(e){return l.a.createElement(M,{task:e,key:e.title})}));return l.a.createElement(h.f,{md:"4",className:"mb-5"},l.a.createElement("h3",{className:"success-text"},"Completed ",l.a.createElement(h.j,{far:!0,icon:"thumbs-up"})),l.a.createElement(h.m,null,e))}}]),a}(n.Component),J=Object(f.a)(I),R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){C.retrieveFromLocalStorage()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(h.A,null,l.a.createElement(L,null),l.a.createElement(h.f,null,l.a.createElement(F,null),l.a.createElement(H,null)),l.a.createElement(J,null)))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(h.u,{color:"indigo",dark:!0,expand:"md"},l.a.createElement(h.v,null,l.a.createElement("img",{src:"logo.png",width:"40",height:"40",className:"d-inline-block align-top",alt:"logo"})),l.a.createElement(h.x,{onClick:this.toggleCollapse}),l.a.createElement(h.g,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},l.a.createElement(h.w,{left:!0},l.a.createElement(h.s,{active:!0},l.a.createElement(h.t,{to:"/my-simple-trello/"},"Board")),l.a.createElement(h.s,null,l.a.createElement(h.t,{to:b},"Register")),l.a.createElement(h.s,null,l.a.createElement(h.t,{to:E},"Login")),l.a.createElement(h.s,null,l.a.createElement(h.t,{to:v},"Account"))),l.a.createElement(h.w,{right:!0})))}}]),a}(n.Component),W=Object(f.a)(B),_=function(){return l.a.createElement(h.i,{color:"blue",className:"font-small mt-lg-5"},l.a.createElement(h.h,{fluid:!0,className:"footer-copyright text-center py-3"},"\xa9 ",(new Date).getFullYear()," Copyright: ",l.a.createElement("a",{href:"https://aralovelace.dev"}," aralovelace.dev ")))},P=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={email:"",password:""},e.submitHandler=function(e){e.preventDefault(),e.target.className+=" was-validated"},e.changeHandler=function(t){e.setState(Object(p.a)({},t.target.name,t.target.value))},e}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(h.h,{className:"mt-5"},l.a.createElement(h.A,null,l.a.createElement(h.f,{md:"6"},l.a.createElement("form",null,l.a.createElement("p",{className:"h3 text-center mb-4"},"Login"),l.a.createElement("div",{className:"grey-text"},l.a.createElement(h.l,{label:"Type your email",icon:"envelope",group:!0,type:"email",validate:!0,error:"wrong",success:"right",required:!0}),l.a.createElement(h.l,{label:"Type your password",icon:"lock",group:!0,type:"password",validate:!0,required:!0})),l.a.createElement("div",{className:"text-center"},l.a.createElement(h.d,{color:"primary",type:"submit"},"Login"))))))}}]),a}(n.Component),V=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(h.h,{className:"mt-5"},l.a.createElement("p",{className:"h3 text-center mb-4"},"Account Page"))}}]),a}(n.Component),$=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(W,null),l.a.createElement(d.a,{exact:!0,path:"/my-simple-trello/",component:R}),l.a.createElement(d.a,{path:b,component:g}),l.a.createElement(d.a,{path:E,component:P}),l.a.createElement(d.a,{path:v,component:V})),l.a.createElement(_,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(351),a(352),a(353);s.a.render(l.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[159,1,2]]]);
//# sourceMappingURL=main.e8322b70.chunk.js.map