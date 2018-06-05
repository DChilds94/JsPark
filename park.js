const Dino = require('./dino.js');

const Park = function(enclosure){
  this.enclosure = [];
}

Park.prototype.add = function (dino) {
  this.enclosure.push(dino);
};

Park.prototype.remove = function() {
  this.enclosure.pop();
}

// Park.prototype.getHighBreeders = function () {
//   result = this.enclosure.filter(dino => dino.offspringPerYear > 2);
//   return result
// };
Park.prototype.getHighBreeders = function () {
  for (const dino of this.enclosure)
    if (dino.offspringPerYear > 2)
    return dino;
};


module.exports = Park;
