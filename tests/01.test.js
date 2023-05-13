/// ========================================================================== ///
/// ============================= HENRY-ZOO ============================= ///
/// ================================== TESTS ================================= ///

const addAnimal = require("../controllers/01-controller");
const utils = require("../utils");
const expect = require("chai").expect;

describe("---------- `addAnimal` ----------", function () {
  const animal = utils.generateAnimal(2);

  beforeEach(function () {
    utils.reset();
  });

  it('Busca el animal en la base de datos. Si está, devuelve un error que diga: "Este animal ya existe en la base de datos"', function () {
    utils.animal.push(animal[0]);
    utils.animal.push(animal[1]);
    expect(() => addAnimal(animal[0])).to.throw(
      "Este animal ya existe en la base de datos"
    );
    expect(() => addAnimal(animal[1])).to.throw(
      "Este animal ya existe en la base de datos"
    );
  });

  it("Debe agregar el animal a la base de datos (utils.animal)", function () {
    addAnimal(animal[0]);
    expect(utils.animal).to.eql([animal[0]]);
    expect(utils.animal).to.eql([animal[0]]);
  });

  it("Por último, debe devolver la base de datos de utils.animal)", function () {
    expect(addAnimal(animal[0])).to.eql(utils.animal);
    expect(addAnimal(animal[1])).to.eql(utils.animal);
  });
});
