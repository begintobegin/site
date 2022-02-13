const x = document.querySelector(".header__burger");
const n = document.querySelector(".header__list")
x.addEventListener('click',function(){
  x.classList.toggle('active');
  n.classList.toggle('active')
}
)
let date = new Date("May 1 2022 00:00:00")
function counts(){
  const now = new Date();
  gap = date - now;
  let days = Math.floor(gap/1000/60/60/24);
  let hours = Math.floor(gap/1000/60/60)%24;
  let  menutes = Math.floor(gap/1000/60)%60;
  let seconds = Math.floor(gap/1000)%60;
  document.getElementById('d').innerText = days;
  document.getElementById('h').innerText = hours;
  document.getElementById('m').innerText = menutes;
  document.getElementById('s').innerText = seconds;
  if(seconds<10){
    document.getElementById('s').style.padding = '20px 40px'
  }
   if(menutes<10){
    document.getElementById('m').style.padding = '20px 40px'
  }
   if(hours<10){
    document.getElementById('h').style.padding = '20px 40px'
  }
   if(days<10){
    document.getElementById('d').style.padding = '20px 40px'
  }
  
}
setInterval(counts,1000);
counts();
