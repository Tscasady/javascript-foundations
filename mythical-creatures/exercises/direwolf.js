class Direwolf {

  constructor(name, home = 'Beyond the Wall', size = 'Massive') {
    this.name = name
    this.home = home
    this.size = size
    this.starksToProtect = []
  }

  get huntsWhiteWalkers() {
     return this.starksToProtect.length === 0
   }

  protect(stark) {
    if (stark.location === this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark)
      stark.safe = true
    }
  }

  leave(stark){
    const index = this.starksToProtect.indexOf(stark)
    this.starksToProtect.splice(index, 1)
    stark.safe = false
  }
}
module.exports = Direwolf
