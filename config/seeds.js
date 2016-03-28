var mongoose = require('mongoose');
var Question = require('../models/question');
var db = require('./database');

mongoose.connect(db.uri);

Question.collection.drop();

Question.create([{

   name: "Have you ever dated someone on a regular basis or gone steady?"
 },{
   name: "Have you ever picked someone up or been picked up?"
 },{
   name: "Have you ever shared a bed, sleeping bag, or sleeping accommodations with someone without anything steamy happenings?"
 },{
   name: "Have you ever used tickling as a pick-up, get-to-know-you-better routine?"
 },{
   name: "Have you ever read or bought pornographic periodicals or sexually explicit literature ?"
 },{
   name: "Have you ever smoked or eaten marijuana/sensemilia"
 },{
   name: "Have you ever gone to class or work while under the influence of drugs"
 },{
   name: "Have you ever walked around in your room/apartment/house/habitation in the nude?"
 },{
   name: "Have you ever had an entire sexting conversation?"
 },{
   name: "Have you ever favorited someone’s tweet to flirt with them?"
 },{
   name: "Have you ever been sexually aroused by accident?"
 },{
   name: "Have you ever run a pornographic website or tumblr?"
 },{
   name: "Have you ever showed/shared pornography with a friend or lover?"
 },{
   name: "Have you ever gotten a lap dance?"
 },{
   name: "Have you ever had sex with someone because you felt sorry for them?"
 },{
   name: "Have you ever had sex with a teacher/professor?"
 },{
   name: "Have you ever been sexually attracted to an animated character?"
 },{
   name: "Have you ever taken sexy pictures of someone?"
 },{
   name: "Have you ever french kissed?"
 },{
   name: "Have you ever given or received a hickey?"
 }], function(err, questions) {
  if(err) console.error(err);
  else console.log(questions);
  mongoose.connection.close();
});

