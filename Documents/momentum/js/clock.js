const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    let AM_PM;
    if(hours >=12){
        AM_PM = "오후";
        hours -=12;
    } else {
        AM_PM = "오전";
    }
    
    clock.innerText = ` ${AM_PM} ${hours}:${minutes}:${seconds}`;
}

function getDate(){
    console.log("hi");
}

getClock();
setInterval(getClock,1000);
//setTimeout(sayHi,5000);

