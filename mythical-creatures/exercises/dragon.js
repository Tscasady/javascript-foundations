class Dragon {
  constructor(name, rider){
    this.name = name
    this.rider = rider
    this.eaten = 0
  }

  greet(){
    return `Hi, ${this.rider}!`
  }

  eat(){
    this.eaten += 1
  }

  get hungry(){
    return this.eaten < 3
  }
}
module.exports = Dragon
