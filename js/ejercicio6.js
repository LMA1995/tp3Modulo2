/*Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/
function calcularPerimetro(altura, base)
{
    let perimetro=2*(altura+base);
    alert('El perimetro es :'+perimetro);
}

const altura=parseInt(prompt('Ingrese el valor de la base'));
const base=parseInt(prompt('Ingrese el valor de la base'));
calcularPerimetro(altura, base);