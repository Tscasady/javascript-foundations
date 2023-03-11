class Centaur {
  constructor(data) {
    this.name = data.name
    this.breed = data.type
    this.cranky = false
    this.standing = true
    this.layingDown = !this.standing
    this.count = 0
  }

  shootBow() {
    if (this.cranky || this.layingDown) return 'NO!'
    this.crankyActivity()
    return 'Twang!!!'
  }

  run() {
    if (this.cranky || this.layingDown) return 'NO!'
    this.crankyActivity()
    return 'Clop clop clop clop!!!'
  }

  sleep() {
    if (this.standing) return 'NO!'
    this.count = 0
    this.cranky = false
    return 'ZZZZ'
  }

  layDown() {
    this.standing = false
    this.layingDown = !this.standing
  }

  standUp() {
    this.standing = true
    this.layingDown = !this.standing
  }

  drinkPotion() {
    if (!this.standing) return "Not while I'm laying down!"
    this.count = 0
    this.cranky = false
  }

  crankyActivity() {
    this.count += 1
    if (this.count > 2) {
      this.cranky = true
    }
  }
}

module.exports = Centaur
