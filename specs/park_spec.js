const assert = require("assert")
const Dino = require("../dino.js")
const Park = require("../park.js")

describe("Park", function(){

  beforeEach(function(){
    dino1 = new Dino("Tyrannosaurus", 2);
    dino2 = new Dino("Velociraptor", 6);
    dino3 = new Dino("Triceratops", 1);
    park = new Park();
  });

  it('should have an empty enclosure', function(){
    assert.strictEqual(park.enclosure.length, 0);
  })

  it('should have 1 dino in the enclosure', function(){
    park.add(dino1);
    assert.strictEqual(park.enclosure.length, 1);
  });

  it('should be able to remove a dino', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.remove();
    assert.strictEqual(park.enclosure.length, 2);
  });


});
