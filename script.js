function timeDisplay(){

let date = new Date();
let hour = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

let formatHours = formatSet(hour);

hour=twelveHour(hour);

hour=attachZero(hour);
minutes=attachZero(minutes);
seconds=attachZero(seconds);
document.getElementById('clock').innerHTML = `${hour}: ${minutes} : ${seconds}: ${formatHours}`

}

function formatSet(hour){
    let format = 'AM'
    if(hour>=12){
        format= 'PM';
    }
    return format;
}

function twelveHour(hour){
    if(hour>12){
        hour = hour-12;
    }
return hour;
}

function attachZero(hour){
    if(hour<10){
        hour= '0'+hour;
    }
    return hour;
}

timeDisplay();
setInterval(timeDisplay,1000);
