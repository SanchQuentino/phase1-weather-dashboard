document.getElementById("searchBtn").addEventListener("click",display);
async function display(){
    const cityName = document.getElementById("cityInput").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0fa96dae7c2cdce3f922a3423dd92113&units=metric`);
    const data = await response.json();
    console.log(data);
    const cityNameElement = document.getElementById("cityName");
    cityNameElement.textContent = data.name;
    console.log(cityNameElement.textContent);
    const temperature = document.getElementById("temperature");
    temperature.textContent = `${data.main.temp}°C`;
    console.log(temperature.textContent);
    const description = document.getElementById("description");
    description.textContent = data.weather[0].description;
    console.log(description.textContent);
}