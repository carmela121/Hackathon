var router = require('express').Router();
var questionsController = require('../../controllers/questions');


router.route('/questions')
 .get(questionsController.index)
 .post(questionsController.add);

router.route('/questions/:id')
 .get(questionsController.show)
 .put(questionsController.update)
 .delete(questionsController.delete);

module.exports = router;