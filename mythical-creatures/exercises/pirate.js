class Pirate{
  constructor(name, job = 'scallywag'){
    this.name = name
    this.job = job
    this.sin_count = 0
    this.booty = 0
  }

  robShip(){
    this.sin_count += 1
    if (this.sin_count < 6) {
      this.booty += 100
      return 'YAARRR!'
    } else {
      this.cursed
      return 'ARG! I\'ve been cursed!'
    }
  }

  get cursed(){
    return this.sin_count > 4
  }

  liftCurse(){
    if (this.cursed && this.booty >= 300){
      this.booty -= 300
      this.sin_count = 0
      return 'Your curse has been lifted!'
    } else {
      return 'You don\'t need to lift a curse!'
    }
  }



}

module.exports = Pirate
