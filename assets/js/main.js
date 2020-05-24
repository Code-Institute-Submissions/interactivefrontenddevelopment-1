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
                    const { temp, temp_max, temp_min, humidity } = data.main;
                    const { speed } = data.wind;
                    const { country, sunrise, sunset } = data.sys;
                    /*const { description, icon, main } = data.weather;*/
                    
                    weatherTemperature.textContent = temp;
                    weatherTempmax.textContent = temp_max;
                    weatherTempmin.textContent = temp_min
                    weatherHumidity.textContent = humidity;
                    weatherWind.textContent = speed;
                    weatherCountry.textContent = country;
                    weatherSunrise.textContent = sunrise;
                    weatherSunset.textContent = sunset;
                    weatherLocation.textContent = data.name;

                   
                });

        });
    }
});

/* Openweather API Key 73758c02ea981f5a32c0ab44ef2f4078 */