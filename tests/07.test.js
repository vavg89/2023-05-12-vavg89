const supertest = require("supertest-as-promised")(require("../app"));
const utils = require("../utils");
const expect = require("chai").expect;

describe("POST /animal", function () {
  const animal = utils.generateAnimal(2);

  beforeEach(function () {
    utils.reset();
  });

  const animalTest = {
    id: 123456,
    name: "testAnimal",
    edad: 1,
    peso: `15 Kilos`,
    altura: `100cm`,
    descripción: "Este es un animal de prueba",
  };

  it("POST si el animal ya existe, responde con el error correspondiente y un status 400", async () => {
    utils.animal.push(animal);
    utils.animal = utils.animal.flat();
    const result = await supertest
      .post("/animal")
      .send({ animal: utils.animal[0] });
    expect(result.status).to.eql(400);
    expect(result.body).to.eql({
      err: "Este animal ya existe en la base de datos",
    });
  });

  it("POST debe agregar el animal de forma correcta y retornar todos los animales junto a un status 201", async () => {
    utils.animal.push(animal);
    utils.animal = utils.animal.flat();
    const agregradoOk = [...utils.animal, animalTest];
    const result = await supertest.post("/animal").send({ animal: animalTest });
    expect(result.status).to.eql(201);
    expect(result.body).to.eql({
      data: agregradoOk,
    });
  });
});
