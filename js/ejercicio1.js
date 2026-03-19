/*Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/
let pantalla=document.getElementById('pantalla');
const meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let lista = '<ul> <h2>Listado de Meses</h2>';

for (let i = 0; i < meses.length; i++) {
    lista += `<li>${meses[i]}</li>`;
}

lista += '</ul>';

pantalla.innerHTML = lista;