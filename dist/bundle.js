(()=>{"use strict";function t(t){const s=document.querySelector(".game-level");let e='<div class="level">';for(let s=1;s<=t;s++)e+='<div class="card"></div>';e+="</div>",s.innerHTML=e,document.querySelector(".header").innerHTML='\n    <div class="timer">\n    <div class="timer-box">\n      <div class="expiration-time">\n          <p class="text-name min">min</p>\n          <p class="text-name sec">sek</p>\n      </div>\n      <div class="time">\n        <P class="time-text">00.00</P>\n      </div>\n    </div>\n  </div>\n  <button class="game-begin">Начать заново</button>\n    ';const i=document.querySelectorAll(".card"),a=function(t){const s=["/static/img/sixDiamonds.jpg","/static/img/sixCross.jpg","/static/img/sixSpades.jpg","/static/img/sixHearts.jpg","/static/img/sevenDiamonds.jpg","/static/img/sevenCross.jpg","/static/img/sevenSpades.jpg","/static/img/sevenHearts.jpg","/static/img/eightDiamonds.jpg","/static/img/eightCross.jpg","/static/img/eightSpades.jpg","/static/img/eightHearts.jpg","/static/img/nineDiamonds.jpg","/static/img/nineCross.jpg","/static/img/nineSpades.jpg","/static/img/nineHearts.jpg","/static/img/tenDiamonds.jpg","/static/img/tenCross.jpg","/static/img/tenHearts.jpg","/static/img/tenSpades.jpg","/static/img/jackOfDiamonds.jpg","/static/img/jackOfCross.jpg","/static/img/jackOfSpades.jpg","/static/img/jackOfHearts.jpg","/static/img/ladyOfDiamonds.jpg","/static/img/ladyOfSpades.jpg","/static/img/ladyOfTheCross.jpg","/static/img/ladyOfHearts.jpg","/static/img/kingOfDiamonds.jpg","/static/img/kingOfCross.jpg","/static/img/kingOfSpades.jpg","/static/img/kingOfHearts.jpg","/static/img/aceOfDiamonds.jpg","/static/img/aceOfCross.jpg","/static/img/aceOfSpades.jpg","/static/img/aceOfHearts.jpg"];switch(t){case 6:return s.slice(0,3);case 12:return s.slice(0,6);case 18:return s.slice(0,9);default:throw new Error(`Invalid initial count: ${t}`)}}(t),n=(t=>{let s=[];t.forEach((t=>{s.push(t,t)}));let e,i=s.slice(),a=s.length;for(;a>0;)e=Math.floor(Math.random()*a),a--,[i[a],i[e]]=[i[e],i[a]];return i})(a);console.log(n);let c=[];i.forEach(((t,s)=>{t.classList.add("open");const e=n[s];t.style.backgroundImage=`url(${e})`,setTimeout((()=>{t.classList.remove("open"),t.style.backgroundImage="url(/static/img/shirt.jpg)"}),5e3),t.addEventListener("click",(()=>{if(c.length<2&&(t.classList.add("open"),t.style.backgroundImage=`url(${e})`,c.push(t),2===c.length)){const t=c[0],s=c[1];t.style.backgroundImage===s.style.backgroundImage?(c=[],t.classList.add("successfully"),s.classList.add("successfully"),alert("Вы победили")):setTimeout((()=>{t.classList.remove("open"),t.style.backgroundImage="url(/static/img/shirt.jpg)",s.classList.remove("open"),s.style.backgroundImage="url(/static/img/shirt.jpg)",c=[],alert("вы проиграли")}),1e3)}}))}))}!function(){document.querySelector(".modal").innerHTML='\n    <div class="modal-box">\n    <form>\n      <div class="box-text">\n        <p class="text">Выбери сложность</p>\n      </div>\n      <div class="menu-difficulty">\n        <label class="menu-choice">\n          <input type="radio" name="difficulty" id="easy" value="1" />\n          <span class="menu-text">1</span>\n        </label>\n        <label class="menu-choice">\n          <input type="radio" name="difficulty" id="medium" value="2" />\n          <span class="menu-text">2</span>\n        </label>\n        <label class="menu-choice">\n          <input type="radio" name="difficulty" id="hard" value="3" />\n          <span class="menu-text">3</span>\n        </label>\n      </div>\n      <button class="game-start">Старт</button>\n    </form>\n  </div>\n    ';const s=document.querySelector("form"),e=document.querySelector(".modal");s.addEventListener("submit",(s=>{s.preventDefault(),console.log("submit");const i=document.querySelector('input[name="difficulty"]:checked');if(i){const s=i.value;"1"===s?(e.style.display="none",t(6),console.log("Первый уровень сложности 6 карт")):"2"===s?(e.style.display="none",t(12),console.log("Первый уровень сложности 12 карт")):"3"===s&&(e.style.display="none",t(18),console.log("Первый уровень сложности 18 карт"))}else alert("Выберете уровень сложности")}))}()})();