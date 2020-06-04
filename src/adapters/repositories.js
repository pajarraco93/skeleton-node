const MongooseGame = require('../entities/interfaces/mongooseGame.js')

class GameRepository {
    constructor() {
        if(!this.add) {
            throw new Error("Add mehtod not implemented");
        }

        if(!this.get) {
            throw new Error("Get mehtod not implemented");
        }
    }
}

class MongooseGameRepository extends GameRepository {
    constructor() {
        super()
    }

    add(object) {
        MongooseGame(object).save()  
        .then(doc => {
            console.log('Moongose worked!')
            console.log(doc)
        })
        .catch(err => console.error(err))
    }

    get(game_id) {

    }
}

const mongooseGameRepository = new MongooseGameRepository(MongooseGame)

module.exports = {
    GameRepository : GameRepository,
    MongooseGameRepository : mongooseGameRepository,
}