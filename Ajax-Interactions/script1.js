/*For the form from the activities that connects to Open Weather Map,
it lets a user input a city or a zip code and asynchronously shows 
the weather information retrieved from Open Weather Map. 
Based on the examples from the lectures Week 6*/

var apiKey = "845c63a62307a12adf3c05f5c2cb5651";

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('submit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var zip = document.getElementById('zip').value;
        var city = document.getElementById('city').value;
        if (city != ""){
            req.open('GET', "http://api.openweathermap.org/data/2.5/weather?q="+city+",us&appid="+ apiKey+"&units=imperial", true);
        }
        else{
            req.open('GET', "http://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&appid="+ apiKey+"&units=imperial", true);
        }
        req.addEventListener('load', function(){
            if(req.status>=200 && req.status<400){
                var response = JSON.parse(req.responseText);
                document.getElementById("title").textContent = "Weather in you city";
                document.getElementById("cityName").textContent = "City name: " + response.name;
                document.getElementById("temp").textContent = "Temperature: " + response.main.temp + " F";
                document.getElementById("humidity").textContent = "Humidity: " + response.main.humidity + " %";
                document.getElementById("cloud").textContent = "Clouds: " + response.clouds.all + " %";
                document.getElementById("wind").textContent = "Wind: " + response.wind.speed + " mph";
            }
            else{
                console.log("error in network request: " + request.statusText);
            }});
        req.send(null);
        event.preventDefault();
    })
}