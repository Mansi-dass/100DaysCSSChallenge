const date= document.querySelector("#date");
const time= document.querySelector("#time");
const path= document.querySelector("#timer-path");
let perimeter = path.getTotalLength();

document.body.style.setProperty('--dasharray', perimeter );

let timer=setInterval(function() {
    time.innerHTML = new Date().toTimeString().substring(0,5)
},1000)

let curdate= new Date()
let day= (curdate.toDateString().substring(0,3)).toUpperCase()
let date_ofM = curdate.getDate()
let month = (curdate.toDateString().substring(4,7)).toUpperCase()
let year = curdate.getFullYear()

date.innerHTML =`${day} ${date_ofM} ${month} ${year}`