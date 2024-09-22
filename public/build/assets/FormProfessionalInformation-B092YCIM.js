import{q as u,W as b,j as e,B as j}from"./app-BL5MU1ub.js";import{t as a}from"./translations-gWKnqGb7.js";import{C as m}from"./index-BDdcsGcF.js";import{d as x}from"./chunk-44JHHBS2-BriGgij3.js";import{t as h}from"./chunk-ATAY3LCU-0pQGZUAg.js";import{b as y}from"./chunk-DBLREEYE-k5beFU79.js";import"./chunk-NQM3AZQR-LXh0D-Rm.js";import"./chunk-XHQUSKIE-D4as8MM8.js";import"./extend-tailwind-merge-DDA0jNcl.js";import"./index-BKyyixf6.js";import"./useFormValidationState-GSGWOKt_.js";import"./focusSafely-C6wh2g3D.js";import"./useLabels-D90GRlDd.js";import"./chunk-3XVMTUU7-Dp_cF4cz.js";import"./chunk-6NL67ZRH-Bv4xzwpt.js";const P=()=>{const r=u().props.auth.user,{data:l,setData:n,patch:c,processing:t,errors:o,clearErrors:p,isDirty:d}=b({id:r.id,job_title:r.job_title,company:r.company,bio:r.bio}),f=s=>{s.preventDefault(),c(route("profile.update"),{preserveScroll:!0,onSuccess:i=>{i.props.flash&&i.props.flash.success&&j.success(a(i.props.flash.success))},onError:i=>console.log(i)})};return e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:f,children:e.jsxs("section",{className:"space-y-5",children:[e.jsxs("div",{className:"font-medium flex gap-5 items-center",children:[a("Professional information"),e.jsx(x,{className:"flex-1"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-6 gap-y-5",children:[e.jsx("fieldset",{children:e.jsx(m,{label:a("Job title"),variant:"faded",value:l.job_title,isInvalid:!!o.job_title,errorMessage:o.job_title,onKeyUp:()=>p("job_title"),isDisabled:t,onValueChange:s=>n("job_title",s)})}),e.jsx("fieldset",{children:e.jsx(m,{label:a("Company"),variant:"faded",value:l.company,isInvalid:!!o.company,errorMessage:o.company,onKeyUp:()=>p("company"),isDisabled:t,onValueChange:s=>n("company",s)})}),e.jsx("fieldset",{className:"col-span-2",children:e.jsx(h,{label:a("Biography"),variant:"faded",value:l.bio,isInvalid:!!o.bio,errorMessage:o.bio,onKeyUp:()=>p("bio"),isDisabled:t,onValueChange:s=>n("bio",s)})})]}),e.jsx("div",{className:"pt-5 flex justify-end",children:e.jsx(y,{type:"submit",color:"primary",className:"w-40",isLoading:t,isDisabled:!d,children:a("Save")})})]})})})};export{P as FormProfessionalInformation};
