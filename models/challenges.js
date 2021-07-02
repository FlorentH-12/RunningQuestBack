const mongoose = require('mongoose')

//Challenge
const challengeSchema = mongoose.Schema({
    Nom : String,
    Objectif : Number,
    Descriptif : String,
    Trophee : String,
    Date_depart : Date,
    Date_fin: Date

})
const challengeModel = mongoose.model('challenges', challengeSchema)

module.exports = challengeModel