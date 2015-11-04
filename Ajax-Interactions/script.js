/*Based on the example from the lecture "Forms with Ajax and JavaScript"*/
var apiKey = '845c63a62307a12adf3c05f5c2cb5651';

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('zipSubmit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var payload = {zip:null};
        payload.zip = document.getElementById('zip').value;
        req.open('POST', 'http://api.openweathermap.org/data/2.5/weather?zip='+payload.zip+',us&appid='+ apiKey, false);
        req.setRequestHeader('Content-Type', 'application/json');
        req.send(JSON.stringify(payload));
        var response = JSON.parse(req.responseText);
        console.log(response);    
        event.preventDefault();
    })
}