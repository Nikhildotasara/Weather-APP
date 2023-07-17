
const API_KEY="fb7322bddb9c6ae20119bf2d3d5f2ae8";

let userLocation=document.querySelector(".inputName");
let searchButton=document.querySelector(".searchButton");


searchButton.addEventListener("click",()=>{
    userLocation=userLocation.value;

    if(userLocation==""){
        return;
    }

    getData(`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&APPID=${API_KEY}`);

    
})


 
async function getData(url){
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);
    renderWeatherInfo(data);
    }

let humidity=document.querySelector(".humidityPercentage");

let windSpeed=document.querySelector(".wind-Speed");

let temperature=document.querySelector(".temperature");

let weatherInfo=document.querySelector(".weatherInfo");


let icon=document.querySelector(".weatherImage");

function renderWeatherInfo(data){
    humidity.innerHTML=data?.main?.humidity;
    windSpeed.innerHTML=data?.wind?.speed;
    temperature.innerHTML=(Math.round(((data?.main?.temp)-273.15))).toFixed(2);
    weatherInfo.innerHTML=data?.weather[0]?.description;
    icon.src=`http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`
    
}


