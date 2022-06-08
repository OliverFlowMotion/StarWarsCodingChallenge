const Model = require('../model/model')
const Logic = require('../logic/logic')

class Controller {
  constructor() {
    this.model = new Model()
    this.logic = new Logic()
  }

  async buildCharacter(characterId) {
    let character = await this.#getCharacter(characterId)
    let starships = await this.#getShip(character)
    let world = await this.#getWorld(character)
    return this.logic.formatAll(character, starships, world)
  }

  async #getCharacter(characterId) {
    let character = await this.model.getCharacter(characterId)
    return this.logic.formatCharacter(character)
  }

  async #getShip(character) {
    let starships = []
    let endpoints = character.starships
    endpoints.forEach(async (endpoint) => {
      let ship = await this.model.getShip(endpoint)
      starships.push(this.logic.formatShip(ship))
    })
    return starships
  }

  async #getWorld(character) {
    let endpoint = character.homeworld
    let world = await this.model.getWorld(endpoint)
    return this.logic.formatWorld(world)
  }
}

module.exports = Controller
