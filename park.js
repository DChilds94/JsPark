const Dino = require('./dino.js');

const Park = function(enclosure, year){
  this.enclosure = [];
  this.year = year
}

Park.prototype.add = function (dino) {
  this.enclosure.push(dino);
};

Park.prototype.remove = function() {
  this.enclosure.pop();
}

Park.prototype.removeByType = function(type) {
  for (const dino of this.enclosure)
    if (dino.type === type)
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

Park.prototype.calculateOffSpringInAYear = function () {
  for (const dino of this.enclosure)
    return (dino.offspringPerYear + this.enclosure.length) * this.year;
};


module.exports = Park;
