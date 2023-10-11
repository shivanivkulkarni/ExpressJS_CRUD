const{ Router } = require('express');
const controller = require('./controller');
const validateToken = require('../middleware/validateTokenHandler');

const router = Router()

router.post('/addQuestion',validateToken,controller.addQuestion)
router.post('/deleteQuestion',validateToken,controller.deleteQuestion)

module.exports = router