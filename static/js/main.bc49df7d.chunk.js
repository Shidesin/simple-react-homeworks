(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={messages_block:"Message_messages_block__3ESPs",avatar_block:"Message_avatar_block__fY7V5",item:"Message_item__3MzSy",name_block:"Message_name_block__xuaIm",text_time:"Message_text_time__3Ixeq",message_block:"Message_message_block__8shdw",time_block:"Message_time_block__302ND"}},,function(e,a,t){e.exports={someClass:"Greeting_someClass__2JZxc",error:"Greeting_error__2ku5p",item:"Greeting_item__mGqKy",span:"Greeting_span__DsshL",counter:"Greeting_counter__3gy3r"}},,function(e,a,t){e.exports={column:"HW2_column__fCPkA",affair_style:"HW2_affair_style__1TOq3",affair:"HW2_affair__3aUBD"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2GFD2",errorInput:"SuperInputText_errorInput__2m-04",error:"SuperInputText_error__3VpYI"}},function(e,a,t){e.exports={default:"SuperButton_default__FDGES",red:"SuperButton_red__Enb7_"}},function(e,a,t){e.exports={blue:"HW4_blue__26px6",column:"HW4_column__3o2Bi"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2VH4L",spanClassName:"SuperCheckbox_spanClassName__hohst"}},,,function(e,a,t){e.exports={App:"App_App__2spFv"}},function(e,a,t){e.exports={column:"HW1_column__3hamI"}},function(e,a,t){e.exports={column:"HW3_column__Oy2Qr"}},,function(e,a,t){e.exports=t(24)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),s=(t(23),t(14)),o=t.n(s),i=t(2),m=t.n(i);var u=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:m.a.messages_block},r.a.createElement("div",{className:m.a.avatar_block},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:m.a.item},r.a.createElement("div",{className:m.a.name_block},e.name),r.a.createElement("div",{className:m.a.text_time},r.a.createElement("div",{className:m.a.message_block},e.message),r.a.createElement("div",{className:m.a.time_block},e.time)))))},_=t(15),d=t.n(_),p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Shidesin",h="\u041d\u0443 \u0432\u043e\u0442 \u0443\u0448\u0435\u043b \u0442\u044b \u0441 \u0437\u0430\u0432\u043e\u0434\u0430 \u0438 \u0447\u0442\u043e?! \u0410 \u0434\u0430\u043b\u044c\u0448\u0435 \u0442\u043e \u0447\u0442\u043e?!",E="22:00";var b=function(){return r.a.createElement("div",{className:d.a.column},r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:p,name:f,message:h,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=t(1),v=t(3),k=t(9),C=t.n(k),N=function(e){var a=e.red,t=(e.className,Object(v.a)(e,["red","className"])),n=a?C.a.red:C.a.default;return r.a.createElement("button",Object.assign({className:n},t))},x=t(6),y=t.n(x);var O=function(e){return r.a.createElement("div",{className:y.a.affair_style},r.a.createElement("span",{className:y.a.affair},e.affair.name),r.a.createElement(N,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var a=e.data.map((function(a){return r.a.createElement(O,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(N,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(N,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(N,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(N,{onClick:function(){e.setFilter("low")}},"Low"))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(n.useState)(S),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(g.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,o);return r.a.createElement("div",{className:y.a.column},r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(17),A=t(4),T=t.n(A),H=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=l?T.a.error:T.a.someClass;return r.a.createElement("div",{className:T.a.item},r.a.createElement("input",{value:a,onChange:t,className:s,placeholder:"Input your name"}),r.a.createElement("span",{className:T.a.span},l),r.a.createElement(N,{onClick:n},"Add"),r.a.createElement("div",{className:T.a.counter},"Greeting users: ",c))},W=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(g.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(g.a)(i,2),u=m[0],_=m[1],d=a.length;return r.a.createElement(H,{name:s,setNameCallback:function(e){o(e.currentTarget.value),_("")},addUser:function(){s.trim().length>0?(alert("Hello, ".concat(s," !")),t(s),o("")):_("Input your name")},error:u,totalUsers:d})},F=t(26),G=t(16),M=t.n(G);var B=function(){var e=Object(n.useState)([]),a=Object(g.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",{className:M.a.column},r.a.createElement("hr",null),"homeworks 3",r.a.createElement(W,{users:t,addUserCallback:function(e){var a=[{_id:Object(F.a)(),name:e}].concat(Object(I.a)(t));l(a)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},U=t(8),P=t.n(U),D=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(P.a.error," ").concat(o||""),u=c?"".concat(P.a.errorInput):"".concat(P.a.superInput," ").concat(s),_=c?"Input text here!":"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value),i.setError("")},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u,placeholder:_},i)),c&&r.a.createElement("span",{className:m},c))},q=t(10),J=t.n(q),K=t(11),L=t.n(K),V=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(L.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:s},c)),l&&r.a.createElement("span",{className:L.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),a=Object(g.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),s=Object(g.a)(c,2),o=s[0],i=s[1],m=function(){i(t?"":"Error"),o?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(t?alert(t):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."),l(""))},u=!!o,_=Object(n.useState)(!1),d=Object(g.a)(_,2),p=d[0],f=d[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:J.a.column},r.a.createElement(D,{setError:i,value:t,onChangeText:l,onEnter:m,error:o,className:J.a.blue}),r.a.createElement(N,{red:u,onClick:m},"delete "),r.a.createElement(V,{checked:p,onChangeChecked:f},"some text "),r.a.createElement(V,{checked:p,onChange:function(e){return f(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,"// add NavLinks")};var Z=function(){return r.a.createElement("div",null,"// add routes")};var z=function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(Z,null))};var Q=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(b,null),r.a.createElement(w,null),r.a.createElement(B,null),r.a.createElement(Y,null),r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.bc49df7d.chunk.js.map