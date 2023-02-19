let deadline = '2023-03-28'

function getTimerData(dl){
    let timer = Date.parse(dl) - Date.parse(new Date()),
    days = Math.floor((timer / ( 1000 * 60 * 60 * 24))),
    hours = Math.floor((timer / ( 1000 * 60 * 60)) % 24),
    minutes = Math.floor((timer / ( 1000 * 60)) % 60),
    seconds = Math.floor((timer / 1000 ) % 60)

    if(timer < 0){
        return{
            t:0,
            days:0,
            hours:0,
            minutes:0,
            seconds:0,
        }
    }

    return {
        t:timer,
        days,
        hours,
        minutes,
        seconds
    }
}

function showTimer(showDl){
    let daysEL = document.querySelector('.days'),
        hoursEL = document.querySelector('.hours'),
        minutesEL = document.querySelector('.minutes'),
        secondsEL = document.querySelector('.seconds')
    
    let timerId = setInterval(updateTimer, 1000)
   
    updateTimer()

    function updateTimer(){
        let timer = getTimerData(showDl)

        daysEL.innerHTML = addZero(timer.days)
        hoursEL.innerText = addZero(timer.hours)
        minutesEL.innerText = addZero(timer.minutes)
        secondsEL.innerText = addZero(timer.seconds)
    }

}

function addZero(num){
   if(num > 0 && num < 10){
    return `0${num}`
   }else{
    return num
   }
}

  showTimer(deadline)

