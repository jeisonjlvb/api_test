const { Sequelize, Model } = require('sequelize')
var opts = {
    define: {
    }
}
//const database = new Sequelize('postgres://usuario:clave@localhost:5432/api_test', opts)
const database = new Sequelize('postgres://postgres:1234@localhost:5432/api_test', opts)

module.exports = { Model, database }