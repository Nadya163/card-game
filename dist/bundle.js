(()=>{"use strict";let e,t=0,s=0,n=null,i=0,a=0;function c(){console.log(1),n||(n=performance.now()),t=i,s=a,e=setInterval((()=>{const e=Math.floor((performance.now()-n)/1e3);t=Math.floor(e/60),s=e%60,l()}),1e3)}function l(){const e=document.querySelector(".interval.minutes"),n=document.querySelector(".interval.seconds");e.innerHTML=t>9?t:"0"+t,n.innerHTML=s>9?s:"0"+s}function o(){clearInterval(e),i=t,a=s,t=0,s=0,l()}function r(){return function(e,t){return`${e>9?e:"0"+e}.${t>9?t:"0"+t}`}(i,a)}function d(e){const t=document.querySelector(".game-level");let s='<div class="level">';for(let t=1;t<=e;t++)s+='<div class="card"></div>';s+="</div>",t.innerHTML=s,function(){const e=document.querySelector(".header");e.innerHTML='\n  <div class="timer">\n    <div class="timer-box">\n      <div class="expiration-time">\n          <span class="text-name min">min</span>\n          <span class="text-name sec">sek</span>\n      </div>\n      <div class="time">\n        <span class="time-text interval minutes">00</span>\n        <span class="time-text">.</span>\n        <span class="time-text interval seconds">00</span>\n      </div>\n    </div>\n  </div>\n  <button class="game-begin">Начать заново</button>\n    ',e.classList.remove("hide"),buttonElement=document.querySelector(".game-begin"),buttonElement.addEventListener("click",(()=>{d()}))}();const n=document.querySelectorAll(".card"),i=function(e,t){let s=[];for(let n=0;n<t/2;n++)s.push(e[Math.floor(Math.random()*e.length)]);return s=s.concat(s),s.sort((()=>Math.random()-.5)),s}(function(e){const t=function(e){for(let t=e.length-1;t>0;t--){const s=Math.floor(Math.random()*(t+1));[e[t],e[s]]=[e[s],e[t]]}return e}(["/static/img/sixDiamonds.jpg","/static/img/sixCross.jpg","/static/img/sixSpades.jpg","/static/img/sixHearts.jpg","/static/img/sevenDiamonds.jpg","/static/img/sevenCross.jpg","/static/img/sevenSpades.jpg","/static/img/sevenHearts.jpg","/static/img/eightDiamonds.jpg","/static/img/eightCross.jpg","/static/img/eightSpades.jpg","/static/img/eightHearts.jpg","/static/img/nineDiamonds.jpg","/static/img/nineCross.jpg","/static/img/nineSpades.jpg","/static/img/nineHearts.jpg","/static/img/tenDiamonds.jpg","/static/img/tenCross.jpg","/static/img/tenHearts.jpg","/static/img/tenSpades.jpg","/static/img/jackOfDiamonds.jpg","/static/img/jackOfCross.jpg","/static/img/jackOfSpades.jpg","/static/img/jackOfHearts.jpg","/static/img/ladyOfDiamonds.jpg","/static/img/ladyOfSpades.jpg","/static/img/ladyOfTheCross.jpg","/static/img/ladyOfHearts.jpg","/static/img/kingOfDiamonds.jpg","/static/img/kingOfCross.jpg","/static/img/kingOfSpades.jpg","/static/img/kingOfHearts.jpg","/static/img/aceOfDiamonds.jpg","/static/img/aceOfCross.jpg","/static/img/aceOfSpades.jpg","/static/img/aceOfHearts.jpg"]);switch(e){case 6:return t.slice(0,3);case 12:return t.slice(0,6);case 18:return t.slice(0,9);default:throw new Error(`Invalid initial count: ${e}`)}}(e),e);console.log(i);let a=[];n.forEach(((e,t)=>{e.classList.add("open");const s=i[t];e.style.backgroundImage=`url(${s})`,setTimeout((()=>{e.classList.remove("open"),e.style.backgroundImage="url(/static/img/shirt.jpg)"}),5e3),e.addEventListener("click",(()=>{if(a.length<2&&(e.classList.add("open"),e.style.backgroundImage=`url(${s})`,a.push(e),2===a.length)){const e=a[0],t=a[1],s=e.style.backgroundImage,n=t.style.backgroundImage;if(s===n){if(a=[],e.classList.add("successfully"),t.classList.add("successfully"),s===n){a=[],e.classList.add("successfully"),t.classList.add("successfully");const s=Array.from(document.querySelectorAll(".card")).every((e=>e.classList.contains("successfully")));s&&function(){const e=document.querySelector(".modal-win-lost"),t=`\n<div class="modal-box-win-lost">\n  <div class="win-lost-img">\n    <img src="/static/celebration.png" alt="Вы выиграли">\n  </div>\n  <div class="box-text-result">\n    <p class="text-resulte">Вы выиграли!</p>\n  </div>\n  <div class="menu-timer">\n    <p class="timer-text">Затраченное время:</p>\n    <p class="timer-text-time">${r()}</p>\n  </div>\n  <button class="game-restart">Играть снова</button>\n</div>\n`;e.innerHTML=t,e.classList.add("open");const s=document.querySelector(".modal"),n=document.querySelector(".game-restart"),i=document.querySelector(".game-level"),a=document.querySelector(".header");n.addEventListener("click",(()=>{i.innerHTML="",a.classList.add("hide"),s.style.display="",e.classList.remove("open"),o(),m()}))}()}}else setTimeout((()=>{e.classList.remove("open"),e.style.backgroundImage="url(/static/img/shirt.jpg)",t.classList.remove("open"),t.style.backgroundImage="url(/static/img/shirt.jpg)",a=[],function(){const e=document.querySelector(".modal-win-lost");o();const t=`\n  <div class="modal-box-win-lost">\n  <div class="win-lost-img">\n    <img src="/static/dead.png" alt="Вы проиграли">\n  </div>\n  <div class="box-text-result">\n    <p class="text-resulte">Вы проиграли!</p>\n    </div>\n    <div class="menu-timer">\n      <p class="timer-text">Затраченное время:</p>\n      <p class="timer-text-time">${r()}</p>\n    </div>\n    <button class="game-restart">Играть снова</button>\n    </div>\n  `;e.innerHTML=t,e.classList.add("open");const s=document.querySelector(".modal"),n=document.querySelector(".game-restart"),i=document.querySelector(".game-level"),a=document.querySelector(".header");n.addEventListener("click",(()=>{i.innerHTML="",a.classList.add("hide"),s.style.display="",e.classList.remove("open"),o(),m()}))}()}),1e3)}}))})),setTimeout(c,5e3)}function m(){document.querySelector(".modal").innerHTML='\n    <div class="modal-box">\n    <form>\n      <div class="box-text">\n        <p class="text">Выбери сложность</p>\n      </div>\n      <div class="menu-difficulty">\n        <label class="menu-choice">\n          <input type="radio" name="difficulty" id="easy" value="1" />\n          <span class="menu-text">1</span>\n        </label>\n        <label class="menu-choice">\n          <input type="radio" name="difficulty" id="medium" value="2" />\n          <span class="menu-text">2</span>\n        </label>\n        <label class="menu-choice">\n          <input type="radio" name="difficulty" id="hard" value="3" />\n          <span class="menu-text">3</span>\n        </label>\n      </div>\n      <button class="game-start">Старт</button>\n    </form>\n  </div>\n    ';const e=document.querySelector("form"),t=document.querySelector(".modal");e.addEventListener("submit",(e=>{e.preventDefault(),console.log("submit");const s=document.querySelector('input[name="difficulty"]:checked');if(s){const e=s.value;"1"===e?(t.style.display="none",d(6),console.log("Первый уровень сложности 6 карт")):"2"===e?(t.style.display="none",d(12),console.log("Первый уровень сложности 12 карт")):"3"===e&&(t.style.display="none",d(18),console.log("Первый уровень сложности 18 карт"))}else alert("Выберете уровень сложности")}))}m()})();