import{u as s,r as a}from"./app-BL5MU1ub.js";const d=()=>{const{colorMode:e,setColorMode:o}=s();return a.useEffect(()=>{var r,t;e==="dark"?(r=document.querySelector("html"))==null||r.classList.add("dark"):(t=document.querySelector("html"))==null||t.classList.remove("dark")},[e]),{colorMode:e,changeColorMode:()=>{o&&o(e==="light"?"dark":"light")}}};export{d as u};
