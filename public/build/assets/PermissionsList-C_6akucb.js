import{q as h,r as x,j as e,y as b}from"./app-BL5MU1ub.js";import{t as r}from"./translations-gWKnqGb7.js";import{p as j}from"./chunk-MRXO6UUP-DPGSvT7U.js";import{b as s}from"./chunk-DBLREEYE-k5beFU79.js";import{a as _,b as g,c as y,d as w,e as v,f as N}from"./chunk-YRZGWF2W-BKOyv4sP.js";import"./chunk-XHQUSKIE-D4as8MM8.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./FocusScope-Bl5fcGfa.js";import"./focusSafely-C6wh2g3D.js";import"./chunk-6NL67ZRH-Bv4xzwpt.js";import"./getChildNodes-BuxFdcox.js";import"./usePress-CYqZ7Kvo.js";import"./VisuallyHidden-8nf4bjXZ.js";import"./useFormValidationState-GSGWOKt_.js";import"./getScrollParent-Ct0IpEud.js";import"./chunk-KBN3H6OQ-CdYQgtAc.js";import"./useToggleState-dObIv4S-.js";import"./index-CsO-F6Sj.js";import"./index-BKyyixf6.js";const k=[{key:"name",label:r("Name")},{key:"guard_name",label:r("Guard")},{key:"actions",label:""}],M=({setDrawerOpen:i,setSelectedPermission:l,onOpen:d})=>{const{props:{permissions:o,protected_permissions:m}}=h(),c=m,{links:n,current_page:p,data:u}=o,f=x.useCallback((a,t)=>({name:e.jsx("span",{className:"font-medium",children:a.name}),guard_name:a.guard_name,actions:e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"space-x-2",children:c.includes(a.name)?e.jsx(s,{size:"sm",isDisabled:!0,children:r("Edit")}):e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"sm",color:"danger",variant:"flat",onPress:()=>{d(),l(a)},children:r("Delete")}),e.jsx(s,{size:"sm",color:"primary",variant:"flat",onPress:()=>{i(!0),l(a)},children:r("Edit")})]})})})})[t],[]);return e.jsx(e.Fragment,{children:o&&e.jsxs(_,{removeWrapper:!0,"aria-label":"Table",classNames:{th:"[&]:first:rounded-none [&]:last:rounded-none",td:"border-t border-content3"},bottomContent:e.jsx("div",{className:"flex justify-between items-center",children:n&&e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(j,{size:"sm",isCompact:!0,showControls:!0,showShadow:!0,variant:"light",color:"primary",page:p,total:n.length-2||0,classNames:{wrapper:"shadow-none"},onChange:a=>b.reload({data:{page:a},only:["users"]})})})}),children:[e.jsx(g,{columns:k,children:a=>e.jsx(y,{allowsSorting:a.allowsSorting??!1,children:a.label},a.key)}),e.jsx(w,{items:u,children:a=>e.jsx(v,{children:t=>e.jsx(N,{children:f(a,String(t))})},a.id)})]})})};export{M as PermissionsList};
