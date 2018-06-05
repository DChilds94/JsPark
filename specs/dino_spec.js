const assert = require("assert")
const Dino = require("../dino.js")
const Park = require("../park.js")

describe('Dino', function(){

let dino;

  beforeEach(function(){
    dino = new Dino()
  });

it('should be a Tyrannosaurus', function(){
  const dino = new Dino();
dino.type = "Tyrannosaurus"
  assert.strictEqual(dino.type, "Tyrannosaurus")
});

});
