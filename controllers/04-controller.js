const utils = require("../utils");

/* ⚠️ No modificar nada arriba de esta línea ⚠️ */

/* 4️⃣ ** EJERCICIO 4 ** - deleteAnimal 4️⃣:

Busca un animal por ID. Elimínalo de la base de datos y responde con el array de animales teniendo en cuenta que no está más el que acabas de eliminar.
Si no existe un animal con ese ID, arrojá un error que diga: `No existe el animal con id: ${animalId}`.
*/

const deleteAnimal = (animalId) => {
    if (!utils.animal.find(ani => ani.id === animalId)) throw Error(`No existe el animal con id: ${animalId}`)
let animales = utils.animal.filter(ani => ani.id !== animalId)
utils.animal = animales
return animales  
};
module.exports = deleteAnimal;
