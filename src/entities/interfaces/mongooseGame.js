const mongoose = require('mongoose')

class MongooseGame {
    constructor() {
        this.schema = new mongoose.Schema({
            name: String, 
            tags: String,
        })
    }
}

const game = new MongooseGame()

module.exports = mongoose.model('Game', game.schema)