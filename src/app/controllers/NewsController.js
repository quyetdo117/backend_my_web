const NewsModel = require('../models/NewsModel')

class NewsControllers {
    async list(req, res) {
        console.log('loggg vaod list nhe');
        const data = await NewsModel.find({});
        return res.json({data: data})
        // res.render('news')
    }

    async detail(req, res) {
        let query = req.query;
        const data = await NewsModel.findById(query?.id);
        console.log('loggg detailll', data,query?.id );
        return res.json({data: data})
    }
}

module.exports = new NewsControllers();
