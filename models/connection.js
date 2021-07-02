var mongoose = require('mongoose');

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}

mongoose.connect('mongodb+srv://admin:admin@database1.94beh.mongodb.net/runningQuest?retryWrites=true&w=majority',
    options,
    function(err){
        if (!err){err="connection ok"}
        console.log(err)
    }
)
module.exports = mongoose