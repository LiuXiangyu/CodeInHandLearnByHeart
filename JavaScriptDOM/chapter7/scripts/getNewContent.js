function getNewContent() {
    var request = getHTTPObject();
    if (request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function() {
            if (request.readState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(request.responseText);
                console.log(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send();
     } else {
         alert("Sorry, your browser doesn\'t support XMLHttpRequest");
     }
}
addLoadEvent(getNewContent);
