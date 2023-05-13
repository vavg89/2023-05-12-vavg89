/// ========================================================================== ///
/// ============================= HENRY-ZOO ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const ordenarPorEdad = require('../controllers/05-controller');
const expect = require('chai').expect;
const { faker } = require("@faker-js/faker/locale/es");
describe('---------- `ordenarPorEdad` ----------', function () {
   beforeEach(function () {
      utils.reset();
   });
   const valores0 = faker.datatype.number({ min: 1, max: 15 })
   const valores1 = faker.datatype.number({ min: 15, max: 25 })
   const valores2 = faker.datatype.number({ min: 25, max: 35 })
   const valores3 = faker.datatype.number({ min: 35, max: 45 })
   it("Debes de devolver a los animales de mayor a menor con lo que respecta a su edad", () => {
      const animal0 = utils.generateAnimal(1);
      animal0[0].edad = valores0
      const animal1 = utils.generateAnimal(1);
      animal1[0].edad = valores1
      const animal2= utils.generateAnimal(1);
      animal2[0].edad = valores2
      const animal3 = utils.generateAnimal(1);
      animal3[0].edad = valores3
      utils.testAnimal().push(animal3[0]);
      utils.testAnimal().push(animal2[0]);
      utils.testAnimal().push(animal1[0]);
      utils.testAnimal().push(animal0[0]);
      expect(ordenarPorEdad()).to.eql([
         animal3[0],
         animal2[0],
         animal1[0],
         animal0[0],
      ]);
   });

   it('Debe arrojar un error si no hay animales', function () {
      expect(() => ordenarPorEdad()).to.throw('No se encontraron animales');
   });
});
