const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=2ba8af18e29c9d91e0f7848f6e1aebec&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('current-temp').textContent = jsObject.main.temp;
  
  // note the concatenation
  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; 
  // note how we reference the weather array 
  const desc = jsObject.weather[0].description;  
   // informational specification only
  document.getElementById('imagesrc').textContent = imagesrc; 
  // focus on the setAttribute() method
  document.getElementById('icon').setAttribute('src', imagesrc);  
  document.getElementById('icon').setAttribute('alt', desc);

});

