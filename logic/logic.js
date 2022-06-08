const Character = require('../app/Character')
const Ship = require('../app/Ship')
const Homeworld = require('../app/Homeworld')

class Logic {
  constructor() {}

  formatCharacter(data) {
    const character = new Character()
    character.name = data.name
    character.height = data.height
    character.hairColour = data.hairColour
    character.starships = data.starships
    character.homeworld = data.homeworld
    return character
  }

  formatShip(data) {
    const ship = new Ship()
    ship.name = data.name
    ship.model = data.model
    return ship
  }

  formatWorld(data) {
    const homeworld = new Homeworld()
    homeworld.name = data.name
    homeworld.population = data.population
    return homeworld
  }

  formatAll(character, ships, homeworld) {
    let characterData = character.get()
    characterData.starships = []
    characterData.homeworld = homeworld.get()
    ships.forEach((ship) => {
      return characterData.starships.push(ship.get())
    })
    return characterData
  }
}

module.exports = Logic
