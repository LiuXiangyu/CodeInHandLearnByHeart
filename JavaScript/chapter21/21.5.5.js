var socket = new WebSocket("ws://www.example.com/server.php");
socket.send("Hello world!");

var message = {
    time: new Date(),
    text: "Hello world!",
    clientId: "asdfp8734rew"
};

socket.send(JSON.stringify(message));

socket.onmessage = function(event) {
    var data = event.data;
};

socket.onopen = function() {
    alert("Connection established.");
};

socket.onerror = function() {
    alert("Connection error.");
};

socket.onclose = function() {
    alert("Connection closed.");
};
