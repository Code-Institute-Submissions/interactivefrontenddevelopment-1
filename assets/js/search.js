const api = {
    key: "73758c02ea981f5a32c0ab44ef2f4078",
    baseurl: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
        getResults(searchbox.value);
    console.log(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

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
    
   let weatherIcon = document.querySelector(".weathericon2");
   weatherIcon.innerText = `${weather.weather[0].icon}`; 

   let weatherIcon2 = document.querySelector(".weathericon2");
  weatherIcon2.innerText = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
$(".weathericon2").html("<img src='http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 




     var longtime = `${weather.dt}`;
var searchdate = new Date(longtime * 1000);
var searchtime = searchdate.toLocaleTimeString();
$(".searchdate").html(searchdate);
$(".searchtime").html(searchtime);

}



$(function() {
        $('.animate-rotate-1').animatedHeadline({
            animationType: 'rotate-1'
        });

        $('.animate-type').animatedHeadline({
            animationType: 'type'
        });

        $('.animate-rotate-2').animatedHeadline({
            animationType: 'rotate-2'
        });

        $('.animate-loading-bar').animatedHeadline({
            animationType: 'loading-bar'
        });

        $('.animate-slide').animatedHeadline({
            animationType: 'slide'
        });

        $('.animate-clip').animatedHeadline({
            animationType: 'clip'
        });

        $('.animate-zoom').animatedHeadline({
            animationType: 'zoom'
        });

        $('.animate-rotate-3').animatedHeadline({
            animationType: 'rotate-3'
        });

        $('.animate-scale').animatedHeadline({
            animationType: 'scale'
        });

        $('.animate-push').animatedHeadline({
            animationType: 'push'
        });
    });
