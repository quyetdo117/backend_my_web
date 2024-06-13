const express = require('express');
const router = express.Router();
const newsControllers = require('../app/controllers/NewsController')

router.get("/", newsControllers.list)
router.get("/detail", newsControllers.detail)

module.exports = router;