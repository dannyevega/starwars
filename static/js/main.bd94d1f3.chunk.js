(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,n,t){e.exports=t(199)},197:function(e,n,t){},199:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),o=t(4),c=t.n(o),l=t(46),i=t(47),s=t(55),u=t(48),m=t(56),d=t(97),p=t(202),h=t(182),f=t(200),v=t(98),g=t.n(v),w=function(e){return r.a.createElement(f.a,{itemLayout:"vertical",dataSource:e.films,renderItem:function(e){return r.a.createElement(f.a.Item,null,r.a.createElement("h3",null,e.title),r.a.createElement("p",null,e.director),r.a.createElement("p",null,g()(new Date(e.release)).format("dddd, MMMM Do YYYY")))}})};var b=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={error:!1,loadingFilms:!1,films:[]},t.loadCharacter=function(e){fetch(e.url).then(function(e){return e.json()}).then(function(e){if(e.films){t.setState({loadingFilms:!0});var n=function(e){return e.films.map(function(e){return fetch(e).then(function(e){return e.json()}).then(function(e){return{title:e.title,director:e.director,release:e.release_date}}).catch(function(e){console.log(e)})})}(e);Promise.all(n).then(function(e){t.setState({films:e,loadingFilms:!1})})}else t.setState({error:!0,films:[]})}).catch(function(e){console.log(e)})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"componentDidMount",value:function(){this.loadCharacter(this.props.character)}},{key:"render",value:function(){var e=this.state,n=e.error,t=e.films,a=e.loadingFilms;return r.a.createElement("div",null,r.a.createElement("h2",null,"Film Appearances"),n&&r.a.createElement(p.a,{message:"Error",description:"No films found.",type:"error",showIcon:!0}),a&&r.a.createElement(h.a,{size:"large"}),r.a.createElement(w,{films:t}))}}]),n}(a.Component),E=t(31),j=t(32);function k(){var e=Object(E.a)(["\n  .card {\n    border-color: transparent;\n    transition: all .5s linear;\n  }\n  .card-footer {\n    background: transparent;\n    border-top: transparent;\n    transition: all .5s linear;\n  }\n  &:hover {\n    .card {\n      border: 0.04rem solid rgba(0,0,0,0.2);\n      box-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);\n    }\n    .card-footer {\n      background: rgba(247,247,247);\n    }\n  }\n  .img-container {\n    position: relative;\n    overflow: hidden;\n  }\n  .card-img-top {\n    transition: all .5s linear;\n  }\n  .img-container:hover .card-img-top {\n    transform: scale(1.1);\n  }\n"]);return k=function(){return e},e}var y=j.a.div(k());function C(){var e=Object(E.a)(["\n  .card-container {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n  }\n  .name {\n    cursor: pointer;\n    &:hover {\n      color: blue;\n    }\n  }\n"]);return C=function(){return e},e}var O=j.a.div(C());function x(){var e=Object(E.a)(["\n  .App {\n    max-width: 1000px;\n    margin: 0 auto;\n    height: 100vh;\n  }\n\n  .App h1,\n  .ant-list {\n    margin: 30px;\n  }\n\n  h1 {\n    color: #000;\n    font-weight: 100;\n  }\n"]);return x=function(){return e},e}var N=j.a.div(x()),S=t(201),A=(t(193),t(195),t(197),function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(r)))).state={selectedCharacter:null},t.handleClick=function(e){t.setState({selectedCharacter:e})},t.handleClose=function(){t.setState({selectedCharacter:null})},t}return Object(m.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this,n=this.state.selectedCharacter;return r.a.createElement(N,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Star Wars"),r.a.createElement(O,null,r.a.createElement("div",{className:"card-container"},d.characters.map(function(n){return r.a.createElement(y,{className:"col-9 col-md-6 col-lg-3 my-3 mx-auto"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container p-5"},r.a.createElement("img",{src:"https://www.freepnglogos.com/uploads/star-wars-logo-1.png",alt:"sneaker",className:"card-img-top"})),r.a.createElement("div",{className:"card-footer d-flex justify-content-between"},r.a.createElement("p",{onClick:function(){return e.handleClick(n)},className:"align-self-center mb-0 name"},n.name))))}))),r.a.createElement(S.a,{title:n&&n.name,width:300,placement:"right",closable:!1,visible:Boolean(n),onClose:this.handleClose},n&&r.a.createElement(b,{character:n})))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},97:function(e){e.exports={characters:[{name:"Luke Skywalker",url:"https://swapi.co/api/people/1/"},{name:"Darth Vader",url:"https://swapi.co/api/people/4/"},{name:"Obi-wan Kenobi",url:"https://swapi.co/api/people/unknown/"},{name:"R2-D2",url:"https://swapi.co/api/people/3/"}]}}},[[113,2,1]]]);
//# sourceMappingURL=main.bd94d1f3.chunk.js.map