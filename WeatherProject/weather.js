function fetchWeather(){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET","https://classes.engineering.wustl.edu/cse330/content/weather_json.php",true);
    xmlHttp.addEventListener("load",ajaxCallback,false);
    xmlHttp.send(null);
}

let HTMLlocation = document.getElementsByClassName("weather-loc")[0];
let HTMLhumidity = document.getElementsByClassName("weather-humidity")[0];
let HTMLtemp = document.getElementsByClassName("weather-temp")[0];
let HTMLtomorrow = document.getElementsByClassName("weather-tomorrow")[0];
let HTMLdayaftertomorrow = document.getElementsByClassName("weather-dayaftertomorrow")[0];

function ajaxCallback(event) {
    var jsonData = JSON.parse(event.target.responseText);
    var city = jsonData.location.city;
    var state = jsonData.location.state;
    var jsonHumidity = jsonData.atmosphere.humidity;
    var jsonTemp = jsonData.current.temp;
    var tomorrowCode = jsonData.tomorrow.code
    var dayaftertomorrowCode = jsonData.dayafter.code;

    HTMLlocation.innerHTML = city.bold() + " " + state;
    HTMLhumidity.innerHTML = jsonHumidity;
    HTMLtemp.innerHTML = jsonTemp;
    
    var tomorrowNewSrc = 'http://us.yimg.com/i/us/nws/weather/gr/' + tomorrowCode + 'ds.png';
    var dayaftertomorrowNewSrc = 'http://us.yimg.com/i/us/nws/weather/gr/' + dayaftertomorrowCode + 'ds.png';
    HTMLtomorrow.setAttribute('src', tomorrowNewSrc);
    HTMLdayaftertomorrow.setAttribute('src', dayaftertomorrowNewSrc);
}

document.addEventListener("DOMContentLoaded", fetchWeather, false);
document.getElementById("weatherBtn").addEventListener("click", fetchWeather, false);
