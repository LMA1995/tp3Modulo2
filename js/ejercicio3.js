/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
*/
const resultados = Array(13).fill(0);
const pantalla=document.getElementById('pantalla');


for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;

  let suma = dado1 + dado2;

  resultados[suma]++;
}
let lista='<ul><h2>Resultados</h2>'
for (let i = 2; i <= 12; i++) {
    console.log(`<li>La suma ${i} salió ${resultados[i]} veces</li>`)
    lista+=`<li>La suma ${i} salió ${resultados[i]} veces</li>`
  
}
lista+=`</ul>`
pantalla.innerHTML=lista;