const Game = require('../entities/game.js')

class CreateGame {

    constructor(game_repository) {
        this.repository =  game_repository
    }

    async run(name, tags) {
        const game = new Game(name, tags)

        this.repository.add(game)
    }
}

module.exports = CreateGame