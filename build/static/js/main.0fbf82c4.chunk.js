(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{36:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(33),r=a.n(o),s=a(7),c=a(1),i=a(2),u=a(4),p=a(3),m=a(5),d=a(6),h=a.n(d),f=new(function(){function e(){Object(c.a)(this,e),this.auth=h.a.create({baseURL:"https://backlog-quest.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password,n=e.platforms,l=e.consoles;return this.auth.post("/auth/signup",{username:t,password:a,platforms:n,consoles:l}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),b=l.a.createContext(),g=b.Consumer,v=b.Provider,E=function(e){return function(t){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return l.a.createElement(g,null,(function(a){var n=a.login,o=a.signup,r=a.logout,s=a.user,c=a.isLoggedIn;return l.a.createElement(e,Object.assign({user:s,isLoggedIn:c,login:n,signup:o,logout:r},t.props))}))}}]),a}(n.Component)},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={isLoggedIn:!1,user:null,isLoading:!0},a.signup=function(e,t,n,l){f.signup({username:e,password:t,platforms:n,consoles:l}).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e,t){f.login({username:e,password:t}).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){f.logout().then((function(){return a.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedIn,n=e.user,o=this.login,r=this.logout,s=this.signup;return l.a.createElement(v,{value:{isLoading:t,isLoggedIn:a,user:n,login:o,logout:r,signup:s}},this.props.children)}}]),t}(l.a.Component),k=(a(57),a(15)),P=E(function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.user,e.logout),a=e.isLoggedIn;return l.a.createElement("nav",{class:"navbar navbar-light bg-light"},l.a.createElement(s.b,{to:"/",class:"btn btn-outline-info",type:"button"},l.a.createElement("i",{class:"fas fa-home"})),a?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{class:"btn btn-outline-info",type:"button",to:"/backlog"},l.a.createElement("i",{class:"fas fa-list"})),l.a.createElement(s.b,{class:"btn btn-outline-info",type:"button",to:"/done"},l.a.createElement("i",{class:"fas fa-tasks"})),l.a.createElement("i",{class:"fas fa-sign-out-alt btn btn-outline-danger",type:"button",onClick:t})):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.b,{to:"/login",class:"btn btn-outline-success",type:"button"}," ",l.a.createElement("i",{class:"fas fa-sign-in-alt"})),l.a.createElement("br",null),l.a.createElement(s.b,{to:"/signup",class:"btn btn-outline-info",type:"button"}," ",l.a.createElement("i",{class:"fas fa-user-plus"}))))}}]),t}(n.Component));var C=function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"images/logo2.png",alt:"logo2",width:"100%"}))},O=a(11),j=E(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",email:"",allPlatforms:["Netflix","Amazon Prime","Disney+","HBO Now","Plex","Other"],selectedPlatforms:[],allConsoles:["Xbox","Playstation","Switch","PC","Other"],selectedConsoles:[]},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password,o=t.selectedPlatforms,r=t.selectedConsoles;a.props.signup(n,l,o,r)},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(O.a)({},n,l))},a.togglePlatform=function(e){e.preventDefault();var t=e.target,n=t.name,l=t.id,o=a.state.selectedPlatforms,r=a.state.selectedConsoles;"platforms"===l?(o.includes(n)?o.splice(o.indexOf(n),1):o.push(n),a.setState({selectedPlatforms:o})):"consoles"===l&&(r.includes(n)?r.splice(r.indexOf(n),1):r.push(n),a.setState({selectedConsoles:r}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.password,o=t.allPlatforms,r=t.selectedPlatforms,s=t.allConsoles,c=t.selectedConsoles;return l.a.createElement("div",null,l.a.createElement("h1",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{class:"form-control",type:"text",name:"username",value:a,onChange:this.handleChange,placeholder:"Your name here"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Password:"),l.a.createElement("input",{class:"form-control",type:"password",name:"password",value:n,onChange:this.handleChange,placeholder:"And your password here"})),l.a.createElement("p",null,"Select your owned subscriptions and consoles below!"),l.a.createElement("div",{class:"platform-container"},l.a.createElement("div",{class:"btn-group-vertical platforms-list"},o.map((function(t){return l.a.createElement("button",{id:"platforms",style:r.includes(t)?{background:"green"}:null,class:"btn btn-secondary",onClick:e.togglePlatform,name:t},t)}))),l.a.createElement("div",{class:"btn-group-vertical platforms-list"},s.map((function(t){return l.a.createElement("button",{id:"consoles",style:c.includes(t)?{background:"green"}:null,class:"btn btn-secondary",onClick:e.togglePlatform,name:t},t)})))),l.a.createElement("p",null,"Don't worry, you will be able to edit this later"),l.a.createElement("div",{class:"sign-btn"},l.a.createElement("input",{class:"btn btn-primary",type:"submit",value:"Signup"}))))}}]),t}(n.Component)),w=E(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,l=t.password;a.props.login(n,l)},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(O.a)({},n,l))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",null,"Username:"),l.a.createElement("input",{class:"form-control",type:"text",name:"username",value:t,onChange:this.handleChange,placeholder:"Your name here"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Password:"),l.a.createElement("input",{class:"form-control",type:"password",name:"password",value:a,onChange:this.handleChange,placeholder:"And your password here"})),l.a.createElement("div",{class:"sign-btn"},l.a.createElement("input",{class:"btn btn-primary",type:"submit",value:"Login"}))))}}]),t}(n.Component)),M=a(18),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={selectedPlatform:"",toogleInfo:!1},a.handleChange=function(e){var t=e.target,n=t.id,l=t.value;a.props.updatePlatformProp(n,l)},a.showAdditionalInfo=function(){var e;e=!1===a.state.toogleInfo,a.setState({toogleInfo:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("button",{class:"list-group-item list-group-item-action list-items",onClick:this.showAdditionalInfo},"Series"===this.props.eachMediaProp.type?l.a.createElement("i",{class:"fas fa-tv"}):"Film"===this.props.eachMediaProp.type?l.a.createElement("i",{class:"fas fa-film"}):"Game"===this.props.eachMediaProp.type?l.a.createElement("i",{class:"fas fa-gamepad"}):null,l.a.createElement("b",null," ",this.props.eachMediaProp.title)," in"," ",l.a.createElement("b",null,this.props.eachMediaProp.platform)),l.a.createElement("br",null),this.state.toogleInfo?l.a.createElement("div",null,l.a.createElement("div",{class:"card mb-3 cardReact"},l.a.createElement("div",{class:"no-gutters infoblocks"},l.a.createElement("div",{class:"col-md-4"},l.a.createElement("img",{src:this.props.eachMediaProp.image,class:"card-img",alt:"..."})),l.a.createElement("div",{class:"col-md-8"},l.a.createElement("div",{class:"card-body"},l.a.createElement("p",{class:"card-text"},l.a.createElement("small",{class:"text-muted"},l.a.createElement("b",null,"Release Date:")," ",this.props.eachMediaProp.releaseDate)," ",l.a.createElement("br",null),l.a.createElement("small",{class:"text-muted"},l.a.createElement("b",null,"Description:")," ",this.props.eachMediaProp.description))))),l.a.createElement("form",{class:"form-group"},l.a.createElement("label",null,"Click below to update platform!"),l.a.createElement("select",{class:"form-control",id:this.props.eachMediaProp._id,onChange:this.handleChange,name:"platforms",value:this.props.eachMediaProp.platform},this.props.userPlatformsProp.map((function(e){return l.a.createElement("option",{value:e},e)})))),l.a.createElement("button",{type:"button",class:"btn btn-outline-danger info-btns",onClick:function(){return e.props.deleteMediaProp(e.props.eachMediaProp._id)}},"delete"),l.a.createElement("button",{type:"button",class:"btn btn-outline-success info-btns",onClick:function(){return e.props.toggleDoneProp(e.props.eachMediaProp._id,e.props.eachMediaProp.done)}},"done"))):null)}}]),t}(n.Component),x=E(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={media:[],filteredMedia:[],randomClick:!1,previousFilteredMedia:[],isLoading:!0,filteredType:"Film",userPlatforms:[]},a.getAllBacklog=function(){h.a.get("".concat("https://backlog-quest.herokuapp.com","/api/backlog"),{withCredentials:!0}).then((function(e){var t=e.data.filter((function(e){return e.type===a.state.filteredType}));a.setState({media:e.data,filteredMedia:t,previousFilteredMedia:t,randomClick:!1,isLoading:!1})}))},a.filterMedia=function(e){var t=Object(M.a)(a.state.media).filter((function(t){return t.type===e.target.name}));a.setState({filteredMedia:t,previousFilteredMedia:t,randomClick:!1,filteredType:e.target.name})},a.randomMedia=function(){if(!1===a.state.randomClick){var e=a.state.filteredMedia,t=Math.floor(Math.random()*e.length),n=e.filter((function(a){return a._id===e[t]._id}));a.setState({filteredMedia:n,randomClick:!0})}else!0===a.state.randomClick&&a.setState({filteredMedia:a.state.previousFilteredMedia,randomClick:!1})},a.updatePlatform=function(e,t){h.a.put("".concat("https://backlog-quest.herokuapp.com","/api/media/").concat(e),{platform:t},{withCredentials:!0}).then((function(){return a.getAllBacklog()})).catch((function(e){return console.log(e)}))},a.deleteMedia=function(e){h.a.delete("".concat("https://backlog-quest.herokuapp.com","/api/media/").concat(e),{withCredentials:!0}).then((function(){return a.getAllBacklog()})).catch((function(e){return console.log(e)}))},a.toggleDone=function(e,t){var n;n=!t,h.a.put("".concat("https://backlog-quest.herokuapp.com","/api/media/").concat(e),{done:n},{withCredentials:!0}).then((function(){a.getAllBacklog()})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.getAllBacklog(),h.a.get("".concat("https://backlog-quest.herokuapp.com","/profile/").concat(this.props.user._id),{withCredentials:!0}).then((function(t){e.setState({userPlatforms:t.data.platforms})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.filteredMedia,n=t.isLoading,o=t.userPlatforms;return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-light bg-light"},l.a.createElement("button",{type:"button",class:"btn btn-info",onClick:this.filterMedia,name:"Series"},l.a.createElement("i",{class:"fas fa-tv"})," Series"),l.a.createElement("button",{type:"button",class:"btn btn-info",onClick:this.filterMedia,name:"Film"},l.a.createElement("i",{class:"fas fa-film"})," Films"),l.a.createElement("button",{type:"button",class:"btn btn-info",onClick:this.filterMedia,name:"Game"},l.a.createElement("i",{class:"fas fa-gamepad"})," Games")),l.a.createElement("h1",null,"Backlog"),l.a.createElement("div",{class:"list-group"},n?null:a.map((function(t){return l.a.createElement(S,{eachMediaProp:t,userPlatformsProp:o,updatePlatformProp:e.updatePlatform,deleteMediaProp:e.deleteMedia,toggleDoneProp:e.toggleDone})}))),l.a.createElement("nav",{class:"navbar navbar-light bg-light footerbar"},l.a.createElement(s.b,{class:"btn btn-outline-info",type:"button",to:"/add/films"},l.a.createElement("i",{class:"fas fa-plus"})),l.a.createElement("button",{class:"btn btn-info btn-circle btn-xl"},l.a.createElement("i",{onClick:this.randomMedia,class:"fas fa-random icon"})),l.a.createElement(s.b,{class:"btn btn-outline-info",type:"button",to:"/profile"},l.a.createElement("i",{class:"fas fa-user"}))))}}]),t}(n.Component)),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={selectedPlatform:"",toogleInfo:!1},a.handleChange=function(e){var t=e.target,n=t.id,l=t.value;a.props.updatePlatformProp(n,l)},a.showAdditionalInfo=function(){var e;console.log("showInfo working"),e=!1===a.state.toogleInfo,a.setState({toogleInfo:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(),l.a.createElement("div",null,l.a.createElement("button",{onClick:this.showAdditionalInfo},l.a.createElement("b",null,this.props.eachMediaProp.title)," in"," ",l.a.createElement("b",null,this.props.eachMediaProp.platform)),l.a.createElement("br",null),this.state.toogleInfo?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("img",{src:this.props.eachMediaProp.image,alt:"poster"}),l.a.createElement("div",null,l.a.createElement("p",null,"Release Date: ",this.props.eachMediaProp.releaseDate),l.a.createElement("p",null,"ranking: ",this.props.eachMediaProp.ranking),l.a.createElement("p",null,"Description: ",this.props.eachMediaProp.description))),l.a.createElement("p",null,"Platform viewed: ",this.props.eachMediaProp.platform),l.a.createElement("p",null,"Finished Date: ",this.props.eachMediaProp.updated_at),l.a.createElement("button",{type:"button",class:"btn btn-outline-danger",onClick:function(){return e.props.deleteMediaProp(e.props.eachMediaProp._id)}},"delete"),l.a.createElement("button",{type:"button",class:"btn btn-outline-warning",onClick:function(){return e.props.toggleDoneProp(e.props.eachMediaProp._id,e.props.eachMediaProp.done)}},"undo")):null)}}]),t}(n.Component),I=E(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={media:[],filteredMedia:[],isLoading:!0,filteredType:"Film"},a.getAllBacklog=function(){h.a.get("".concat("https://backlog-quest.herokuapp.com","/api/done"),{withCredentials:!0}).then((function(e){var t=e.data.filter((function(e){return e.type===a.state.filteredType}));a.setState({media:e.data,filteredMedia:t,isLoading:!1})}))},a.filterMedia=function(e){var t=Object(M.a)(a.state.media).filter((function(t){return t.type===e.target.name}));a.setState({filteredMedia:t,previousFilteredMedia:t,randomClick:!1,filteredType:e.target.name})},a.deleteMedia=function(e){h.a.delete("".concat("https://backlog-quest.herokuapp.com","/api/media/").concat(e),{withCredentials:!0}).then((function(){return a.getAllBacklog()})).catch((function(e){return console.log(e)}))},a.toggleDone=function(e,t){var n;n=!t,h.a.put("".concat("https://backlog-quest.herokuapp.com","/api/media/").concat(e),{done:n},{withCredentials:!0}).then((function(){a.getAllBacklog()})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getAllBacklog()}},{key:"render",value:function(){var e=this,t=this.state,a=t.filteredMedia,n=t.isLoading;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("button",{onClick:this.filterMedia,name:"Series"},"Series"),l.a.createElement("button",{onClick:this.filterMedia,name:"Film"},"Films")),l.a.createElement("h1",null,"Done List"),l.a.createElement("ul",null,n?null:a.map((function(t){return l.a.createElement("li",null,l.a.createElement(D,{eachMediaProp:t,userProp:e.props.user,deleteMediaProp:e.deleteMedia,toggleDoneProp:e.toggleDone}))}))))}}]),t}(n.Component)),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={selectedResult:a.props.selectedResultProp,selectedPlatform:"",selectedMediaType:a.props.searchTypeProp,availablePlatforms:a.props.userPlatformsProp},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(O.a)({},n,l)),console.log(l)},a.addResult=function(e,t,n){if(e.preventDefault(),"Film"===a.state.selectedMediaType){var l=t.title,o=t.vote_average,r=t.overview,s=t.release_date;h.a.post("".concat("https://backlog-quest.herokuapp.com","/api/add"),{title:l,type:a.state.selectedMediaType,done:!1,platform:a.state.selectedPlatform,image:n,ranking:o,description:r,releaseDate:s},{withCredentials:!0}).then((function(e){return console.log("Film created:",e)})).catch((function(e){return console.log(e)}))}else if("Series"===a.state.selectedMediaType){var c=t.name,i=t.vote_average,u=t.overview,p=t.first_air_date;h.a.post("".concat("https://backlog-quest.herokuapp.com","/api/add"),{title:c,type:a.state.selectedMediaType,done:!1,platform:a.state.selectedPlatform,image:n,ranking:i,description:u,releaseDate:p},{withCredentials:!0}).then((function(e){return console.log("Film created:",e)})).catch((function(e){return console.log(e)}))}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.selectedResult,n=t.selectedPlatform,o=t.availablePlatforms,r="https://image.tmdb.org/t/p/w185_and_h278_bestv2/"+a.poster_path;return l.a.createElement("div",{class:"col-3"},a.title,l.a.createElement("img",{src:r,alt:"poster"}),l.a.createElement("select",{id:a.title,name:"selectedPlatform",value:n,onChange:this.handleChange},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select your option"),o.map((function(e){return l.a.createElement("option",{value:e},e)}))),l.a.createElement("button",{class:"btn btn-info",onClick:function(t){return e.addResult(t,a,r)}},"Add to Backlog"))}}]),t}(n.Component),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={selectedResult:a.props.selectedResultProp,selectedConsole:"",selectedMediaType:a.props.searchTypeProp,availableConsoles:a.props.userConsolesProp},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(O.a)({},n,l))},a.addResult=function(e,t,n){e.preventDefault();var l="";switch(a.state.selectedResult.platform){case"Switch":l="switch";break;case"WII":l="wii";break;case"WIIU":l="wii-u";break;case"GC":l="gamecube";break;case"N64":l="nintendo-64";break;case"3DS":l="3ds";break;case"DS":l="ds";break;case"PS4":l="playstation-4";break;case"PS3":l="playstation-3";break;case"PS2":l="playstation-2";break;case"PS":l="playstation";break;case"PSP":l="psp";break;case"VITA":l="playstation-vita";break;case"PC":l="pc";break;case"XONE":l="xbox-one";break;case"Xbox 360":l="xbox-360";break;case"Xbox":l="xbox"}h()({method:"GET",url:"https://chicken-coop.p.rapidapi.com/games/".concat(a.state.selectedResult.title),headers:{"content-type":"application/octet-stream","x-rapidapi-host":"chicken-coop.p.rapidapi.com","x-rapidapi-key":"ebde97877cmsh57d04785db64b6cp1c30f0jsn986c5e407a9c"},params:{platform:"".concat(l)}}).then((function(e){var t=e.data.result,n=t.title;t.image,t.score,t.description,t.releasedDate;h.a.post("".concat("https://backlog-quest.herokuapp.com","/api/add"),{title:n,type:a.state.selectedMediaType,platform:a.state.selectedConsole},{withCredentials:!0}).then((function(e){return console.log("Game created:",e)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.selectedResult,n=t.selectedConsole,o=t.availableConsoles;return l.a.createElement("div",{class:"col-3"},a.title,l.a.createElement("select",{id:a.title,name:"selectedConsole",value:n,onChange:this.handleChange},l.a.createElement("option",{value:"",disabled:!0,selected:!0},"Select your option"),o.map((function(e){return l.a.createElement("option",{value:e},e)}))),l.a.createElement("button",{class:"btn btn-info",onClick:function(t){return e.addResult(t,a)}},"Add to Backlog"))}}]),t}(n.Component),L=E(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={searchQuery:"",searchResults:[],searchType:"",userPlatforms:[],userConsoles:[]},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(O.a)({},n,l))},a.handleFormSubmitForGames=function(e){e.preventDefault();var t=a.state.searchQuery;h()({method:"GET",url:"https://chicken-coop.p.rapidapi.com/games",headers:{"content-type":"application/octet-stream","x-rapidapi-host":"chicken-coop.p.rapidapi.com","x-rapidapi-key":"ebde97877cmsh57d04785db64b6cp1c30f0jsn986c5e407a9c"},params:{title:"".concat(t)}}).then((function(e){console.log(e.data.result),a.setState({searchResults:e.data.result})})).catch((function(e){return console.log(e)})),a.setState({searchResults:[]})},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.searchQuery,l="";l="Film"===t.searchType?"movie":"tv",h()({method:"GET",url:"https://api.themoviedb.org/3/search/".concat(l,"?api_key=").concat("cbf88d86380cb31e2900a0ebd7ca3ef2","&query=").concat(n,"&page=1")}).then((function(e){console.log(e);var t=e.data.results.filter((function(e){return void 0!==e.poster_path}));a.setState({searchResults:t})})).catch((function(e){return console.log(e)})),a.setState({searchResults:[]})},a.selectMediaType=function(e){var t=e.target.name;a.setState({searchResults:[],searchType:t,searchQuery:""})},a.componentDidMount=function(){h.a.get("".concat("https://backlog-quest.herokuapp.com","/profile/").concat(a.props.user._id),{withCredentials:!0}).then((function(e){a.setState({userPlatforms:e.data.platforms,userConsoles:e.data.consoles})}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.searchQuery,a=e.searchResults,n=e.searchType,o=e.userPlatforms,r=e.userConsoles;return l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-light bg-light"},l.a.createElement("button",{type:"button",class:"btn btn-info",onClick:this.selectMediaType,name:"Series"},l.a.createElement("i",{class:"fas fa-tv"})," Series"),l.a.createElement("button",{type:"button",class:"btn btn-info",onClick:this.selectMediaType,name:"Film"},l.a.createElement("i",{class:"fas fa-film"})," Films"),l.a.createElement("button",{type:"button",class:"btn btn-info",onClick:this.selectMediaType,name:"Game"},l.a.createElement("i",{class:"fas fa-gamepad"})," Games")),""===n?l.a.createElement("h3",null,"Select a media type!"):l.a.createElement("form",{onSubmit:"Game"===n?this.handleFormSubmitForGames:this.handleFormSubmit},l.a.createElement("input",{type:"text",name:"searchQuery",value:t,onChange:this.handleChange,placeholder:n}),l.a.createElement("input",{type:"submit",value:"Search"})),l.a.createElement("div",null,l.a.createElement("div",{class:"column flex-column flex-nowrap"},"Game"===n?a.map((function(e){return l.a.createElement(A,{selectedResultProp:e,searchTypeProp:n,userConsolesProp:r})})):a.map((function(e){return l.a.createElement(F,{selectedResultProp:e,searchTypeProp:n,userPlatformsProp:o})})))),l.a.createElement(s.b,{to:"/backlog"},l.a.createElement("h4",null,"Back")))}}]),t}(n.Component)),T=E(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:"",email:"",allPlatforms:["Netflix","Amazon Prime","Disney+","HBO Now","Plex","Other"],selectedPlatforms:[],allConsoles:["Xbox","Playstation","Switch","PC","Other"],selectedConsoles:[]},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.selectedPlatforms,l=t.selectedConsoles;h.a.put("".concat("https://backlog-quest.herokuapp.com","/profile/").concat(a.props.user._id),{platforms:n,consoles:l},{withCredentials:!0}).then((function(){return console.log("User platforms updated")})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(O.a)({},n,l))},a.togglePlatform=function(e){e.preventDefault();var t=e.target,n=t.name,l=t.id,o=a.state.selectedPlatforms,r=a.state.selectedConsoles;"platforms"===l?(o.includes(n)?o.splice(o.indexOf(n),1):o.push(n),a.setState({selectedPlatforms:o})):"consoles"===l&&(r.includes(n)?r.splice(r.indexOf(n),1):r.push(n),a.setState({selectedConsoles:r}))},a.componentDidMount=function(){h.a.get("".concat("https://backlog-quest.herokuapp.com","/profile/").concat(a.props.user._id),{withCredentials:!0}).then((function(e){a.setState({username:e.data.username,selectedPlatforms:e.data.platforms,selectedConsoles:e.data.consoles})}))},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,n=t.allPlatforms,o=t.selectedPlatforms,r=t.allConsoles,s=t.selectedConsoles;return l.a.createElement("div",null,l.a.createElement("h4",null,"Welcome to your profile ",a),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("p",null,"Update your subscriptions and consoles below!"),l.a.createElement("div",{class:"platform-container"},l.a.createElement("div",{class:"btn-group-vertical platforms-list"},n.map((function(t){return l.a.createElement("button",{id:"platforms",style:o.includes(t)?{background:"green"}:null,class:"btn btn-secondary",onClick:e.togglePlatform,name:t},t)}))),l.a.createElement("div",{class:"btn-group-vertical platforms-list"},r.map((function(t){return l.a.createElement("button",{id:"consoles",style:s.includes(t)?{background:"green"}:null,class:"btn btn-secondary",onClick:e.togglePlatform,name:t},t)})))),l.a.createElement("p",null,"You can edit this anytime you want!"),l.a.createElement("div",{class:"sign-btn"},l.a.createElement("input",{class:"btn btn-primary",type:"submit",value:"Update"}))))}}]),t}(n.Component)),R=a(17);var _=E((function(e){var t=e.component,a=e.isLoggedIn,n=Object(R.a)(e,["component","isLoggedIn"]);return(l.a.createElement(k.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(k.a,{to:"/backlog"}):a?void 0:l.a.createElement(t,e)}})))}));var q=E((function(e){var t=e.component,a=e.isLoggedIn,n=Object(R.a)(e,["component","isLoggedIn"]);return l.a.createElement(k.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,e):a?void 0:l.a.createElement(k.a,{to:"/login"})}}))})),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(P,null),l.a.createElement(k.d,null,l.a.createElement(k.b,{exact:!0,path:"/",component:C}),l.a.createElement(_,{exact:!0,path:"/signup",component:j}),l.a.createElement(_,{exact:!0,path:"/login",component:w}),l.a.createElement(q,{exact:!0,path:"/backlog",component:x}),l.a.createElement(q,{exact:!0,path:"/done",component:I}),l.a.createElement(q,{exact:!0,path:"/add/films",component:L}),l.a.createElement(q,{exact:!0,path:"/profile",component:T})))}}]),t}(n.Component);a(63).config(),r.a.render(l.a.createElement(s.a,null,l.a.createElement(y,null,l.a.createElement(B,null))),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.0fbf82c4.chunk.js.map