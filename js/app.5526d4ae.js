(function(){"use strict";var t={6226:function(t,e,a){var n=a(144),s=a(998),o=a(5174),i=a(5550),r=a(757),c=a(6190),l=a(4324),d=a(5808),u=a(4525),h=a(4502),m=a(4611),p=a(3059),f=a(8899),g=a(3687),b=a(7953),w=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(s.Z,{},[e(f.Z,{attrs:{app:"",fixed:"",dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(d.Z,{attrs:{dense:"",nav:""}},t._l(t.items,(function(a){return e(u.Z,{key:a.title,attrs:{link:""}},[e(h.km,{staticStyle:{"flex-wrap":"nowrap"}},[e("router-link",{staticStyle:{display:"flex"},attrs:{to:a.link}},[e(m.Z,{staticClass:"mr-6"},[e(l.Z,[t._v(t._s(a.icon))])],1),e(h.V9,{staticClass:"text-left text-button font-weight-bold nav-list-title"},[t._v(" "+t._s(a.title)+" ")])],1)],1)],1)})),1)],1),e(o.Z,{attrs:{app:"",dark:"",src:"https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"}},[t.username?e(i.Z,{on:{click:function(e){return t.openNav()}}}):t._e(),e(b.qW,{staticClass:"text-h4 font-weight-bold"},[t._v(" Treelo ")]),e(g.Z),t.username?e("div",{staticClass:"pr-4"},[t._v(" Hello "+t._s(t.username.charAt(0).toUpperCase()+t.username.slice(1))+"! ")]):t._e(),t.username?e(c.Z,{staticClass:"mx-auto mr-3",attrs:{color:"indigo",fab:""},on:{click:function(e){return t.changeRoute("/settings")}}},[e(l.Z,{attrs:{color:"green"}},[t._v(" mdi-pine-tree ")])],1):t._e()],1),e(p.Z,[e("router-view",{key:t.$route.path})],1),""==t.username?e(r.Z,{staticStyle:{"background-image":"url('https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg')","background-size":"cover"},attrs:{width:"100%",grow:""}},[e(c.Z,{on:{click:function(e){return t.changeRoute("/login")}}},[e("span",{staticClass:"white--text"},[t._v("Login")]),e(l.Z,{staticClass:"white--text"},[t._v("mdi-login")])],1),e(c.Z,{on:{click:function(e){return t.changeRoute("/contact")}}},[e("span",{staticClass:"white--text"},[t._v("Contact Us")]),e(l.Z,{staticClass:"white--text"},[t._v("mdi-email")])],1),e(c.Z,{on:{click:function(e){return t.changeRoute("/about")}}},[e("span",{staticClass:"white--text"},[t._v("About Us")]),e(l.Z,{staticClass:"white--text"},[t._v("mdi-human-greeting-variant")])],1)],1):t._e()],1)},v=[];const y="https://prod-app-backend.herokuapp.com";var C=n.ZP.extend({name:"App",components:{},data:()=>({drawer:!1,userCard:!0,username:"",items:[{title:"My Board",link:"/board",icon:"mdi-hammer"},{title:"About us",link:"/about",icon:"mdi-account-group"},{title:"Contact us",link:"/contact",icon:"mdi-card-account-mail"}]}),methods:{changeRoute(t){this.$router.replace({path:t})},kalebsMethod:async function(){let t=await fetch(y+"/session",{method:"GET",credentials:"include"});if(200!=t.status&&"/login"!=this.$router.currentRoute.path)this.$router.replace({path:"/login"});else if(200==t.status){let e=await t.json();this.username=e.name,"/board"!=this.$router.currentRoute.path&&this.$router.replace({path:"/board"})}},openNav:function(){this.username&&(this.drawer=!this.drawer)}},created(){this.kalebsMethod()}}),_=C,k=a(1001),x=(0,k.Z)(_,w,v,!1,null,null,null),Z=x.exports,S=a(8864);n.ZP.use(S.Z);var I=new S.Z({}),E=a(8345),B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about"},[e("AboutComponent")],1)},j=[],P=a(9582),T=a(4886),D=a(266),R=a(2118),O=a(7394),A=a(5495),N=a(1713),U=function(){var t=this,e=t._self._c;return e("div",[e(s.Z,[e("video",{attrs:{src:"https://static.videezy.com/system/resources/previews/000/036/687/original/18_015_06.mp4",autoplay:"",loop:"",playsinline:"",muted:""},domProps:{muted:!0}}),e(P.Z,{staticClass:"pa-12 my-10 mx-auto",staticStyle:{"background-image":"url('https://media.istockphoto.com/photos/snowstorm-texture-bokeh-lights-and-falling-snow-on-a-black-background-picture-id814528100?k=20&m=814528100&s=612x612&w=0&h=2AugqAD4SQ0Dj5SxyCc35Urt88YFZlE_RsUSMfl47y8=')","background-repeat":"no-repeat","background-size":"100%",opacity:"0.9",width:"80vw"}},[e(T.EB,{staticClass:"white--text",staticStyle:{display:"flex","justify-content":"center","flex-direction":"column"}},[e("b",[t._v("Here at Treelo we want to make your life easier!")]),e(T.Qq,[e("b",[t._v("Click on a name to learn more about ourselves!")])])],1),e(R.Z,{attrs:{justify:"center"}},[e(N.Z,{attrs:{dense:"",justify:"center"}},t._l(t.cards,(function(a){return e(D.Z,{key:a.name},[e("a",{attrs:{href:"#aboutMeImg"}},[e(P.Z,{staticStyle:{color:"skyblue"},attrs:{"max-width":"200px"},on:{click:function(e){return t.AboutInfo(a)}}},[e(A.Z,{staticClass:"white--text BW",attrs:{src:a.image,"max-width":"200px",height:"200px"}},[e(T.EB,{staticClass:"justify-center mt-12",domProps:{textContent:t._s(a.name)}})],1)],1)],1)])})),1)],1)],1),e(O.Z5,[e(P.Z,{directives:[{name:"show",rawName:"v-show",value:t.about,expression:"about"}],staticClass:"red lighten-4 pb-16 mb-10 mx-auto",staticStyle:{"background-image":"url('https://i.stack.imgur.com/SvWWN.png')","border-radius":"50px"},attrs:{width:" 70%"}},[e(T.ZB,{staticStyle:{color:"white"}},[t._v(t._s(t.AboutTxt))]),e(A.Z,{staticClass:"mx-auto",attrs:{id:"aboutMeImg",src:t.picture,width:"200"}}),e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.GitHub,target:"_blank"}},[e(c.Z,{staticClass:"mx-2 mt-2"},[e(l.Z,[t._v("mdi-github")])],1)],1),e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.LinkedIn,target:"_blank"}},[e(c.Z,{staticClass:"mx-2 mt-2"},[e(l.Z,[t._v("mdi-linkedin")])],1)],1),e("a",{staticStyle:{"text-decoration":"none"},attrs:{href:t.resume,target:"_blank"}},[e(c.Z,{staticClass:"mx-2 mt-2"},[e(l.Z,[t._v("mdi-file-account")])],1)],1)],1)],1)],1)],1)},L=[],$={name:"AboutComponent",props:{},data:()=>({AboutTxt:"",GitHub:"",LinkedIn:"",picture:"",resume:"",about:!1,cards:[{name:"Chaz",about:"I am Chaz Cox currently a Junior studying at Utah Tech University. I was born and raised in St. George Ut. I have attended code school boot camp and have enjoyed learning how to become a better developer. I enjoy learning new things and a I am excited to learn more this coming year in school. I would like to become an software engineer in the coming years, but for now I will continue learning and seeking out opportunities to gain more experience.",github:"https://github.com/chaz-cox",linkedin:"https://www.linkedin.com/in/chaz-cox-b108a9236/",image:"https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",picture:"https://media-exp1.licdn.com/dms/image/C4E03AQGixDoEFEj04Q/profile-displayphoto-shrink_800_800/0/1648961201711?e=1663804800&v=beta&t=YVUf85MGOLkd1RFd9ZoPGaf_uO_bW_5LvMIOm3ap6uE",resume:"https://drive.google.com/file/d/1A4KUsz0nGT31rLdDW89CXr43Jtq1nOej/view?usp=sharing"},{name:"Kendall",about:"My Name is Kendall, i am currently a senior at Utah Tech University studying computer science and i will graduate in the spring of 2023. At Treelo i worked a lot on the frontend aspect of the website. I graduated High school from Desert Hills High School in sunny St. George Utah, After that i went on a church mission to Northern Italy for 2 years where i spoke and immersed myself in the italian culture! I orginally went to school for engineering but after taking one programming class i knew that was the path i wanted to take. I like to play video games in my spare time and love going fly fishing.",github:"https://github.com/kendallbaker12",linkedin:"https://www.linkedin.com/in/kendall-baker-033210205/",image:"https://theedinburghreporter.co.uk/wp-content/uploads/2020/12/TREES-Tree-hugger-David-Knott-Curator-of-the-Living-Collection-RBGE.jpg",picture:"https://media-exp1.licdn.com/dms/image/C5603AQFBrK9dga0q4A/profile-displayphoto-shrink_400_400/0/1658502459239?e=1663804800&v=beta&t=Zr5QVIgZ4GusXPKR_fI2k32EYscTdyQToP58PbA1JOQ",resume:"https://docs.google.com/document/d/1knAWIW5-9ZnJVnbweYofkyZOxmZarqaDDVXpoO1Bf34/edit"},{name:"Kaleb",about:"I am a senior at Utah Tech University studying Computer Science.  I am passionate about Distributed Systems, Machine\n        Learning, and Academic Papers. I am currently doing undergraduate research with university timetabling.\n        Furthermore, I have attended the Utah Tech University Code School boot camp. Eventually, I would like to pursue a PhD in machine learning, but for now I am looking for a job working with cutting edge technologies.",github:"https://github.com/kcpetersen111",linkedin:"https://www.linkedin.com/in/kaleb-petersen-92bb19237/",image:"http://cdn.shopify.com/s/files/1/0062/8532/8445/products/Norfolk_Island_Pine_5_BB_grande.jpg?v=1607375158",picture:"https://media-exp1.licdn.com/dms/image/C4E03AQFCU9ZA0L-oRg/profile-displayphoto-shrink_400_400/0/1650147374237?e=1663804800&v=beta&t=JyPvXm8qbLExikLrc3OqamkvqaWWJjwpqoxQJ7vkj1o",resume:"https://github.com/kcpetersen111/resume"},{name:"Jake",about:"Jake is pretty cool too",github:"https://github.com/Legac3e",linkedin:"https://www.linkedin.com/in/jake-duckett-720967116/",image:"https://cdn.britannica.com/92/142292-004-459092B7.jpg",picture:"https://media-exp1.licdn.com/dms/image/D5635AQEQuyWWbeYLlA/profile-framedphoto-shrink_800_800/0/1654923985946?e=1659110400&v=beta&t=tlrL6yh2bzpvrxs3hI59SM4snY1woPdfrrMOuh3Kb0c",resume:""}]}),methods:{AboutInfo(t){this.about?this.AboutTxt==t.about?(this.about=!1,this.AboutTxt="",this.GitHub="",this.LinkedIn="",this.picture="",this.resume=""):(this.about=!1,setTimeout((()=>{this.about=!0,this.AboutTxt=t.about,this.GitHub=t.github,this.LinkedIn=t.linkedin,this.picture=t.picture,this.resume=t.resume}),100)):(this.about=!0,this.AboutTxt=t.about,this.GitHub=t.github,this.LinkedIn=t.linkedin,this.picture=t.picture,this.resume=t.resume)}}},q=$,W=(0,k.Z)(q,U,L,!1,null,null,null),F=W.exports,G={name:"AboutView",components:{AboutComponent:F}},z=G,H=(0,k.Z)(z,B,j,!1,null,null,null),J=H.exports,M=a(2933),V=a(8088),Q=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"board"},[t.loggedIn?e(R.Z,{staticClass:"flex justify-center align-center",staticStyle:{"background-color":"rgba(155, 155, 155, 0.7)"}},[e("span",{staticClass:"flex justify-center align-center"},[t.boards.length>1&&t.currentBoardIndex>0?e(c.Z,{staticClass:"tree-buttons",attrs:{color:"blue-grey lighten-3"},on:{click:function(e){return t.moveBoardIndex(-1)}}},[e(l.Z,{staticStyle:{transform:"rotate(270deg)"}},[t._v(" mdi-pine-tree")])],1):t._e(),t.currentBoard.name.length>0?e("h1",{staticClass:"text-h2 font-weight-bold"},[t._v(" "+t._s(t.currentBoard.name)+" ")]):e("h1",{staticClass:"text-h2 font-weight-bold"},[t._v(" Create A New Tree to get started! ")]),t.boards.length>1&&t.currentBoardIndex<t.boards.length-1?e(c.Z,{staticClass:"tree-buttons",attrs:{color:"blue-grey lighten-3"},on:{click:function(e){return t.moveBoardIndex(1)}}},[e(l.Z,{staticStyle:{transform:"rotate(90deg)"}},[t._v("mdi-pine-tree")])],1):t._e(),t.newBoard?t._e():e(c.Z,{staticClass:"tree-buttons",attrs:{color:"blue-grey ligthen-3"},on:{click:function(e){t.newBoard=!0}}},[t._v(" +"),e(l.Z,[t._v("mdi-forest")])],1)],1),e("BoardComponent",{key:t.currentBoardIndex,attrs:{boardData:t.currentBoard,fetchBoards:t.fetchBoards}})],1):e(R.Z,[e("div",{staticClass:"boardName"},[e("h1",{staticClass:"white--text font-weight-bold"},[t._v("Loading ....")])])]),t.newBoard?e(M.Z,{staticClass:"justify-center",attrs:{"z-index":0,value:t.newBoard}},[e(P.Z,{staticClass:"blue pa-8"},[e(T.EB,[t._v("Create A Tree")]),e(V.Z,{staticClass:"px-3",attrs:{placeholder:"Tree Name"},model:{value:t.boardInfo,callback:function(e){t.boardInfo=e},expression:"boardInfo"}}),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e(c.Z,{attrs:{small:""},on:{click:function(e){t.newBoard=!1,t.boardInfo=""}}},[t._v(" Cancel ")]),e(c.Z,{attrs:{small:""},on:{click:function(e){return t.postBoard()}}},[t._v("Submit")])],1)],1)],1):t._e()],1)},Y=[],K=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(R.Z,{attrs:{id:"wrapper"}},[e(N.Z,t._l(t.fetchedContainers,(function(a,n){return e(D.Z,{key:n,attrs:{md:"4"}},[e("ContainerComponent",{attrs:{containerData:a,boardID:t.boardData._id,fetchContainers:t.fetchContainers}})],1)})),1),t.showContainer?e(M.Z,{staticClass:"justify-center",attrs:{"z-index":0,value:t.showContainer}},[e(P.Z,{staticClass:"blue pa-8"},[e(T.EB,[t._v("Create A Branch")]),e(V.Z,{staticClass:"px-3",attrs:{placeholder:"Branch Name"}},[t._v(" "+t._s(t.containerInfo)+" ")]),e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e(c.Z,{attrs:{small:""},on:{click:function(e){t.showContainer=!1}}},[t._v("Cancel")]),e(c.Z,{attrs:{small:""},on:{click:function(e){return t.postContainer()}}},[t._v("Submit")])],1)],1)],1):t._e(),e("div",{staticStyle:{position:"fixed",right:"1%",bottom:"10%"}},[e(c.Z,{staticClass:"tree-buttons",attrs:{color:"blue-grey lighten-3"},on:{click:function(e){t.showContainer=!0}}},[t._v("+"),e(l.Z,[t._v("mdi-source-branch")])],1),e(c.Z,{staticClass:"tree-buttons",attrs:{color:"blue-grey lighten-3"},on:{click:function(e){t.overlay=!t.overlay}}},[t._v(" -"),e(l.Z,[t._v("mdi-axe")])],1)],1),e(M.Z,{attrs:{value:t.overlay}},[e(P.Z,{staticClass:"mx-auto white--text",staticStyle:{"padding-top":"40%","background-image":"url('https://images.unsplash.com/photo-1613858636109-354616495373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')","background-size":"cover"},attrs:{width:"400",height:"400"},on:{focusout:function(e){t.overlay=!1}}},[e("div",[e("h3",[t._v("Are You Sure You want to delete?")]),e(c.Z,{on:{click:function(e){t.overlay=!1}}},[t._v("Cancel")]),e(c.Z,{on:{click:function(e){return t.deleteBoard()}}},[e(l.Z,[t._v("mdi-fire-alert")])],1)],1)])],1)],1)},X=[],tt=function(){var t=this,e=t._self._c;return e(P.Z,[e("div",{staticStyle:{float:"right"},attrs:{fab:""}},[e(c.Z,{attrs:{fab:"","x-small":""},on:{click:function(e){return t.deleteContainer()}}},[e(l.Z,[t._v("mdi-axe")])],1)],1),t.newContainer?t._e():e(T.EB,{staticClass:"text-h4 blue--text font-weight-bold text-wrap",staticStyle:{"word-break":"break-word","-webkit-hyphens":"manual","-moz-hyphens":"manual","-ms-hyphens":"manual",hyphens:"manual"},on:{click:function(e){t.newContainer=!0,t.containerInfo=t.containerData.name}}},[t._v(" "+t._s(t.containerData.name)+" ")]),t.newContainer?e("div",[e(V.Z,{attrs:{autofocus:""},model:{value:t.containerInfo,callback:function(e){t.containerInfo=e},expression:"containerInfo"}}),e(c.Z,{on:{click:function(e){t.newContainer=!1}}},[e(l.Z,[t._v("mdi-undo")])],1),e(c.Z,{on:{click:function(e){return t.updateContainer()}}},[e(l.Z,[t._v("mdi-sprout")])],1)],1):t._e(),e(d.Z,[t._l(t.fetchedCards,(function(a,n){return e("CardComponent",{key:a._id,attrs:{cardData:a,fetchCards:t.fetchAllCards,containerID:t.containerData._id,cardIndex:n,cardDone:t.cardDone,updateCard:t.updateCard}})})),e("div",{staticClass:"text-right mr-2",staticStyle:{"overflow-wrap":"break-word","word-wrap":"break-word",hyphens:"auto"}},[t.newCard?t._e():e(c.Z,{staticClass:"pa-0 white",attrs:{elevation:"0","x-small":""},on:{click:function(e){t.newCard=!t.newCard}}},[e(l.Z,[t._v("mdi-leaf")])],1)],1),t.newCard?e(V.Z,{staticClass:"mx-4",attrs:{placeholder:"add leaf info"},model:{value:t.cardInfo,callback:function(e){t.cardInfo=e},expression:"cardInfo"}}):t._e(),t.newCard?e(c.Z,{on:{click:function(e){return t.postCards()}}},[t._v("Submit")]):t._e(),t.newCard?e(c.Z,{on:{click:function(e){t.newCard=!t.newCard}}},[t._v("Cancel")]):t._e()],2)],1)},et=[],at=a(3743),nt=function(){var t=this,e=t._self._c;return e(P.Z,{staticClass:"justify-center mb-6 mx-4",staticStyle:{display:"flex"}},[t.editing?e("div",[e(V.Z,{staticClass:"green--text text--darken-2 font-weight-bold px-4",attrs:{autofocus:""},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.updateCardLocal()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelUpdate()}]},model:{value:t.newCard.name,callback:function(e){t.$set(t.newCard,"name",e)},expression:"newCard.name"}}),e(at.Z,{attrs:{bottom:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:n}){return[e(c.Z,t._g(t._b({staticClass:"ml-1 mb-2 tree-buttons",attrs:{small:""},on:{click:function(e){t.cardDone(t.cardIndex),t.editing=!1}}},"v-btn",n,!1),a),[e(l.Z,[t._v("mdi-check")])],1)]}}])},[e("span",[t._v("Check As Complete")])]),e(at.Z,{attrs:{bottom:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:n}){return[e(c.Z,t._g(t._b({staticClass:"ml-1 mb-2 tree-buttons",attrs:{small:""},on:{click:function(e){return t.deleteCard()}}},"v-btn",n,!1),a),[t._v("-"),e(l.Z,[t._v("mdi-axe")])],1)]}}])},[e("span",[t._v("Delete Card")])]),e(at.Z,{attrs:{bottom:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:n}){return[e(c.Z,t._g(t._b({staticClass:"ml-1 mb-2 tree-buttons",attrs:{small:""},on:{click:function(e){return t.updateCardLocal()}}},"v-btn",n,!1),a),[e(l.Z,[t._v("mdi-sprout")])],1)]}}])},[e("span",[t._v("Add your Changes")])]),e(at.Z,{attrs:{bottom:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:n}){return[e(c.Z,t._g(t._b({staticClass:"ml-1 mb-2 tree-buttons",attrs:{small:""},on:{click:function(e){return t.editCard()}}},"v-btn",n,!1),a),[e(l.Z,[t._v("mdi-undo")])],1)]}}])},[e("span",[t._v("Go Back")])])],1):e(T.EB,{staticClass:"justify-center green--text text--darken-2 font-weight-bold pr-1 magiccrossout",class:{done:t.cardData.done},on:{click:function(e){return t.editCard()}}},[t._v(" "+t._s(t.cardData.name)+" ")])],1)},st=[],ot={name:"CardComponent",props:{fetchCards:Function,cardDone:Function,containerID:{},cardData:Object,cardIndex:Number,updateCard:Function},data:function(){return{editing:!1,newCard:{}}},created(){},methods:{deleteCard:async function(){console.log(this.containerID);let t=await fetch(`${y}/container/${this.containerID}/card/${this.cardData._id}`,{method:"DELETE",credentials:"include"});200==t.status?(console.log("delete card successful"),this.fetchCards()):console.log("Error while deleting",t.status)},editCard:function(){this.editing?this.editing=!1:(this.newCard={...this.cardData},this.editing=!0)},updateCardLocal:async function(){await this.updateCard(this.cardIndex,this.newCard),this.editing=!1},cancelUpdate:function(){this.editing=!1}}},it=ot,rt=(0,k.Z)(it,nt,st,!1,null,null,null),ct=rt.exports,lt={name:"ContainerComponent",props:{containerData:{_id:String,creatorID:String,name:String,description:String,cards:Array},boardID:{},fetchContainers:Function},components:{CardComponent:ct},data:()=>({cards:[],newContainer:!1,containerInfo:"",fetchedCards:[],newCard:!1,cardInfo:""}),created(){this.cards=this.containerData.cards,this.fetchAllCards()},methods:{deleteContainer:async function(){let t=await fetch(`${y}/board/${this.boardID}/container/${this.containerData._id}`,{method:"DELETE",credentials:"include"});201==t.status?(this.fetchContainers(),console.log("delete success")):console.log("ERROR",t.status)},cardDone:async function(t){let e=this.fetchedCards[t];e.done=!e.done;let a=await fetch(`${y}/card/${e._id}`,{method:"PATCH",credentials:"include",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});200==a.status?(this.fetchedCards[t]=await a.json(),this.fetchAllCards()):console.log("ERROR",a.status,a)},fetchAllCards:async function(){let t=await fetch(`${y}/container/${this.containerData._id}/card`,{credentials:"include"});200==t.status?this.fetchedCards=await t.json():console.log("ERROR",t.status,t)},fetchCard:async function(t){let e,a=await fetch(`${y}/card/${t}`,{credentials:"include"});return 200==a.status?(e=await a.json(),console.log("card: ",e)):console.log("ERROR",a.status,a),e},postCards:async function(){let t=this.containerData._id,e={name:this.cardInfo},a=await fetch(`${y}/container/${t}/card`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"include"});if(this.cardInfo="",201==a.status){console.log("post card success"),this.newCard=!1;let t=await a.json();this.fetchedCards.push(t)}else console.log("ERROR",a.status)},refreshSelf:async function(){let t=this.containerData._id,e=await fetch(`${y}/container/${t}`,{credentials:"include"});if(200==e.status){let t=await e.json();this.cards=t.cards,this.fetchAllCards()}else console.log("ERROR",e.status,e)},updateContainer:async function(){let t={name:this.containerInfo},e=await fetch(`${y}/container/${this.containerData._id}`,{method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"});201==e.status?(this.fetchContainers(),this.newContainer=!1):console.log("ERROR: ",e.status)},updateCard:async function(t,e){let a=await fetch(`${y}/card/${e._id}`,{method:"PATCH",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"include"});200==a.status&&this.fetchAllCards()}}},dt=lt,ut=(0,k.Z)(dt,tt,et,!1,null,null,null),ht=ut.exports,mt=n.ZP.extend({name:"BoardComponent",props:{boardData:{_id:String,creatorID:String,name:String,description:String,container:Array},fetchBoards:Function},components:{ContainerComponent:ht},data:()=>({fetchedContainers:[],showContainer:!1,containerInfo:"",overlay:!1}),created(){this.fetchContainers()},methods:{fetchContainers:async function(){this.fetchedContainers=[],await this.fetchBoards();for(let t=0;t<this.boardData.container.length;t++){let e=this.boardData.container[t],a=await fetch(`${y}/container/${e}`,{credentials:"include"});if(200==a.status){let t=await a.json();this.fetchedContainers.push(t)}else console.log("ERROR",a.status,a)}},deleteBoard:async function(){let t=this.boardData._id,e=await fetch(`${y}/board/${t}`,{method:"DELETE",credentials:"include"});200==e.status?(console.log("delete successful"),this.fetchBoards(),console.log(this.boardData)):console.log("Error while deleting",e.status)},postContainer:async function(){let t=this.boardData._id,e={containerName:this.containerInfo},a=await fetch(`${y}/board/${t}/container`,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"},credentials:"include"});console.log(a.json),201==a.status?(console.log("post success"),this.showContainer=!1,this.fetchContainers()):console.log("ERROR",a.status),this.containerInfo=""}}}),pt=mt,ft=(0,k.Z)(pt,K,X,!1,null,null,null),gt=ft.exports,bt=n.ZP.extend({name:"BoardsView",components:{BoardComponent:gt},data:()=>({currentBoardIndex:0,currentBoard:{_id:"",name:"",description:"",cards:[]},loggedIn:!1,boards:[],boardInfo:"",newBoard:!1}),created(){this.fetchBoards()},methods:{fetchBoards:async function(t=0){let e=await fetch(`${y}/board`,{credentials:"include"});if(200==e.status){if(this.boards=await e.json(),this.loggedIn=!0,0==this.boards.length)return;this.boards.length<=this.currentBoardIndex&&(this.currentBoardIndex=this.boards.length-1),t>0&&(this.currentBoardIndex=t),this.currentBoard=this.boards[this.currentBoardIndex]}else console.log("Error",e.status,e)},moveBoardIndex:function(t){this.boards.length<=0||(this.currentBoardIndex+=t,this.currentBoardIndex<0?this.currentBoardIndex=0:this.currentBoardIndex>this.boards.length-1&&(this.currentBoardIndex=this.boards.length-1),this.currentBoard=this.boards[this.currentBoardIndex],this.$forceUpdate())},postBoard:async function(){let t={name:this.boardInfo},e=await fetch(`${y}/board`,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"});201==e.status?(console.log("post success"),this.fetchBoards(this.boards.length),this.newBoard=!1):console.log("ERROR",e.status),this.boardInfo=""}}}),wt=bt,vt=(0,k.Z)(wt,Q,Y,!1,null,null,null),yt=vt.exports,Ct=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login",staticStyle:{height:"100%"}},[e("LoginComponent",{staticStyle:{height:"100%"}})],1)},_t=[],kt=a(1653),xt=a(9258),Zt=function(){var t=this,e=t._self._c;return e(xt.Z,{attrs:{src:"https://cdn.shopify.com/s/files/1/0326/7189/articles/General_Sherman_tree_2000x.jpg?v=1627936731",height:"100%"}},[e(P.Z,{staticClass:"mx-auto my-auto pb-4 px-7 rounded-xl",attrs:{color:"rgba(255,255,255,.7)",flat:"",width:"400"}},[e(T.EB,{staticStyle:{display:"block"}},[e("b",[t._v("Sign in")])]),e(V.Z,{staticClass:"rounded-pill",attrs:{label:"Email",outlined:"",color:"black",rules:[t.rules.requiredEmail,t.rules.email],autofocus:""},model:{value:t.usernameInput,callback:function(e){t.usernameInput=e},expression:"usernameInput"}}),e(V.Z,{staticClass:"rounded-pill",attrs:{label:"Password",outlined:"",color:"black",type:"password",rules:[t.rules.requiredPassWord]},model:{value:t.passwordInput,callback:function(e){t.passwordInput=e},expression:"passwordInput"}}),e(T.h7,[e(c.Z,{staticClass:"mr-auto ml-10 mb-2 mt-n4 rounded-sm",attrs:{id:"login-button",elevation:"12"},on:{click:function(e){return t.postSession()}}},[t._v(" Login ")]),e(c.Z,{staticClass:"mr-8 ml-14 mb-2 mt-n4 rounded-sm",attrs:{id:"registration-button",elevation:"12"},on:{click:function(e){return t.gotoRegister()}}},[t._v(" Register ")])],1),e(kt.Z,{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticStyle:{"border-radius":"25px",border:"2px solid black"},attrs:{type:"error",dense:"",transition:"scale-transition",dismissible:""}},[t._v("Login Unsuccessful")])],1)],1)},St=[],It={name:"LoginComponent",props:{},data:()=>({usernameInput:"",passwordInput:"",show:!1,rules:{requiredEmail:t=>!!t||"Valid Email Required.",requiredPassWord:t=>!!t||"Valid Password Required.",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}}}),methods:{gotoRegister(){console.log("GO to Register page!"),this.$router.replace({path:"/registration"})},postSession:async function(){this.show=!1;let t={username:this.usernameInput,password:this.passwordInput},e=await fetch(y+"/session",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"}),a=await e.json();console.log(a),201==e.status?(console.log(" login was a success"),window.location.href="/board"):401==e.status?(console.log("Unsuccessful"),this.passwordInput="",this.usernameInput="",this.show=!0):console.log("Error",e.status,e)}}},Et=It,Bt=(0,k.Z)(Et,Zt,St,!1,null,null,null),jt=Bt.exports,Pt={name:"LoginView",components:{LoginComponent:jt}},Tt=Pt,Dt=(0,k.Z)(Tt,Ct,_t,!1,null,null,null),Rt=Dt.exports,Ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"registration"},[e("RegistrationComponent")],1)},At=[],Nt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(s.Z,[e(xt.Z,{attrs:{height:"1000",src:"https://cdn.shopify.com/s/files/1/0326/7189/articles/General_Sherman_tree_2000x.jpg?v=1627936731"}},[e(p.Z,[e(P.Z,{staticClass:"mx-auto ma-16 rounded-xl",attrs:{width:"200",flat:""}},[e(T.EB,{staticClass:"mx-10"},[t._v(" Sign up! ")])],1),e(P.Z,{staticClass:"mx-auto my-4 px-7 pt-7 rounded-xl",attrs:{width:"400",height:"325",color:"rgba(255,255,255,.7)",flat:""}},[e(V.Z,{staticClass:"rounded-pill",attrs:{label:"Username",outlined:"",color:"black",rules:[t.rules.requiredUserName]},model:{value:t.registerUsername,callback:function(e){t.registerUsername=e},expression:"registerUsername"}}),e(V.Z,{staticClass:"rounded-pill",attrs:{type:"password",label:"Password",color:"black",outlined:"",rules:[t.rules.requiredPassWord]},model:{value:t.registerPassword,callback:function(e){t.registerPassword=e},expression:"registerPassword"}}),e(V.Z,{staticClass:"rounded-pill",attrs:{label:"Email",color:"black",outlined:"",rules:[t.rules.requiredEmail,t.rules.email]},model:{value:t.registerEmail,callback:function(e){t.registerEmail=e},expression:"registerEmail"}}),e(T.h7,[e(c.Z,{staticClass:"ml-auto mr-10 mb-2 mt-n4",attrs:{id:"registration-button"},on:{click:function(e){return t.postUser()}}},[t._v(" Sign Up ")]),e(c.Z,{staticClass:"mr-auto ml-10 mb-2 mt-n4",attrs:{id:"login-button"},on:{click:function(e){return t.goToLogin()}}},[t._v(" Login ")])],1),e(kt.Z,{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{tpye:"error",dismissible:""}},[t._v("Test")])],1)],1)],1)],1)},Ut=[],Lt=n.ZP.extend({name:"RegistrationComponent",components:{},data:()=>({page:"test1",registerUsername:"",registerPassword:"",registerEmail:"",show:!1,rules:{requiredEmail:t=>!!t||"Valid Email Required.",requiredUserName:t=>!!t||"Valid Username Required.",requiredPassWord:t=>!!t||"Valid Password Required.",email:t=>{const e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"Invalid e-mail."}}}),methods:{goToLogin(){this.$router.replace({path:"/login"})},postUser:async function(){this.show=!1;let t={username:this.registerEmail,password:this.registerPassword,name:this.registerUsername},e=await fetch(y+"/users",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"});201==e.status?(this.registerEmail="",this.registerPassword="",this.registerUsername="",this.$router.replace({path:"/login"})):(this.registerPassword="",this.registerEmail="",this.registerUsername="",this.show=!0)}}}),$t=Lt,qt=(0,k.Z)($t,Nt,Ut,!1,null,null,null),Wt=qt.exports,Ft={name:"RegistrationView",components:{RegistrationComponent:Wt}},Gt=Ft,zt=(0,k.Z)(Gt,Ot,At,!1,null,null,null),Ht=zt.exports,Jt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact"},[e("ContactComponent")],1)},Mt=[],Vt=a(2648),Qt=a(7069),Yt=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(s.Z,[e("video",{attrs:{src:"https://static.videezy.com/system/resources/previews/000/012/663/original/Nature_54_-_30s_-_4k_res.mp4",autoplay:"",loop:"",playsinline:"",muted:""},domProps:{muted:!0}}),e(P.Z,{staticClass:"mx-auto mb-9 mt-4 rounded-xl white--text",staticStyle:{width:"50vw"},attrs:{elevation:"24",img:"https://media.istockphoto.com/vectors/abstract-geometric-background-mosaic-with-triangle-patterns-brown-vector-id1223873773?k=20&m=1223873773&s=612x612&w=0&h=JWs86Y6dHrbLQGhl1Grp9j18bWiCPHclWEZDOKR4EW4="}},[e(T.EB,{staticClass:"flex justify-center text-h4"},[t._v("Contact Us")]),e(T.Qq,{staticClass:"white--text subtitle-1"},[t._v("Here at Budget Trello we value your feedback "),e("br"),t._v("We would love to hear back from you to better improve our product."),e("br"),t._v("Feel free to contact us! ")]),e(V.Z,{directives:[{def:Qt.Z,name:"ripple",rawName:"v-ripple"}],staticClass:"px-7 my-5 mx-auto mr-5 white--text",staticStyle:{width:"40%",display:"inline-block",border:"2px solid black","border-radius":"100px 20px"},attrs:{id:"first-name",dense:"",label:"First Name",hint:"First Name",color:"black","full-width":""},model:{value:t.contactFirstName,callback:function(e){t.contactFirstName=e},expression:"contactFirstName"}}),e(V.Z,{directives:[{def:Qt.Z,name:"ripple",rawName:"v-ripple"}],staticClass:"px-7 mx-auto ml-5 white--text",staticStyle:{width:"40%",display:"inline-block",border:"2px solid black","border-radius":"20px 100px"},attrs:{id:"last-name",label:"Last Name",hint:"Last Name",dense:"","full-width":"",color:"black"},model:{value:t.contactLastName,callback:function(e){t.contactLastName=e},expression:"contactLastName"}}),e(V.Z,{directives:[{def:Qt.Z,name:"ripple",rawName:"v-ripple"}],staticClass:"px-9 mb-5 mx-auto white--text",staticStyle:{border:"2px solid black","border-radius":"100px",width:"60%"},attrs:{id:"email-text",dense:"",label:"Email","full-width":"",hint:"Email",color:"black"},model:{value:t.contactEmail,callback:function(e){t.contactEmail=e},expression:"contactEmail"}}),e(Vt.Z,{staticClass:"px-7 mx-auto white--text",staticStyle:{width:"60%",border:"2px solid black"},attrs:{id:"text-area",dense:"",clearable:"",color:"black","full-width":"",label:"What can we help you with?"},model:{value:t.contactBody,callback:function(e){t.contactBody=e},expression:"contactBody"}}),e(T.h7,{staticClass:"mb-4",staticStyle:{display:"inline-block"}},[e(c.Z,{directives:[{def:Qt.Z,name:"ripple",rawName:"v-ripple"}],staticStyle:{"background-color":"black",color:"white"},attrs:{id:"contact-button"},on:{click:function(e){return t.postContact()}}},[t._v("Contact Us!")])],1)],1),e(kt.Z,{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mx-auto",staticStyle:{"border-radius":"25px",border:"2px solid black"},attrs:{width:"50vw",type:"success",dense:"",transition:"scale-transition",dismissible:""}},[t._v("Thanks for contacting us!")])],1)},Kt=[],Xt=n.ZP.extend({name:"ContactComponent",props:{},data:()=>({contactFirstName:"",contactLastName:"",contactEmail:"",contactBody:"",show:!1}),methods:{postContact:async function(){this.show=!1;let t={first:this.contactFirstName,last:this.contactLastName,email:this.contactEmail,description:this.contactBody},e=await fetch(y+"/contact",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"});201==e.status?(console.log("contact was a sucess!"),this.contactFirstName="",this.contactLastName="",this.contactEmail="",this.contactBody="",this.show=!0):console.log("Error",e.status,e)}}}),te=Xt,ee=(0,k.Z)(te,Yt,Kt,!1,null,null,null),ae=ee.exports,ne={name:"ContactView",components:{ContactComponent:ae}},se=ne,oe=(0,k.Z)(se,Jt,Mt,!1,null,null,null),ie=oe.exports,re=function(){var t=this,e=t._self._c;return e("div",{staticClass:"Settings"},[e("SettingsComponent")],1)},ce=[],le=function(){var t=this,e=t._self._c;return e(s.Z,{staticStyle:{"background-image":"url('https://t3.ftcdn.net/jpg/02/65/41/32/360_F_265413209_odsMQCc5XqnZPtm8mseWbomCEQSN945n.jpg')","background-repeat":"no-repeat","background-size":"cover","background-attachment":"fixed"}},[e(R.Z,{staticClass:"mx-auto mt-8 rounded-lg font-weight-bold",staticStyle:{width:"50%"},attrs:{color:"black"}},[e(P.Z,{staticClass:"pa-8",staticStyle:{"background-image":"url('https://static.vecteezy.com/ti/vecteur-libre/p2/2422203-resume-nature-montagne-vue-bleu-et-vert-fond-degrade-gratuit-vectoriel.jpg')","background-size":"cover"}},[e(T.EB,{staticClass:"flex justify-center mt-2 font-weight-bold"},[t._v(" Update User Profile ")]),e(V.Z,{directives:[{def:Qt.Z,name:"ripple",rawName:"v-ripple"}],attrs:{label:"Username",hint:"Username",color:"black",dense:""},model:{value:t.updatedUsername,callback:function(e){t.updatedUsername=e},expression:"updatedUsername"}}),e(V.Z,{directives:[{def:Qt.Z,name:"ripple",rawName:"v-ripple"}],attrs:{label:"Password",hint:"Password",type:"password",color:"black",dense:""},model:{value:t.updatedPassword,callback:function(e){t.updatedPassword=e},expression:"updatedPassword"}}),e(V.Z,{directives:[{def:Qt.Z,name:"ripple",rawName:"v-ripple"}],attrs:{label:"Email",hint:"Email",color:"black",dense:""},model:{value:t.updatedEmail,callback:function(e){t.updatedEmail=e},expression:"updatedEmail"}}),e(c.Z,{staticClass:"ma-4",attrs:{large:""},on:{click:function(e){return t.updateSettings()}}},[t._v(" Update settings ")]),e(c.Z,{attrs:{large:""},on:{click:function(e){return t.logOut()}}},[t._v(" Sign Out ")])],1)],1)],1)},de=[],ue={name:"SettingsComponent",props:{},data:()=>({updatedUsername:"",updatedPassword:"",updatedEmail:""}),methods:{updateSettings:async function(){let t={username:this.updatedEmail,name:this.updatedUsername,password:this.updatedPassword},e=await fetch(y+"/users",{method:"PATCH",body:JSON.stringify(t),headers:{"Content-Type":"application/json"},credentials:"include"});200==e.status?(console.log("updating was a sucess!"),this.updatedEmail="",this.updatedUsername="",this.updatedPassword=""):console.log("Error",e.status,e),console.log(await e.json())},logOut:async function(){let t=await fetch(y+"/session",{method:"DELETE",credentials:"include"});204!=t.status||(window.location.href="/login")}}},he=ue,me=(0,k.Z)(he,le,de,!1,null,null,null),pe=me.exports,fe={name:"SettingsView",components:{SettingsComponent:pe}},ge=fe,be=(0,k.Z)(ge,re,ce,!1,null,null,null),we=be.exports;n.ZP.use(E.Z);const ve=[{name:"about",path:"/about",component:J},{name:"Login",path:"/login",component:Rt},{name:"Registration",path:"/registration",component:Ht},{name:"Budget Trello Board",path:"/board",component:yt},{name:"Contact us",path:"/contact",component:ie},{name:"Settings",path:"/settings",component:we}],ye=new E.Z({mode:"history",base:"/",routes:ve});var Ce=ye;n.ZP.config.productionTip=!1,new n.ZP({vuetify:I,router:Ce,render:t=>t(Z)}).$mount("#app")}},e={};function a(n){var s=e[n];if(void 0!==s)return s.exports;var o=e[n]={exports:{}};return t[n](o,o.exports,a),o.exports}a.m=t,function(){var t=[];a.O=function(e,n,s,o){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],o=t[d][2];for(var r=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(a.O).every((function(t){return a.O[t](n[c])}))?n.splice(c--,1):(r=!1,o<i&&(i=o));if(r){t.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[n,s,o]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,o,i=n[0],r=n[1],c=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(s in r)a.o(r,s)&&(a.m[s]=r[s]);if(c)var d=c(a)}for(e&&e(n);l<i.length;l++)o=i[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(d)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(6226)}));n=a.O(n)})();
//# sourceMappingURL=app.5526d4ae.js.map