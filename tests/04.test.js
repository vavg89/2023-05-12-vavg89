/// ========================================================================== ///
/// ============================= HENRY-ZOO ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const deleteAnimal = require('../controllers/04-controller');
const expect = require('chai').expect;

describe('----------`deleteAnimal`----------', function () {
   
   beforeEach( () => (utils.reset(), utils.animal.push(...utils.generateAnimal(5))));

   it('Debe retornar un mensaje con un error al no encontrar el animal', () => {
      expect(() => deleteAnimal('xyz789')).to.throw(
         `No existe el animal con id: ${'xyz789'}`
      );
   });

   it('Debe eliminar un animal de forma correcta y responder con el arreglo de animales teniendo en cuenta el eliminado', () => {
      const initialAnimals = [...utils.animal];
      const [deletedAnimal, deletedAnimal2] = utils.animal;
      const result = deleteAnimal(deletedAnimal.id);
      expect(result).not.to.contain(deletedAnimal);
      expect(result).to.have.length(initialAnimals.length - 1);

      const result2 = deleteAnimal(deletedAnimal2.id);
      expect(result2).not.to.contain(deletedAnimal2);
      expect(result2).to.have.length(initialAnimals.length - 2);
   });
});
