const events = "https://raw.githubusercontent.com/Shion034/Shion034.github.io/master/lesson13/json/event.json";

fetch(events)
.then(function (response) {
    return response.json();
  })
.then(function(jsonObject){
    const events = jsonObject['events'];
    console.log(events);
    const cards = document.querySelector(".cards");

    const eventN= events.filter(x => x.name=="Think Back 3.11"||x.name=="starfestival"||x.name=="Sansha Taisai Festival");

    eventN.forEach(eventN => {
        let sectioncard=document.createElement("section");
        let article = document.createElement('article');
        let imge=document.createElement("img");
        let h6=document.createElement("h6");
        let h4=document.createElement("h4");
        let p1=document.createElement("p");
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        h6.textContent=`${eventN.date}`;
        h4.textContent=`${eventN.name}`;
        p1.textContent=`Place:${eventN.place}`;
        p2.textContent=`Time:${eventN.time}`;
        p3.textContent=`Cost:${eventN.fee}`;
        imge.setAttribute('src', `img/${eventN.image}`);
        imge.setAttribute('alt',`Images`);

        article.append (h6);
        article.append (h4);
        article.append (p1);
        article.append (p2);
        article.append (p3);

        sectioncard.append(article);
        sectioncard.append (imge);
        cards.append(sectioncard);

    });



});