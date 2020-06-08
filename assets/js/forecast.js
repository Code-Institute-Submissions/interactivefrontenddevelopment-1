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
    fetch(`${api.baseurl}forecast?q=${query}&units=metric&APPID=${api.key}`)
    .then(forecast => {
        return forecast.json();
    }).then(displayResults);
}

function displayResults (forecast) {
    console.log(forecast);

    let city = document.querySelector('.location .city');
    city.innerText = `${forecast.city.name}, ${forecast.city.country}`;

    let day1 = document.querySelector('.forecast .day1');
    day1.innerText = `${forecast.list[6].dt_txt}, ${forecast.list[6].main.temp}, ${forecast.list[6].weather[0].description} `;

    let day2 = document.querySelector('.forecast .day2');
    day2.innerText = `${forecast.list[14].dt_txt}, ${forecast.list[14].main.temp}, ${forecast.list[14].weather[0].description} `;


    let day3 = document.querySelector('.forecast .day3');
    day3.innerText = `${forecast.list[22].dt_txt}, ${forecast.list[22].main.temp}, ${forecast.list[22].weather[0].description} `;

    let day4 = document.querySelector('.forecast .day4');
    day4.innerText = `${forecast.list[30].dt_txt}, ${forecast.list[30].main.temp}, ${forecast.list[30].weather[0].description} `;

    let day5 = document.querySelector('.forecast .day5');
    day5.innerText = `${forecast.list[38].dt_txt}, ${forecast.list[38].main.temp}, ${forecast.list[38].weather[0].description} `;

    

    /* return to this to get icon working on forecast */

    let weatherIcontoday = document.querySelector(".weathericontoday");
   weatherIcontoday.innerText = `${forecast.list[6].weather[0].icon}`; 
   let weatherIcontomorrow = document.querySelector(".weathericontomorrow");
   weatherIcontomorrow.innerText = `${forecast.list[14].weather[0].icon}`; 
   let weatherIconday3 = document.querySelector(".weathericonday3");
   weatherIconday3.innerText = `${forecast.list[22].weather[0].icon}`; 
   let weatherIconday4 = document.querySelector(".weathericonday4");
   weatherIconday4.innerText = `${forecast.list[30].weather[0].icon}`; 
   let weatherIconday5 = document.querySelector(".weathericonday5");
   weatherIconday5.innerText = `${forecast.list[38].weather[0].icon}`; 

   let weatherIcontoday2 = document.querySelector(".weathericontoday");
  weatherIcontoday2.innerText = "http://openweathermap.org/img/w/" + weatherIcontoday + ".png";
$(".weathericontoday").html("<img src='http://openweathermap.org/img/wn/" + forecast.list[6].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

let weatherIcontomorrow2 = document.querySelector(".weathericontomorrow");
  weatherIcontomorrow2.innerText = "http://openweathermap.org/img/w/" + weatherIcontomorrow + ".png";
$(".weathericontomorrow").html("<img src='http://openweathermap.org/img/wn/" + forecast.list[14].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

let weatherIconday32 = document.querySelector(".weathericonday3");
  weatherIconday32.innerText = "http://openweathermap.org/img/w/" + weatherIconday3 + ".png";
$(".weathericonday3").html("<img src='http://openweathermap.org/img/wn/" + forecast.list[22].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

let weatherIconday42 = document.querySelector(".weathericonday4");
  weatherIconday42.innerText = "http://openweathermap.org/img/w/" + weatherIconday4 + ".png";
$(".weathericonday4").html("<img src='http://openweathermap.org/img/wn/" + forecast.list[30].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

let weatherIconday52 = document.querySelector(".weathericonday5");
  weatherIconday52.innerText = "http://openweathermap.org/img/w/" + weatherIconday5 + ".png";
$(".weathericonday5").html("<img src='http://openweathermap.org/img/wn/" + forecast.list[38].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

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
