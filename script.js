const featchBtn = document.getElementById("btn");
const landPage = document.getElementById("landing-page");
const mainPage = document.getElementById("main");
const dataStore = document.getElementById("dataContainer");

let lat;
let long;
let loding=false;
const ApiKey = "7408c2638a1affdf8caf6410189fa802"


// let weatherData;
featchBtn.addEventListener("click", () => {
    mainPage.style.display = "block";
    landPage.style.display = "none"
    navigator.geolocation.getCurrentPosition(showPosition)
    
});

function showPosition(position) {

    // localStorage.setItem("lat", position.coords.latitude);
    // localStorage.setItem("long", position.coords.longitude);
    lat = position.coords.latitude;
    long =  position.coords.longitude;
    console.log(lat, long);
    map.innerHTML = `<iframe class="frame" src="https://maps.google.com/maps?q=${lat}, ${long}&output=embed"></iframe>`;



    // const res = await fetch(apiUrl);
    // const response = await res.json();
    // wheaterData = { ...response }
    // // console.log(wheaterData);
    dataStore.innerHTML =  !loding ? `Loding...`: ""
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${ApiKey}`
  
    fetch(apiUrl)
        .then((res) => {
            return res.json();
        })
        .then((data) => {            
            loding=true
            dataStore.innerHTML =
            `
             <div class="data1"><span>name</span> <span>:-</span> <span>${data.name}</span></div>
             <div class="data1"><span>Lat</span> <span>:-</span> <span>${data.coord.lat}</span></div>  
             <div class="data1"><span>Long </span> <span>:-</span> <span> ${data.coord.lon}</span></div>
             <div class="data1"><span>Wind Speed </span> <span>:-</span> <span>${data.wind.speed}</span></div>
             <div class="data1"><span>Pressure</span> <span>:-</span> <span>${data.main.pressure}</span></div>
             <div class="data1"><span>Humidity </span> <span>:-</span> <span>${data.main.humidity}</span></div>
             <div class="data1"><span>Wind Direction</span> <span>:-</span> <span>${data.wind.gust}</span></div>
             <div class="data1"><span>Feels Like </span> <span>:-</span> <span>${data.main.feels_like}</span></div>
              
            `
        })
        .catch((error) => {
            console.log(error);
        })
};

// function displayData(weatherData) {
//     // console.log(weatherData.sys.country)
//     dataStore.innerHTML = 
//     `
//     <div
//     `
//     document.getElementById('locate').innerText += `${weatherData.country}`;
//     document.getElementById('timezone').innerHTML += `${weatherData.timezone}`;
//     document.getElementById('latitude').innerHTML += `${weatherData.coord.lat}`;
//     document.getElementById('longitude').innerHTML += `${weatherData.coord.lon}`;
//     document.getElementById('windSpeed').innerHTML += `${weatherData.wind.speed}`;
//     document.getElementById('pressure').innerHTML += `${weatherData.main.pressure}`;
//     document.getElementById('humidity').innerHTML += `${weatherData.main.humidity}`;
//     document.getElementById('windDirection').innerHTML += `${weatherData.wind.deg}`;
//     document.getElementById('feels').innerHTML += `${weatherData.main.feels_like}`;
//     //    document.querySelector('.data').style.display = 'block';
