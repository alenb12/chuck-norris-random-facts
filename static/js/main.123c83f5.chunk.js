(this["webpackJsonpchuck-norris"]=this["webpackJsonpchuck-norris"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),i=(n(12),n(3)),s=n(4),u=n(6),l=n(5),h=(n(13),function(e){var t=e.generateFact;return r.a.createElement("button",{className:"main-random-button",onClick:t},"Random Fact")}),m=function(e){var t=e.fact;return r.a.createElement("div",{className:"fact-container"},r.a.createElement("p",null,t))},f=function(e){var t=e.categories,n=e.categoryClick;return r.a.createElement("div",{className:"categories-list"},t.map((function(e){return r.a.createElement("button",{key:e,"data-category":e,onClick:n},"Random fact on ",e)})))},g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).generateRandomFact=function(){fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){return e.setState({factValue:t.value})}))},e.generateCategoryRandomFact=function(t){fetch("https://api.chucknorris.io/jokes/random?category="+t.target.dataset.category).then((function(e){return e.json()})).then((function(t){return e.setState({factValue:t.value})}))},e.state={factValue:"",img:"",categories:[],category:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(t){return e.setState({img:t.icon_url})})),fetch("https://api.chucknorris.io/jokes/categories").then((function(e){return e.json()})).then((function(t){return e.setState({categories:t})}))}},{key:"render",value:function(){var e=this.state.factValue;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("h1",null,"Chuck Norris Facts"),r.a.createElement("img",{src:this.state.img,alt:"chuck-norris"}),r.a.createElement(h,{generateFact:this.generateRandomFact}),r.a.createElement(f,{categories:this.state.categories,categoryClick:this.generateCategoryRandomFact})),r.a.createElement(m,{fact:e}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.123c83f5.chunk.js.map