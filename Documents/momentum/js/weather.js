
const API_KEY="ff9f5c4e63f61719414de83e011d95e2";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then( (data) =>{
        const weather = document.querySelector("#city_weather span:first-child");
        const city = document.querySelector("#city_weather span:last-child");
        const temp = document.querySelector("#temp_humid span:first-child");
        const humid = document.querySelector("#temp_humid span:last-child");
        const feels_like = document.querySelector("#feels_like span:first-child");

        weather.innerText = data.weather[0].main +",";
        city.innerText = data.name;
        temp.innerText = data.main.temp + "℃, ";
        humid.innerText = data.main.humidity + "%";
        feels_like.innerText = "체감온도 : " + data.main.feels_like + "℃";
    });
}

function onGeoError(){
    alert("Can't find Location");
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);