/// ========================================================================== ///
/// ============================= HENRY-ZOO ============================= ///
/// ================================== TESTS ================================= ///

const utils = require("../utils");
const supertest = require("supertest-as-promised")(require("../app"));
const expect = require("chai").expect;

describe("---------- `getAnimales` ----------", function () {
  const animales = utils.generateAnimal(2);

  beforeEach(function () {
    utils.reset();
  });
  it("Si no hay animales con la edad solicitada por el cliente, arroja un error", function () {
    animales[0].edad = 12;
    animales[1].edad = 2;
    utils.animal.push(animales);
    utils.animal = utils.animal.flat();
    return supertest
      .get("/animales")
      .send({ edad: 1 })
      .expect(400)
      .expect(function (res) {
        expect(res.body).to.eql({
          err: "No hay animales igual o menores a la edad solicitada",
        });
      });
  });

  it("Devuelve animales que coincidan con la edad solicitada por el cliente", function () {
    animales[0].edad = 12;
    animales[1].edad = 2;
    utils.animal.push(animales);
    utils.animal = utils.animal.flat();
    return supertest
      .get("/animales")
      .send({ edad: 6 })
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql([animales[1]]);
      });
  });
});
