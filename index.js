const apiKey = "7725f2789c08565b365866e1ce2e288f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=accra"

async function checkWeather() {
    const response  =  await  fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)
}