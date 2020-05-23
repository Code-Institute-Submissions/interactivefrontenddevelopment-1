window.addEventListener('load', ()=> {
    let longtitudecoords;
    let latitudecoords;
    
    let weatherTemperature = document.querySelector(".h_two_weathertemperature");
    let weatherHumidity = document.querySelector(".h_two_weatherstatus");
    let weatherLocation = document.querySelector(".h_two_weatherlocation");
    

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (postion =>{
            longtitudecoords = postion.coords.longitude;
            latitudecoords = postion.coords.latitude;
        
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudecoords}&lon=${longtitudecoords}&appid=73758c02ea981f5a32c0ab44ef2f4078`;
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temp, temp_max, temp_min, humidity } = data.main;
                    const { deg, gust, speed } = data.wind;
                    
                    weatherTemperature.textContent = temp;
                    weatherHumidity.textContent = humidity;
                    weatherLocation.textContent = data.name;
                   
                });

        });
    }
});

/* Openweather API Key 73758c02ea981f5a32c0ab44ef2f4078 */