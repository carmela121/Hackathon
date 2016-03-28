var router = require('express').Router();
var questionsController = require('../../controllers/questions');


router.route('/')
  .get(questionsController.home)

router.route('/api/questions')
 .get(questionsController.index)
 .post(questionsController.add);

router.route('/api/questions/:id')
 .get(questionsController.show)
 .put(questionsController.update)
 .delete(questionsController.delete);

module.exports = router;