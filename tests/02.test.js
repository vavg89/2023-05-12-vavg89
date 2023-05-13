/// ========================================================================== ///
/// ============================= HENRY-ZOO ============================= ///
/// ================================== TESTS ================================= ///

const filtrarPorEdad = require('../controllers/02-controller');
const utils = require('../utils');
const expect = require('chai').expect;

describe('---------- `filtrarPorEdad` ----------', function () {
   const animal = utils.generateAnimal(2);

   beforeEach(function () {
      utils.reset();
   });

   it('Devuelve el mensaje de error que diga: "No hay animales igual o menores a la edad solicitada"', function () {
      utils.animal.push(animal);
      utils.animal = utils.animal.flat();
      utils.animal[0].edad = 20;
      utils.animal[1].edad = 12;
      expect(() => filtrarPorEdad(10)).to.throw(
         'No hay animales igual o menores a la edad solicitada'
      );
   });
   it('Devolver los animales que sean igual o menor a la edad solicitada', function () {
      utils.animal.push(animal);
      utils.animal = utils.animal.flat();
      utils.animal[0].edad = 11;
      utils.animal[1].edad = 10;

      expect(filtrarPorEdad(10)).to.deep.equal([utils.animal[1]]);
   });
});
