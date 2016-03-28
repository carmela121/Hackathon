var router = require('express').Router();
var questionsController = require('../../controllers/questions');
var usersController = require('../../controllers/users');


router.route('/')
  .get(questionsController.home)

router.route('/api/questions')
 .get(questionsController.index)
 .post(questionsController.add);

router.route('/api/questions/:id')
 .get(questionsController.show)
 .put(questionsController.update)
 .delete(questionsController.delete);

 router.route('/api/users')
 .get(usersController.index)
 .post(usersController.add);

 router.route('/api/users/:id')
 put(usersController.update);

module.exports = router;