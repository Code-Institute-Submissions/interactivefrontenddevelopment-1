window.addEventListener('load', ()=> {
    let longtitudecoords;
    let latitudecoords;

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
                });

        });
    }
});

/* Openweather API Key 73758c02ea981f5a32c0ab44ef2f4078 */