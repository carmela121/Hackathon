var User = require('../models/user');

function usersIndex(req, res) {
 User.find(function(err, users) {
   if(err) return res.status(500).json({ message: err });
   return res.status(200).json(users);
 });
}

function userAdd(req, res) {
  User.create(req.body, function(err, user) {
    if(err) return res.status(500).json({ message: err });
    return res.status(201).json(user);
  });
}

function usersUpdate(req, res) {
 User.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, user) {
   if(err) return res.status(500).json({ message: err });
   return res.status(200).json(user);
 });
}
function usersDelete(req, res) {
 User.findByIdAndRemove(req.params.id, function(err) {
   if(err) return res.status(500).json({ message: err });
   return res.status(204).send();
 });
}

module.exports = {
 index: usersIndex,
 update: usersUpdate,
 add: userAdd,
 delete: userDelete
};