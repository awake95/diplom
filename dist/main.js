!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelectorAll(".required"),t=()=>{e.forEach(e=>{e.setAttribute("required","")})},n=()=>{e.forEach(e=>{e.removeAttribute("required","")})};(()=>{const e=document.querySelector(".popup-call"),o=document.querySelectorAll(".call-btn");o.forEach(o=>{o.addEventListener("click",()=>{e.style.display="block",e.style.display="block",t(),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?(t.preventDefault(),e.style.display="none",n()):(o=o.closest(".popup-content"),o||(e.style.display="none"))})})})})();(()=>{const e=document.querySelectorAll(".discount-btn"),o=document.querySelector(".popup-discount2");e.forEach(e=>{e.addEventListener("click",()=>{o.style.display="block",o.style.display="block",t(),o.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?(e.preventDefault(),o.style.display="none",n()):(t=t.closest(".popup-content"),t||(o.style.display="none"))})})})})();(()=>{const e=document.querySelector(".popup-discount"),o=document.querySelectorAll(".calc-btn");o.forEach(o=>{o.addEventListener("click",()=>{e.style.display="block",e.style.display="block",t(),e.addEventListener("click",t=>{let o=t.target;o.classList.contains("popup-close")?(t.preventDefault(),e.style.display="none",n()):(o=o.closest(".popup-content"),o||(e.style.display="none"))})})})})();(()=>{const e=document.querySelectorAll(".check-btn"),o=document.querySelector(".popup-check");e.forEach(e=>{e.addEventListener("click",()=>{o.style.display="block",o.style.display="block",t(),o.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?(e.preventDefault(),o.style.display="none",n()):(t=t.closest(".popup-content"),t||(o.style.display="none"))})})})})();(()=>{const e=document.querySelector(".consultation-btn"),o=document.querySelector(".popup-consultation"),c=document.getElementById("question");e.addEventListener("click",e=>{""===c.value?o.style.display="none":o.style.display="block",t(),o.addEventListener("click",e=>{let t=e.target;t.classList.contains("popup-close")?(e.preventDefault(),o.style.display="none",n()):(t=t.closest(".popup-content"),t||(o.style.display="none"))})})})()};var c=()=>{const e=document.querySelectorAll(".panel-group"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".collapse"),o=document.querySelectorAll(".construct-btn");e.forEach(e=>{e.addEventListener("click",e=>{let c=e.target;c=c.closest(".panel-heading"),c&&t.forEach((e,t)=>{e===c?n[t].classList.add("in"):n[t].classList.remove("in")});let l=e.target;l=l.closest(".construct-btn"),l&&o.forEach((e,t)=>{e===l&&(n[t+1].classList.add("in"),n[t].classList.remove("in"))})})})};var l=(e=1e4,t=15e3)=>{const n=document.querySelector("#accordion"),o=document.querySelector("#myonoffswitch"),c=document.querySelector("#myonoffswitch-two"),l=document.querySelectorAll(".second-box"),r=document.querySelector("#calc-result"),s=document.querySelector(".diametr"),a=document.querySelector(".diametr2"),d=document.querySelector(".quantity"),u=document.querySelector(".quantity2");let i=e;r.value=i;l.forEach(e=>{e.style.display="none"});n.addEventListener("change",n=>{let p=n.target;(p.matches("select")||p.matches("input"))&&((()=>{let n,l,p,y=s.options[s.selectedIndex].value,m=a.options[a.selectedIndex].value,f=d.options[d.selectedIndex].value,v=u.options[u.selectedIndex].value;y&&f?(l=e*f*y,p=t*v*m*f*y,c.checked?(n=0,o.checked?n=1e3:n+=2e3):n=0,i=o.checked?l+n:p+n):i=e,r.value=i})(),o.checked?l.forEach(e=>{e.style.display="none",u.options[0].setAttribute("selected","selected"),a.options[0].setAttribute("selected","selected"),e.setAttribute("disabled","disabled")}):l.forEach(e=>{e.style.display="inline-block",e.removeAttribute("disabled","disabled")}))})};var r=()=>{document.querySelector("body").addEventListener("input",e=>{const t=e.target;t.matches(".phone-user")&&(t.value=t.value.replace(/[^0-9+]/g,"")),t.matches("[name=user_name]")&&(t.value=t.value.replace(/[^а-яА-Я]/g,""))})};var s=()=>{const e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".product");e.addEventListener("click",()=>{for(let e=0;e<t.length;e++)t[e].classList.remove("hidden");e.style.display="none"})};var a=()=>{const e=document.createElement("div"),t=document.querySelector("#form3");document.querySelectorAll(".forma").forEach(n=>{n.addEventListener("submit",n=>{n.preventDefault();if(setTimeout(()=>{t.reset()},5e3),n.target.classList.contains("director-form")){const e=new FormData(n.target);let t=JSON.stringify(Object.fromEntries(e)),o=document.createElement("input");o.type="hidden",o.name="outer_data",o.value=t,document.querySelector(".popup-consultation").querySelector("#form7").prepend(o)}else{let t=n.target.querySelectorAll(".form-button-1");t.forEach(e=>{e.disabled=!0}),n.target.appendChild(e),e.textContent="Загрузка";const o=new FormData(n.target);let c={};for(const[e,t]of o.entries())c[e]="outer_data"===e?JSON.parse(t):t;e.style.display="block",fetch("server.php",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(c)}).then(t=>{if(200!==t.status)throw new Error;e.textContent="Форма отправлена успешно. Спасибо за заявку! ",n.target.reset()}).catch(t=>{e.textContent="Ошибка"}).finally(()=>{setTimeout(()=>{e.style.display="none",t.forEach(e=>{e.disabled=!1})},3e3)})}})})};var d=()=>{const e=document.querySelector("#myonoffswitch"),t=document.querySelector("#myonoffswitch-two"),n=document.querySelector(".diametr"),o=document.querySelector(".diametr2"),c=document.querySelector(".quantity"),l=document.querySelector(".quantity2"),r=document.querySelector("#calc-result");let s=n.options[n.selectedIndex].text,a=o.options[o.selectedIndex].text,d=c.options[c.selectedIndex].text,u=l.options[l.selectedIndex].text,i=document.querySelector(".distance");const p=document.querySelector("#form5"),y=document.createElement("div");y.style.cssText="font-size: 2rem",p.addEventListener("submit",n=>{n.preventDefault(),p.appendChild(y),y.textContent="Загрузка...";const o=new FormData(p);let c={};(()=>{e.checked?(c.cam1="Однокамерный",c.diametr1="Диаметр: "+s,c.quantity1="Количество: "+d,t.checked?c.well1="С днищем":c.well2="Без днища",c.distances="Расстояние: "+i.value+"м",c.result="Итого: "+r.value):(c.cam2="Двукамерный",c.diametr1="Диаметр первого колодца: "+s,c.quantity1="Количество: "+d,c.diametr2="Диаметр второго колодца: "+a,c.quantity2="Количество: "+u,t.checked?c.well1="С днищем":c.well2="Без днища",c.distances="Расстояние: "+i.value+"м",c.result="Итого: "+r.value),o.forEach((e,t)=>{c[t]=e});(e=>fetch("./server.php",{method:"POST",mode:"same-origin",cache:"default",credentials:"include",headers:{"Content-Type":"applicattion/json"},body:JSON.stringify(e)}))(c).then(e=>{if(200!==e.status)throw new Error("status network not 200");y.textContent="Спасибо! Мы скоро с Вами свяжемся!"}).catch(e=>{y.textContent="Что-то пошло не так...",console.error(e)}),setTimeout(()=>{y.textContent="",p.reset()},5e3)})()})};(()=>{const e=document.querySelector(".questions"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".collapse");e.addEventListener("click",e=>{let o=e.target;o=o.closest(".panel-heading"),o&&t.forEach((e,t)=>{e===o?n[t].classList.add("in"):n[t].classList.remove("in")})})})(),c(),o(),s(),l(),r(),a(),d("#form5")}]);