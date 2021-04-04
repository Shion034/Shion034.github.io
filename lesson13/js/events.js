const events = "https://raw.githubusercontent.com/Shion034/Shion034.github.io/master/lesson13/json/event.json";

fetch(events)
.then(function (response) {
    return response.json();
  })
.then(function(jsonObject){
    const events = jsonObject['events'];
    console.log(events);
    const cards = document.querySelector(".cards");

    const eventN= events.filter(x => x.name=="Think Back 3.11"||x.name=="Star Festival"||x.name=="Sansha Taisai Festival");

    eventN.forEach(eventN => {
        let sectioncard=document.createElement("section");
        let article = document.createElement('article');
        let imge=document.createElement("img");
        let h6=document.createElement("h6");
        let h5=document.createElement("h5");
        let p1=document.createElement("p");
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        sectioncard.setAttribute("class",`card`);
        h6.textContent=`${eventN.date}`;
        h5.textContent=`${eventN.name}`;
        imge.setAttribute('src', `img/${eventN.image}`);
        imge.setAttribute('alt',`Images`);
        imge.setAttribute('class',`cardimg`);
        p1.textContent=`Place:${eventN.place}`;
        p1.setAttribute('class',`card-p`);
        p2.textContent=`Time:${eventN.time}`;
        p2.setAttribute('class',`card-p`);
        p3.textContent=`Cost:${eventN.fee}`;
        p3.setAttribute('class',`card-p`);
        
        cards.append(sectioncard);
        article.append (h5);
        article.append (h6);
        sectioncard.append (imge);

        sectioncard.append(article);
        article.append (p1);
        article.append (p2);
        article.append (p3);

        
       

    });



});