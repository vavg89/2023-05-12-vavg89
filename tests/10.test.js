const utils = require("../utils");
const expect = require("chai").expect;
const supertest = require("supertest-as-promised")(require("../app"));

describe("DELETE /animal", function () {
   beforeEach(() => (utils.reset(), utils.animal.push(...utils.generateAnimal(5))));

   it("DELETE responde con un mensaje que nos indica que el auto fue eliminado correctamente", () => {
      const aux = utils.animal[0].id;
      return supertest
         .delete("/animal")
         .send({ id: aux })
         .expect(200)
         .expect("Content-Type", /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               message: `El animal con el id ${aux} fue eliminado de forma exitosa`,
            });
         });
   });

   it("DELETE responde el mensaje de error en caso de que no encuentre el animal", (done) => {
      supertest
         .delete("/animal")
         .send({ id: 90 })
         .expect(400)
         .expect("Content-Type", /json/)
         .expect(function (res) {
            expect(res.body).to.eql({
               error: `No existe el animal con id: ${90}`,
            });
         })
         .end(done);
   });
});
