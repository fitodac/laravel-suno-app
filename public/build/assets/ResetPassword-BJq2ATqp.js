import{W as j,r as c,j as s}from"./app-BL5MU1ub.js";import{t as l}from"./translations-gWKnqGb7.js";import{AuthLayout1 as u}from"./AuthLayout1-DOAA7O2T.js";import{AuthLayout2 as h}from"./AuthLayout2-4Ghk42ti.js";import{AuthLayout3 as b}from"./AuthLayout3-CYgpRgo6.js";import{i as p}from"./chunk-GQQM5TNQ-DGMAOxey.js";import{b as g}from"./chunk-DBLREEYE-k5beFU79.js";import"./useColorMode-BEg4eCOE.js";import"./Toastify-DVTC5Rsz.js";import"./template.executive.config-JRgdiSJO.js";import"./chunk-3XVMTUU7-Dp_cF4cz.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./pexels-pramodtiwari-14127564-Cp2S16Fb.js";import"./chunk-NQM3AZQR-LXh0D-Rm.js";import"./chunk-XHQUSKIE-D4as8MM8.js";import"./index-BKyyixf6.js";import"./useFormValidationState-GSGWOKt_.js";import"./focusSafely-C6wh2g3D.js";import"./useLabels-D90GRlDd.js";import"./chunk-M3MASYO7-BWQptIre.js";import"./chunk-6NL67ZRH-Bv4xzwpt.js";const o=l("Reset password").toString(),N=({token:e,email:f})=>{const{data:n,setData:m,post:x,processing:a,errors:t,reset:y}=j({token:e,email:f,password:"",password_confirmation:""}),[i,d]=c.useState(!1);c.useEffect(()=>()=>{y("password","password_confirmation")},[]);const w=r=>{r.preventDefault(),x(route("password.store"))};return s.jsx(s.Fragment,{children:s.jsx("div",{className:"w-72 space-y-7",children:s.jsx("form",{onSubmit:w,children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("fieldset",{className:"space-y-1",children:s.jsx(p,{id:"email",type:"email",name:"email",label:"Email",value:n.email,isDisabled:a,autoComplete:"username",errorMessage:t.email,isInvalid:!!t.email,onValueChange:r=>m("email",r)})}),s.jsx("fieldset",{className:"space-y-1",children:s.jsx(p,{id:"password",type:i?"text":"password",name:"password",label:l("Password"),value:n.password,isDisabled:a,errorMessage:t.password,isInvalid:!!t.password,onValueChange:r=>m("password",r),endContent:s.jsx("button",{type:"button",onClick:()=>d(!i),children:i?s.jsx("i",{className:"ri-eye-fill ri-lg text-primary"}):s.jsx("i",{className:"ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600"})})})}),s.jsx("fieldset",{className:"space-y-1",children:s.jsx(p,{id:"password",type:i?"text":"password",name:"password_confirmation",label:l("Confirm password"),value:n.password_confirmation,isDisabled:a,errorMessage:t.password_confirmation,isInvalid:!!t.password,onValueChange:r=>m("password_confirmation",r),endContent:s.jsx("button",{type:"button",onClick:()=>d(!i),children:i?s.jsx("i",{className:"ri-eye-fill ri-lg text-primary"}):s.jsx("i",{className:"ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600"})})})}),s.jsx(g,{color:"primary",fullWidth:!0,type:"submit",spinner:s.jsx("i",{className:"ri-loader-line ri-lg animate-spin"}),isLoading:a,children:l("Reset Password")})]})})})})};N.layout=e=>{switch(e.props.layout){case"layout1":return s.jsx(u,{children:e,pageTitle:o});case"layout2":return s.jsx(h,{children:e,pageTitle:o});case"layout3":return s.jsx(b,{children:e,pageTitle:o});default:return s.jsx(u,{children:e,pageTitle:o})}};export{N as default};
