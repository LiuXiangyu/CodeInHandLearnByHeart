var drawing = document.getElementById("drawing");
if (drawing.getContext) {
    var context = drawing.getContext("2d");

    context.beginPath();

    context.arc(100, 100, 99, 0, 2 * Math.PI, false);

    context.moveTo(194, 100);
    context.arc(100, 100, 94, 0, 2 * Math.PI, false);

    context.translate(100, 100);

    context.moveTo(0, 0);
    context.lineTo(0, -85);

    context.moveTo(0, 0);
    context.lineTo(-65, 0);

    context.stroke();
}
