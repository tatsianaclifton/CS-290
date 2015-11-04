/*Based on the examples from the lectures Week 6*/
var apiKey = "845c63a62307a12adf3c05f5c2cb5651";

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('zipSubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var zip = document.getElementById('zip').value;
        req.open('GET', "http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid="+ apiKey, true);
        req.addEventListener('load', function(){
            if(req.status>=200 && req.status<400){
                var response = JSON.parse(req.responseText);
                document.getElementById("cityName").textContent = "City name: " + response.name;
                document.getElementById("temp").textContent = "Temperature, F: " + (Math.trunc(response.main.temp)*9 / 5 - 459.67);
                document.getElementById("humidity").textContent = "Humidity, %: " + response.main.humidity;
                document.getElementById("cloud").textContent = "Clouds, %: " + response.clouds.all;
                document.getElementById("wind").textContent = "Wind, mph: " + response.wind.speed;
            }
            else{
                console.log("error in network request: " + request.statusText);
            }});
        req.send(null);
        event.preventDefault();
    })
}