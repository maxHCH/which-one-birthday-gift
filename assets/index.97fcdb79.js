import{o,c as l,F as d,r as f,n as g,a as v,b as D,t as _,d as $,e as k,f as r,w as x,g as y,h as L,i as b,p as S,j as R,k as P}from"./vendor.f57190ec.js";const w=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(t){if(t.ep)return;t.ep=!0;const i=n(t);fetch(t.href,i)}};w();var p=(s,e)=>{for(const[n,u]of e)s[n]=u;return s};const M={name:"Gift",props:{trigger:{type:Date,default:!1},config:{type:Object,required:!0}},data(){return{isRunning:!1,currentDeg:0,targetDeg:0,giftsDeg:[]}},computed:{displayType(){return this.config.run3D?"three-dimension":"flat"},rotate(){return 360/this.config.gifts.length},translateZ(){return this.config.height/2/Math.tan(this.rotate/2/180*Math.PI)}},watch:{config:{handler(){this.setConfig()},deep:!0},trigger(){this.autoTurn()},isRunning(){this.isRunning&&setTimeout(()=>{this.autoTurnStop()},this.config.duration+200)}},mounted(){this.setConfig(),this.logGiftsDeg()},destroyed(){},methods:{logGiftsDeg(){this.config.gifts.forEach((s,e)=>{this.giftsDeg[e]={from:e===0?0:this.giftsDeg[e-1].to,to:e===0?this.rotate:this.giftsDeg[e-1].to+this.rotate,name:s.name}})},setConfig(){this.$el.style.setProperty("--rotateY",`${this.config.rotateY}deg`),this.$el.style.setProperty("--duration",`${this.config.duration}ms`),this.$el.style.setProperty("--fontSize",`${this.config.fontSize}px`),this.$el.style.setProperty("--height",`${this.config.height}px`),this.$el.style.setProperty("--width",`${this.config.width}px`),this.$el.style.setProperty("--currentDeg",`-${this.currentDeg}deg`)},autoTurn(){let s=Math.random()*360+360*10;s-=s%this.rotate,this.targetDeg=3636;const e=this.config.rollback?Math.random()*this.config.rollback+1:1;this.$el.style.setProperty("--targetDeg",`-${this.targetDeg}deg`),this.$el.style.setProperty("--rollBackDeg",`${e}`),this.isRunning=!0},autoTurnStop(){this.currentDeg=this.targetDeg%360,this.$el.style.setProperty("--currentDeg",`-${this.currentDeg}deg`);let s=null;const e=this.currentDeg+this.rotate/2;this.giftsDeg.forEach(n=>{e>=n.from&&e<=n.to&&(s=n.name)}),this.isRunning=!1,this.$emit("finished",s)}}};function T(s,e,n,u,t,i){return o(),l("div",{class:g(["gift-container",i.displayType,{autoTurn:t.isRunning}])},[(o(!0),l(d,null,f(n.config.gifts,(c,a)=>(o(),l("div",{class:g(["gift",n.config.style]),key:a,style:v(`transform: rotateX(${i.rotate*a}deg) translateZ(${i.translateZ}px)`)},[c.type==="text"?(o(),l(d,{key:0},[D(_(c.name),1)],64)):$("",!0)],6))),128))],2)}var C=p(M,[["render",T]]);const N={name:"SlotMachine",components:{Gift:C},data(){return{run3D:!1,trigger:null,active:!1,disabled:!1,configs:[{style:"gift-style",gifts:[{type:"text",name:"Aesop \u99A5\u9999\u6C34"},{type:"text",name:"iPhone 13 pro"},{type:"text",name:"\u8C61\u7259\u5BAE"},{type:"text",name:"apple watch"},{type:"text",name:"New Balance"},{type:"text",name:"Celine \u5305\u5305"},{type:"text",name:"MUJI \u65C5\u884C\u7BB1"},{type:"text",name:"\u7C73\u8336\u53E3\u6C34\u5DFE"},{type:"text",name:"\u5C0F\u80D6\u9AD2\u9AD2\u5305"},{type:"text",name:"\u7A7F\u4E0D\u7834\u7684\u896A\u5B50"}],duration:3e4,fontSize:30,height:100,width:200}],openResultList:!1,resultList:[],result:[]}},methods:{turn(){this.active=!0,setTimeout(()=>{this.active=!1},500),this.disabled=!0,this.trigger=new Date},isFinished(s){const e=this.$el.querySelectorAll(".autoTurn");this.result.push(s),e.length===1&&(this.disabled=!1,this.resultList.push(this.result),this.result=[])}}},G={id:"SlotMachine"},B=r("div",{class:"badge"},[r("span",null,"SUMMER")],-1),E={class:"body"},F={class:"window"},I={class:"container"},O=r("div",{class:"stick2"},null,-1),z=r("div",{class:"stick"},null,-1),A={class:"resultList-container"};function V(s,e,n,u,t,i){const c=k("Gift");return o(),l("div",G,[B,r("div",E,[r("div",F,[r("div",I,[(o(!0),l(d,null,f(t.configs,(a,h)=>(o(),y(c,{onFinished:i.isFinished,trigger:t.trigger,config:a,key:h},null,8,["onFinished","trigger","config"]))),128))])]),r("div",{class:g(["handler",{active:t.active},{disabled:t.disabled}])},[O,z,r("div",{class:"ball",onClick:e[0]||(e[0]=a=>!t.disabled&&i.turn())})],2)]),r("div",{class:"history",onClick:e[1]||(e[1]=a=>t.openResultList=!0)}," OPEN RESULT "),r("div",{onClick:e[2]||(e[2]=x(a=>t.openResultList=!1,["self"])),class:g(["resultList",{openResultList:t.openResultList}])},[r("div",A,[(o(!0),l(d,null,f(t.resultList,(a,h)=>(o(),l("div",{class:"result",key:h},_(`Round${h+1}: ${a}`),1))),128))])],2)])}var j=p(N,[["render",V]]);const m=s=>(S("data-v-32e65df6"),s=s(),R(),s),q={class:"title"},U=m(()=>r("h1",null,"\u306A\u3064\u3061\u3083\u3093 !",-1)),Z=m(()=>r("h1",null,"\u304A\u8A95\u751F\u65E5\u304A\u3081\u3067\u3068\u3046",-1)),Y={setup(s){return L(0),(e,n)=>(o(),l("section",q,[U,Z,b(j)]))}};var J=p(Y,[["__scopeId","data-v-32e65df6"]]);const K={setup(s){return(e,n)=>(o(),y(J))}};P(K).mount("#app");