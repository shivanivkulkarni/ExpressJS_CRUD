const{ Router } = require('express');
const controller = require('./controller');
const validateToken = require('../middleware/validateTokenHandler');

const router = Router()


router.post('/addUser',controller.addUser);
router.post('/userSignIn',controller.signin)

// router.get('/getStudents/:id',controller.getStudentById);
// router.post('/addStudent',controller.addStudent);
// router.delete('/removeStudent/:id',controller.removeStudent)
// router.put('/updateStudent/:id',controller.updateStudent)
// router.post('/signin',controller.signin)
// router.get("/test",validateToken,controller.test)

module.exports = router