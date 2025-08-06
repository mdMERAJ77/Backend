
//*!Note:  check in this file which type of api here only

const express= require('express');
const { registerController, loginController } = require('../controllers/auth.controller');
// const { registerController } = require('../controllers/auth.controller');

const router = express.Router();
router.post('/register',registerController);
router.post('/login',loginController);

module.exports = router;