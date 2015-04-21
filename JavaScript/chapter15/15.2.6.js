var drawing = document.getElementById("drawing");
if (drawing.getContext) {
    var context = drawing.getContext("2d");
    var image = document.images[0];
    context.drawImage(image, 10, 10);

