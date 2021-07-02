var express = require('express');
var router = express.Router();
var challengeModel = require('../models/challenges')
var userModel = require('../models/users')

var uid2 = require('uid2')

/* ENCODAGE MOT DE PASSE */
var bcrypt = require('bcrypt');
//const { default: challenge } = require('../../runningquest/reducers/challenge');
const cost = 10;


// _____________________________/* SIGN UP */_____________________________

router.post('/sign-up', async function (req, res, next) {

  var error = []
  var saveUser = null
  const uid = uid2(32)

  const data = await userModel.findOne({
    email: req.body.emailFromFront
  })

  if (data != null) {
    error.push('utilisateur déjà présent')
  }

  if (req.body.usernameFromFront == ''
    || req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
  ) {
    error.push('champs vides')
  }

  if (error.length == 0) {
    const hash = bcrypt.hashSync(req.body.passwordFromFront, cost)
    var newUser = new userModel({
      pseudo: req.body.pseudoFromFront,
      email: req.body.emailFromFront,
      password: hash,
      token: uid,
    })
    saveUser = await newUser.save()

  }
  res.json({ saveUser , error})
})

// _____________________________/* SIGN IN */_____________________________

router.post('/sign-in', async function (req, res, next) {

  var result = false
  var user = null
  var error = []
  var token = null

  if (req.body.emailFromFront == ''
    || req.body.passwordFromFront == ''
  ) {
    error.push('champs vides')
  }

  if (error.length == 0) {

    user = await userModel.findOne({ email: req.body.emailFromFront }).populate('challenge');
    var password = req.body.passwordFromFront 

    if (user) {

      if (bcrypt.compareSync(password, user.password)) {
        result = true;
        token = user.token;

        ////////////////////////////////
        var aggregate=userModel.aggregate([
          {
            '$unwind': {
              'path': '$activities'
            }
          }, {
            '$group': {
              '_id': {
                'city': '$activities.city', 
                'pseudo': '$pseudo',
                'token' : '$token'
              }, 
              'totalDistance': {
                '$sum': '$activities.distance'
              }, 
              'averageSpeed': {
                '$avg': '$activities.speed'
              }
            }
          }, {
            '$sort': {
              '_id.city': 1, 
              'totalDistance': -1, 
              '_id.pseudo': 1
            }
          }
        ]
         
        
        );          
       
        var dataRanking = await aggregate.exec()
      } else {
        error.push('email ou mot de passe incorrect');
      }
    } else {
      error.push('email ou mot de passe incorrect')
    }
  }
  console.log(dataRanking)
  res.json({ user, result, error,dataRanking})


})

// _____________________________/* ADD ACTIVITES*/_____________________________
router.post('/addactivites', async function(req, res, next) {


  var user = await userModel.findOne({ token: req.body.tokenFromFront});



  user.activities.push(
    {
      polyline : req.body.polyFromFront,
      date : req.body.dateFromFront,
      run_name : req.body.runNameFromFront,
      distance : req.body.distanceFromFront,
      run_id : req.body.idFromFront,
      newkm : req.body.newKmFromFront,
      city : req.body.cityFromFront,
      speed : req.body.speedFromFront
    }
  );

    var userSaved = await user.save();
    
    res.json(userSaved);
});


// _____________________________/* ADD CHALLENGE*/_____________________________
router.post('/addchallenge', async function(req,res,next){

  var error = []
 
  //RECHERCHE MON CHALLENGE
  const data = await challengeModel.findOne({
    Nom: req.body.nameFromFront,
    Objectif:req.body.kmFromFront,
    Date_depart:req.body.dateStartFromFront,
    Date_fin:req.body.dateEndFromFront,

  })

  if (data != null) {
    error.push('challenge déjà présent')
  }

  if (error.length==0){
    var newChallenge = new challengeModel({
      Nom: req.body.nameFromFront,
      Objectif: req.body.kmFromFront,
      Date_depart: req.body.dateStartFromFront,
      Date_fin: req.body.dateEndFromFront,
      Trophee:"https://res.cloudinary.com/dcyuyphdt/image/upload/v1621947674/rq/Challenge_tgzwms.png",
    })

    var challengeSaved = await newChallenge.save()
   
    //AJOUT de l'ID CHALLENGE DANS LE USER
    var user = await userModel.findOne({ token: req.body.tokenFromFront});
    user.challenge.push(newChallenge._id)
    var userSaved = await user.save();
    
    res.json(challengeSaved);

  }

});

module.exports = router;
