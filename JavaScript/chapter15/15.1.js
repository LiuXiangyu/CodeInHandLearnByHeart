var drawing = document.getElementById("drawing");

if (drawing.getContext) {
    var context = drawing.getContext("2d");

    /*context.fillStyle = "#ff0000";
    context.fillRect(10, 10, 50, 50);

    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(30, 30, 50, 50);*/

   context.strokeStyle = "#ff0000";
   context.strokeRect(10, 10, 50, 50);
}
