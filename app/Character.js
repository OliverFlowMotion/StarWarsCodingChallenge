class Character {
    constructor() {
        this._name = ''
        this._height = ''
        this._hairColour = ''
        this._starships = []
        this._homeworld = {}
    }

    set name(name) {
        this._name = name
    }

    set height(height) {
        this._height = height
    }

    set hairColour(hairColour) {
        this._hairColour = hairColour
    }

    set starships(starship) {
        this._starships = starship
    }

    set homeworld(homeworld) {
        this._homeworld = homeworld
    }

    get starships() {
        return this._starships
    }

    get homeworld() {
        return this._homeworld
    }

    get() {
        return {
            name : this._name,
            height : this._height,
            hairColour : this._hairColour,
            starships : this.starships,
            homeworld : this.homeworld
        }
    }
}
module.exports = Character