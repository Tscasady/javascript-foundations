var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  construct(name){
    this.name = name
    this.statues = []
  }
}

module.exports = Medusa
