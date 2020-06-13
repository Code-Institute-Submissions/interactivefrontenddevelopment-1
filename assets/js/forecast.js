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
    fetch(`${api.baseurl}forecast?q=${query}&units=metric&APPID=${api.key}`)
    .then(forecast => {
        return forecast.json();
    }).then(displayResults);
}
/*Pull info from openweather api*/
function displayResults (forecast) {
    console.log(forecast);

    let city = document.querySelector('.location .city');
    city.innerText = `${forecast.city.name}, ${forecast.city.country}`;

    let day1 = document.querySelector('.forecast .day1');
    day1.innerText = ` \n ${Math.round(forecast.list[3].main.temp)}°C, \n ${forecast.list[6].weather[0].description} \n `;

    let day2 = document.querySelector('.forecast .day2');
    day2.innerText = ` \n ${Math.round(forecast.list[11].main.temp)}°C, \n ${forecast.list[14].weather[0].description} \n `;

    let day3 = document.querySelector('.forecast .day3');
    day3.innerText = ` \n ${Math.round(forecast.list[19].main.temp)}°C, \n ${forecast.list[22].weather[0].description} \n `;

    let day4 = document.querySelector('.forecast .day4');
    day4.innerText = ` \n ${Math.round(forecast.list[27].main.temp)}°C, \n ${forecast.list[30].weather[0].description} \n `;

    let day5 = document.querySelector('.forecast .day5');
    day5.innerText = ` \n ${Math.round(forecast.list[35].main.temp)}°C, \n ${forecast.list[38].weather[0].description} \n `;

    let date1 = document.querySelector('.date1');
    date1.innerText = `${forecast.list[3].dt_txt}, \n`;

    let date2 = document.querySelector('.date2');
    date2.innerText = `${forecast.list[11].dt_txt}, \n`;

    let date3 = document.querySelector('.date3');
    date3.innerText = `${forecast.list[19].dt_txt}, \n`;

    let date4 = document.querySelector('.date4');
    date4.innerText = `${forecast.list[27].dt_txt}, \n`;

    let date5 = document.querySelector('.date5');
    date5.innerText = `${forecast.list[35].dt_txt}, \n`;

   

    /* Get icons from Openweather API */

    let weatherIcontoday = document.querySelector(".weathericontoday");
   weatherIcontoday.innerText = `${forecast.list[3].weather[0].icon}`; 
   let weatherIcontomorrow = document.querySelector(".weathericontomorrow");
   weatherIcontomorrow.innerText = `${forecast.list[11].weather[0].icon}`; 
   let weatherIconday3 = document.querySelector(".weathericonday3");
   weatherIconday3.innerText = `${forecast.list[19].weather[0].icon}`; 
   let weatherIconday4 = document.querySelector(".weathericonday4");
   weatherIconday4.innerText = `${forecast.list[27].weather[0].icon}`; 
   let weatherIconday5 = document.querySelector(".weathericonday5");
   weatherIconday5.innerText = `${forecast.list[35].weather[0].icon}`; 

   let weatherIcontoday2 = document.querySelector(".weathericontoday");
  weatherIcontoday2.innerText = "https://openweathermap.org/img/w/" + weatherIcontoday + ".png";
$(".weathericontoday").html("<img src='https://openweathermap.org/img/wn/" + forecast.list[3].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

let weatherIcontomorrow2 = document.querySelector(".weathericontomorrow");
  weatherIcontomorrow2.innerText = "https://openweathermap.org/img/w/" + weatherIcontomorrow + ".png";
$(".weathericontomorrow").html("<img src='https://openweathermap.org/img/wn/" + forecast.list[11].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

let weatherIconday32 = document.querySelector(".weathericonday3");
  weatherIconday32.innerText = "https://openweathermap.org/img/w/" + weatherIconday3 + ".png";
$(".weathericonday3").html("<img src='https://openweathermap.org/img/wn/" + forecast.list[19].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

let weatherIconday42 = document.querySelector(".weathericonday4");
  weatherIconday42.innerText = "https://openweathermap.org/img/w/" + weatherIconday4 + ".png";
$(".weathericonday4").html("<img src='https://openweathermap.org/img/wn/" + forecast.list[27].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

let weatherIconday52 = document.querySelector(".weathericonday5");
  weatherIconday52.innerText = "https://openweathermap.org/img/w/" + weatherIconday5 + ".png";
$(".weathericonday5").html("<img src='https://openweathermap.org/img/wn/" + forecast.list[35].weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>"); 

}


/* Run animated headline above weather info*/

$(function() {
        $('.animate-push').animatedHeadline({
            animationType: 'push'
        });
    });
