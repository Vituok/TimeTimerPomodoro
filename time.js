

//header menu btn
const timerBtn = document.getElementById('timerBtn')
const timeBtn = document.getElementById('timeBtn')
const pomodoroBtn = document.getElementById('pomodoroBtn')

//div time | div timer | div pomodoro
const timer = document.getElementById('timer')
const time = document.getElementById('time')
const pomodoro = document.getElementById('pomodoro')

//start btn for timer & pomodoro
const timerStartBtn = document.getElementById('timerStartBtn')
const pomodoroStartBtn = document.getElementById('pomodoroStartBtn')

//div of pomodoro --- 3 button - select time
const IntervalPomodoro = document.getElementById("IntervalPomodoro")

//div for Timer --- input time 
const inputTime = document.getElementById('inputTime')

//clock numbers for TIME  | 00:00 |
const timeMinTens = document.getElementById("timeMinTens")
const timeMin = document.getElementById("timeMin")
const timeSecTens = document.getElementById("timeSecTens")
const timeSec = document.getElementById("timeSec")

//clock numbers for TIME  | 00:00 |
const timerMinTens = document.getElementById("timerMinTens")
const timerMin = document.getElementById("timerMin")
const timerSecTens = document.getElementById("timerSecTens")
const timerSec = document.getElementById("timerSec")

//clock numbers for TIME  | 00:00 |
const pomodoroMinTens = document.getElementById("pomodoroMinTens")
const pomodoroMin = document.getElementById("pomodoroMin")
const pomodoroSecTens = document.getElementById("pomodoroSecTens")
const pomodoroSec = document.getElementById("pomodoroSec")

//function for start
function updateTime(){

    console.log("Lets Go")
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
        
    timeMinTens.textContent = Math.floor(hours/10) 
    timeMin.textContent = hours % 10
    timeSecTens.textContent = Math.floor(minutes/10) 
    timeSec.textContent = minutes % 10
    
}
const myInterval = setInterval(updateTime, 1000); 
  





//Time


timeBtn.addEventListener('click',()=>{

    pomodoroBtn.classList.remove('activeBtn')
    timeBtn.classList.add('activeBtn')
    timerBtn.classList.remove('activeBtn')

    pomodoro.classList.add('none')
    time.classList.remove('none')
    timer.classList.add('none')


  
   
})



// //function for stop Time
// function myStop() {

// clearInterval(myInterval)
// console.log('STOPED')

// min_tens.textContent = 0 
// min.textContent = 0
// sec_tens.textContent = 0 
// sec.textContent = 0

// }

//POMODORO

pomodoroBtn.addEventListener('click',()=>{

    pomodoroBtn.classList.add('activeBtn')
    timeBtn.classList.remove('activeBtn')
    timerBtn.classList.remove('activeBtn')

    pomodoro.classList.remove('none')
    time.classList.add('none')
    timer.classList.add('none')




    //     const PomodoroTime = 1500
    //     const PomodoroMin = PomodoroTime / 60
    //     min_tens.textContent = Math.floor(PomodoroMin / 10)
    //     min.textContent = PomodoroMin % 10
    // }


})








//Timer
timerBtn.addEventListener('click',()=>{
  
    pomodoroBtn.classList.remove('activeBtn')
    timeBtn.classList.remove('activeBtn')
    timerBtn.classList.add('activeBtn')

    pomodoro.classList.add('none')
    time.classList.add('none')
    timer.classList.remove('none')

})









   

// timerBtn.addEventListener('click',()=>{ 
    

//     timerBtn.classList.remove('activeBtn')
//     timerStartBtn.classList.add('none')

//     timeBtn.classList.add('activeBtn')

//     
//     const submitBtn = document.getElementById('submitBtn')
//     const inputMin = document.getElementById("inputMin") 

//     inputTime.classList.add("none");
//     submitBtn.classList.add("none");
//     inputMin.classList.add("none");

// let count = 0;

// const intervalId = setInterval(() => {

// count++;
// }, 1000);

// const submit = document.getElementById('submitBtn')
// submit.addEventListener('click', intervalId => {
   
// })



// 
// })