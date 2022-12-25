class NewsController {
    index(req,res){
        //get news
        res.render('news');
    }
    //get news:slug
    show(req,res){
        res.send("News-detail")
    }
}
module.exports = new NewsController;


// const NewController= require('./NewsController.js');