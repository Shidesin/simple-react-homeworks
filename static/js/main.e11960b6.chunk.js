(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports={column:"HW2_column__fCPkA",affair_style:"HW2_affair_style__1TOq3",affair:"HW2_affair__3aUBD"}},function(e,a,t){e.exports={messages_block:"Message_messages_block__3ESPs",avatar_block:"Message_avatar_block__fY7V5",item:"Message_item__3MzSy",name_block:"Message_name_block__xuaIm",text_time:"Message_text_time__3Ixeq",message_block:"Message_message_block__8shdw",time_block:"Message_time_block__302ND"}},function(e,a,t){e.exports={header_block:"Header_header_block__2z1rA",header_block_button:"Header_header_block_button__1oEhD",activeLink:"Header_activeLink__3Pocz"}},,,,function(e,a,t){e.exports={someClass:"Greeting_someClass__2JZxc",error:"Greeting_error__2ku5p",item:"Greeting_item__mGqKy",span:"Greeting_span__DsshL",counter:"Greeting_counter__3gy3r"}},,,,,,,,,,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2GFD2",errorInput:"SuperInputText_errorInput__2m-04",error:"SuperInputText_error__3VpYI"}},function(e,a,t){e.exports={column:"HW6_column__G3jnk",button_box:"HW6_button_box__19PEF"}},function(e,a,t){e.exports={default:"SuperButton_default__FDGES",red:"SuperButton_red__Enb7_"}},,,function(e,a,t){e.exports={blue:"HW4_blue__26px6",column:"HW4_column__3o2Bi"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2VH4L",spanClassName:"SuperCheckbox_spanClassName__hohst"}},,,,,,function(e,a,t){e.exports={App:"App_App__2spFv"}},function(e,a,t){e.exports={column:"HW1_column__3hamI"}},function(e,a,t){e.exports={input_box:"SuperEditableSpan_input_box__2i2D6"}},,,,function(e,a,t){e.exports={column:"HW3_column__Oy2Qr"}},function(e,a,t){e.exports={box:"SuperSelect_box__2H3zg"}},function(e,a,t){e.exports={column:"HW7_column__2NHTx"}},,,function(e,a,t){e.exports=t(63)},,,,,function(e,a,t){},,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(24),c=t.n(l),o=(t(56),t(40)),i=t.n(o),u=t(16),s=t(3),m=t(13),d=t.n(m);var E=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:d.a.messages_block},r.a.createElement("div",{className:d.a.avatar_block},r.a.createElement("img",{src:e.avatar,alt:"avatar"})),r.a.createElement("div",{className:d.a.item},r.a.createElement("div",{className:d.a.name_block},e.name),r.a.createElement("div",{className:d.a.text_time},r.a.createElement("div",{className:d.a.message_block},e.message),r.a.createElement("div",{className:d.a.time_block},e.time)))))},p=t(41),_=t.n(p),v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Shidesin",b="\u041d\u0443 \u0432\u043e\u0442 \u0443\u0448\u0435\u043b \u0442\u044b \u0441 \u0437\u0430\u0432\u043e\u0434\u0430 \u0438 \u0447\u0442\u043e?! \u0425\u043e\u0442\u044c \u0431\u044b CSS \u0432\u044b\u0443\u0447\u0438\u043b...",h="22:00";var g=function(){return r.a.createElement("div",{className:_.a.column},r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:v,name:f,message:b,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},k=t(2),x=t(6),O=t(30),C=t.n(O),N=function(e){var a=e.red,t=(e.className,Object(x.a)(e,["red","className"])),n=a?C.a.red:C.a.default;return r.a.createElement("button",Object.assign({className:n},t))},y=t(12),j=t.n(y);var S=function(e){return r.a.createElement("div",{className:j.a.affair_style},r.a.createElement("span",{className:j.a.affair},e.affair.name),r.a.createElement(N,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(S,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement(N,{onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(N,{onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(N,{onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(N,{onClick:function(){e.setFilter("low")}},"Low"))},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(n.useState)(T),a=Object(k.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(k.a)(c,2),i=o[0],u=o[1],s=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):e}(t,i);return r.a.createElement("div",{className:j.a.column},r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:s,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(75),H=t(28),D=t.n(H),F=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.setError,l=e.onKeyPress,c=e.onEnter,o=e.error,i=(e.className,e.spanClassName),u=Object(x.a)(e,["type","onChange","onChangeText","setError","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(D.a.error," ").concat(i||""),m="".concat(o?D.a.errorInput:D.a.superInput),d=o?"Input text here!":"";return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value),n("")},onKeyPress:function(e){l&&l(e),"Enter"===e.key&&c&&c()},className:m,placeholder:d},u)),o&&r.a.createElement("span",{className:s},o))},M=t(42),P=t.n(M),W=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(x.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),i=Object(k.a)(o,2),u=i[0],s=i[1],m=l||{},d=m.children,E=m.onDoubleClick,p=m.className,_=Object(x.a)(m,["children","onDoubleClick","className"]),v="".concat(P.a.input_box," ").concat(p);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(F,Object.assign({setError:function(){},autoFocus:!0,onBlur:function(e){s(!u),a&&a(e)},onEnter:function(){s(!u),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!u),E&&E(e)},className:v},_),d||c.value))};function L(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function G(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}L("test",{x:"A",y:1});G("test",{x:"",y:0});var B=t(29),J=t.n(B);var U=function(){var e=Object(n.useState)(""),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:J.a.column},r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",{className:J.a.input_box},r.a.createElement(W,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("span",{className:J.a.button_box},r.a.createElement(N,{onClick:function(){L("editable-span-value",t)}},"save"),r.a.createElement(N,{onClick:function(){l(G("editable-span-value",t))}},"restore")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var R=function(){return r.a.createElement("div",null,r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(g,null)),r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(A,null)),r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(U,null)))};var z=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Pa maim ashusheniyam you vse slamaL! Srochna tebya v turmu pasadit!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},q=t(17),K=t(18),V=t.n(K),Y=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?V.a.error:V.a.someClass;return r.a.createElement("div",{className:V.a.item},r.a.createElement(F,{setError:function(e){},value:a,onChange:t,className:o,placeholder:"Input your name"}),r.a.createElement("span",{className:V.a.span},l),r.a.createElement(N,{onClick:n},"Add"),r.a.createElement("div",{className:V.a.counter},"Greeting users: ",c))},X=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(k.a)(l,2),o=c[0],i=c[1],u=Object(n.useState)(""),s=Object(k.a)(u,2),m=s[0],d=s[1],E=a.length;return r.a.createElement(Y,{name:o,setNameCallback:function(e){i(e.currentTarget.value),d("")},addUser:function(){o.trim().length>0?(alert("Hello, ".concat(o," !")),t(o),i("")):d("Input your name")},error:m,totalUsers:E})},Z=t(76),Q=t(46),$=t.n(Q);var ee=function(){var e=Object(n.useState)([]),a=Object(k.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",{className:$.a.column},r.a.createElement("hr",null),"homeworks 3",r.a.createElement(X,{users:t,addUserCallback:function(e){var a=[{_id:Object(Z.a)(),name:e}].concat(Object(q.a)(t));l(a)}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},ae=t(47),te=t.n(ae),ne=function(e){var a=e.options,t=(e.onChange,e.onChangeOption),n=Object(x.a)(e,["options","onChange","onChangeOption"]),l=null===a||void 0===a?void 0:a.map((function(e){return r.a.createElement("option",{key:e.toString()},e)}));return r.a.createElement("select",Object.assign({className:te.a.box,onChange:function(e){var a=e.currentTarget.value;t&&t(a)}},n),l)},re=function(e){e.type,e.name;var a=e.options,t=(e.value,e.onChange,e.onChangeOption,Object(x.a)(e,["type","name","options","value","onChange","onChangeOption"]),a?a.map((function(e,a){})):["empty"]);return console.log("o",t),r.a.createElement(r.a.Fragment,null,"in radio [",JSON.stringify(a),t)},le=t(48),ce=t.n(le),oe=["x","y","z"];var ie=function(){var e=Object(n.useState)(oe[1]),a=Object(k.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",{className:ce.a.column},r.a.createElement(r.a.Fragment,null,"homeworks 7"),r.a.createElement("div",null,r.a.createElement(ne,{options:oe,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement("div",null,"radio",r.a.createElement(re,{name:"My_radio",options:oe,value:t,onChangeOption:l}))))},ue=function(e,a){switch(a.type){case"SORT_NAME_UP":return Object(q.a)(e.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})));case"SORT_NAME_DOWN":return Object(q.a)(e.sort((function(e,a){return e.name>a.name?-1:e.name<a.name?1:0})));case"SORT_AGE":return Object(q.a)(e.filter((function(e){return e.age>a.payload})));default:return e}},se=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=Object(n.useState)(se),a=Object(k.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{className:j.a.affair,key:e._id},r.a.createElement("span",null,e.name,",")," ",r.a.createElement("span",null,e.age))}));return r.a.createElement("div",{className:j.a.column},"homeworks 8",r.a.createElement("hr",null),r.a.createElement("div",null,c,r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement(N,{onClick:function(){return l(ue(se,{type:"SORT_NAME_UP",payload:"up"}))}},"Sort up")),r.a.createElement("span",null,r.a.createElement(N,{onClick:function(){return l(ue(se,{type:"SORT_NAME_DOWN",payload:"dowm"}))}},"Sort down")),r.a.createElement("span",null,r.a.createElement(N,{onClick:function(){return l(ue(se,{type:"SORT_AGE",payload:18}))}},"Sort age")))),r.a.createElement("hr",null))};var de=function(){var e=Object(n.useState)(0),a=Object(k.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(new Date),o=Object(k.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)(!1),m=Object(k.a)(s,2),d=m[0],E=m[1],p=function(){clearInterval(t)},_="Time:  ".concat(i&&i.toLocaleTimeString()),v="Date: ".concat(i&&i.toLocaleDateString());return r.a.createElement("div",null,r.a.createElement("div",{key:"1",onMouseEnter:function(){E(!0)},onMouseLeave:function(){E(!1)}},r.a.createElement("div",null,_)),d&&r.a.createElement("div",null,v),r.a.createElement(N,{onClick:function(){p();var e=window.setInterval((function(){u(new Date)}),1e3);l(e)}},"start"),r.a.createElement(N,{onClick:p},"stop"))};var Ee=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(de,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=t(23),_e=function(e){return{type:"SET_LOAD",payload:e}};t(61);var ve=function(){var e=Object(pe.b)(),a=Object(pe.c)((function(e){return e.loading}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",a?r.a.createElement("div",{className:"cssload-thecube"},r.a.createElement("div",{className:"cssload-cube cssload-c1"}),r.a.createElement("div",{className:"cssload-cube cssload-c2"}),r.a.createElement("div",{className:"cssload-cube cssload-c4"}),r.a.createElement("div",{className:"cssload-cube cssload-c3"})):r.a.createElement("div",null,r.a.createElement(N,{onClick:function(){e(_e(!0)),setTimeout((function(){e(_e(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var fe=function(){return r.a.createElement("div",null,r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(g,null)),r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(ee,null)),r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(ie,null)),r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(me,null)),r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(Ee,null)),r.a.createElement(I.a,{style:{padding:"30px",margin:"10px"},elevation:5},r.a.createElement(ve,null)))},be=t(33),he=t.n(be),ge=t(34),ke=t.n(ge),xe=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(x.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(ke.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:ke.a.spanClassName},l))};var Oe=function(){var e=Object(n.useState)(""),a=Object(k.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),o=Object(k.a)(c,2),i=o[0],u=o[1],s=function(){u(t?"":"Error"),i?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(t?alert(t):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."),l(""))},m=!!i,d=Object(n.useState)(!1),E=Object(k.a)(d,2),p=E[0],_=E[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:he.a.column},r.a.createElement(F,{setError:u,value:t,onChangeText:l,onEnter:s,error:i,className:he.a.blue}),r.a.createElement(N,{red:m,onClick:s},"delete "),r.a.createElement(xe,{checked:p,onChangeChecked:_},"some text "),r.a.createElement(xe,{checked:p,onChange:function(e){return _(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Ce=function(){return r.a.createElement("div",null,r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(g,null)),r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(Oe,null)),r.a.createElement(I.a,{style:{padding:"10px",margin:"10px"},elevation:5},r.a.createElement(U,null)))},Ne="/pre-junior",ye="/junior",je="/junior-plus";var Se=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",exact:!0,render:function(){return r.a.createElement(s.a,{to:Ne})}}),r.a.createElement(s.b,{path:Ne,render:function(){return r.a.createElement(R,null)}}),r.a.createElement(s.b,{path:ye,render:function(){return r.a.createElement(fe,null)}}),r.a.createElement(s.b,{path:je,render:function(){return r.a.createElement(Ce,null)}}),r.a.createElement(s.b,{render:function(){return r.a.createElement(z,null)}})))},we=t(14),Te=t.n(we);var Ae=function(){return r.a.createElement("nav",{className:Te.a.header_block},r.a.createElement("div",null,r.a.createElement("span",{className:Te.a.header_block_button},r.a.createElement(u.b,{to:Ne,activeClassName:Te.a.activeLink},"Pre Junior")),r.a.createElement("span",{className:Te.a.header_block_button},r.a.createElement(u.b,{to:ye,activeClassName:Te.a.activeLink},"Junior")),r.a.createElement("span",{className:Te.a.header_block_button},r.a.createElement(u.b,{to:je,activeClassName:Te.a.activeLink},"Junior Plus"))))};var Ie=function(){return r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(Ae,null),r.a.createElement(Se,null)))};var He=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ie,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=t(22),Fe=Object(De.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOAD":return a.payload;default:return e}}}),Me=Object(De.c)(Fe),Pe=Me;window.store=Me,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe.a,{store:Pe},r.a.createElement(He,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[51,1,2]]]);
//# sourceMappingURL=main.e11960b6.chunk.js.map