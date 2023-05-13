/// ========================================================================== ///
/// ============================= HENRY-ZOO ============================= ///
/// ================================== TESTS ================================= ///

const utils = require('../utils');
const mostrarLaMediaDelPeso = require('../controllers/06-controller');
const { util } = require('chai');
const expect = require('chai').expect;

describe('---------- `mostrarLaMediaDelPeso` ----------', function () {
   
   beforeEach(function () {
      utils.reset();
   });

   xit('Retornar la media del peso de los animales', function () {
      const animal = utils.generateAnimal(10);
      utils.testAnimal().push(animal[0]);
      utils.testAnimal().push(animal[1]);
      utils.testAnimal().push(animal[2]);
      utils.testAnimal().push(animal[3]);
      utils.testAnimal().push(animal[4]);
      
      let valor0 = utils.animal[0].peso.split(" "); 
      let valor1 = utils.animal[1].peso.split(" ");
      let valor2 = utils.animal[2].peso.split(" "); 
      let valor3 = utils.animal[3].peso.split(" ");
      let valor4 = utils.animal[4].peso.split(" "); 
      let info = parseInt(valor0[0]) + parseInt(valor1[0])+parseInt(valor2[0])+parseInt(valor3[0])+parseInt(valor4[0])
      let total = info/utils.animal.length
      expect(mostrarLaMediaDelPeso()).to.eql(
         Math.trunc(total)
      );
      utils.testAnimal().push(animal[5]);
      utils.testAnimal().push(animal[6]);
      utils.testAnimal().push(animal[7]);
      utils.testAnimal().push(animal[8]);
      utils.testAnimal().push(animal[9]);
      let valor5 = utils.animal[5].peso.split(" "); 
      let valor6 = utils.animal[6].peso.split(" ");
      let valor7 = utils.animal[7].peso.split(" "); 
      let valor8 = utils.animal[8].peso.split(" ");
      let valor9 = utils.animal[9].peso.split(" "); 
      let info2 = parseInt(valor0[0]) + parseInt(valor1[0])+parseInt(valor2[0])+parseInt(valor3[0])+parseInt(valor4[0])+parseInt(valor5[0])+parseInt(valor6[0])+parseInt(valor7[0])+parseInt(valor8[0])+parseInt(valor9[0])
      let total2 = info2/utils.animal.length
      expect(mostrarLaMediaDelPeso()).to.eql(
         Math.trunc(total2)
      );
   });

   xit('Debe arrojar un error si no hay animales', function () {
      expect(() => mostrarLaMediaDelPeso()).to.throw('No tenemos valores');
   });
});

