(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function w(){}function ue(t){return t()}function oe(){return Object.create(null)}function j(t){t.forEach(ue)}function D(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let I;function M(t,e){return I||(I=document.createElement("a")),I.href=e,t===I.href}function de(t){return Object.keys(t).length===0}function pe(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function he(t,e,n){t.$$.on_destroy.push(pe(e,n))}function f(t,e){t.appendChild(e)}function U(t,e,n){t.insertBefore(e,n||null)}function F(t){t.parentNode.removeChild(t)}function y(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function $(){return W(" ")}function L(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _e(t){return Array.from(t.childNodes)}function ge(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function J(t,e){t.value=e==null?"":e}let z;function B(t){z=t}function me(){if(!z)throw new Error("Function called outside component initialization");return z}function ye(t){me().$$.on_mount.push(t)}const P=[],se=[],K=[],ie=[],ve=Promise.resolve();let X=!1;function $e(){X||(X=!0,ve.then(fe))}function Y(t){K.push(t)}const V=new Set;let x=0;function fe(){const t=z;do{for(;x<P.length;){const e=P[x];x++,B(e),be(e.$$)}for(B(null),P.length=0,x=0;se.length;)se.pop()();for(let e=0;e<K.length;e+=1){const n=K[e];V.has(n)||(V.add(n),n())}K.length=0}while(P.length);for(;ie.length;)ie.pop()();X=!1,V.clear(),B(t)}function be(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Y)}}const G=new Set;let we;function Q(t,e){t&&t.i&&(G.delete(t),t.i(e))}function re(t,e,n,o){if(t&&t.o){if(G.has(t))return;G.add(t),we.c.push(()=>{G.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}else o&&o()}function Te(t,e){t.d(1),e.delete(t.key)}function ke(t,e,n,o,s,a,l,c,r,i,u,p){let g=t.length,_=a.length,d=g;const E={};for(;d--;)E[t[d].key]=d;const C=[],b=new Map,q=new Map;for(d=_;d--;){const h=p(s,a,d),v=n(h);let T=l.get(v);T?o&&T.p(h,e):(T=i(v,h),T.c()),b.set(v,C[d]=T),v in E&&q.set(v,Math.abs(d-E[v]))}const N=new Set,A=new Set;function O(h){Q(h,1),h.m(c,u),l.set(h.key,h),u=h.first,_--}for(;g&&_;){const h=C[_-1],v=t[g-1],T=h.key,H=v.key;h===v?(u=h.first,g--,_--):b.has(H)?!l.has(T)||N.has(T)?O(h):A.has(H)?g--:q.get(T)>q.get(H)?(A.add(T),O(h)):(N.add(H),g--):(r(v,l),g--)}for(;g--;){const h=t[g];b.has(h.key)||r(h,l)}for(;_;)O(C[_-1]);return C}function le(t){t&&t.c()}function Z(t,e,n,o){const{fragment:s,on_mount:a,on_destroy:l,after_update:c}=t.$$;s&&s.m(e,n),o||Y(()=>{const r=a.map(ue).filter(D);l?l.push(...r):j(r),t.$$.on_mount=[]}),c.forEach(Y)}function ee(t,e){const n=t.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(t,e){t.$$.dirty[0]===-1&&(P.push(t),$e(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,o,s,a,l,c=[-1]){const r=z;B(t);const i=t.$$={fragment:null,ctx:null,props:a,update:w,not_equal:s,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:oe(),dirty:c,skip_bound:!1,root:e.target||r.$$.root};l&&l(i.root);let u=!1;if(i.ctx=n?n(t,e.props||{},(p,g,..._)=>{const d=_.length?_[0]:g;return i.ctx&&s(i.ctx[p],i.ctx[p]=d)&&(!i.skip_bound&&i.bound[p]&&i.bound[p](d),u&&Ee(t,p)),g}):[],i.update(),u=!0,j(i.before_update),i.fragment=o?o(i.ctx):!1,e.target){if(e.hydrate){const p=_e(e.target);i.fragment&&i.fragment.l(p),p.forEach(F)}else i.fragment&&i.fragment.c();e.intro&&Q(t.$$.fragment),Z(t,e.target,e.anchor,e.customElement),fe()}B(r)}class ne{$destroy(){ee(this,1),this.$destroy=w}$on(e,n){const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(e){this.$$set&&!de(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const S=[];function Ce(t,e=w){let n;const o=new Set;function s(c){if(R(t,c)&&(t=c,n)){const r=!S.length;for(const i of o)i[1](),S.push(i,t);if(r){for(let i=0;i<S.length;i+=2)S[i][0](S[i+1]);S.length=0}}}function a(c){s(c(t))}function l(c,r=w){const i=[c,r];return o.add(i),o.size===1&&(n=e(s)||w),c(t),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:s,update:a,subscribe:l}}function Le(){const{subscribe:t,set:e,update:n}=Ce([]);return{subscribe:t,getTodos:async()=>{const o=await fetch("https://filipeorfao.pythonanywhere.com/api/class_list/");e(await o.json())},addTodo:async o=>await(await fetch("https://filipeorfao.pythonanywhere.com/api/func_create_todo/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...o})})).json(),removeTodo:async o=>{await fetch(`https://filipeorfao.pythonanywhere.com/api/class_edit_todo/${o}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})},tickTodo:async o=>{await fetch(`https://filipeorfao.pythonanywhere.com/api/class_edit_todo/${o.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({done:!o.done})})},favoriteTodo:async o=>{await fetch(`https://filipeorfao.pythonanywhere.com/api/class_edit_todo/${o.id}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({favorite:!o.favorite})})}}}const k=Le();function ce(t,e,n){const o=t.slice();return o[4]=e[n],o}function ae(t,e){let n,o,s,a,l,c=e[4].title+"",r,i,u,p,g,_,d,E,C,b,q,N,A,O;return{key:t,first:null,c(){n=y("li"),o=y("img"),a=$(),l=y("span"),r=W(c),i=W(":"),u=$(),p=y("input"),_=$(),d=y("img"),C=$(),b=y("img"),N=$(),m(o,"class","check svelte-eu80rr"),M(o.src,s=e[4].done?"/fefe/todo/check-square.svg":"fefe/todo/square-duotone.svg")||m(o,"src",s),m(o,"alt","check icon"),m(p,"type","text"),p.value=g=e[4].body,m(p,"class","svelte-eu80rr"),m(d,"class","star-icon svelte-eu80rr"),M(d.src,E=e[4].favorite?"/star-solid.svg":"/star.svg")||m(d,"src",E),m(d,"alt",""),m(b,"class","remove-icon svelte-eu80rr"),M(b.src,q="/trash-alt.svg")||m(b,"src",q),m(b,"alt","trash-can"),m(n,"class","item svelte-eu80rr"),this.first=n},m(h,v){U(h,n,v),f(n,o),f(n,a),f(n,l),f(l,r),f(l,i),f(n,u),f(n,p),f(n,_),f(n,d),f(n,C),f(n,b),f(n,N),A||(O=[L(o,"click",function(){D(e[1](e[4]))&&e[1](e[4]).apply(this,arguments)}),L(d,"click",function(){D(e[2](e[4]))&&e[2](e[4]).apply(this,arguments)}),L(b,"click",function(){D(e[3](e[4].id))&&e[3](e[4].id).apply(this,arguments)})],A=!0)},p(h,v){e=h,v&1&&!M(o.src,s=e[4].done?"/check-square.svg":"/square-duotone.svg")&&m(o,"src",s),v&1&&c!==(c=e[4].title+"")&&ge(r,c),v&1&&g!==(g=e[4].body)&&p.value!==g&&(p.value=g),v&1&&!M(d.src,E=e[4].favorite?"/star-solid.svg":"/star.svg")&&m(d,"src",E)},d(h){h&&F(n),A=!1,j(O)}}}function qe(t){let e,n,o,s=[],a=new Map,l=t[0];const c=r=>r[4].id;for(let r=0;r<l.length;r+=1){let i=ce(t,l,r),u=c(i);a.set(u,s[r]=ae(u,i))}return{c(){e=y("ul"),n=y("li"),n.innerHTML=`<img class="check svelte-eu80rr" src="/square-duotone.svg" alt=""/> 
    <span>Title</span>  <span>Body</span>`,o=$();for(let r=0;r<s.length;r+=1)s[r].c();m(n,"class","item svelte-eu80rr"),m(e,"class","list svelte-eu80rr")},m(r,i){U(r,e,i),f(e,n),f(e,o);for(let u=0;u<s.length;u+=1)s[u].m(e,null)},p(r,[i]){i&15&&(l=r[0],s=ke(s,i,c,1,r,l,a,e,Te,ae,null,ce))},i:w,o:w,d(r){r&&F(e);for(let i=0;i<s.length;i+=1)s[i].d()}}}function Ae(t,e,n){let o;he(t,k,c=>n(0,o=c)),ye(()=>{k.getTodos()});const s=async c=>{await k.tickTodo(c),await k.getTodos()},a=async c=>{await k.favoriteTodo(c),await k.getTodos()};async function l(c){await k.removeTodo(c),await k.getTodos()}return[o,s,a,l]}class Oe extends ne{constructor(e){super(),te(this,e,Ae,qe,R,{})}}function Se(t){let e,n,o,s,a,l,c,r,i,u,p,g;return{c(){e=y("div"),n=y("p"),n.textContent="Title:",o=$(),s=y("input"),a=$(),l=y("p"),l.textContent="Body:",c=$(),r=y("input"),i=$(),u=y("button"),u.textContent="Add",m(s,"type","text"),m(r,"type","text"),m(e,"class","inputs svelte-19tuxlq")},m(_,d){U(_,e,d),f(e,n),f(e,o),f(e,s),J(s,t[0].title),f(e,a),f(e,l),f(e,c),f(e,r),J(r,t[0].body),f(e,i),f(e,u),p||(g=[L(s,"input",t[2]),L(r,"input",t[3]),L(u,"click",t[1]),L(e,"keydown",t[1])],p=!0)},p(_,[d]){d&1&&s.value!==_[0].title&&J(s,_[0].title),d&1&&r.value!==_[0].body&&J(r,_[0].body)},i:w,o:w,d(_){_&&F(e),p=!1,j(g)}}}function je(t,e,n){let o={title:"",body:""};async function s(c){c.key==="Enter"&&o.body&&o.title&&(await k.addTodo(o),n(0,o={title:"",body:""}),k.getTodos())}function a(){o.title=this.value,n(0,o)}function l(){o.body=this.value,n(0,o)}return[o,s,a,l]}class Ne extends ne{constructor(e){super(),te(this,e,je,Se,R,{})}}function Me(t){let e,n,o,s,a,l,c,r,i;return l=new Ne({}),r=new Oe({}),{c(){e=y("body"),n=y("main"),o=y("div"),s=y("h1"),s.textContent="Todo list",a=$(),le(l.$$.fragment),c=$(),le(r.$$.fragment),m(o,"class","all svelte-19skhlp"),m(e,"class","svelte-19skhlp")},m(u,p){U(u,e,p),f(e,n),f(n,o),f(o,s),f(o,a),Z(l,o,null),f(o,c),Z(r,o,null),i=!0},p:w,i(u){i||(Q(l.$$.fragment,u),Q(r.$$.fragment,u),i=!0)},o(u){re(l.$$.fragment,u),re(r.$$.fragment,u),i=!1},d(u){u&&F(e),ee(l),ee(r)}}}function Pe(t,e,n){return[!0]}class Be extends ne{constructor(e){super(),te(this,e,Pe,Me,R,{prerender:0})}get prerender(){return this.$$.ctx[0]}}new Be({target:document.getElementById("app")});
