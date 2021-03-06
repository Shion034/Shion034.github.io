
//store the JSON resource
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
//use fetch to obtain a promise for
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
     // temporary checking for valid response and data parsing
     const prophets = jsonObject['prophets'];
    
//select out put location******************************************************************************************
     const cards = document.querySelector(".cards")

     prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let pimg = document.createElement ('img');
//use template literals****************************************************************
      h2.innerHTML=`${prophet.name}  ${prophet.lastname}`;
      p1.innerHTML = `Date of Birth: ${prophet.birthdate}`;
      p2.innerHTML = `Place of Birth: ${prophet.birthplace}`;
      pimg.setAttribute('src', prophet.imageurl);
      pimg.setAttribute('alt',`Portrait of ${prophet.name} who was born in ${prophet.birthplace}  in the year ${prophet.birthdate.
      substring(prophet.birthdate.length-4)}!`);
      

      card.append(h2);
      card.append(p1);
      card.append(p2);
      cards.append(card);
      card.append(pimg);
      cards.append(card);

     });

     /*const utah = document.querySelector('.Utah');
     const utahfilter  = prophets.filter(x => x.birthplace == "Utah");

     utahfilter.forEach(utahprophet => {
     let card = document.createElement('section');
     let h2 = document.createElement('h2');
     let pimg = document.createElement ('img');



     h2.textContent= `${utahprophet.name} ${utahprophet.lastname}`;
     pimg.setAttribute('src', utahprophet.imageurl);
     pimg.setAttribute('alt',`Portrait of ${utahprophet.name} who was born in ${utahprophet.birthplace}  in the year ${utahprophet.birthdate.
     substring(utahprophet.birthdate.length-4)}!`);
     
     card.append(h2);
     card.append(pimg);
     cards.append(card);
     });*/


  });

  

 