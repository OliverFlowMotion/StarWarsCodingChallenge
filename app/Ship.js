class Ship {
    constructor() {
        this._name = ''
        this._model = ''
    }

    set name(name) {
        this._name = name
    }

    set model(model) {
        this._model = model
    }

    get() {
        return {
            name : this._name,
            model : this._model
        }
    }

}
module.exports = Ship