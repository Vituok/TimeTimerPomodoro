

const min_tens = document.getElementById("min_tens")
const min = document.getElementById("min")
const sec_tens = document.getElementById("sec_tens")
const sec = document.getElementById("sec")

// min_tens.textContent = 0
// min.textContent = 0
// sec_tens.textContent = 4
// sec.textContent = 5


//Timer




//time
const inputTime = document.getElementById('inputTime').classList.add("none");
const submitBtn = document.getElementById('submitBtn').classList.add("none");
const inputMin = document.getElementById("inputMin")

let count = 0;

const intervalId = setInterval(() => {

count++;
}, 1000);

const submit = document.getElementById('submitBtn')
submit.addEventListener('click', intervalId => {
   
})

const Time = setInterval(()=>{

    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()

    min_tens.textContent = Math.floor(hours/10) 
    min.textContent = hours % 10
    sec_tens.textContent = Math.floor(minutes/10) 
    sec.textContent = minutes % 10

},100)




//Pomodoro