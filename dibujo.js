var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal)
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var lineas = parseInt(texto.value);
    var l = 0;
    var yi, xf;
    var espacio = ancho / lineas;

    for(l = 0; l < lineas; l++)
    {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea("#FAA", 0, yi, xf, 300);
    }


dibujarLinea("black", 0, 0, 0, 300);
dibujarLinea("black", 0, 300, 300 , 300);
dibujarLinea("black", 0, 0, 300 , 0);
dibujarLinea("black", 300, 0, 300 , 300);
}
