const { faker } = require('@faker-js/faker/locale/es');
// ⚠️ NO MODIFICAR ESTE ARCHIVO ⚠️
// Aquí podrás ver las funciones escenciales para resolver este CheckPoint.

const especiesRandom = (n) => {
   let especies = [
      {
         name: faker.animal.type(),
         especie: faker.animal.snake(),
      },
      {
         name: faker.animal.type(),
         especie: faker.animal.lion(),
      },
      {
         name: faker.animal.type(),
         especie: faker.animal.horse(),
      },
      {
         name: faker.animal.type(),
         especie: faker.animal.dog(),
      },
      {
         name: faker.animal.type(),
         especie: faker.animal.crocodilia(),
      },
      {
         name: faker.animal.type(),
         especie: faker.animal.bird(),
      },
   ];
   let especiesGuardadas = [];
   for (let i = 0; i < n; i++) {
      let numeroRandom = Math.floor(Math.random() * especies.length);
      especiesGuardadas.push(especies[numeroRandom]);
   }
   return especiesGuardadas;
};

module.exports = {
   animal: [],
   especie: [],

   reset: function () {
      this.animal = [];
      this.especie = [];
   },

   testAnimal: function () {
      return this.animal;
   },
   testEspecie: function () {
      return this.especie;
   },
   // Genera un nuevo animal con fakerJs. Si es necesario, se pueden pisar los valores en los test después
   // para forzar ciertos casos.
   generateAnimal: function (n) {
      return Array.from({ length: n }, () => ({
         id: faker.datatype.uuid(),
         name: faker.animal.type(),
         edad: faker.datatype.number({ min: 1, max: 15 }),
         peso: `${faker.datatype.number({ min: 1, max: 100 })} Kilos`,
         altura: `${faker.datatype.number({ min: 10, max: 200 })}cm`,
         descripción: faker.lorem.paragraph(1),
      }));
   },
   // Genera un nuevo animal con fakerJs.
   //esta funcion va a devolver un array de objetos con la siguiente estructura:
   /*
   ACLARACION: LOS DATOS SON RANDOMS
  [
      { name: 'lion', especie: 'Tori Horse' },
      { name: 'bear', especie: 'Cape lion' },
      { name: 'bear', especie: 'Braque d'Auvergne"' },
      { name: 'lion', especie: 'Northern tree snake' },
  ]
  */
   generateEspecie: function (n) {
      return especiesRandom(n);
   },
};
