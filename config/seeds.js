var mongoose = require('mongoose');
var Question = require('../models/question');
var db = require('./database');

mongoose.connect(db.uri);

Question.collection.drop();

Question.create([{

   question: "Have you ever dated someone on a regular basis or gone steady?"
 },{
   question: "Have you ever picked someone up or been picked up?"
 },{
   question: "Have you ever shared a bed, sleeping bag, or sleeping accommodations with someone without anything steamy happenings?"
 },{
   question: "Have you ever used tickling as a pick-up, get-to-know-you-better routine?"
 },{
   question: "Have you ever read or bought pornographic periodicals or sexually explicit literature ?"
 },{
   question: "Have you ever smoked or eaten marijuana/sensemilia"
 },{
   question: "Have you ever gone to class or work while under the influence of drugs"
 },{
   question: "Have you ever walked around in your room/apartment/house/habitation in the nude?"
 },{
   question: "Have you ever had an entire sexting conversation?"
 },{
   question: "Have you ever favorited someone’s tweet to flirt with them?"
 },{
   question: "Have you ever been sexually aroused by accident?"
 },{
   question: "Have you ever run a pornographic website or tumblr?"
 },{
   question: "Have you ever showed/shared pornography with a friend or lover?"
 },{
   question: "Have you ever gotten a lap dance?"
 },{
   question: "Have you ever had sex with someone because you felt sorry for them?"
 },{
   question: "Have you ever had sex with a teacher/professor?"
 },{
   question: "Have you ever been sexually attracted to an animated character?"
 },{
   question: "Have you ever taken sexy pictures of someone?"
 },{
   question: "Have you ever french kissed?"
 },{
   question: "Have you ever given or received a hickey?"
 }], function(err, questions) {
  if(err) console.error(err);
  else console.log(questions);
  mongoose.connection.close();
});

