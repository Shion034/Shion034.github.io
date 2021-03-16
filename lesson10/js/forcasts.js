let cityID = 5604473;
const forcastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=2ba8af18e29c9d91e0f7848f6e1aebec`;

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) =>{
        console.log(jsObject);
        const dayofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        const weahterOeday=jsObject["list"].filter((day)=>
        day.dt_txt.includes("18:00:00"));
        console.log(weahterOeday);



        /*let listnumber;//listの数字
        let numBer = jsObject.list[listnumber].dt_txt;//0のdt_txt*/
        let numBerlength = jsObject.list.length;//40
        let oElength = weahterOeday.length;//5
        /*let time ;/*= numBer.includes("18:00:00");//OK*/
        
            //console.log(numBer);
            console.log(numBerlength);
            console.log(oElength);
            //console.log(time);

    for (let i = 0; i<=numBerlength; i++){
        let day = weahterOeday[i];
        const image = 'http://openweathermap.org/img/wn/' +day.weather[0].icon + '@2x'+'.png';
        const desCription = day.weather[0].description;
        let date = new Date(day.dt_txt);
        let weeKs = dayofweek[date.getDay()];
        /*document.querySelector(`.forecastimages${i+1} img`).setAttribute('src', image); 
        document.querySelector(`.forecastimages${i+1} img`).setAttribute('src', desCription); 

        document.querySelector(`.forecast${i+1}div`).innerHTML = `${day.main.temp}`;

        /*day of week output----------------------------------------------------------------------*/
        document.getElementById(`dayofweek${i+1}`).textContent = weeKs;

        /*forecast output--------------------------------------------------------------------------*/
        document.getElementById(`forecast${i+1}`).textContent = day.main.temp;

        /*image output-----------------------------------------------------------------------------*/

        document.getElementById(`forecastimages${i+1}`).setAttribute('src', image); 

}
    });