const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2130203&appid=2ba8af18e29c9d91e0f7848f6e1aebec&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const description = jsObject.weather[0].description;


        document.getElementById("w-output").textContent = description;
    });