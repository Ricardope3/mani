const express = require('express');

const router = express.Router();
const { getTaxiRecords, helloWorld } = require('../controllers/index');

router
    .route('/')
    .get(helloWorld);

router
    .route('/getRecords')
    .get(getTaxiRecords);

module.exports = router;
