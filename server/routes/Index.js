const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');


router.get('/locations', indexController.getLocation);

module.exports = router;