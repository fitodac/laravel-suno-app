import{W as y,r as n,j as s}from"./app-BL5MU1ub.js";import{t as i}from"./translations-gWKnqGb7.js";import{AuthLayout1 as m}from"./AuthLayout1-DOAA7O2T.js";import{AuthLayout2 as h}from"./AuthLayout2-4Ghk42ti.js";import{AuthLayout3 as j}from"./AuthLayout3-CYgpRgo6.js";import{i as w}from"./chunk-GQQM5TNQ-DGMAOxey.js";import{b}from"./chunk-DBLREEYE-k5beFU79.js";import"./useColorMode-BEg4eCOE.js";import"./Toastify-DVTC5Rsz.js";import"./template.executive.config-JRgdiSJO.js";import"./chunk-3XVMTUU7-Dp_cF4cz.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./pexels-pramodtiwari-14127564-Cp2S16Fb.js";import"./chunk-NQM3AZQR-LXh0D-Rm.js";import"./chunk-XHQUSKIE-D4as8MM8.js";import"./index-BKyyixf6.js";import"./useFormValidationState-GSGWOKt_.js";import"./focusSafely-C6wh2g3D.js";import"./useLabels-D90GRlDd.js";import"./chunk-M3MASYO7-BWQptIre.js";import"./chunk-6NL67ZRH-Bv4xzwpt.js";const r=i("Confirm password").toString(),g=({layout:t})=>{const{data:p,setData:d,post:c,processing:a,errors:l,reset:u}=y({password:""}),[e,f]=n.useState(!1);n.useEffect(()=>()=>{u("password")},[]);const x=o=>{o.preventDefault(),c(route("password.confirm"))};return s.jsx(s.Fragment,{children:s.jsxs("div",{className:"w-72 space-y-7",children:[s.jsx("div",{className:"text-sm leading-tight",children:i("confirm-password-message")}),s.jsx("form",{onSubmit:x,children:s.jsxs("div",{className:"space-y-4",children:[s.jsx("fieldset",{className:"space-y-1",children:s.jsx(w,{id:"password",type:e?"text":"password",name:"password",label:i("Password"),value:p.password,isDisabled:a,errorMessage:l.password,isInvalid:!!l.password,onValueChange:o=>d("password",o),endContent:s.jsx("button",{type:"button",onClick:()=>f(!e),children:e?s.jsx("i",{className:"ri-eye-fill ri-lg text-primary"}):s.jsx("i",{className:"ri-eye-off-fill ri-lg text-zinc-400 dark:text-zinc-600"})})})}),s.jsx(b,{color:"primary",fullWidth:!0,type:"submit",spinner:s.jsx("i",{className:"ri-loader-line ri-lg animate-spin"}),isLoading:a,children:i("Confirm")})]})})]})})};g.layout=t=>{switch(t.props.layout){case"layout1":return s.jsx(m,{children:t,pageTitle:r});case"layout2":return s.jsx(h,{children:t,pageTitle:r});case"layout3":return s.jsx(j,{children:t,pageTitle:r});default:return s.jsx(m,{children:t,pageTitle:r})}};export{g as default};
