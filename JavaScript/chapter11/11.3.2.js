var button = document.getElementById("myButton");
button.focus();
alert(document.activeElement === button); // true

document.hasFocus();
