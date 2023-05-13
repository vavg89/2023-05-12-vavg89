const utils = require("../utils");
var _ = require('lodash');
 
/*⚠️ No modificar nada arriba de esta línea ⚠️

  5️⃣ ***** EJERCICIO 5 ***** - ordenarPorEdad 5️⃣:
  
  🟢 Retornar un array de animales que esten ordenados por edad, de mayor a menor.
  📌 Si no hay animales en la base de datos, debes de retornar un error que diga: "No se encontraron animales"
  
  🟢 Investigar el parámetro "sort" puede tener dos valores.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
*/

const ordenarPorEdad = () => {
    if (utils.animal.length===0) {
    throw new Error("No se encontraron animales");
  } 
  let Animales=utils.animal
  let sortedByYearDesc = _.sortBy(Animales, 'edad').reverse();
  return sortedByYearDesc;
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = ordenarPorEdad;
