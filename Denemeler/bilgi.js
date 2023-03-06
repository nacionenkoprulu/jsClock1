//Kod satırını buraya ekleyiniz.



let isim = prompt("İsminiz");
let element = document.querySelector("#myName");
element.innerHTML=isim;

let div = document.querySelector("#myClock");

function Time(){
  var now = new Date()
  var hour=now.getHours()
  var minute=now.getMinutes()
  var second=now.getSeconds()
  var day = now.getDay()

  let gunTutucu= ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

  div.innerHTML= `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} ${gunTutucu[day]}` ;
}
setInterval(Time,1000);
l 
