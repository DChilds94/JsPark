const Park = function(enclosure){
  this.enclosure = [];
}

Park.prototype.add = function (dino) {
  this.enclosure.push(dino);
};

Park.prototype.remove = function() {
  this.enclosure.pop();
}


module.exports = Park;
