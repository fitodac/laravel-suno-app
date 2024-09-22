import{d as F,u as m,t as O,v as R,a as M,h as U,w as K}from"./focusSafely-C6wh2g3D.js";import{r as d,R as N}from"./app-BL5MU1ub.js";var ne=e=>(e==null?void 0:e.length)<=4?e:e==null?void 0:e.slice(0,3),oe=(...e)=>{let t=" ";for(const a of e)if(typeof a=="string"&&a.length>0){t=a;break}return t},j={},P={};function le(e,t,...a){var i;const r=`[Next UI]${t?` [${t}]`:" "}: ${e}`;if(!(typeof console>"u")&&!P[r]&&(P[r]=!0,((i=process==null?void 0:j)==null?void 0:i.NODE_ENV)!=="production"))return console.warn(r,a)}function Q(e,t){F(()=>{if(e&&e.ref&&t)return e.ref.current=t.current,()=>{e.ref&&(e.ref.current=null)}})}function de(e,t,a){let i=d.useRef(t),n=m(()=>{a&&a(i.current)});d.useEffect(()=>{var r;let l=e==null||(r=e.current)===null||r===void 0?void 0:r.form;return l==null||l.addEventListener("reset",n),()=>{l==null||l.removeEventListener("reset",n)}},[e,n])}function Y(e){let{isDisabled:t,onFocus:a,onBlur:i,onFocusChange:n}=e;const r=d.useCallback(o=>{if(o.target===o.currentTarget)return i&&i(o),n&&n(!1),!0},[i,n]),l=O(r),s=d.useCallback(o=>{const u=R(o.target);o.target===o.currentTarget&&u.activeElement===o.target&&(a&&a(o),n&&n(!0),l(o))},[n,a,l]);return{focusProps:{onFocus:!t&&(a||n||i)?s:void 0,onBlur:!t&&(i||n)?r:void 0}}}function w(e){if(!e)return;let t=!0;return a=>{let i={...a,preventDefault(){a.preventDefault()},isDefaultPrevented(){return a.isDefaultPrevented()},stopPropagation(){console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.")},continuePropagation(){t=!1}};e(i),t&&a.stopPropagation()}}function q(e){return{keyboardProps:e.isDisabled?{}:{onKeyDown:w(e.onKeyDown),onKeyUp:w(e.onKeyUp)}}}let z=N.createContext(null);function G(e){let t=d.useContext(z)||{};Q(t,e);let{ref:a,...i}=t;return i}function se(e,t){let{focusProps:a}=Y(e),{keyboardProps:i}=q(e),n=M(a,i),r=G(t),l=e.isDisabled?{}:r,s=d.useRef(e.autoFocus);return d.useEffect(()=>{s.current&&t.current&&U(t.current),s.current=!1},[t]),{focusableProps:M({...n,tabIndex:e.excludeFromTabOrder&&!e.isDisabled?-1:void 0},l)}}function ue(e,t,a){let{validationBehavior:i,focus:n}=e;F(()=>{if(i==="native"&&(a!=null&&a.current)){let o=t.realtimeValidation.isInvalid?t.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";a.current.setCustomValidity(o),a.current.hasAttribute("title")||(a.current.title=""),t.realtimeValidation.isInvalid||t.updateValidation(J(a.current))}});let r=m(()=>{t.resetValidation()}),l=m(o=>{var u;t.displayValidation.isInvalid||t.commitValidation();let f=a==null||(u=a.current)===null||u===void 0?void 0:u.form;if(!o.defaultPrevented&&a&&f&&W(f)===a.current){var v;n?n():(v=a.current)===null||v===void 0||v.focus(),K("keyboard")}o.preventDefault()}),s=m(()=>{t.commitValidation()});d.useEffect(()=>{let o=a==null?void 0:a.current;if(!o)return;let u=o.form;return o.addEventListener("invalid",l),o.addEventListener("change",s),u==null||u.addEventListener("reset",r),()=>{o.removeEventListener("invalid",l),o.removeEventListener("change",s),u==null||u.removeEventListener("reset",r)}},[a,l,s,r,i])}function H(e){let t=e.validity;return{badInput:t.badInput,customError:t.customError,patternMismatch:t.patternMismatch,rangeOverflow:t.rangeOverflow,rangeUnderflow:t.rangeUnderflow,stepMismatch:t.stepMismatch,tooLong:t.tooLong,tooShort:t.tooShort,typeMismatch:t.typeMismatch,valueMissing:t.valueMissing,valid:t.valid}}function J(e){return{isInvalid:!e.validity.valid,validationDetails:H(e),validationErrors:e.validationMessage?[e.validationMessage]:[]}}function W(e){for(let t=0;t<e.elements.length;t++){let a=e.elements[t];if(!a.validity.valid)return a}return null}const I={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},A={...I,customError:!0,valid:!1},$={isInvalid:!1,validationDetails:I,validationErrors:[]},X=d.createContext({}),C="__formValidationState"+Date.now();function ce(e){if(e[C]){let{realtimeValidation:t,displayValidation:a,updateValidation:i,resetValidation:n,commitValidation:r}=e[C];return{realtimeValidation:t,displayValidation:a,updateValidation:i,resetValidation:n,commitValidation:r}}return Z(e)}function Z(e){let{isInvalid:t,validationState:a,name:i,value:n,builtinValidation:r,validate:l,validationBehavior:s="aria"}=e;a&&(t||(t=a==="invalid"));let o=t!==void 0?{isInvalid:t,validationErrors:[],validationDetails:A}:null,u=d.useMemo(()=>L(ee(l,n)),[l,n]);r!=null&&r.validationDetails.valid&&(r=null);let f=d.useContext(X),v=d.useMemo(()=>i?Array.isArray(i)?i.flatMap(c=>x(f[c])):x(f[i]):[],[f,i]),[k,B]=d.useState(f),[D,p]=d.useState(!1);f!==k&&(B(f),p(!1));let g=d.useMemo(()=>L(D?[]:v),[D,v]),S=d.useRef($),[V,E]=d.useState($),b=d.useRef($),T=()=>{if(!_)return;y(!1);let c=u||r||S.current;h(c,b.current)||(b.current=c,E(c))},[_,y]=d.useState(!1);return d.useEffect(T),{realtimeValidation:o||g||u||r||$,displayValidation:s==="native"?o||g||V:o||g||u||r||V,updateValidation(c){s==="aria"&&!h(V,c)?E(c):S.current=c},resetValidation(){let c=$;h(c,b.current)||(b.current=c,E(c)),s==="native"&&y(!1),p(!0)},commitValidation(){s==="native"&&y(!0),p(!0)}}}function x(e){return e?Array.isArray(e)?e:[e]:[]}function ee(e,t){if(typeof e=="function"){let a=e(t);if(a&&typeof a!="boolean")return x(a)}return[]}function L(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:A}:null}function h(e,t){return e===t?!0:e&&t&&e.isInvalid===t.isInvalid&&e.validationErrors.length===t.validationErrors.length&&e.validationErrors.every((a,i)=>a===t.validationErrors[i])&&Object.entries(e.validationDetails).every(([a,i])=>t.validationDetails[a]===i)}function fe(...e){let t=new Set,a=!1,i={...I};for(let l of e){var n,r;for(let s of l.validationErrors)t.add(s);a||(a=l.isInvalid);for(let s in i)(n=i)[r=s]||(n[r]=l.validationDetails[s])}return i.valid=!a,{isInvalid:a,validationErrors:[...t],validationDetails:i}}export{ce as $,fe as a,se as b,ue as c,$ as d,C as e,de as f,Y as g,Q as h,ne as i,oe as s,le as w};
