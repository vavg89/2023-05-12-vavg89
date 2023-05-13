const utils = require("../utils");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  6️⃣ ***** EJERCICIO 6 ***** - mostrarLaMediaDelPeso 6️⃣:

   🟢 Debes de sacar la edad media de todos los animales que se encuentran en el zoológico. RECUERDA QUE DEBE SER UN VALOR ENTERO
   🟢 Si la media no existe, arrojar un error que diga: "No tenemos valores".
      
   📢 PUNTOS A TENER EN CUENTA 📢
   1) Recuerden que la media se saca sumando el peso de cada animal, dividido la suma total de animales.
   2) el peso es un string, debemos de encontrar la manera de extraer solo el valor numerico y transformarlo en un numero.
*/

const mostrarLaMediaDelPeso = () => {
  let animales = utils.animal;
  let total = 0;
 if(animales.length===0)throw new Error('No tenemos valores')

 let mapPesoextractor = animales.map((ani) => ani.peso)
 

for (let i = 0; i < mapPesoextractor.length; i++) {
  const elemento = mapPesoextractor[i];
  const numero = parseInt(elemento.split(' ')[0]);
  total += numero;
}
let totalPPromedio= total / animales.length
return Math.trunc(totalPPromedio)
};

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = mostrarLaMediaDelPeso;
