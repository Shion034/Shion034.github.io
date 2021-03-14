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
        
          
        
        
/*listの数字を＋＋にしていきたい、かつ、18：00のものをえらびたい！*/

        let listnumber;//listの数字
        //let numBer = jsObject.list[listnumber].dt_txt;//0のdt_txt
        let numBerlength = jsObject.list.length;//40
        let time ;/*= numBer.includes("18:00:00");//OK*/
        
            //console.log(numBer);
            //console.log(numBerlength);
            //console.log(time);
        
        const dayofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        let day = 0;//while のday

        

    for (let listnumber = 0; listnumber<=numBerlength; listnumber++){

    if(time=jsObject.list[listnumber].dt_txt.includes("18:00:00")){
        while(day<40){
        let d = new Date(jsObject.list[5].dt_txt);
        document.getElementById(`dayofweek${day+1}`).textContent = dayofweek[d.getDay()];
        document.getElementById(`forecast${day+1}`).textContent = jsObject.list[5].main.temp;

        const image = 'http://openweathermap.org/img/wn/' + jsObject.list[5].weather[0].icon + '@2x'+'.png';
        document.getElementById(`forecastimages${day+1}`).setAttribute('src', image); 
        day++}//←このdayは出力のためだけの+1のday
    }

}
    });