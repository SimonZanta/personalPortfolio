exports.id=576,exports.ids=[576],exports.modules={5621:(e,t,s)=>{var n={"./contentBox":[2536,9],"./contentBox.js":[2536,9],"./font/mainTitle":[8463,9],"./font/mainTitle.js":[8463,9],"./font/smallestFont":[262,9],"./font/smallestFont.js":[262,9],"./icons/aboutMeSvg":[5455,9,455],"./icons/aboutMeSvg.js":[5455,9,455],"./icons/contactMeSvg":[7052,9,52],"./icons/contactMeSvg.js":[7052,9,52],"./icons/icoAnim.css":[7067,7,67],"./icons/projectSvg":[1374,9,374],"./icons/projectSvg.js":[1374,9,374],"./keyboard.jpg":[8592,9,592],"./mainHeader":[184,9,184],"./mainHeader.js":[184,9,184],"./projectTile":[9565,9],"./projectTile.js":[9565,9],"./skillBlock":[397,9,397],"./skillBlock.js":[397,9,397],"./universal/navBar":[3682,9,682],"./universal/navBar.js":[3682,9,682],"./universal/section":[2565,9,565],"./universal/section.js":[2565,9,565],"app/components/contentBox":[2536,9],"app/components/contentBox.js":[2536,9],"app/components/font/mainTitle":[8463,9],"app/components/font/mainTitle.js":[8463,9],"app/components/font/smallestFont":[262,9],"app/components/font/smallestFont.js":[262,9],"app/components/icons/aboutMeSvg":[5455,9,455],"app/components/icons/aboutMeSvg.js":[5455,9,455],"app/components/icons/contactMeSvg":[7052,9,52],"app/components/icons/contactMeSvg.js":[7052,9,52],"app/components/icons/icoAnim.css":[7067,7,67],"app/components/icons/projectSvg":[1374,9,374],"app/components/icons/projectSvg.js":[1374,9,374],"app/components/keyboard.jpg":[8592,9,592],"app/components/mainHeader":[184,9,184],"app/components/mainHeader.js":[184,9,184],"app/components/projectTile":[9565,9],"app/components/projectTile.js":[9565,9],"app/components/skillBlock":[397,9,397],"app/components/skillBlock.js":[397,9,397],"app/components/universal/navBar":[3682,9,682],"app/components/universal/navBar.js":[3682,9,682],"app/components/universal/section":[2565,9,565],"app/components/universal/section.js":[2565,9,565]};function a(e){if(!s.o(n,e))return Promise.resolve().then(()=>{var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t});var t=n[e],a=t[0];return Promise.all(t.slice(2).map(s.e)).then(()=>s.t(a,16|t[1]))}a.keys=()=>Object.keys(n),a.id=5621,e.exports=a},2638:(e,t,s)=>{Promise.resolve().then(s.bind(s,2536)),Promise.resolve().then(s.bind(s,8463)),Promise.resolve().then(s.bind(s,262)),Promise.resolve().then(s.bind(s,9565)),Promise.resolve().then(s.t.bind(s,8469,23))},2159:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3579,23)),Promise.resolve().then(s.t.bind(s,619,23)),Promise.resolve().then(s.t.bind(s,1459,23)),Promise.resolve().then(s.t.bind(s,3456,23)),Promise.resolve().then(s.t.bind(s,847,23)),Promise.resolve().then(s.t.bind(s,7303,23))},2536:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>l});var n=s(3854),a=s(4218),o=s(262);function l({toLeft:e,textShort:t,textLong:l,imgName:r}){let[i,c]=(0,a.useState)((0,a.lazy)(()=>s.e(455).then(s.bind(s,5455))));(0,a.useEffect)(()=>{let e="./icons/"+r;c((0,a.lazy)(()=>s(5621)(`${e}`)))},[]);let[d,p]=(0,a.useState)(!1);return n.jsx("div",{className:(e?"lg:ml-auto lg:mr-0 lg:hover:translate-x-20 bg-gradient-to-l":"lg:hover:-translate-x-20 bg-gradient-to-r")+" from-secondary lg:from-50% from-10% lg:w-2/3 p-2 rounded-3xl transition duration-200 h-32",onMouseEnter:function(){p(!0)},onMouseLeave:function(){p(!1)},children:(0,n.jsxs)("div",{className:"bg-mainBackground rounded-2xl h-28 w-full flex p-4 items-center "+(e?"ml-auto text-right flex-row-reverse":""),children:[n.jsx(a.Suspense,{fallback:n.jsx("div",{}),children:n.jsx(i,{className:"w-16 h-16 px-4 "+(d?"invisible":"visible")})}),n.jsx("span",{className:"hidden lg:block",children:n.jsx(o.default,{text:d?t:l,isSmaller:!d,isUppercase:!0})})]})})}},8463:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var n=s(3854),a=s(1574);function o({text:e,noUnderline:t}){let[s,o]=(0,a.YD)({treshold:1});return t?n.jsx("h1",{className:"uppercase text-lg lg:text-xl tracking-wide",children:e}):n.jsx("h1",{ref:s,className:"uppercase text-lg lg:text-xl tracking-wide max-w-fit overflow-hidden relative after:underline-text-base "+(o?"after:animate-underline":""),children:e})}},262:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var n=s(3854),a=s(1574);function o({text:e,isSmaller:t,isUppercase:s,isUnderlined:o,isHidden:l}){let[r,i]=(0,a.YD)({treshold:1});return n.jsx("span",{ref:r,className:(t?"text-sm ":"md:text-base text-[25px] ")+(s?"uppercase ":"")+(o?"block relative tracking-wide max-w-fit after:underline-text-base ":"")+(i&o?"after:animate-underline ":"")+(l?"hidden":""),children:e})}},9565:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var n=s(3854),a=s(4218),o=s(262),l=s(1956),r=s.n(l);function i({projectTitle:e,projectTechnologies:t}){let[s,l]=(0,a.useState)(!1);return(0,n.jsxs)("div",{className:"bg-secondary overflow-hidden w-full sm:w-2/3 xl:h-72 h-44 rounded-xl relative",onMouseEnter:function(){l(!0)},onMouseLeave:function(){l(!1)},children:[n.jsx(r(),{src:"/projectBackground/Rectangle.png",alt:e,width:0,height:0,sizes:"100vw",className:"md:w-[500px] h-auto w-64 absolute left-16 top-16 rounded-xl shadow-[0px_0px_4.4px_7.7px_rgba(20,20,20,0.25)] "+(s?"scale-110 duration-500":"scale-100 duration-500")}),(0,n.jsxs)("div",{className:"absolute w-full h-full bg-mainBackground bg-opacity-60 "+(s?"translate-y-2/3 duration-500":"translate-y-0 duration-500"),children:[n.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "+(s?"invisible":"visible delay-[400ms]"),children:n.jsx(o.default,{text:e,isUppercase:!0})}),n.jsx("div",{className:"absolute top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 "+(s?"visible delay-[450ms]":"invisible"),children:n.jsx(o.default,{text:t,isUppercase:!0})})]})]})}},8489:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r,metadata:()=>l});var n=s(4656),a=s(519),o=s.n(a);s(7272),s(3688);let l={title:"Create Next App",description:"Generated by create next app"};function r({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:o().className,children:e})})}},3688:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>T});var n=s(4656);s(3542);var a=s(5153);let o=(0,a.createProxy)(String.raw`D:\projects\nextjs\personal-portfolio\app\components\contentBox.js`),{__esModule:l,$$typeof:r}=o,i=o.default,c=(0,a.createProxy)(String.raw`D:\projects\nextjs\personal-portfolio\app\components\font\mainTitle.js`),{__esModule:d,$$typeof:p}=c,m=c.default;function x(){return(0,n.jsxs)("section",{className:"h-screen",children:[n.jsx("div",{className:"relative",children:n.jsx("img",{src:"/background/keyboard.jpg",className:"absolute gradient-mask-b-0 filter blur-sm hue-rotate-[-30deg] aspect-video"})}),(0,n.jsxs)("div",{className:"absolute flex flex-col p-5 lg:pt-5 pt-10 lg:p-32 gap-14",children:[n.jsx(m,{text:"šimon",noUnderline:!0}),n.jsx(m,{text:"tech",noUnderline:!0}),n.jsx(m,{text:"ventures",noUnderline:!0})]})]})}function u({children:e,fullFlexPage:t=!0,reverseFlex:s=!1,colLayout:a=!1}){return n.jsx("section",{className:"min-h-screen mx-5 lg:mx-32 relative",children:e})}let j=(0,a.createProxy)(String.raw`D:\projects\nextjs\personal-portfolio\app\components\font\smallestFont.js`),{__esModule:f,$$typeof:v}=j,h=j.default;var g=s(8639),b=s.n(g);let N={Backend:["Java","Python"],Frontend:["React","Angular","JS"],Design:["Figma"]};function w(){return n.jsx("div",{className:"border-4 border-secondary md:w-2/3 rounded-xl  mb-auto h-min flex flex-col px-8 md:mt-auto mt-14",children:n.jsx(y,{})})}function y(){return Object.entries(N).map(([e,t])=>(0,n.jsxs)("section",{className:"py-8",children:[(0,n.jsxs)("div",{className:"flex flex-row",children:[n.jsx(b(),{src:"/icons/"+e.toLowerCase()+".svg",width:75,height:75,alt:"gear",className:"px-4"}),n.jsx(h,{text:e})]}),n.jsx("ul",{className:"pl-24",children:t.map((e,t)=>n.jsx("li",{className:"pt-4",children:n.jsx(h,{text:e,isUnderlined:!0})},t))})]}))}let S=(0,a.createProxy)(String.raw`D:\projects\nextjs\personal-portfolio\app\components\projectTile.js`),{__esModule:k,$$typeof:P}=S,M=S.default,B=[["Passionate developer and dedicated student","about me","aboutMeSvg.js"],["From JavaScript enthusiast to java developer","my projects","projectSvg.js"],["want to get to me right away?","contacts","contactMeSvg.js"]];async function T(){return(0,n.jsxs)("main",{children:[n.jsx(x,{}),n.jsx(u,{fullFlexPage:!1,children:n.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-full",children:B.map((e,t)=>n.jsx("div",{className:0!=t?"mt-[-8px]":"",children:n.jsx(i,{toLeft:t%2!=0,textLong:e[0],textShort:e[1],imgName:e[2]})}))})}),n.jsx(u,{children:(0,n.jsxs)("div",{className:"flex min-h-screen flex-col md:flex-row ",children:[(0,n.jsxs)("div",{className:"flex flex-col",children:[n.jsx("span",{className:"pt-20",children:n.jsx(m,{text:"Šimon"})}),n.jsx("span",{className:"md:pt-20 pt-14 ",children:n.jsx(h,{text:"Thats me!",isSmaller:!0})}),n.jsx("span",{className:"md:w-2/3 text-left md:pt-20 pt-10",children:n.jsx(h,{text:"An aspiring student, I'm transitioning from Frontend development in JavaScript to Java development for desktop and web applications."})})]}),n.jsx(n.Fragment,{children:n.jsx(w,{})})]})}),n.jsx(u,{children:(0,n.jsxs)("div",{className:"flex min-h-1/2 flex-col-reverse xl:flex-row",children:[(0,n.jsxs)("div",{className:"w-full xl:w-1/2 xl:h-screen flex flex-col md:flex-row xl:flex-col md:gap-36 gap-16 justify-center md:mt-0 mt-32 mb-32 xl:mb-0",children:[n.jsx(M,{projectTitle:"lul",projectTechnologies:"xddddd"}),n.jsx(M,{projectTitle:"lul",projectTechnologies:"xddddd"})]}),n.jsx("span",{className:"xl:mt-auto xl:mb-auto md:mt-32 md:mb-32 lg:mb-40 lg:mt-28 mt-40",children:n.jsx(m,{text:"projects"})})]})}),n.jsx(u,{})]})}},7272:()=>{}};