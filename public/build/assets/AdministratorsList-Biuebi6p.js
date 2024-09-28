import{q as x,r as u,j as e,a as j,y as b}from"./app-Xg3MWjUp.js";import{t as a}from"./translations-CBxNckOR.js";import{a as g}from"./chunk-QXREVWCS-Bcc_oW-g.js";import{c as d}from"./chunk-4WFLSIHH-pHsL0tlp.js";import{c as y}from"./chunk-3XVMTUU7-Dp_cF4cz.js";import{b as _}from"./chunk-DBLREEYE-kXYMn-PH.js";import{a as v,b as w,c as N,d as k,e as C,f as S}from"./chunk-YRZGWF2W-DLIyo9wq.js";import{p as F}from"./chunk-MRXO6UUP-xsy37Bta.js";import"./chunk-XHQUSKIE-BJ4pqTDI.js";import"./chunk-N2KXC5ZE-s7KBEtmC.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./chunk-CAFRINWI-BTDo8zfp.js";import"./index-vhBEzfuR.js";import"./index-0WiR-nh7.js";import"./chunk-M3MASYO7-CHsWdAdY.js";import"./chunk-6NL67ZRH-C6QNaIJW.js";import"./focusSafely-BGz0Gc4B.js";import"./getChildNodes-D9Y5kHi7.js";import"./isScrollable-BprAQSS1.js";import"./FocusScope-B94nuPOP.js";import"./usePress-D8L0wOwc.js";import"./textSelection-CcPLNbaN.js";import"./context-CiZxFy97.js";import"./useSyncRef-BzsjkglV.js";import"./useFocusable-DL-dGcJ1.js";import"./useFocus-nnqdAYxR.js";import"./getScrollParent-BcD73RX6.js";import"./chunk-KBN3H6OQ-qxOJiocu.js";import"./useToggleState-B8OVgiR9.js";import"./index-BKmmPl89.js";import"./useFormValidationState-DKcVms6Q.js";import"./chunk-CIZQCQPA-C7Ey7jFP.js";import"./VisuallyHidden-DUDGVDCO.js";import"./chunk-7F3ZLNJ6-BDbQD4Kz.js";const z=[{key:"id",label:"#"},{key:"username",label:a("Username")},{key:"name",label:a("Name")},{key:"company",label:a("Company")},{key:"status",label:a("Status")},{key:"sessions",label:a("Sessions")},{key:"actions",label:""}],ce=()=>{const{users:t,total:p}=x().props,{links:i,current_page:h}=t,f=u.useCallback((s,r)=>{var o,l,n,m,c;return{id:e.jsx(e.Fragment,{children:s.id}),username:e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex gap-x-3 items-center",children:[e.jsx(g,{src:`/storage/img/users/avatars/${s.profile_picture}`,name:s.name[0]+s.lastname[0],radius:"full",isBordered:!!((o=s.sessions)!=null&&o.length),color:(l=s.sessions)!=null&&l.length?"success":"default"}),s.username]})}),name:e.jsx("span",{className:"font-medium",children:`${s.name} ${s.lastname}`}),company:s.company,status:e.jsx(e.Fragment,{children:e.jsx(d,{size:"sm",color:s.status==="enabled"?"success":"danger",variant:"dot",children:s.status})}),sessions:e.jsx(e.Fragment,{children:e.jsx(d,{size:"sm",color:(n=s.sessions)!=null&&n.length?"success":"default",variant:"flat",className:y(!((m=s.sessions)!=null&&m.length)&&"text-opacity-60"),children:(c=s.sessions)!=null&&c.length?"Active":"Inactive"})}),actions:e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"space-x-2",children:e.jsx(_,{size:"sm",color:"primary",variant:"flat",as:j,href:route("dashboard.user.edit",{user:s}),children:a("Edit")})})})}[r]},[]);return e.jsx(e.Fragment,{children:t&&e.jsxs(v,{removeWrapper:!0,"aria-label":"Table",classNames:{th:"[&]:first:rounded-none [&]:last:rounded-none",td:"border-t border-content3"},bottomContent:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{className:"text-sm flex-1",children:e.jsx("span",{className:"whitespace-nowrap",children:a("Total users: %",{total:p})})}),i&&e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(F,{size:"sm",isCompact:!0,showControls:!0,showShadow:!0,variant:"light",color:"primary",page:h,total:i.length-2||0,classNames:{wrapper:"shadow-none"},onChange:s=>b.reload({data:{page:s},only:["users"]})})})]}),children:[e.jsx(w,{columns:z,children:s=>e.jsx(N,{allowsSorting:s.allowsSorting??!1,children:s.label},s.key)}),e.jsx(k,{items:t.data,children:s=>e.jsx(C,{children:r=>e.jsx(S,{children:f(s,String(r))})},s.id)})]})})};export{ce as AdministratorsList};
