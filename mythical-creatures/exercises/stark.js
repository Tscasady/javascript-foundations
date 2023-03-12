const Direwolf = require('../exercises/direwolf');

class Stark {
  constructor(data) {
    this.name = data.name
    this.location = data.area || 'Winterfell'
    this.safe = false
  }

  sayHouseWords() {
    if (!this.safe) return 'Winter is Coming'
    return 'The North Remembers'
  }

  callDirewolf(name, home) {
    let direwolf = new Direwolf(name, home)
    direwolf.home = this.location
    direwolf.protect(this)
    return direwolf
  }
}

module.exports = Stark
