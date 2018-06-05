const assert = require("assert")
const Dino = require("../dino.js")


describe('Dino', function(){

let dino;

  beforeEach(function(){
    dino1 = new Dino("Tyrannosaurus", 2)
  });

it('should be a Tyrannosaurus', function(){
  // const dino = new Dino();
// dino.type = "Tyrannosaurus"
  assert.strictEqual(dino1.type, "Tyrannosaurus")
});

it('should have 2 babies per year', function(){
  // dino.offspringPerYear = 2;
  assert.strictEqual(dino1.offspringPerYear, 2)
});

});
