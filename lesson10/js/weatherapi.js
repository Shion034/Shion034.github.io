const apiURL = "https://samples.openweathermap.org/data/2.5/forecast?id=5604473&appid=droppyweather753159";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });