class Homeworld {
    constructor() {
        this._name = ''
        this._population = ''
    }

    set name(name) {
        this._name = name
    }

    set population(population) {
        this._population = population
    }

    get() {
        return {
            name : this._name,
            population : this._population
        }
    }

}
module.exports = Homeworld