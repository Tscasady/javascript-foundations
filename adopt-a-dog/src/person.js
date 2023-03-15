var Dog = require('./dog.js')

class Person {
  constructor(name, dog) {
    this.name = name
    this.dog = dog
  }

  fillFoodBowl() {
    this.dog.hungry = false
  }

  throwBall() {
    if (this.dog.energyLevel > 3) {
      this.dog.fetchBall()
      return `${this.dog.name} loves playing fetch!`
    }
  }

  introduceNewFriends(dog){
    this.dog.makeNewFriend(dog)
  }

  adoptAPup(name, age){
    if (!this.dog) {
      this.dog = new Dog({name: name, age: age})
    } else {
      return `You can\'t adopt ${name}. You already have ${this.dog.name}!`
    }
  }
}

module.exports = Person
