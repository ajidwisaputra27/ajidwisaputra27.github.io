(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(9882)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;r(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(2648).Z,o=r(7273).Z,c=a(r(7294)),s=r(6273),l=r(2725),i=r(3462),u=r(1018),d=r(7190),f=r(1210),m=r(8684),h="undefined"!==typeof c.default.useTransition,p={};function v(e,t,r,n){if(e&&s.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;p[t+"%"+r+(a?"%"+a:"")]=!0}}var g=c.default.forwardRef((function(e,t){var r,a=e.href,g=e.as,x=e.children,y=e.prefetch,w=e.passHref,b=e.replace,j=e.soft,k=e.shallow,_=e.scroll,C=e.locale,M=e.onClick,z=e.onMouseEnter,E=e.onTouchStart,N=e.legacyBehavior,L=void 0===N?!0!==Boolean(!1):N,O=o(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=x,!L||"string"!==typeof r&&"number"!==typeof r||(r=c.default.createElement("a",null,r));var S=!1!==y,T=n(h?c.default.useTransition():[],2)[1],$=c.default.useContext(i.RouterContext),P=c.default.useContext(u.AppRouterContext);P&&($=P);var R,H=c.default.useMemo((function(){var e=n(s.resolveHref($,a,!0),2),t=e[0],r=e[1];return{href:t,as:g?s.resolveHref($,g):r||t}}),[$,a,g]),A=H.href,B=H.as,V=c.default.useRef(A),I=c.default.useRef(B);L&&(R=c.default.Children.only(r));var D=L?R&&"object"===typeof R&&R.ref:t,K=n(d.useIntersection({rootMargin:"200px"}),3),U=K[0],Z=K[1],F=K[2],J=c.default.useCallback((function(e){I.current===B&&V.current===A||(F(),I.current=B,V.current=A),U(e),D&&("function"===typeof D?D(e):"object"===typeof D&&(D.current=e))}),[B,D,A,F,U]);c.default.useEffect((function(){var e=Z&&S&&s.isLocalURL(A),t="undefined"!==typeof C?C:$&&$.locale,r=p[A+"%"+B+(t?"%"+t:"")];e&&!r&&v($,A,B,{locale:t})}),[B,A,Z,C,S,$]);var G={ref:J,onClick:function(e){L||"function"!==typeof M||M(e),L&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,l,i,u){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r)){e.preventDefault();var d=function(){"softPush"in t&&"softReplace"in t?t[o?a?"softReplace":"softPush":a?"replace":"push"](r):t[a?"replace":"push"](r,n,{shallow:c,locale:i,scroll:l})};u?u(d):d()}}(e,$,A,B,b,j,k,_,C,P?T:void 0)},onMouseEnter:function(e){L||"function"!==typeof z||z(e),L&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),s.isLocalURL(A)&&v($,A,B,{priority:!0})},onTouchStart:function(e){L||"function"!==typeof E||E(e),L&&R.props&&"function"===typeof R.props.onTouchStart&&R.props.onTouchStart(e),s.isLocalURL(A)&&v($,A,B,{priority:!0})}};if(!L||w||"a"===R.type&&!("href"in R.props)){var X="undefined"!==typeof C?C:$&&$.locale,q=$&&$.isLocaleDomain&&f.getDomainLocale(B,X,$.locales,$.domainLocales);G.href=q||m.addBasePath(l.addLocale(B,X,$&&$.defaultLocale))}return L?c.default.cloneElement(R,G):c.default.createElement("a",Object.assign({},O,G),r)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,i=e.disabled||!c,u=a.useRef(),d=n(a.useState(!1),2),f=d[0],m=d[1],h=n(a.useState(null),2),p=h[0],v=h[1];a.useEffect((function(){if(c){if(u.current&&(u.current(),u.current=void 0),i||f)return;return p&&p.tagName&&(u.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===r.root&&e.margin===r.margin}));if(n&&(t=s.get(n)))return t;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=a.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return t={id:r,observer:o,elements:a},l.push(r),s.set(r,t),t}(r),a=n.id,o=n.observer,c=n.elements;return c.set(e,t),o.observe(e),function(){if(c.delete(e),o.unobserve(e),0===c.size){o.disconnect(),s.delete(a);var t=l.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));t>-1&&l.splice(t,1)}}}(p,(function(e){return e&&m(e)}),{root:null==t?void 0:t.current,rootMargin:r})),function(){null==u.current||u.current(),u.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return m(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[p,i,r,t,f]);var g=a.useCallback((function(){m(!1)}),[]);return[v,f,g]};var a=r(7294),o=r(9311),c="function"===typeof IntersectionObserver;var s=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var n=(0,r(2648).Z)(r(7294)),a=n.default.createContext(null);t.AppRouterContext=a;var o=n.default.createContext(null);t.LayoutRouterContext=o;var c=n.default.createContext(null);t.GlobalLayoutRouterContext=c},9882:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return R}});var n=r(1799),a=r(5893),o=(r(472),r(7294)),c=r(1163),s=r(1664),l=r.n(s),i=function(e){var t=e.active,r=e.setActive,n=e.name,o=e.route;return t!==n?(0,a.jsx)(l(),{href:o,children:(0,a.jsx)("span",{className:"mx-2 cursor-pointer hover:border-b-4 hover:text-gray-400",onClick:function(){return r(n)},children:n})}):null},u=function(){var e=(0,c.useRouter)().pathname,t=(0,o.useState)(""),r=t[0],n=t[1];return(0,o.useEffect)((function(){"/"===e?n("About"):"/projects"===e?n("Projects"):"/skills"===e?n("Skills"):"/experience"===e?n("Experience"):"/education"===e&&n("Education")}),[]),(0,a.jsxs)("div",{className:"flex items-center justify-between px-5 py-3 my-3",children:[(0,a.jsx)("span",{className:"text-xl font-bold border-b-4 md:text-2xl border-gray-400",children:r}),(0,a.jsxs)("div",{className:"text-base font-normal md:text-xl",children:[(0,a.jsx)(i,{active:r,setActive:n,name:"About",route:"/"}),(0,a.jsx)(i,{active:r,setActive:n,name:"Experience",route:"/experience"}),(0,a.jsx)(i,{active:r,setActive:n,name:"Education",route:"/education"}),(0,a.jsx)(i,{active:r,setActive:n,name:"Skills",route:"/skills"}),(0,a.jsx)(i,{active:r,setActive:n,name:"Projects",route:"/projects"})]})]})},d=r(8357);function f(e){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z"}}]})(e)}function m(e){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"}}]})(e)}function h(e){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M910.5 553.2l-109-370.8c-6.8-20.4-23.1-34.1-44.9-34.1s-39.5 12.3-46.3 32.7l-72.2 215.4H386.2L314 181.1c-6.8-20.4-24.5-32.7-46.3-32.7s-39.5 13.6-44.9 34.1L113.9 553.2c-4.1 13.6 1.4 28.6 12.3 36.8l385.4 289 386.7-289c10.8-8.1 16.3-23.1 12.2-36.8z"}}]})(e)}function p(e){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"}}]})(e)}function v(e){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zM349.3 793.7H230.6V411.9h118.7v381.8zm-59.3-434a68.8 68.8 0 1 1 68.8-68.8c-.1 38-30.9 68.8-68.8 68.8zm503.7 434H675.1V608c0-44.3-.8-101.2-61.7-101.2-61.7 0-71.2 48.2-71.2 98v188.9H423.7V411.9h113.8v52.2h1.6c15.8-30 54.5-61.7 112.3-61.7 120.2 0 142.3 79.1 142.3 181.9v209.4z"}}]})(e)}function g(e){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M225.124 33.908c-1 0-3.118.68-5.855 3.05-2.74 2.373-5.792 6.186-8.43 10.58-5.273 8.79-8.716 20.37-8.716 25.37s3.68 21.406 9.272 34.455c2.796 6.525 6.08 12.466 9.042 16.22 2.964 3.753 5.186 4.325 4.686 4.325h64c-.5 0 1.722-.572 4.686-4.326 2.963-3.753 6.246-9.694 9.043-16.22 5.592-13.048 9.27-29.454 9.27-34.454s-3.442-16.58-8.716-25.37c-2.637-4.394-5.69-8.207-8.428-10.58-2.738-2.37-4.856-3.05-5.856-3.05h-64zm7.22 112l-8.452 38.03 62.966-15.74-4.953-22.29h-49.562zm58.42 39.867l-71.238 17.81-10.693 48.12 91.5-22.875-9.568-43.055zm13.473 60.63l-99.77 24.945-10.693 48.12 120.032-30.01-9.57-43.054zm13.475 60.632L189.41 339.113l-10.694 48.12 148.564-37.14-9.568-43.056zm13.473 60.633L174.35 406.88l-3.103 13.96 35.193 23.463 134.313-33.578-9.568-43.055zm-7.084 65.77l-97.42 24.355 30.444 20.297 66.977-44.65z"}}]})(e)}function x(e){return(0,d.w_)({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}}]})(e)}const y=["light","dark"],w="(prefers-color-scheme: dark)",b="undefined"==typeof window,j=(0,o.createContext)(void 0),k={setTheme:e=>{},themes:[]},_=e=>(0,o.useContext)(j)?o.createElement(o.Fragment,null,e.children):o.createElement(M,e),C=["light","dark"],M=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:n=!0,storageKey:a="theme",themes:c=C,defaultTheme:s=(r?"system":"light"),attribute:l="data-theme",value:i,children:u,nonce:d})=>{const[f,m]=(0,o.useState)((()=>E(a,s))),[h,p]=(0,o.useState)((()=>E(a))),v=i?Object.values(i):c,g=(0,o.useCallback)((e=>{let a=e;if(!a)return;"system"===e&&r&&(a=L());const o=i?i[a]:a,c=t?N():null,u=document.documentElement;if("class"===l?(u.classList.remove(...v),o&&u.classList.add(o)):o?u.setAttribute(l,o):u.removeAttribute(l),n){const e=y.includes(s)?s:null,t=y.includes(a)?a:e;u.style.colorScheme=t}null==c||c()}),[]),x=(0,o.useCallback)((e=>{m(e);try{localStorage.setItem(a,e)}catch(e){}}),[e]),b=(0,o.useCallback)((t=>{const n=L(t);p(n),"system"===f&&r&&!e&&g("system")}),[f,e]);(0,o.useEffect)((()=>{const e=window.matchMedia(w);return e.addListener(b),b(e),()=>e.removeListener(b)}),[b]),(0,o.useEffect)((()=>{const e=e=>{e.key===a&&x(e.newValue||s)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[x]),(0,o.useEffect)((()=>{g(null!=e?e:f)}),[e,f]);const k=(0,o.useMemo)((()=>({theme:f,setTheme:x,forcedTheme:e,resolvedTheme:"system"===f?h:f,themes:r?[...c,"system"]:c,systemTheme:r?h:void 0})),[f,x,e,h,r,c]);return o.createElement(j.Provider,{value:k},o.createElement(z,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:n,storageKey:a,themes:c,defaultTheme:s,attribute:l,value:i,children:u,attrs:v,nonce:d}),u)},z=(0,o.memo)((({forcedTheme:e,storageKey:t,attribute:r,enableSystem:n,enableColorScheme:a,defaultTheme:c,value:s,attrs:l,nonce:i})=>{const u="system"===c,d="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${l.map((e=>`'${e}'`)).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=a?y.includes(c)&&c?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${c}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",m=(e,t=!1,n=!0)=>{const o=s?s[e]:e,c=t?e+"|| ''":`'${o}'`;let l="";return a&&n&&!t&&y.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===r?l+=t||o?`c.add(${c})`:"null":o&&(l+=`d[s](n,${c})`),l},h=e?`!function(){${d}${m(e)}}()`:n?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${w}',m=window.matchMedia(t);if(m.media!==t||m.matches){${m("dark")}}else{${m("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${m(s?"x[e]":"e",!0)}}${u?"":"else{"+m(c,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${m(s?"x[e]":"e",!0)}}else{${m(c,!1,!1)};}${f}}catch(t){}}();`;return o.createElement("script",{nonce:i,dangerouslySetInnerHTML:{__html:h}})}),(()=>!0)),E=(e,t)=>{if(b)return;let r;try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t},N=()=>{const e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(e)}),1)}},L=e=>(e||(e=window.matchMedia(w)),e.matches?"dark":"light");var O=r(9583),S=r(5434),T=function(){var e=(()=>{var e;return null!==(e=(0,o.useContext)(j))&&void 0!==e?e:k})(),t=e.theme,r=e.setTheme;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/images/aji_nobg.png",alt:"avatar",className:" mx-auto rounded-full ",height:196,width:148}),(0,a.jsx)("h3",{className:"my-4 text-3xl font-medium tracking-wider font-kaushan",children:"Aji Dwi Saputra"}),(0,a.jsx)("p",{className:"px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500",children:"Software Engineer"}),(0,a.jsxs)("a",{href:"/assets/cv_ajidwisaputra.pdf",download:"cv_ajidwisaputra.pdf",className:"flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500",children:[(0,a.jsx)(g,{className:"w-6 h-6"}),(0,a.jsx)("span",{children:"Download Resume"})]}),(0,a.jsxs)("div",{className:"flex justify-around w-9/12 mx-auto my-5 text-black dark:text-white md:w-full ",children:[(0,a.jsx)("a",{href:"https://gitlab.com/ajidwisaputra27",children:(0,a.jsx)(h,{className:"w-8 h-8 cursor-pointer"})}),(0,a.jsxs)("a",{href:"https://github.com/ajidwisaputra27",children:[(0,a.jsx)(m,{className:"w-8 h-8 cursor-pointer"})," "]}),(0,a.jsx)("a",{href:"https://www.linkedin.com/in/aji-dwi-saputra-b62318189",children:(0,a.jsx)(v,{className:"w-8 h-8 cursor-pointer"})}),(0,a.jsxs)("a",{href:"https://www.facebook.com/ajidwisaputra27",children:[(0,a.jsx)(f,{className:"w-8 h-8 cursor-pointer"})," "]}),(0,a.jsxs)("a",{href:"https://www.instagram.com/ajidwisaputra27",children:[(0,a.jsx)(p,{className:"w-8 h-8 cursor-pointer"})," "]})]}),(0,a.jsxs)("div",{className:"py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500",style:{marginLeft:"-1rem",marginRight:"-1rem"},children:[(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)(x,{className:"mr-2"})," ",(0,a.jsx)("span",{children:"Jakarta,Indonesia"})]}),(0,a.jsx)("p",{className:"my-2 ",children:" ajidwisaputra067@gmail.com"}),(0,a.jsx)("p",{className:"my-2",children:" +62 89681353660"})]}),(0,a.jsx)("button",{className:"w-8/12 px-5 py-2 text-dark-100 bg-black rounded-full cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400 dark:from-white-500 dark:to-white-700 hover:scale-105 focus:outline-none",onClick:function(){return window.open("mailto:ajidwisaputra067@gmail.com")},children:(0,a.jsxs)("div",{className:"flex items-center justify-center",children:[(0,a.jsx)(S.h6V,{className:"mr-2"})," ",(0,a.jsx)("span",{children:" Email me"})]})}),(0,a.jsx)("button",{onClick:function(){r("light"===t?"dark":"light")},className:"w-8/12 px-5 py-2 my-4 text-dark-100 bg-black rounded-full cursor-pointer bg-gradient-to-r from-gray-200 to-gray-400 dark:from-white-500 dark:to-white-700 focus:outline-none hover:scale-105 ",children:(0,a.jsxs)("div",{className:"flex items-center justify-center",children:["dark"==t?(0,a.jsx)(O.Mei,{className:"mr-2"}):(0,a.jsx)(O.TLr,{className:"mr-2"}),(0,a.jsx)("span",{children:"dark"==t?"Light Mode":"Dark Mode"})]})})]})},$=r(9008),P=r.n($);function R(e){var t=e.Component,r=e.pageProps;return(0,a.jsxs)(_,{attribute:"class",children:[(0,a.jsxs)(P(),{children:[(0,a.jsx)("title",{children:"Aji Dwi Saputra"}),(0,a.jsx)("meta",{charSet:"utf-8"}),(0,a.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})]}),(0,a.jsxs)("div",{className:"grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ",children:[(0,a.jsx)("div",{className:"h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ",children:(0,a.jsx)(T,{})}),(0,a.jsxs)("div",{className:"flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500",children:[(0,a.jsx)(u,{}),(0,a.jsx)(t,(0,n.Z)({},r))]})]})]})}},472:function(){},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)},9583:function(e,t,r){"use strict";r.d(t,{Els:function(){return c},H_w:function(){return a},Mei:function(){return s},TLr:function(){return o}});var n=r(8357);function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4z"}}]})(e)}function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"}}]})(e)}function s(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),l(e.child))}))}function i(e){return function(t){return n.createElement(u,c({attr:c({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,l=e.title,i=s(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,i,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}},5434:function(e,t,r){"use strict";r.d(t,{Dwc:function(){return o},FU5:function(){return c},h6V:function(){return a}});var n=r(8357);function a(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}}]})(e)}function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"}}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(e)}},1799:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}r.d(t,{Z:function(){return a}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6840),t(387)}));var r=e.O();_N_E=r}]);