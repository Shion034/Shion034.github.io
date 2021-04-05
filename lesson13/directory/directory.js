const directs = "https://raw.githubusercontent.com/Shion034/Shion034.github.io/master/lesson13/json/directors.json";

fetch(directs)
.then(function (response) {
    return response.json();
  })
.then(function(jsonObject){
    const directers = jsonObject['directers'];
    console.log(directers);

}