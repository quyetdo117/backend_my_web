const newsRouter = require('./news')
const productRouter = require('./product')
const cartRouter = require('./cart')

function route(app) {
    
    app.use('/news_list', newsRouter);
    app.use('/products', productRouter);
    app.use('/cart', cartRouter);
}

module.exports = route;