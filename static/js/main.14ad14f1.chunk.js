(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{17:function(n,t,e){},41:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e(0),i=e(6),o=e.n(i),c=(e(17),e(3)),s=e(21),l=e(10),u=e(11),b=e(15),p=e(14),d=e(43),x=e(2),m=e(8),h=e(27);function f(){var n=Object(c.a)(["\nfont-weight: bold;\ncolor: steelblue;\nwidth: 100%;\nheight: 40px;\nmargin-top: 10px;\nmargin-bottom: 10px;\nborder: 1px solid lightblue;\nborder-radius: 5px;\noutline: none;\npadding-left: 10px;\npadding-right: 10px;\nfont-weight: 500;\n&:active {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n}\n&:hover {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n}\n"]);return f=function(){return n},n}function j(){var n=Object(c.a)(["\nmargin-top: 10px;\nfont-weight: 500;\n"]);return j=function(){return n},n}function g(){var n=Object(c.a)(["\ncolor: steelblue;\ndisplay: block;\nwidth: 100%;\nheight: 40px;\nmargin-top: 10px;\nmargin-bottom: 10px;\npadding: 10px;\nborder: 1px solid lightblue;\nfont-weight: 400;\n/* box-shadow: 1px 1px 10px 1px lightblue; */\noutline: none;\n&: focus {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n    }\n\n"]);return g=function(){return n},n}function O(){var n=Object(c.a)(["\n/* border: 1px solid SteelBlue; */\nwidth: 100%;\npadding: 10px;\npadding: 0;\n/* box-shadow: 1px 1px 10px 1px steelblue; */\n"]);return O=function(){return n},n}var v=function(n){Object(b.a)(e,n);var t=Object(p.a)(e);function e(){var n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number;n.props.onHandleSubmit({name:a,number:r}),n.setState({name:"",number:""})},n.handleChng=function(t){var e=t.target,a=e.name,r=e.value;n.setState((function(){return Object(h.a)({},a,r)}))},n}return Object(u.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(a.jsxs)(w,{name:"phoneBook",onSubmit:this.handleSubmit,children:[Object(a.jsxs)(S,{children:[" Name",Object(a.jsx)(y,{name:"name",type:"text",value:t,onChange:this.handleChng})]}),Object(a.jsxs)(S,{children:[" Number",Object(a.jsx)(y,{name:"number",type:"text",value:e,onChange:this.handleChng})]}),Object(a.jsx)(C,{type:"submit",name:"submitBtn",children:"Add Contact"})]})}}]),e}(r.Component),w=x.b.form(O()),y=x.b.input(g()),S=x.b.label(j()),C=x.b.button(f()),k=e(44);function B(){var n=Object(c.a)(["\nmargin-top: 5px"]);return B=function(){return n},n}function X(){var n=Object(c.a)(["\n/* outline: 1px solid steelblue; */\n/* padding-left: 10px; */\n/* width: 500px; */\n"]);return X=function(){return n},n}function I(){var n=Object(c.a)(["\ndisplay: block;\nwidth: 10px;\nheight: 10px;\nbackground-color: steelblue;\nborder-radius: 50%;\nmargin-right: 10px;\n"]);return I=function(){return n},n}function F(){var n=Object(c.a)(["\nfont-weight:bold;\ncolor: steelblue;\nheight: 100%;\nborder: 1px solid lightblue;\nborder-radius: 5px;\npadding-left: 10px;\npadding-right: 10px;\noutline: none;\nmargin-left: 10px;\n&:active {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n}\n&:hover {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n"]);return F=function(){return n},n}function N(){var n=Object(c.a)(["\n&:appear {\n    transform: translateX(-100%); \n    opacity: 0.1;\n}\n&:appear-active {\n  transform: translateX(0);\n    opacity: 1;\n  transition: all 250ms ease-in;  \n}\n&:enter { \n    transform: translateX(-100%); \n    opacity: 0.1;\n}\n&:enter-active {\n    transform: translateX(0);\n    opacity: 1;\n  transition: all 250ms ease-in;\n}\n&:exit {\n    transform: translateX(0);\n    opacity: 1;\n}\n&:exit-active {\n    transform: translateX(200%);\n    opacity: 0.1;\n    transition: all 250ms ease-in;\n}\n\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom: 10px;\nalign-items: baselin;\n\n"]);return N=function(){return n},n}var E=function(n){var t=n.list,e=n.deleteContactById,r=function(n){var t=n.target.dataset.id;e(t)};return Object(a.jsx)(D,{children:Object(a.jsx)(k.a,{component:"ul",children:t.map((function(n){return Object(a.jsxs)(A,{timeout:250,appear:!0,children:[Object(a.jsx)(J,{}),Object(a.jsxs)(L,{children:[n.name,": ",n.number]}),Object(a.jsx)(H,{type:"button","data-id":n.id,onClick:r,children:"Delete"})]},n.id)}))})})},A=m.a.li.attrs({mountOnEnter:!0,unmountOnExit:!0,timeout:1e3})(N()),H=x.b.button(F()),J=x.b.span(I()),D=x.b.div(X()),L=x.b.p(B());function T(){var n=Object(c.a)(["\n&:appear {\n    transform: translateX(-100%); \n}\n&:appear-active {\n  transform: translateX(0);\n  transition: all 250ms ease-in;  \n}\n&:enter { \n    transform: translateX(-100%); \n}\n&:enter-active {\n    transform: translateX(0);\n  transition: all 250ms ease-in;\n}\n&:exit {\n    transform: translateX(0);\n}\n&:exit-active {\n    transform: translateX(200%);\n    transition: all 250ms ease-in;\n}\n  "]);return T=function(){return n},n}function K(){var n=Object(c.a)(["\nmargin-top: 10px;\nfont-weight: 500;\n"]);return K=function(){return n},n}function M(){var n=Object(c.a)(["\ndisplay: block;\nwidth: 100%;\nheight: 40px;\nmargin-top: 10px;\nmargin-bottom: 25px;\npadding: 10px;\nborder: 1px solid lightblue;\nfont-weight: 400;\noutline: none;\n&: focus {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n    }\n"]);return M=function(){return n},n}var P=function(n){var t=n.handleFilter;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(q,{in:!0,timeout:250,appear:!0,children:Object(a.jsxs)(U,{children:[" Find contacts by name:",Object(a.jsx)(R,{name:"filter",type:"search",onChange:function(n){t(n.target.value)}})]})})})},R=x.b.input(M()),U=x.b.label(K()),q=m.a.div.attrs({timeout:250})(T()),z=e(28),G=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(z.a,{in:!0,appear:!0,timeout:500,classNames:"title",unmountOnExit:!0,children:Object(a.jsx)("h2",{children:"Phonebook"})})})},Q=function(n){var t=n.alert;n.canselAlert;return console.log(t),Object(a.jsx)(z.a,{in:t,timeout:500,classNames:"notification",unmountOnExit:!0,children:Object(a.jsx)("div",{className:"notification",children:Object(a.jsx)("h2",{children:"This contact already exist!"})})})};function V(){var n=Object(c.a)(["\nmargin: 10px;\npadding: 10px;\nwidth: 500px;\nposition: relative;\n"]);return V=function(){return n},n}var W=function(n){Object(b.a)(e,n);var t=Object(p.a)(e);function e(){var n;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:"",alert:!1},n.onHandleSubmit=function(t){var e=t.name,a=t.number;if(n.state.contacts.some((function(n){return n.name.toLowerCase()===e.toLowerCase()})))return n.setState((function(n){return{alert:!n.alert}})),void setTimeout((function(){setTimeout(n.setState((function(n){return{alert:!n.alert}})))}),1500);n.setState((function(n){return{contacts:[].concat(Object(s.a)(n.contacts),[{name:e,number:a,id:Object(d.a)()}])}}))},n.deleteContactById=function(t){n.setState({contacts:Object(s.a)(n.state.contacts.filter((function(n){return n.id!==t}))),filter:""})},n.handleFilter=function(t){n.setState({filter:t})},n.filterContact=function(){var t=n.state,e=t.filter;return t.contacts.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))},n}return Object(u.a)(e,[{key:"componentDidMount",value:function(){localStorage.getItem("contacts")&&(JSON.parse(localStorage.getItem("contacts")).length&&this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))}))}},{key:"componentDidUpdate",value:function(n,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(a.jsxs)(Y,{children:[Object(a.jsx)(G,{}),Object(a.jsx)(Q,{alert:this.state.alert}),Object(a.jsx)(v,{onHandleSubmit:this.onHandleSubmit}),Object(a.jsx)("h2",{children:"Contacts"}),this.state.contacts.length>2&&Object(a.jsx)(P,{handleFilter:this.handleFilter}),Object(a.jsx)(E,{list:this.filterContact(),deleteContactById:this.deleteContactById})]})}}]),e}(r.Component),Y=x.b.div(V());o.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(W,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.14ad14f1.chunk.js.map