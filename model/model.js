const axios = require('axios')

class Model {
  constructor() {
    this.endpoint = 'https://swapi.dev/api'
  }

  async getCharacter(characterId) {
    let params = this.#buildParams(`${this.endpoint}/people/${characterId}/`)
    return await this.#makeCall(params)
  }

  async getShip(endpoint) {
    let params = this.#buildParams(endpoint)
    return await this.#makeCall(params)
  }

  async getWorld(endpoint) {
    let params = this.#buildParams(endpoint)
    return await this.#makeCall(params)
  }

  #buildParams(url) {
    return {
      method: 'get',
      url: url,
    }
  }

  async #makeCall(args) {
    return axios(args)
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.log(err)
      return false
    })
  }

}

module.exports = Model