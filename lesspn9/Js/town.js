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

/*---------------------------------------Preston Town-------------------------------------------------------- */
     //const townNames = document.querySelector('.townNames');
     const townNames  = towns.filter(x => x.name == "Preston"||x.name == "Fish Haven"||x.name == "Soda Springs");

     townNames.forEach(townNames => {
        let card = document.createElement('section');
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        let h5 = document.createElement('h5');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let pimg = document.createElement ('img');

        h3.textContent = `${townNames.name}`;
        h5.textContent = `${townNames.motto}`;
        p1.textContent = `Year Founded: ${townNames.yearFounded}`;
        p2.textContent = `Population: ${townNames.currentPopulation}`;
        p3.textContent = `Annual Rain Fall: ${townNames.averageRainfall}`;
        pimg.setAttribute('src', townNames.photo);
        pimg.setAttribute('alt',`Images`);

        article.append (h3);
        article.append (h5);
        article.append (p1);
        article.append (p2);
        article.append (p3);

        card.append(article);
        card.append (pimg);
        cards.append(card);
    });



     /*h2.textContent= `${utahprophet.name} ${utahprophet.lastname}`;
     pimg.setAttribute('src', utahprophet.imageurl);
     pimg.setAttribute('alt',`Portrait of ${utahprophet.name} who was born in ${utahprophet.birthplace}  in the year ${utahprophet.birthdate.
     substring(utahprophet.birthdate.length-4)}!`);*/



    });