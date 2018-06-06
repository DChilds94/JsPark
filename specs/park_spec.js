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

  it('should be able to remove a dino of a certian type', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.removeByType("Velociraptor");
    assert.strictEqual(park.enclosure.length, 2);
  });

  it('should return dino2', function(){
    park.add(dino1);
    park.add(dino2);
    park.add(dino3);
    park.getHighBreeders()
    assert.strictEqual(park.getHighBreeders(), dino2 );
  });

  it("should be able to get how many dino1 there will be after 1 year", function (){
  park.add(dino1);
  park.year = 1;
  assert.strictEqual(park.calculateOffSpringInAYear(), 3);
});


it('should be able to get how many dino1 there will be after 2 years', function (){
  park2 = new Park()
  park2.year = 2;
  park2.add(dino1);
  // console.log(park2.enclosure);
  assert.strictEqual(park2.calculateOffSpringInAYear(), 6);
});


});
