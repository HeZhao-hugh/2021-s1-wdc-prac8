
function show(){

    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Update the page on success
            var feedback = JSON.parse(xmlhttp.responseText);

            //var sheet = document.getElementById("sheet");

        var temp ="";
        var temp1="";
        for (var i=0;i<(feedback.length);i++){
            temp1 += `<tr><td>`+String(feedback[i].first_name)+`</td>`+`<td>`+String(feedback[i].last_name)+`</td></tr>`;

        }

        temp = temp + temp1;

        document.getElementById("ss").innerHTML=temp;
        }

    };

    // Open connection to server & send the post data using a POST request
    // We will cover POST requests in more detail in week 8
    xmlhttp.open("GET", "/test", true);   //used to be post
    xmlhttp.setRequestHeader("Content-type", "application/json");
    //xmlhttp.send(JSON.stringify(user));

    xmlhttp.send();
}

function add(){
    var first=document.getElementById("actor-first-name").value;
    var last=document.getElementById("actor-last-name").value;
let object ={
    first_name:first,
    last_name:last
};
    // Create AJAX Request
    var xmlhttp = new XMLHttpRequest();

    // Define function to run on response
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Update the page on success
        }
    };

    // Open connection to server & send the post data using a POST request

    xmlhttp.open("POST", "/add", true);   //used to be post
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.send(JSON.stringify(object));


}

