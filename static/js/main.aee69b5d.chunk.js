(this.webpackJsonpapiquest=this.webpackJsonpapiquest||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},23:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),o=a.n(r),i=(a(23),a(13)),l=a(14),s=a(2),u=a(17),h=a(16),m=a(15),p=a.n(m);a(41);var f=function(e){var t=e.character;return c.a.createElement("div",{className:"QuoteCard"},c.a.createElement("img",{src:t.image,alt:t.character}),c.a.createElement("figcaption",null,c.a.createElement("blockquote",null,t.quote," "),c.a.createElement("p",null,c.a.createElement("cite",null,t.character))))},d=(a(42),{quote:"Shoplifting is a victimless crime, like punching someone in the dark.",character:"Nelson Muntz",image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",characterDirection:"Left"}),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={character:d},n.getCharacter=n.getCharacter.bind(Object(s.a)(n)),n}return Object(l.a)(a,[{key:"getCharacter",value:function(){var e=this;p.a.get("https://thesimpsonsquoteapi.glitch.me/quotes").then((function(e){return e.data})).then((function(t){e.setState({character:t[0]})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,{character:this.state.character}," "),c.a.createElement("button",{type:"button",onClick:this.getCharacter}," Get new quote "))}}]),a}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.aee69b5d.chunk.js.map