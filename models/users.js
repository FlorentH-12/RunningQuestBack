const mongoose = require('mongoose')

//Sous document Trophées gagnés
const tropheeschema = mongoose.Schema({
    Nom : String,
    Trophee : String,
});


//Sous document activities
const activitySchema = mongoose.Schema({
    polyline : String,
    date : String,
    run_name : String,
    distance : Number,
    run_id : Number,
    newkm : Number,
    city : String,
    speed : Number,
});


//Users
const userSchema = mongoose.Schema({
    pseudo: String,
    email: String,
    password: String,
    token: String,
    profilpicfromstrava : String,
    activities : [activitySchema],
    trophy : [tropheeschema],
    challenge : [{type : mongoose.Schema.Types.ObjectId, ref : 'challenges'}],
    group : [{type : mongoose.Schema.Types.ObjectId, ref : 'groups'}],    
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel