/* JS file for search.html to load weather based on user search */
/*Openweather API key*/

const api = {
    key: "73758c02ea981f5a32c0ab44ef2f4078",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

/*Set search box*/
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    console.log(searchbox.value);
    }
}

/*Get info from api based on api key*/
function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

/*Pull info from openweather api*/
function displayResults (weather) {
    console.log(weather);

    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.current .temp');
    temp.innerText = `${Math.round(weather.main.temp)}°C`;

    let weatherstatus = document.querySelector('.current .weather');
    weatherstatus.innerText = `${weather.weather[0].main}`;

    let hilo = document.querySelector('.hi-low');
    hilo.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;

     let date = document.querySelector('.date');
    date.innerText = `${weather.dt}`;
    
    /*Get icons from Openweather API*/
   let weatherIcon = document.querySelector(".weathericon2");
   weatherIcon.innerText = `${weather.weather[0].icon}`; 

   let weatherIcon2 = document.querySelector(".weathericon2");
  weatherIcon2.innerText = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
$(".weathericon2").html("<img src='http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 


/* Convert unix timestamp to readable time/date */
     var longtime = `${weather.dt}`;
var searchdate = new Date(longtime * 1000);
var searchtime = searchdate.toLocaleTimeString();
$(".searchdate").html(searchdate);
$(".searchtime").html(searchtime);

}


/* Run animated headline above weather info*/
$(function() {

        $('.animate-slide').animatedHeadline({
            animationType: 'slide'
        });
    });
