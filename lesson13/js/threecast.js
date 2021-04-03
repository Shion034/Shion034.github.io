/*----------------------------City Forcast---------------------------------------------------------------------------------------------*/
const forcastURL = `https://api.openweathermap.org/data/2.5/forecast?id=${2130203}&units=imperial&appid=2ba8af18e29c9d91e0f7848f6e1aebec`;

fetch(forcastURL)
    .then((response) => response.json())
    .then((castObject) =>{
        console.log(castObject);


        const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        /*time filter---------------------------------------------------------------------------*/
        const weahterOeday=castObject["list"].filter((daytime)=>
        daytime.dt_txt.includes("12:00:00"));
        console.log(weahterOeday);
        /*list length---------------------------------------------------------------------------*/ 
        let itlengh = castObject.list.length;
        console.log(itlengh);//40
        let oElength = weahterOeday.length;
        console.log(oElength);//5




        for(let i=0;i<=itlengh;i++){
            let day = weahterOeday[i];
            const wimg = 'https://openweathermap.org/img/w/' + day.weather[0].icon + '.png'; 
            let dayy = new Date(day.dt_txt);
            let weeKs = dayName[dayy.getDay()];

            document.getElementById(`day${i+1}`).textContent = weeKs;
            document.getElementById(`w-img${i+1}`).setAttribute('src', wimg); 
            document.getElementById(`w-temp${i+1}`).textContent = day.main.temp;

        }




    });