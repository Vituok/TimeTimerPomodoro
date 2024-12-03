

//header Menu btn
const timerBtn = document.getElementById('timerBtn')
const timeBtn = document.getElementById('timeBtn')
const pomodoroBtn = document.getElementById('pomodoroBtn')

//div time | div timer | div pomodoro
const timer = document.getElementById('timer')
const time = document.getElementById('time')
const pomodoro = document.getElementById('pomodoro')


// ___________________________________________________________________________Time
//clock numbers for TIME  | 00:00 |
const timeMinTens = document.getElementById("timeMinTens")
const timeMin = document.getElementById("timeMin")
const timeSecTens = document.getElementById("timeSecTens")
const timeSec = document.getElementById("timeSec")



// ___________________________________________________________________________Timer
//clock numbers for TIMER  | 00:00 |
const timerMinTens = document.getElementById("timerMinTens")
const timerMin = document.getElementById("timerMin")
const timerSecTens = document.getElementById("timerSecTens")
const timerSec = document.getElementById("timerSec")

//Timer --- input time 
const timerInputTime = document.getElementById('TimerInputTime')
const TimerInputMin = document.getElementById('TimerInputMin')

// buttons for timer
const timerStartBtn = document.getElementById('timerStartBtn').addEventListener("click",timerStart)
const timerStopBtn = document.getElementById('timerStopBtn').addEventListener("click",timerStop)



// ___________________________________________________________________________Pomodoro
//clock numbers for POMODORO  | 00:00 |
const pomodoroMinTens = document.getElementById("pomodoroMinTens")
const pomodoroMin = document.getElementById("pomodoroMin")
const pomodoroSecTens = document.getElementById("pomodoroSecTens")
const pomodoroSec = document.getElementById("pomodoroSec")

//start btn for pomodoro
const pomodoroStartBtn = document.getElementById('pomodoroStartBtn')

//div of pomodoro --- 3 button - select time
const IntervalPomodoro = document.getElementById("IntervalPomodoro")

const Pomodoro = document.getElementById("Pomodoro")
const ShortBreak = document.getElementById("ShortBreak")
const LongBreak = document.getElementById("LongBreak")



//___________________________________________________________________________TIMER

let newValue =document.getElementById('TimerInputMin').addEventListener("change", timerRestart) 

let timerInterval;

let i = 0
function timerStart(){

    

    if(!timerInterval){
        timerInterval = setInterval(timerFinalStart, 1000)
    }

} 
 
function timerRestart(){
    i = 0;
    timerFinalStart()
}

function timerFinalStart(){
    
    let value =document.getElementById('TimerInputMin').value

    let timerNow = (value*60) - i
    if (timerNow > 0){
        i+=1; 
    }
    
        let timeLeftInMin = Math.floor(timerNow / 60)
        
    timerMinTens.textContent = Math.floor((timerNow / 60)/10) 
    timerMin.textContent = Math.floor(timerNow/60) % 10
    timerSecTens.textContent = Math.floor((timerNow - (timeLeftInMin * 60))/10)
    timerSec.textContent = (timerNow - (timeLeftInMin * 60)) % 10
    
}

function timerStop(){
    clearInterval(timerInterval)
    timerInterval = null
}






//function for start
function updateTime(){


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





//POMODORO

pomodoroBtn.addEventListener('click',()=>{

    pomodoroBtn.classList.add('activeBtn')
    timeBtn.classList.remove('activeBtn')
    timerBtn.classList.remove('activeBtn')

    pomodoro.classList.remove('none')
    time.classList.add('none')
    timer.classList.add('none')

    Pomodoro.addEventListener("click", pomodoroStart);
    ShortBreak.addEventListener("click", ShortBreakFunction);
    LongBreak.addEventListener("click", LongBreakFunction);

    let pomodoroInterval;

    let i = 0
    function pomodoroStart(){
    
        
    
        if(!pomodoroInterval){
            pomodoroInterval = setInterval(PomodoroFunction, 1000)
        }
    
    } 
      

    function PomodoroFunction(){
        
        let timerNow = (25*60) - i
        i+=1; 
        let timeLeftInMin = Math.floor(timerNow / 60)
    
        pomodoroMinTens.textContent = Math.floor((timerNow / 60)/10) 
        pomodoroMin.textContent = Math.floor(timerNow/60) % 10
        pomodoroSecTens.textContent = Math.floor((timerNow - (timeLeftInMin * 60))/10)
        pomodoroSec.textContent = (timerNow - (timeLeftInMin * 60)) % 10
        
    }
    
    function ShortBreakFunction(){
    
        let timerNow = (5*60) - i
        i+=1; 
        let timeLeftInMin = Math.floor(timerNow / 60)
    
        pomodoroMinTens.textContent = Math.floor((timerNow / 60)/10) 
        pomodoroMin.textContent = Math.floor(timerNow/60) % 10
        pomodoroSecTens.textContent = Math.floor((timerNow - (timeLeftInMin * 60))/10)
        pomodoroSec.textContent = (timerNow - (timeLeftInMin * 60)) % 10
        
    }

    
    
    function LongBreakFunction(){
    
        let timerNow = (15*60) - i
        i+=1; 
        let timeLeftInMin = Math.floor(timerNow / 60)
    
        pomodoroMinTens.textContent = Math.floor((timerNow / 60)/10) 
        pomodoroMin.textContent = Math.floor(timerNow/60) % 10
        pomodoroSecTens.textContent = Math.floor((timerNow - (timeLeftInMin * 60))/10)
        pomodoroSec.textContent = (timerNow - (timeLeftInMin * 60)) % 10
        
    }


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