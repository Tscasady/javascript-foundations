class Magician {
  constructor(data) {
    this.name = `The Great ${data.name}`
    this.assistant = data.assistant
    this.favoriteAccessory = data.clothing || "top hat"
    this.confidencePercentage = 10
  }

  performIncantation(string){
    return string.toUpperCase() + '!'
  }

  performTrick(){
    this.confidencePercentage += 10
    return `pull rabbit from ${this.favoriteAccessory}`.toUpperCase()
  }

  performShowStopper(){
    if (this.confidencePercentage < 100 || !this.assistant) return 'Oh no, this trick is not ready!'  
    return 'WOW! The magician totally just sawed that person in half!'
  }


}
module.exports = Magician

