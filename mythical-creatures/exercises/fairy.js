class Fairy {
  constructor(name){
    this.name = name
    this.dust = 10
    this.clothes = {dresses: ['Iris']}
    this.disposition = 'Good natured'
    this.humanWards = []
  }

  receiveBelief(){
    this.dust += 1
  }

  believe(){
    this.dust += 10
  }

  makeDresses(flowers){
    flowers.forEach(flower => this.clothes.dresses.push(flower))
  }

  becomeProvoked(){
    this.disposition = "Vengeful"
  }

  replaceInfant(infant){
    if (this.disposition === 'Good natured') return infant
    this.humanWards.push(infant)
    if (this.humanWards.length > 2) { this.disposition = 'Good natured' }
    infant.disposition = "Malicious" 
    return infant
  }

  
  

}
module.exports = Fairy
