(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),c=a.n(s),o=a(7),i=a(6),m=a(15),l=a.n(m),u=a(29),v=a(10),p=a(11),d=a(12),E=a(13),_=a(30),h=a.n(_);a(56);var y=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,c=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:c,genres:i}}},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,180),"..."))))},f=(a(62),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_ctxt"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(63);var g=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"About this page: \u6620\u753b\u304c\u597d\u304d\u306a\u306e\u3067\u4f5c\u6210"),r.a.createElement("span",null,"created at 2020"))},b=(a(64),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"movie__detail"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),r.a.createElement("div",{className:"movie__detail__data"},r.a.createElement("h3",{className:"movie__title"},e.state.title),r.a.createElement("h5",{className:"movie__year"},e.state.year),r.a.createElement("h5",{className:"movie__genres"},e.state.genre),r.a.createElement("p",{className:"movie__summary"},e.state.summary))):null}}]),a}(r.a.Component));a(65);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};var j=function(){return r.a.createElement(o.a,null,r.a.createElement(N,null),r.a.createElement(i.a,{path:"/",exact:!0,component:f}),r.a.createElement(i.a,{path:"/about",component:g}),r.a.createElement(i.a,{path:"/movie/:id",component:b}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.df6a3791.chunk.js.map