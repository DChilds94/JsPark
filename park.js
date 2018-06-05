const Park = function(enclosure){
  this.enclosure = [];
}

Park.prototype.add = function (dino) {
  this.enclosure.push(dino);
};


module.exports = Park;
