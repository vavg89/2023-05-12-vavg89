const supertest = require('supertest-as-promised')(require('../app'));
const utils = require('../utils');
const expect = require('chai').expect;
const { faker } = require('@faker-js/faker/locale/es');
describe('GET /animalesOrdenados', function () {
   beforeEach(function () {
      utils.reset();
   });

   it('Devuelve los animales ordenados', function () {
      const valores0 = faker.datatype.number({ min: 1, max: 15 });
      const valores1 = faker.datatype.number({ min: 15, max: 25 });
      const valores2 = faker.datatype.number({ min: 25, max: 35 });
      const valores3 = faker.datatype.number({ min: 35, max: 45 });
      const animal0 = utils.generateAnimal(1);
      animal0[0].edad = valores0;
      const animal1 = utils.generateAnimal(1);
      animal1[0].edad = valores1;
      const animal2 = utils.generateAnimal(1);
      animal2[0].edad = valores2;
      const animal3 = utils.generateAnimal(1);
      animal3[0].edad = valores3;
      utils.testAnimal().push(animal3[0]);
      utils.testAnimal().push(animal2[0]);
      utils.testAnimal().push(animal1[0]);
      utils.testAnimal().push(animal0[0]);
      return supertest
         .get('/animalesOrdenados')
         .expect(200)
         .expect('Content-Type', /json/)
         .expect(function (res) {
            expect(res.body).to.eql([
               animal3[0],
               animal2[0],
               animal1[0],
               animal0[0],
            ]);
         });
   });
   it('Si no hay animales arroja un error', function () {
      return supertest
         .get('/animalesOrdenados')
         .expect(400)
         .expect(function (res) {
            expect(res.body).to.eql({
               err: 'No se encontraron animales',
            });
         });
   });
});
