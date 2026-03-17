/*4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/
function mostrarMensaje(num)
{
    if(num%2===0)
    {

        alert(`El numero ingresado ${num} es par`);
    }
    else
    {
alert(`El numero ingresado ${num} es impar`);
    }
}
const num=parseInt(prompt('igrese un numero'));
mostrarMensaje(num);