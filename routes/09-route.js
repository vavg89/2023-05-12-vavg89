const router = require("express").Router();
const updateAnimal = require("../controllers/03-controller");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  9️⃣ ** EJERCICIO 9 ** - PUT /animal 9️⃣:

  🟢 Integrar la función updateAnimal que desarrollaste previamente (Ejercicio 3) para actualizar el animal.
  📌 Responder con un objeto con una propiedad "message" que se igual al string "Animal actualizado correctamente".
  📌 Si hay un error, responder un objeto con una propiedad "error" y que el valor sea el error.message.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla al actualizar el animal, debes responder con el mensaje del error.
  2) Recibirás los argumentos necesario para ejecutar esa función updateAnimal mediante la propiedad "body" de req.
  3) ¡Revisa en los test el status que deben tener tus respuestas!

*/

router.put("/animal", (req, res) => {
  const { animal } = req.body
  let animalAct = {
    id: undefined,
    name: undefined,
    edad: undefined,
    peso: undefined,
    altura: undefined,
    tipoDeDieta:undefined
          }
      animalAct = {...animalAct, ...animal}
  try {
    updateAnimal(animalAct);
    res.status(200).json({ message: "Animal actualizado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
