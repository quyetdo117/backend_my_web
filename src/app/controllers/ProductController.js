const Product = require('../models/Product')

class ProductController {
    async list(req, res) {
        console.log('loggg vaod list nhe');
        const data = await Product.find({});
        return res.json({data: data})
        // res.render('news')
    }

    async detail(req, res) {
        let query = req.query;
        const data = await Product.findById(query?.id);
        return res.json({data: data})
    }
}

module.exports = new ProductController();
