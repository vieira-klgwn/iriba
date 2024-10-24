const express = require('express');
const router = express.Router();
const { getGospelsByWeek, createGospel, updateGospel } = require('../controllers/gospelController');

router.get('/:week', getGospelsByWeek);
router.post('/', createGospel);
router.put('/:id', updateGospel);

module.exports = router;
