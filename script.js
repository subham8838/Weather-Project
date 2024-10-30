const apikey = "2f03afd189f02f94ae8d51071e91ef99";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi";

async function checkWeather(){
    const response = await fetch(apiurl + '&appid=${apikey}');
    var data = await response.json();

    console.log(data);
}

checkWeather();

