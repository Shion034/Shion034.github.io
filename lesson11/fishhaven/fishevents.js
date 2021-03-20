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
    const cards = document.querySelector(".prestonevents")

/*---------------------------------------Preston Town-------------------------------------------------------- */
     //const townNames = document.querySelector('.townNames');
     const townNames  = towns.filter(x => x.name == "Fish Haven");

     townNames.forEach(townNames => {
        let card = document.createElement('section');
      
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');


       
        p1.textContent = `Year Founded: ${townNames.events[0]}`;
        p2.textContent = `Year Founded: ${townNames.events[1]}`;
        p3.textContent = `Year Founded: ${townNames.events[2]}`;


      
        card.append (p1);
        card.append (p2);
        card.append (p3);

        cards.append(card);
    });




     /*h2.textContent= `${utahprophet.name} ${utahprophet.lastname}`;
     pimg.setAttribute('src', utahprophet.imageurl);
     pimg.setAttribute('alt',`Portrait of ${utahprophet.name} who was born in ${utahprophet.birthplace}  in the year ${utahprophet.birthdate.
     substring(utahprophet.birthdate.length-4)}!`);*/



    });