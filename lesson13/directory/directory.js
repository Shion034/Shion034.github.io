const directs = "https://raw.githubusercontent.com/Shion034/Shion034.github.io/master/lesson13/json/directors.json";

fetch(directs)
.then(function (response) {
    return response.json();
  })
.then(function(jsonObject){
    const directers = jsonObject['directers'];
    console.log(directers);

    const part = document.querySelector(".directersTable");

    part.forEach(part => {

      let card = document.createElement('section');
      let logo = document.createElement ('img');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      
        
    });
});
