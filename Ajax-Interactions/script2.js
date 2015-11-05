/*Based on the examples from the lectures Week 6*/

document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){
    document.getElementById('submit').addEventListener('click', function(event){
        var req = new XMLHttpRequest();
        var payload = {str: null};
        payload.str = document.getElementById('string').value;
        req.open('POST', "http://httpbin.org/post", true);
        req.setRequestHeader('Content-Type', 'application/json');
        req.addEventListener('load', function(){
            if(req.status>=200 && req.status<400){
                var response = JSON.parse(req.responseText);
                console.log(response);
                document.getElementById('data').textContent = "You entered: " + response.data;
            }
            else{
                console.log("error in network request: " + req.statusText);
            }});
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}