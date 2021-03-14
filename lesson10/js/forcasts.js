let cityID = 5604473;
const forcastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=2ba8af18e29c9d91e0f7848f6e1aebec`;

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) =>{
        console.log(jsObject);
        
        // reduce ther list array to the five forecasts ....40
            //filter
                // feed the filter a condition...18:00:00   dt_txt see if it includes()
            //const timefilter = 
        //loot through each of the forecast days

        //if (jsObject.list.dt_txt^"18:00:00"){
        
          
        
        


        let day = 0;
        let date = jsObject.list[day].dt_txt;
        let thefive = date.includes("18:00:00");
        console.log(thefive);
        const dayofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        if(thefive="true"){
            
        while(day<40){



        let d = new Date(jsObject.list[5].dt_txt);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = jsObject.list[5].main.temp;

        const image = 'http://openweathermap.org/img/wn/' + jsObject.list[5].weather[0].icon + '@2x'+'.png';
        document.getElementById(`forecastimages${day+1}`).setAttribute('src', image); 
        day++}
        }else{}
    });