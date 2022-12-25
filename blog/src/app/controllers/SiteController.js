class SiteController {
    index(req,res){
        //get / 
        res.render('home');
    }
    //get /search
    search(req,res){
        res.render('search');
    }
}
module.exports = new SiteController;


// const NewController= require('./SiteController.js');