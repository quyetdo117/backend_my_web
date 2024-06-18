const express = require('express');
const router = express.Router();
const newsControllers = require('../app/controllers/NewsController')

router.get('/detail', newsControllers.detail)
router.get("/", newsControllers.list)

module.exports = router;