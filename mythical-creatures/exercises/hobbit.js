class Hobbit {
  constructor(data){
    this.name = data.name,
    this.age = 0
    this.hasRing = false
  }

  celebrateBirthday(){
    this.age += 1
  }

  get adult(){
    return this.age > 32
  }
  
  get old(){
    return this.age > 100
  }

  getRing(){
    if (this.name === 'Frodo') { 
      this.hasRing = true 
      return 'Here is the ring!'
    }
    return 'You can\'t have it!'
  }
}

module.exports = Hobbit
