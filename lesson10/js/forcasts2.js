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

        //let listnumber;//listの数字
        //let numBer = jsObject.list[listnumber].dt_txt;//0のdt_txt
        //let numBerlength = jsObject.list.length;//40
        //let time ;/*= numBer.includes("18:00:00");//OK*/
        
            //console.log(numBer);
            //console.log(numBerlength);
            //console.log(time);

    let listnumber = jsObject.list;//40
    let numBer = " ";
    //if(time=listnumber.dt_txt.includes("18:00:00")){
    while (listnumber<=40){
    listnumber++;
    }
    console.log(listnumber);
    console.log(numBer);

    const x=listnumber;
    console.log(x);

    const dayofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let d = new Date(jsObject.list[5].dt_txt);
        const image = 'http://openweathermap.org/img/wn/' + jsObject.list[5].weather[0].icon + '@2x'+'.png';
/*day of week output----------------------------------------------------------------------*/
        document.getElementById(`dayofweek1`).textContent = dayofweek[d.getDay()];
        document.getElementById(`dayofweek2`).textContent = dayofweek[d.getDay()];
        document.getElementById(`dayofweek3`).textContent = dayofweek[d.getDay()];
        document.getElementById(`dayofweek4`).textContent = dayofweek[d.getDay()];
        document.getElementById(`dayofweek5`).textContent = dayofweek[d.getDay()];

        /*forecast output--------------------------------------------------------------------------*/
        document.getElementById(`forecast1`).textContent = jsObject.list[5].main.temp;
        document.getElementById(`forecast2`).textContent = jsObject.list[5].main.temp;
        document.getElementById(`forecast3`).textContent = jsObject.list[5].main.temp;
        document.getElementById(`forecast4`).textContent = jsObject.list[5].main.temp;
        document.getElementById(`forecast5`).textContent = jsObject.list[5].main.temp;

        /*image output-----------------------------------------------------------------------------*/

        document.getElementById(`forecastimages1`).setAttribute('src', image); 
        document.getElementById(`forecastimages2`).setAttribute('src', image); 
        document.getElementById(`forecastimages3`).setAttribute('src', image); 
        document.getElementById(`forecastimages4`).setAttribute('src', image); 
        document.getElementById(`forecastimages5`).setAttribute('src', image); 
    });