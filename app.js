const Controller = require('./controller/controller')

const controller = new Controller()

const characterIds = [
    1,
    2,
    3
]

characterIds.forEach(async (id) => {
    let character = await controller.buildCharacter(id)
    console.log(character)
})