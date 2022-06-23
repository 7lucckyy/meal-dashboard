
const express = require('express')



const bodyParser = require('body-parser');

const postUser = require('../controller/user/postUser');
const postLogin = require('../controller/user/loginAuth');
const postProjectInfo = require('../controller/project/postProject');
const postIndicators = require('../controller/indicators/postIndicators');



const router = express.Router()
router.use(bodyParser.json())



router.post('/register',  postUser);
router.post('/login', postLogin);
router.post('/create-project', postProjectInfo);
router.post('/create-indicator', postIndicators);



module.exports = router;
