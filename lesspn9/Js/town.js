//store the JSON resource
const dataUrl="https://byui-cit230.github.io/weather/data/towndata.json"
//use fetch to obtain a promise for
fetch(dataUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     // temporary checking for valid response and data parsing
     const towns = jsonObject['towns'];

     //select out put location******************************************************************************************
     const cards = document.querySelector(".cards")

     towns.forEach(town => {
        let card = document.createElement('section');
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        let pimg = document.createElement ('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        
//use template literals****************************************************************
        h3.innerHTML = `${town.name}`;
        h5.innerHTML = `${town.motto}`;
        p1.innerHTML = `Year Founded: ${town.yearFounded}`;
        p2.innerHTML = `Population: ${town.currentPopulation}`;
        p3.innerHTML = `Annual Rain Fall: ${town.averageRainfall}`;

        card.append (h3);
        card.append (h5);
        card.append (p1);
        card.append (p2);
        card.append (p3);
        card.append (pimg);
        cards.append(card);
     });



    });