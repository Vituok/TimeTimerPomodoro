

//header
const timerBtn = document.getElementById('timerBtn')
const timeBtn = document.getElementById('timeBtn')
const pomodoroBtn = document.getElementById('pomodoroBtn')

//start btn for timer & pomodoro
const timerStartBtn = document.getElementById('timerStartBtn')
const pomodoroStartBtn = document.getElementById('pomodoroStartBtn')

//div of pomodoro --- 3 button - select time
const IntervalPomodoro = document.getElementById("IntervalPomodoro")

//div for Timer --- input time 
const inputTime = document.getElementById('inputTime')

//clock numbers  | 00:00 |
const min_tens = document.getElementById("min_tens")
const min = document.getElementById("min")
const sec_tens = document.getElementById("sec_tens")
const sec = document.getElementById("sec")

//function for start & stop Time


function updateTime(){

    console.log("Lets Go")
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()
        
    min_tens.textContent = Math.floor(hours/10) 
    min.textContent = hours % 10
    sec_tens.textContent = Math.floor(minutes/10) 
    sec.textContent = minutes % 10
    
}
const myInterval = setInterval(updateTime, 100); 
        
function myStop() {

    clearInterval(myInterval)
    console.log('STOPED')

    min_tens.textContent = 0 
    min.textContent = 0
    sec_tens.textContent = 0 
    sec.textContent = 0

}
    


//POMODORO

pomodoroBtn.addEventListener('click',()=>{

    pomodoroBtn.classList.add('activeBtn')
    timeBtn.classList.remove('activeBtn')
    timerBtn.classList.remove('activeBtn')

    timerStartBtn.classList.add('none')
    inputTime.classList.add('none')

    pomodoroStartBtn.classList.remove('none')
    IntervalPomodoro.classList.remove("none")



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

    inputTime.classList.remove('none')
    timerStartBtn.classList.remove('none')

    IntervalPomodoro.classList.add("none")
    pomodoroStartBtn.classList.add('none')
})

if (timerBtn.classList.contains('activeBtn')){

    min_tens.innerHTML === 0
    min.innerHTML === 0
    sec_tens.innerHTML === 0
    sec.innerHTML = 0

}



//Time


timeBtn.addEventListener('click',()=>{

    pomodoroBtn.classList.remove('activeBtn')
    timeBtn.classList.add('activeBtn')
    timerBtn.classList.remove('activeBtn')

    
    IntervalPomodoro.classList.add("none")
    pomodoroStartBtn.classList.add('none')

    timerStartBtn.classList.add('none')
    inputTime.classList.add('none')

    myInterval
    
    
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