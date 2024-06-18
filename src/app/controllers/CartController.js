const { Schema } = require('mongoose');
const Cart = require('../models/Cart');

class CartController {
    async list(req, res) {
        console.log('loggg vaod list nhe');
        const data = await Cart.find({});
        return res.json({ data: data })
    }

    async add_cart(req, res) {
        try {
            const formData = req.body;
            let product = await Cart.findOne({ idProduct: formData.idProduct, size: formData.size })
            if (product) {
                formData.quantity = formData.quantity + product.quantity;
                Cart.replaceOne({ idProduct: formData.idProduct }, formData)
                    .then((response) => {
                        res.json({
                            error: 0,
                            data: 'Add done'
                        })
                    })
                    .catch(error => {
                        console.log('log add_cart error', error);
                        res.json({
                            error: 1,
                            data: error
                        })
                    })
            } else {
                let date = new Date();
                formData._id = Math.floor(date.getTime() / 1000).toString(16) + "0000000000000000";

                Cart.create(formData)
                    .then((response) => {
                        res.json({
                            error: 0,
                            data: response
                        })
                    })
                    .catch(error => {
                        console.log('log add_cart error', error);
                        res.json({
                            error: 1,
                            data: error
                        })
                    })
            }

        } catch (error) {
            console.log('log add_cart error catch', error);
            res.json({
                error: 1,
                data: error
            })
        }
    }

    async update_quantity(req, res) {
        try {
            const formData = req.body;
            let product = await Cart.findOne({ _id: formData.id })
            if (product) {
                let newData = product;
                newData.quantity = formData.quantity;
                Cart.replaceOne({ _id: formData.id }, newData)
                    .then((response) => {
                        res.json({
                            error: 0,
                            data: 'Add done'
                        })
                    })
                    .catch(error => {
                        console.log('log add_cart error', error);
                        res.json({
                            error: 1,
                            data: error
                        })
                    })
            }
        } catch (error) {
            res.json({
                error: 1,
                data: error
            })
        }
    }

    async delete_product(req, res) {
        try {
            const formData = req.body;
            await Cart.deleteOne({ _id: formData.id })
                .then((response) => {
                    res.json({
                        error: 0,
                        data: 'delete done'
                    })
                })
                .catch(error => {
                    console.log('error', error);
                    res.json({
                        error: 1,
                        data: error
                    })
                })
        } catch (error) {
            console.log('error', error);
            res.json({
                error: 1,
                data: error
            })
        }
    }
}

module.exports = new CartController();
