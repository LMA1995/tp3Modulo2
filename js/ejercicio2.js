/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/
const ciudades = [];
let continuar;

let pantalla = document.getElementById('pantalla');

do {
  let ciudad = prompt('Ingrese la ciudad');

  if (ciudad !== null) {
    ciudades.push(ciudad);
    continuar = confirm('¿Desea seguir agregando ciudades?');
  } else {
    continuar = false;
  }

} while (continuar);

// 👉 recién acá trabajás con el array

let lista = '<h2>Listado de Ciudades</h2><ul>';

for (let i = 0; i < ciudades.length; i++) {
  lista += `<li>${ciudades[i]}</li>`;
}

lista += '</ul>';

pantalla.innerHTML = lista;
document.writeln(`Primer elemento ${ciudades[0]} el tercer elemento es ${ciudades[2]} y el ultimo ${ciudades[ciudades.length-1]}`)
