const mongoose = require('mongoose')

//Groups
const groupSchema = mongoose.Schema({
    name : String,
    distance : Number,
    start_date : Date,
    end_date : Date

})
const groupModel = mongoose.model('groups', groupSchema)


module.exports = groupModel