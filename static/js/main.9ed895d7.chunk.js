(this.webpackJsonpskypey=this.webpackJsonpskypey||[]).push([[0],{1089:function(e,t,a){},1090:function(e,t,a){},1091:function(e,t,a){},1092:function(e,t,a){},1093:function(e,t,a){},1094:function(e,t,a){},1095:function(e,t,a){},1096:function(e,t,a){"use strict";a.r(t);var n,r=a(0),s=a.n(r),c=a(11),o=a.n(c),i=(a(22),a(23),a(24),a(3)),l=a(2),u=a(25),m=a(34),d=a(40),f=a(1),v=(n=10,Array.from({length:n},(function(){return g()}))),p=f.mapKeys(v,"user_id"),E=function(e){var t={};return f.forEach(v,(function(a){var n;t[a.user_id]=Object(l.a)({},f.mapKeys((n=e,Array.from({length:n},(function(e,t){return{number:t,text:m.sentence(),is_user_msg:d.random.boolean()}}))),"number"))})),t};g(),E(10);function g(){return{name:d.name.findName(),email:d.internet.email(),profile_pic:d.internet.avatar(),status:m.sentence(),user_id:u.generate()}}var h=a(4),_=a(1),y=a.n(_);var b=Object(i.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g();return e},contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{contacts:p};return e},activeUserId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_ACTIVE_USER_ID":return t.payload;default:return e}},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E(10),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var a=t.payload,n=a.message,r=a.userId,s=e[r],c=+y.a.keys(s).pop()+1;return Object(l.a)(Object(l.a)({},e),{},Object(h.a)({},r,Object(l.a)(Object(l.a)({},s),{},Object(h.a)({},c,{number:c,text:n,is_user_msg:!0}))));default:return e}},typing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TYPING_VALUE":return t.payload;case"SEND_MESSAGE":return"";default:return e}}}),N=Object(i.b)(b);function S(e){var t=e.user_id;console.log(t),N.dispatch({type:"SET_ACTIVE_USER_ID",payload:t})}var U=function(e){var t=e.user,a=t.name,n=t.profile_pic,r=t.status;return s.a.createElement("div",{className:"User",onClick:S.bind(null,t)},s.a.createElement("img",{src:n,alt:a,className:"User__pic"}),s.a.createElement("div",{className:"User__details"},s.a.createElement("p",{className:"User__details-name"},a),s.a.createElement("p",{className:"User__details-status"},r)))},I=(a(1089),function(e){var t=e.contacts;return console.log(t),s.a.createElement("aside",{className:"Sidebar"},t.map((function(e){return s.a.createElement(U,{user:e,key:e.user_id})})))}),w=(a(1090),a(1091),function(e){var t=e.user,a=t.name,n=t.profile_pic,r=t.status,c=a.split(" ")[0];return s.a.createElement("div",{className:"Empty"},s.a.createElement("h1",{className:"Empty__name"},"Welcome, ",c," "),s.a.createElement("img",{src:n,alt:a,className:"Empty__img"}),s.a.createElement("p",{className:"Empty__status"},s.a.createElement("b",null,"Status:")," ",r),s.a.createElement("button",{className:"Empty__btn"},"Start a conversation"),s.a.createElement("p",{className:"Empty__info"},"Search for someone to start chatting with or go to Contacts to see who is available"))});a(1092);var k=function(e){var t=e.user,a=t.name,n=t.status;return s.a.createElement("header",{className:"Header"},s.a.createElement("h1",{className:"Header__name"},a),s.a.createElement("p",{className:"Header__status"},n))},j=a(13),O=a(14),T=a(16),A=a(15),C=(a(1093),function(e){var t=e.message,a=t.text,n=t.is_user_msg;return s.a.createElement("span",{className:"Chat ".concat(n?"is-user-msg":"")},a)}),D=function(e){Object(T.a)(a,e);var t=Object(A.a)(a);function a(e){var n;return Object(j.a)(this,a),(n=t.call(this,e)).scrollToBottom=function(){n.chatsRef.current.scrollTop=n.chatsRef.current.scrollHeight},n.chatsRef=s.a.createRef(),n}return Object(O.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){return s.a.createElement("div",{className:"Chats",ref:this.chatsRef},this.props.messages.map((function(e){return s.a.createElement(C,{message:e,key:e.number})})))}}]),a}(r.Component),M=(a(1094),a(1095),function(e){var t=e.value,a=N.getState();return s.a.createElement("form",{className:"Message",onSubmit:function(e){e.preventDefault();var t=a.typing,n=a.activeUserId;N.dispatch({type:"SEND_MESSAGE",payload:{message:t,userId:n}})}},s.a.createElement("input",{className:"Message__input",onChange:function(e){N.dispatch(function(e){return{type:"SET_TYPING_VALUE",payload:e}}(e.target.value))},value:t,placeholder:"write a message"}))}),R=function(e){var t=e.activeUserId,a=N.getState(),n=a.contacts.contacts[t],r=a.messages[t];console.log(n);var c=a.typing;return s.a.createElement("div",{className:"ChatWindow"},s.a.createElement(k,{user:n}),s.a.createElement(D,{messages:y.a.values(r)}),s.a.createElement(M,{value:c}))},B=function(e){var t=e.user,a=e.activeUserId;return s.a.createElement("main",{className:"Main"},a?s.a.createElement(R,{activeUserId:a}):s.a.createElement(w,{user:t,activeUserId:a}))};var G=function(){var e=N.getState(),t=e.contacts,a=e.user,n=e.activeUserId;return s.a.createElement("div",{className:"App"},s.a.createElement(I,{contacts:y.a.values(t.contacts)}),s.a.createElement(B,{user:a,activeUserId:n}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=function(){return console.log("%c Rendered with ? ??","background: purple; color: #fff"),console.log(N.getState()),o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(G,null)),document.getElementById("root"))};x(),N.subscribe(x),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,t,a){e.exports=a(1096)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.9ed895d7.chunk.js.map