var app = require("../app")
var request = require("supertest")
var mongoose = require('../models/connection')
  
  afterAll(async () => {
    await mongoose.connection.close();
  });


//------------------TEST CONNEXION--------------------------------------//
test("Connexion - Body correct", async () => {
   
   await request(app).post('/sign-in')
     .send({ emailFromFront: "Toto", passwordFromFront: "toto"})
     .expect(200)
     .expect({ user :{
      challenge: [
        {
          _id: '60b956f40ffc5c0d58fb54e4',
          Nom: 'Uuud',
          Objectif: 6,
          Date_depart: '2021-06-04T00:24:55.000Z',
          Date_fin: '2021-06-18T00:24:55.000Z',
          Trophee: 'https://res.cloudinary.com/dcyuyphdt/image/upload/v1621962319/rq/King_mkdjt3.png',
          __v: 0
        },
        {
          _id: '60b959cd0ffc5c0d58fb54e5',
          Nom: 'Jjjj',
          Objectif: 7,
          Date_depart: '2021-06-11T00:36:35.000Z',
          Date_fin: '2021-06-26T00:36:35.000Z',
          Trophee: 'https://res.cloudinary.com/dcyuyphdt/image/upload/v1621962319/rq/King_mkdjt3.png',
          __v: 0
        },
        {
          _id: '60b9e6fa3ebaac2fa88ac5a8',
          Nom: 'Marathon reims',
          Objectif: 8,
          Date_depart: '2021-06-07T10:39:37.000Z',
          Date_fin: '2021-06-30T10:39:37.000Z',
          Trophee: 'https://res.cloudinary.com/dcyuyphdt/image/upload/v1621947674/rq/Challenge_tgzwms.png',
          __v: 0
        },
        {
          _id: '60bfb4e60afd3e32a49d06c1',
          Nom: 'Test 6',
          Objectif: 66,
          Date_depart: '2021-06-11T20:20:03.000Z',
          Date_fin: '2021-06-27T20:20:03.000Z',
          Trophee: 'https://res.cloudinary.com/dcyuyphdt/image/upload/v1621947674/rq/Challenge_tgzwms.png',
          __v: 0
        }
      ],
      group: [],
      _id: '60a502c377a4b02e58304d4e',
      trophy: [
        {
          Nom: 'Et de 15 !',
          Trophee: 'https://res.cloudinary.com/dcyuyphdt/image/upload/v1621882858/rq/15km_hujpys.jpg'
        }
      ],
      pseudo: 'Jean-Luc',
      email: 'Toto',
      password: '$2b$10$d73dkJZ2N9t0FiDYaRPSZ.66BZPLFfPA8ubP5HP9g6By/7bhJKc3K',
      token: 'RFS9bf2OMiSmALwdXJ8exqLczrjwj1Fw',
      activities: [
        {
          polyline: 'mstkH{doWb@Dm@VDpBEx@?t@CFSDMCc@QACId@Ah@Qj@IJe@Ge@?e@Ka@?FoBBQTm@Xc@Lu@Ro@n@sAJu@Zc@\\\\sAVi@r@cABD@v@IbFIVATG?FBDI',
          date: '19/05/2021',
          run_name: 'Lunch Run',
          distance: 1,
          run_id: 5322525694
        },
        {
          polyline: 'k{skH_`nWx@sAdAiCdCiEhAaChBeDfAgCt@wAVm@lA{B^g@r@{A^a@v@qA^e@Zk@dAgCPs@\\\\e@Xk@Vo@`@a@Zg@N_@Rq@Vk@z@uAt@qAhAgCr@qATk@x@oAVg@l@}A`A_Az@gA\\\\g@t@qA\\\\e@x@mAv@qA`@]Zc@pAaCv@gAhBgDfAeCtA{BXk@jByC^_@Tq@Lw@d@eBVm@p@yA\\\\e@jA{BvAwBXi@Xq@\\\\c@`BqA^]^c@x@kA^WzAsBvAsBTm@\\\\_@dAo@^]`@YbB_Bz@mAvB_C`@W|AkB~A_B^g@`@_@z@gA|@{@vBsC^_@Xm@Ro@h@Yh@O^YtAsBb@Y~B{BzBiFPs@\\\\oBRq@n@}Cp@kEj@{CFw@Lw@fB{Jt@}E`@cDPu@ZiBn@yC~@mGj@eDh@mDNs@ZoBRs@TiBz@sECEc@hBo@fDu@zEkArGe@hD{@vEaAvGa@hBSjBg@bD{@pESl@a@fBYlBm@`DQvA_@jBIv@i@bDUn@a@dBq@xAKx@o@~Au@pA_@f@gAdA[j@aBzA[b@a@^{@pA_Av@_B`BwAnB_@`@a@Z}@~@a@Zw@dA[f@}AjB}@`Aa@Z]\\\\Yd@c@ZcAfAeBxA_F~F_@X[d@]b@_@`@cAx@yApB_AdA[d@mBdDYn@{@pAu@rASn@[h@Ul@}@rCYj@e@j@Un@mBjDs@xAgCjEs@tAUj@qAxB]d@]^c@VqAtBYp@qBvCsAtB]^y@jAk@`B[j@]b@u@tA[b@iAhCYd@]\\\\Mv@mA|Bm@|A[f@]`@Sr@Uj@u@nAmAzB{@hAYr@aBlDsAzBWl@gBdDu@lAw@jAq@vAw@vAWj@kBlDq@xAw@xA',
          date: '15/05/2021',
          run_name: 'Morning Run',
          distance: 10,
          run_id: 5322525256
        },
        {
          _id: '60a64c75f868ca23840eef7c',
          polyline: 'ohtkHs_oWz@k@h@q@t@sD?IJAMN?oAQu@Ss@Ay@G_Ae@e@Wq@g@gCYy@]GZe@Y]KaAs@_DDy@`@u@z@yAv@_BrAwBVe@Fv@Lz@PxBJv@\\\\pBHFWp@i@h@}@pAk@l@gA~@_@d@k@Zi@Po@F]HUp@g@tB[~@C|@Mv@UjCEhAIhAQr@MT?A',
          date: '20/05/2021',
          run_name: 'Morning Run',
          distance: 2,
          run_id: 5327159960,
          newkm: 2,
          city: 'Reims',
          speed: 8.5
        },
        {
          _id: '60a64d41f868ca23840eef7d',
          polyline: '_vvkHsfoWgAwB[{@c@s@{@kBw@}Am@SGAABCgAOSg@\\\\e@f@c@\\\\c@Ng@qB]{BOq@M]SCe@XGHYy@m@yDwByKC]TSdBm@d@MJ@BHAJYZ?@j@\\\\AGLEFBZ??FKFICs@@AEC?H\\\\ITLUHEG?ACv@c@s@TAQ[?PYBWJMfDyAjD_AtEqA~A[zMuDZBTNPZ`@zALx@V|@NVKVV|@?XCBL`Ad@xBt@jCf@xCV|@Xt@vA`CZ\\\\JB`@f@`A|A~A|Bv@vAfAxDhDhMbAhDTj@JF`@@t@ArDWb@?n@H~ALZIJMHiAb@UXKHIFUBc@B_C@w@CIA??E',
          date: '20/05/2021',
          run_name: 'Morning Run',
          distance: 4,
          run_id: 5327159593,
          newkm: 4,
          city: 'Reims',
          speed: 12
        },
        {
          _id: '60ab68020a1bf40ea0cd59b5',
          polyline: '_vvkHsfoWgAwB[{@c@s@{@kBw@}Am@SGAABCgAOSg@\\\\e@f@c@\\\\c@Ng@qB]{BOq@M]SCe@XGHYy@m@yDwByKC]TSdBm@d@MJ@BHAJYZ?@j@\\\\AGLEFBZ??FKFICs@@AEC?H\\\\ITLUHEG?ACv@c@s@TAQ[?PYBWJMfDyAjD_AtEqA~A[zMuDZBTNPZ`@zALx@V|@NVKVV|@?XCBL`Ad@xBt@jCf@xCV|@Xt@vA`CZ\\\\JB`@f@`A|A~A|Bv@vAfAxDhDhMbAhDTj@JF`@@t@ArDWb@?n@H~ALZIJMHiAb@UXKHIFUBc@B_C@w@CIA??E',
          date: '20/05/2021',
          run_name: 'Morning Run',
          distance: 4,
          run_id: 5327159593,
          newkm: 4,
          city: 'Reims',
          speed: 11
        },
        {
          _id: '60ab68460a1bf40ea0cd59b6',
          polyline: 'mstkH{doWb@Dm@VDpBEx@?t@CFSDMCc@QACId@Ah@Qj@IJe@Ge@?e@Ka@?FoBBQTm@Xc@Lu@Ro@n@sAJu@Zc@\\\\sAVi@r@cABD@v@IbFIVATG?FBDI',
          date: '20/05/2021',
          run_name: 'Morning Run',
          distance: 10,
          run_id: 5327159593,
          newkm: 10,
          city: 'Reims',
          speed: 9
        }
      ],
      __v: 11,
      profilpicfromstrava: 'https://dgalywyr863hv.cloudfront.net/pictures/athletes/28738246/11724974/3/medium.jpg'
    },
       
     result: true,
     error :[],
     dataRanking :[
       {
         _id: { pseudo: 'Jean-Luc', token: 'RFS9bf2OMiSmALwdXJ8exqLczrjwj1Fw' },
         totalDistance: 1,
         averageSpeed: null
       },
       {
         _id: {
           city: 'Levallois Perret',
           pseudo: 'Florent',
           token: 'f8OhkpHdFfO8qjpSSTrkMh9eGvCol3w0'
         },
         totalDistance: 123,
         averageSpeed: 8.5
       },
       {
         _id: {
           city: 'Levallois Perret',
           pseudo: 'Olivier',
           token: 'oBmVS9xRDi11ep1FaPB9FRaU1m7HIido'
         },
         totalDistance: 65,
         averageSpeed: 7.45
       },
       {
         _id: {
           city: 'Levallois Perret',
           pseudo: 'Adeline',
           token: 'Q4OBxwhYgZxkt25e3WpdDh1rAZUdvrTp'
         },
         totalDistance: 54,
         averageSpeed: 8.5
       },
       {
         _id: {
           city: 'Reims',
           pseudo: 'Florent',
           token: 'f8OhkpHdFfO8qjpSSTrkMh9eGvCol3w0'
         },
         totalDistance: 56,
         averageSpeed: 8.5
       },
       {
         _id: {
           city: 'Reims',
           pseudo: 'Olivier',
           token: 'oBmVS9xRDi11ep1FaPB9FRaU1m7HIido'
         },
         totalDistance: 31,
         averageSpeed: 8.866666666666665
       },
       {
         _id: {
           city: 'Reims',
           pseudo: 'Jean-Luc',
           token: 'RFS9bf2OMiSmALwdXJ8exqLczrjwj1Fw'
         },
         totalDistance: 20,
         averageSpeed: 10.125
       }
     ]
   
   });
   

  });


// -----------------------------------------------------------------//
  test("Connexion - Body incorrect", async () => {
   
    await request(app).post('/sign-in')
      .send({ emailFromFront: "Toto", passwordFromFront: ""})
      .expect(200)
      .expect({ user :null,
        
      result: false,
      error :['champs vides'],
     
    });
    
   });


//////////////////////////TEST INSCRIPTION/////////////////////////////////////
    test("Inscription - Body incorrect", async () => {
   
      await request(app).post('/sign-up')
        .send({ emailFromFront: "", passwordFromFront: ""})
        .expect(200)
        .expect({ saveUser :null,
               
        error :['champs vides'],
       
      });
      
     });

