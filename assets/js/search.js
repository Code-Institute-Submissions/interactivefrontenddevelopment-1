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
    temp.innerText = `${weather.main.temp}`;

    let weatherstatus = document.querySelector('.current .weather');
    weatherstatus.innerText = `${weather.weather[0].main}`;


    let hilo = document.querySelector('.hi-low');
    hilo.innerText = `${weather.main.temp_min} / ${weather.main.temp_max}`;

     let date = document.querySelector('.date');
    date.innerText = `${weather.dt}`;


    

}