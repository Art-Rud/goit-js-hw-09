import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r=document.querySelector("form"),t=document.querySelector("input"),l=document.querySelector("textarea");t.placeholder="";l.placeholder="";const a={email:"",message:""},o=e=>{if(e.type==="focus"?(e.target.tagName==="INPUT"&&(e.target.placeholder=e.target.type),e.target.tagName==="TEXTAREA"&&(e.target.placeholder=e.target.type)):e.type==="blur"&&(e.target.tagName==="INPUT"&&(e.target.placeholder=""),e.target.tagName==="TEXTAREA"&&(e.target.placeholder="")),e.type==="input"){a.email=t.value,a.message=l.value;try{localStorage.setItem("feedback-form-state",JSON.stringify(a))}catch(s){console.log(s)}}e.type==="submit"&&(e.preventDefault(),!a.email||!a.message?alert("Fill please all fields"):t.value&&l.value&&(a.email=t.value,a.message=l.value,console.log(a)))},i=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));(e.email!==null||e.message!==null)&&(t.value=e.email,l.value=e.message,a.email=t.value,a.message=l.value)}catch(e){console.log(e)}};r.addEventListener("focus",o,!0);r.addEventListener("blur",o,!0);r.addEventListener("submit",o);r.addEventListener("input",o);i();
//# sourceMappingURL=2-form.js.map
