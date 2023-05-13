const router = require("express").Router();
const filtrarPorEdad = require("../controllers/02-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  8️⃣ ***** EJERCICIO 8 ***** - GET /animales 8️⃣:

  🟢 Integrar la función filtrarPorEdad que desarrollaste previamente (Ejercicio 2) para obtener los animales que coincidan con la edad propuesta por el cliente.
  📌 Responder con los resultados encontrados.
  📌 Si hay un error, responder un objeto con una propiedad "err": <el mensaje recibido en el objeto error>.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Recibirás el argumento necesario para ejecutar esa función filtrarPorEdad mediante la propiedad "body" de *req*.
  2) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get("/animales", (req, res) => {
  try{
    const {edad} = req.body;
    const list = filtrarPorEdad(edad)
    res.status(200).json(list);
  }
  catch(error){
    res.status(400).json({err : error.message})
  }
});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
