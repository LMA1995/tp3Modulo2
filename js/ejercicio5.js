/*5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/
function tipoTexto(frase)
{
    if(frase === frase.toUpperCase())
    {
        alert(`La frase esta escrita en mayusculas`);
    }
    else if(frase === frase.toLowerCase())
    {
        alert('La frase esta escrita en minusculas');
    }
    else
    {
        alert('Combina mayusculas y minusculas');
    }
}
const texto=prompt('Ingrese una frase');
tipoTexto(texto);