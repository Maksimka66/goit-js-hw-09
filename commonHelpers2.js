import"./assets/modulepreload-polyfill-ec808ebb.js";const a=document.querySelector(".feedback-form"),s=document.querySelector('[name="email"]'),m=document.querySelector('[name="message"]'),t={email:"",message:""};a.addEventListener("input",e=>{e.preventDefault(),t.email=s.value,t.message=m.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))});const o=localStorage.getItem("feedback-form-state");if(o!==null){const e=JSON.parse(o);s.value=e.email,m.value=e.message}a.addEventListener("submit",e=>{e.preventDefault(),console.log(t),localStorage.clear(),a.reset()});
//# sourceMappingURL=commonHelpers2.js.map