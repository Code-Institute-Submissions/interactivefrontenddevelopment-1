/* JS file for index.html to load weather based on browser location */
window.addEventListener('load', ()=> {
    let longtitudecoords;
    let latitudecoords;
    let weatherTemperature = document.querySelector(".h_two_weathertemperature");
    let weatherHumidity = document.querySelector(".h_two_weatherstatus");
    let weatherLocation = document.querySelector(".h_two_weatherlocation");
    let weatherTempmax = document.querySelector(".h_two_weathertempmax");
    let weatherTempmin = document.querySelector(".h_two_weathertempmin");
    let weatherWind = document.querySelector(".h_two_weatherwind");
    let weatherSunrise = document.querySelector(".h_two_weathersunrise");
    let weatherSunset = document.querySelector(".h_two_weathersunset");
    let weatherCountry = document.querySelector(".h_two_weathercountry");
    let weatherIcon = document.querySelector(".weathericon");

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (postion =>{
            longtitudecoords = postion.coords.longitude;
            latitudecoords = postion.coords.latitude;
        
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudecoords}&lon=${longtitudecoords}&units=metric&appid=73758c02ea981f5a32c0ab44ef2f4078`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    /*Pull info from the openweather api*/
                    const { temp, temp_max, temp_min, humidity } = data.main;
                    const { speed } = data.wind;
                    const { country, sunrise, sunset } = data.sys;
                    /*const { description, icon, main } = data.weather;*/
                    
                    /*Display info from api - Round down numbers if necessary*/
                    weatherTemperature.textContent = `${Math.round(temp)}°C`;
                    weatherTempmax.textContent = `${Math.round(temp_max)}°C`;
                    weatherTempmin.textContent = `${Math.round(temp_min)}°C`;
                    weatherHumidity.textContent = `${Math.round(humidity)}%`;
                    weatherWind.textContent = `${Math.round(speed)}km/h`;
                    weatherCountry.textContent = country;
                    weatherSunrise.textContent = sunrise;
                    weatherSunset.textContent = sunset;
                    weatherLocation.textContent = data.name;
                    weatherIcon.textContent = data.weather[0].icon;

/* Convert unix timestamp to readable time/date for sunrise and sunset */
var sunriselongtime = sunrise;
var sunrisedate = new Date(sunriselongtime * 1000);
var sunrisetime = sunrisedate.toLocaleTimeString();
$(".sunrisedate").html(sunrisedate);
$(".sunrisetime").html(sunrisetime);

var sunsetlongtime = sunset;
var sunsetdate = new Date(sunsetlongtime * 1000);
var sunsettime = sunsetdate.toLocaleTimeString();
$(".sunsetdate").html(sunsetdate);
$(".sunsettime").html(sunsettime);

/* Insert openweather icons into the first row of index.html */
var iconUrl = "https://openweathermap.org/img/w/" + weatherIcon + ".png";
$(".weathericon").html("<img src='https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png' alt='Icon depicting current weather.'>");

                });

        });
    }
});


/* Run animated headline above weather info*/

$(function() {
        $('.animate-rotate-1').animatedHeadline({
            animationType: 'rotate-1'
        });
    });

/* Openweather API Key 73758c02ea981f5a32c0ab44ef2f4078 */

