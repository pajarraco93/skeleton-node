const mongoose = require('mongoose');

class Database {
  constructor(connection) {
    this._connect(connection)
  }
  
_connect(connection) {
     mongoose.connect(connection)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = Database