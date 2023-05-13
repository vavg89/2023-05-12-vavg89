const utils = require("../utils");
const expect = require("chai").expect;
const supertest = require("supertest-as-promised")(require("../app"));

describe("PUT /animal", function () {

  beforeEach( () => (utils.reset(), utils.animal.push(...utils.generateAnimal(1))));

  it("PUT responde el mensaje de error en caso de que no algo falle", async () => {
    const updates = {
      ...utils.animal[0],
      peso: 200,
      altura: 1.3,
      tipoDeDieta: "omnívoro",
    };
    return await supertest
      .put("/animal")
      .send({ animal: { ...updates, id: "no-existe" } })
      .expect(400)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          error: "No se encontro el animal solicitado",
        });
      });
  });

  it("PUT responde con un mensaje que indica que el animal fue actualizado correctamente",  (done) => {
    const updates = {
      ...utils.animal[0],
      peso: 200,
      altura: 1.3,
      tipoDeDieta: "omnívoro",
    };
    supertest
      .put("/animal")
      .send({ animal: updates })
      .expect(200)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          message: "Animal actualizado correctamente",
        });
      }).end(done);
  });

  it("PUT responde el mensaje de error en caso de que reciba algún valor undefined",  () => {
    const updates = {
      ...utils.animal[0],
      peso: 200,
      altura: 1.3,
      tipoDeDieta: undefined,
    };
    return supertest
      .put("/animal")
      .send({ animal: updates })
      .expect(400)
      .expect("Content-Type", /json/)
      .expect(function (res) {
        expect(res.body).to.eql({
          error: "Faltan datos a completar",
        });
      });
  });
});
