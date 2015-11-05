/*This is a second part of the assignment. It includes the code that allows that the form sumbits data asynchronously via a POST. The source is the material from the lectures for week 6.*/

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
                var response = (JSON.parse(JSON.parse(req.responseText).data)).str;
                document.getElementById('data').textContent = "You entered: " + response;
            }
            else{
                console.log("error in network request: " + req.statusText);
            }});
        req.send(JSON.stringify(payload));
        event.preventDefault();
    });
}