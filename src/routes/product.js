const express = require('express');
const router = express.Router();
const productController = require('../app/controllers/ProductController')

router.get('/detail', productController.detail)
router.get("/", productController.list)

module.exports = router;