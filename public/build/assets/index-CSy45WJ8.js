import{r as l}from"./app-BL5MU1ub.js";import{u as P}from"./index-CsO-F6Sj.js";function $(...s){return(...a)=>{for(let c of s)typeof c=="function"&&c(...a)}}function h(s,a,c){let[C,b]=l.useState(s||a),O=l.useRef(s!==void 0),o=s!==void 0;l.useEffect(()=>{let e=O.current;e!==o&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${o?"controlled":"uncontrolled"}.`),O.current=o},[o]);let t=o?s:C,u=l.useCallback((e,...f)=>{let k=(r,...n)=>{c&&(Object.is(t,r)||c(r,...n)),o||(t=r)};typeof e=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),b((n,...p)=>{let i=e(o?t:n,...p);return k(i,...f),o?n:i})):(o||b(e),k(e,...f))},[o,t,c]);return[t,u]}function g(s={}){const{id:a,defaultOpen:c,isOpen:C,onClose:b,onOpen:O,onChange:o=()=>{}}=s,t=P(O),u=P(b),[e,f]=h(C,c||!1,o),k=l.useId(),r=a||k,n=C!==void 0,p=l.useCallback(()=>{n||f(!1),u==null||u()},[n,u]),i=l.useCallback(()=>{n||f(!0),t==null||t()},[n,t]),m=l.useCallback(()=>{(e?p:i)()},[e,i,p]);return{isOpen:!!e,onOpen:i,onClose:p,onOpenChange:m,isControlled:n,getButtonProps:(d={})=>({...d,"aria-expanded":e,"aria-controls":r,onClick:$(d.onClick,m)}),getDisclosureProps:(d={})=>({...d,hidden:!e,id:r})}}export{g as u};
