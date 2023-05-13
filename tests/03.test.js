/// ========================================================================== ///
/// ============================= HENRY-ZOO ============================= ///
/// ================================== TESTS ================================= ///

const utils = require("../utils");
const updateAnimal = require("../controllers/03-controller");
const expect = require("chai").expect;

describe("----------`updateAnimal`----------", function () {
  beforeEach(
    () => (utils.reset(), utils.animal.push(...utils.generateAnimal(10)))
  );

  it("Debe retornar un error al no encontrar el animal", () => {
    expect(() =>
      updateAnimal({
        ...utils.animal[0],
        id: "no-existe",
        tipoDeDieta: "carnivoro",
      })
    ).to.throw("No se encontro el animal solicitado");
    expect(() =>
      updateAnimal({
        ...utils.animal[1],
        id: "sdsdsd",
        tipoDeDieta: "carnivoro",
      })
    ).to.throw("No se encontro el animal solicitado");
    expect(() =>
      updateAnimal({ ...utils.animal[2], id: "null", tipoDeDieta: "carnivoro" })
    ).to.throw("No se encontro el animal solicitado");
  });

  it("Debe modificar de forma correcta al animal encontrado", () => {
    let animal = utils.animal[0];
    const updates = {
      ...animal,
      peso: 200,
      altura: 1.3,
      tipoDeDieta: "omnívoro",
    };
    const updatedAnimal = updateAnimal(updates);

    expect(updatedAnimal.id).to.equal(animal.id);
    expect(updatedAnimal.nombre).to.equal(animal.nombre);
    expect(updatedAnimal.peso).to.equal(updates.peso + " " + "Kilos");
    expect(updatedAnimal.altura).to.equal(updates.altura + "cm");
    expect(updatedAnimal.tipoDeDieta).to.equal(updates.tipoDeDieta);
  });

  it("Si alguno de los datos recibidos es undefined debe retornar un error", () => {
    expect(() =>
      updateAnimal({ ...utils.animal[0], peso: undefined })
    ).to.throw("Faltan datos a completar");
    expect(() =>
      updateAnimal({ ...utils.animal[1], altura: undefined })
    ).to.throw("Faltan datos a completar");
    expect(() =>
      updateAnimal({ ...utils.animal[2], tipoDeDieta: undefined })
    ).to.throw("Faltan datos a completar");
  });
});
