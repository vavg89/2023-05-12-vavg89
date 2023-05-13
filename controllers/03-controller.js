const utils = require("../utils");
/*⚠️ No modificar nada arriba de esta línea ⚠️
  3️⃣ ** EJERCICIO 3 ** - updateAnimal 3️⃣:
 
  🟢 Debes buscar POR ID un animal recibido por parámetro dentro del array de utils.animal y actualizar las propiedades: peso 
  y altura. También agrégale una nueva propiedad llamada "tipoDeDieta".
  🟢 Si no encuentras el animal debes arrojar un error que diga: "No se encontro el animal solicitado".
  🟢 Si alguna de las propiedades {peso, altura, tipoDeDieta} del animal que recibimos es undefined, debe arrojar un error que diga: "Faltan 
  datos a completar".
    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  2) Recuerda agregar la nueva propiedad "tipoDeDieta", ésta no se encuentra en examples.json.
  3) Ten en cuenta que propiedades y peso los recibirás en el objeto "animal" como número, pero deberás hacer un ajuste en esas propiedades al modificar el animal
  */

const updateAnimal = (animal) => {
  const values = Object.values(animal)
const undef = values.includes(undefined)
if (undef) {
  throw new Error('Faltan datos a completar')
}
  let anima = utils.animal.filter((ani) => ani.id === animal.id);
  if (anima.length === 0) {
    throw new Error("No se encontro el animal solicitado");
  } else {
    
    ResAnimal= animal.peso +  " " + "Kilos"
    ResAltura= animal.altura + "cm"
  
    anima[0].peso =ResAnimal;
    anima[0].altura =ResAltura;
    anima[0].tipoDeDieta = animal.tipoDeDieta;
    
  }

return anima[0]
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = updateAnimal;
