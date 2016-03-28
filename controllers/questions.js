var Question = require('../models/question');

function questionsIndex(req, res) {
 Question.find(function(err, questions) {
   if(err) return res.status(500).json({ message: err });
   return res.status(200).json(questions);
 });
}

function questionsShow(req, res) {
 Question.findById(req.params.id, function(err, question) {
   if(err) return res.status(500).json({ message: err });
   return res.status(200).json(question);
 });
}

function questionsUpdate(req, res) {
 Question.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, question) {
   if(err) return res.status(500).json({ message: err });
   return res.status(200).json(question);
 });
}

function questionsDelete(req, res) {
 Question.findByIdAndRemove(req.params.id, function(err) {
   if(err) return res.status(500).json({ message: err });
   return res.status(204).send();
 });
}
function questionAdd(req, res) {
  Question.create(req.body, function(err, question) {
    if(err) return res.status(500).json({ message: err });
    return res.status(201).json(question);
  });
}

module.exports = {
 index: questionsIndex,
 show: questionsShow,
 update: questionsUpdate,
 delete: questionsDelete,
 add: questionAdd
};