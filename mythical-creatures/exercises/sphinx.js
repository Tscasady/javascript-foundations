class Sphinx {
  constructor(name = null){
    this.name = name
    this.riddles = []
    this.heroesEaten = 0
  }

  collectRiddle(riddle){
    this.riddles.push(riddle)
    if (this.riddles.length > 3) {
      this.riddles.shift()
    }
  }

  attemptAnswer(answer){
    let response
    this.riddles.forEach(element => {
      if (element.answer === answer) {
        this.riddles.splice(this.riddles.indexOf(element), 1)
        response = 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    })
    if (!response){
      this.heroesEaten += 1
    } else if (this.riddles.length === 0){
      response = `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`
    }
    return response
  }

  
}

module.exports = Sphinx
