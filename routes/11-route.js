const router = require("express").Router();
const ordenarPorEdad = require("../controllers/05-controller");

/* ⚠️ No modificar nada arriba de esta línea ⚠️

  1️⃣1️⃣ ***** EJERCICIO 11 ***** - GET /animalesOrdenados 1️⃣1️⃣:
  
  🟢 Integrar la función animalesOrdenados que desarrollaste previamente (Ejercicio 5) para obtener los animales ordenados.
  🟢 Si surge algún error durante la operación, responder con el mensaje correspondiente.
  
    📢 PUNTOS A TENER EN CUENTA 📢
  1) Si algo falla debes responder con el mensaje del error.

*/

router.get("/animalesOrdenados", (req, res) => {});

//⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = router;
