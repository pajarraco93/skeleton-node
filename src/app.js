// Express config
const express = require('express')
const app = express()
const port = 3000

// Mongodb config
const Database = require('./infra/mongoose/connection.js')

const saveGame = require('./application/saveGame.js')
const repositories = require('./adapters/repositories.js')

app.get('/mongoose', (req, res) => {
    const MongooseGameRepository = repositories.MongooseGameRepository
    const createGame = new saveGame(MongooseGameRepository)

    createGame.run(req.query.name, req.query.tags)
    res.send()
})
app.get('/sequelize', (req, res) => {})




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

new Database(process.env.DATABASE_CONNECTION)