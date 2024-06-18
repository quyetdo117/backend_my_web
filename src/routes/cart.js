const express = require('express');
const router = express.Router();
const cartControllers = require('../app/controllers/CartController')

router.get("/", cartControllers.list)
router.post("/add_product", cartControllers.add_cart)
router.post("/update_quantity", cartControllers.update_quantity)
router.post("/delete_product", cartControllers.delete_product)

module.exports = router;