const newsRouter = require('./news')

function route(app) {
    
    app.use('/news_list', newsRouter)
}

module.exports = route;