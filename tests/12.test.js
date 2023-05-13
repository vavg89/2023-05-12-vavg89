const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const expect = require('chai').expect;

describe('GET /mostrarLaMediaDelPeso', function () {
   beforeEach(() => {
      utils.reset();
   });

   xit('Devolver el valor del controlador 06', function () {
      const animal = utils.generateAnimal(5);
      utils.testAnimal().push(animal[0]);
      utils.testAnimal().push(animal[1]);
      utils.testAnimal().push(animal[2]);
      utils.testAnimal().push(animal[3]);
      utils.testAnimal().push(animal[4]);

      let valor0 = utils.animal[0].peso.split(' ');
      let valor1 = utils.animal[1].peso.split(' ');
      let valor2 = utils.animal[2].peso.split(' ');
      let valor3 = utils.animal[3].peso.split(' ');
      let valor4 = utils.animal[4].peso.split(' ');
      let info =
         parseInt(valor0[0]) +
         parseInt(valor1[0]) +
         parseInt(valor2[0]) +
         parseInt(valor3[0]) +
         parseInt(valor4[0]);
      let total = info / utils.animal.length;
      return supertest
         .get(`/mostrarLaMediaDelPeso`)
         .expect(200)
         .expect('Content-Type', /json/)
         .expect((res) => {
            expect(res.body).to.eql({ results: Math.trunc(total) });
         });
   });

   xit('Si no hay animales arroja un error', function () {
      return supertest
         .get('/mostrarLaMediaDelPeso')
         .expect(400)
         .expect(function (res) {
            expect(res.body).to.eql({
               err: 'No tenemos valores',
            });
         });
   });
});
