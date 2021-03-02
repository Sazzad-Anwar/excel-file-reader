//@Description: All types of application route's configuration is set in this file
const express = require('express');
const router = express.Router();
const { home } = require('../controllers/AppController');
const { upload } = require('../middlewares/multerMiddleware');

//@Description:
//ROUTE: /api/v1/home
//Access: user
router
    .route('/home')
    .post(upload.single('file'),home);

module.exports = router;