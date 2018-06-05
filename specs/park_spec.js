const assert = require("assert")
const Dino = require("../dino.js")
const Park = require("../park.js")

describe("Park", function(){

  beforeEach(function(){
    dino = new Dino();
    park = new Park();
  });

  it('should have an empty enclosure', function(){
    assert.strictEqual(park.enclosure.length, 0);
  })


});
