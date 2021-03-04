const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject);
     // temporary checking for valid response and data parsing
     const prophets = jsonObject['prophets'];
    //select out put
     const cards = document.querySelector(".cards")

     prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');

      h2.innerHTML=`${prophet.name} <span style ="color:red"> ${prophet.lastname}</span>`;

      card.append(h2);
      cards.append(card);

     });

     const utah = docunemt. querySelector('.Utah');

     const utahfilter  = prophets.filter(x => prophet.birthplace == "Utah");

     let card = document.createElement('section');
     let h2 = document.createElement('h2');
     let ping = document.createElement (img);



     h2.innerHTML=`${utahprophet.name} <span style ="color:red"> ${utahprophet.lastname}</span>`;
     ping.setAttribute('src', utahprophet.imageurl);
     ping.setAttribute('alt',`Portrait of ${utahprophet.name} who was born in ${utahprophet.birthplace} in the year ${utahprophet.birthdate}!`)
     card.append(h2);
     cards.append(card);
  });

  

 