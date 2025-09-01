const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index');


router.get('/locations', indexController.getLocation);
router.get('/wave-data', indexController.generateWaveData);
router.get('/graph-data', indexController.generateGraphData);

module.exports = router;