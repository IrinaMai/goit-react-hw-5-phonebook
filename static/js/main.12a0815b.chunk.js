(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{23:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var a=e(1),r=e(0),o=e(13),i=e.n(o),c=(e(23),e(2)),l=e(11),u=e(4),s=e(5),d=e(8),p=e(7),b=e(28),x=e(3),h=e(14);function m(){var n=Object(c.a)(["\nmargin-top: 10px;\nmargin-bottom: 10px;\nborder: 1px solid lightblue;\nborder-radius: 5px;\noutline: none;\npadding-left: 10px;\npadding-right: 10px;\nfont-weight: 500;\n&:active {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n}\n&:hover {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n}\n"]);return m=function(){return n},n}function f(){var n=Object(c.a)(["\nmargin-top: 10px;\nfont-weight: 500;\n"]);return f=function(){return n},n}function j(){var n=Object(c.a)(["\ndisplay: block;\nwidth: 300px;\nheight: 30px;\nmargin-top: 10px;\nmargin-bottom: 10px;\npadding: 10px;\nborder: 1px solid lightblue;\nfont-weight: 400;\n/* box-shadow: 1px 1px 10px 1px lightblue; */\noutline: none;\n&: focus {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n    }\n"]);return j=function(){return n},n}function g(){var n=Object(c.a)(["\nborder: 1px solid SteelBlue;\nwidth: 350px;\npadding: 10px;\n/* box-shadow: 1px 1px 10px 1px steelblue; */\n"]);return g=function(){return n},n}var O=function(n){Object(d.a)(e,n);var t=Object(p.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,r=e.number;n.props.onHandleSubmit({name:a,number:r}),n.setState({name:"",number:""})},n.handleChng=function(t){var e=t.target,a=e.name,r=e.value;n.setState((function(){return Object(h.a)({},a,r)}))},n}return Object(s.a)(e,[{key:"render",value:function(){var n=this.state,t=n.name,e=n.number;return Object(a.jsxs)(v,{name:"phoneBook",onSubmit:this.handleSubmit,children:[Object(a.jsxs)(w,{children:[" Name",Object(a.jsx)(S,{name:"name",type:"text",value:t,onChange:this.handleChng})]}),Object(a.jsxs)(w,{children:[" Number",Object(a.jsx)(S,{name:"number",type:"text",value:e,onChange:this.handleChng})]}),Object(a.jsx)(y,{type:"submit",name:"submitBtn",children:"Add Contact"})]})}}]),e}(r.Component),v=x.a.form(g()),S=x.a.input(j()),w=x.a.label(f()),y=x.a.button(m());function C(){var n=Object(c.a)(["\nmargin-top: 5px"]);return C=function(){return n},n}function k(){var n=Object(c.a)(["\n/* outline: 1px solid steelblue; */\npadding-left: 10px"]);return k=function(){return n},n}function B(){var n=Object(c.a)(["\ndisplay: block;\nwidth: 10px;\nheight: 10px;\nbackground-color: steelblue;\nborder-radius: 50%;\nmargin-right: 10px;\n"]);return B=function(){return n},n}function I(){var n=Object(c.a)(["\nheight: 100%;\nborder: 1px solid lightblue;\nborder-radius: 5px;\npadding-left: 10px;\npadding-right: 10px;\noutline: none;\nmargin-left: 10px;\n&:active {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n}\n&:hover {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n"]);return I=function(){return n},n}function F(){var n=Object(c.a)(["\ndisplay: flex;\nmargin-bottom: 0px;\nalign-items: baseline;\n/* margin-left: 0; */\n"]);return F=function(){return n},n}var A=function(n){var t=n.list,e=n.deleteContactById,r=function(n){var t=n.target.dataset.id;e(t)};return Object(a.jsx)(D,{children:t.map((function(n){return Object(a.jsxs)(H,{children:[Object(a.jsx)(N,{}),Object(a.jsxs)(L,{children:[n.name,": ",n.number]}),Object(a.jsx)(J,{type:"button","data-id":n.id,onClick:r,children:"Delete"})]},n.id)}))})},H=x.a.li(F()),J=x.a.button(I()),N=x.a.span(B()),D=x.a.ul(k()),L=x.a.p(C());function E(){var n=Object(c.a)(["\nmargin-top: 10px;\nfont-weight: 500;\n"]);return E=function(){return n},n}function K(){var n=Object(c.a)(["\ndisplay: block;\nwidth: 300px;\nheight: 30px;\nmargin-top: 10px;\nmargin-bottom: 10px;\npadding: 10px;\nborder: 1px solid lightblue;\nfont-weight: 400;\noutline: none;\n&: focus {\n    border: 2px solid SteelBlue;\n    box-shadow: 1px 1px 10px 1px steelblue;\n    }\n"]);return K=function(){return n},n}var M=function(n){var t=n.handleFilter;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(R,{children:[" Find contacts by name:",Object(a.jsx)(P,{name:"filter",type:"search",onChange:function(n){t(n.target.value)}})]})})},P=x.a.input(K()),R=x.a.label(E());function T(){var n=Object(c.a)(["\nmargin: 10px;\npadding: 10px;\n"]);return T=function(){return n},n}var U=function(n){Object(d.a)(e,n);var t=Object(p.a)(e);function e(){var n;Object(u.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.onHandleSubmit=function(t){var e=t.name,a=t.number;e&&a?n.state.contacts.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?alert("This contact already exsists"):n.setState((function(n){return{contacts:[].concat(Object(l.a)(n.contacts),[{name:e,number:a,id:Object(b.a)()}])}})):alert("All fields should be complited")},n.deleteContactById=function(t){n.setState({contacts:Object(l.a)(n.state.contacts.filter((function(n){return n.id!==t})))})},n.handleFilter=function(t){n.setState({filter:t})},n.filterContact=function(){var t=n.state,e=t.filter;return t.contacts.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))},n}return Object(s.a)(e,[{key:"componentDidMount",value:function(){localStorage.getItem("contacts")&&(JSON.parse(localStorage.getItem("contacts")).length&&this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))}))}},{key:"componentDidUpdate",value:function(n,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(a.jsxs)(q,{children:[Object(a.jsx)("h2",{children:"Phonebook"}),Object(a.jsx)(O,{onHandleSubmit:this.onHandleSubmit}),Object(a.jsx)("h2",{children:"Contacts"}),Object(a.jsx)(M,{handleFilter:this.handleFilter}),Object(a.jsx)(A,{list:this.filterContact(),deleteContactById:this.deleteContactById})]})}}]),e}(r.Component),q=x.a.div(T());i.a.render(Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.12a0815b.chunk.js.map