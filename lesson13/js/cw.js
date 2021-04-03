const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2130203&appid=2ba8af18e29c9d91e0f7848f6e1aebec&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        /*data src----------------------------------------------------------------------------*/
        const description = jsObject.weather[0].description;
        const temp = jsObject.main.temp_max;
        const humidity = jsObject.main.humidity;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
        /*out put---------------------------------------------------------------------------*/
        document.getElementById("w-output").textContent = description;
        document.getElementById("t-output").textContent = temp;
        document.getElementById("h-output").textContent = humidity;
        document.getElementById('icon').setAttribute('src', imagesrc); 
    });

