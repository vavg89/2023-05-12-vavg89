const router = require("express").Router();
const mostrarLaMediaDelPeso = require("../controllers/06-controller");
/* ⚠️ No modificar nada arriba de esta línea ⚠️

  1️⃣2️⃣ ***** EJERCICIO 12 ***** - GET /muestralamediadelpeso 1️⃣2️⃣:
  
  🟢 Integrar la función mostrarLaMediaDelPeso que desarrollaste previamente (Ejercicio 6) para obtener la media del peso.
  🟢 Responder con el resultado de la operación, el formato debe ser: { results: 23000 }
  🟢 Si surge algún error durante la operación, responder con el mensaje correspondiente.

    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla debes responder con el mensaje del error.
  3) ¡Revisa en los test el status que deben tener tus respuestas!
*/

router.get("/mostrarLaMediaDelPeso", (req, res) => {});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
