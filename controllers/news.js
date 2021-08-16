const NewsPost = require('../models/newsPost');
const cors = require('cors');


module.exports = app => {

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        app.use(cors());
        next();
    });

    //GET
    app.get('/news', (req, res) => {
        
        NewsPost.listNewsPost(res);
    
    
    });

    //GET BY ID
    app.get('/news/:id', (req, res) => {
        
        const id = req.params.id;

        NewsPost.listById(id, res);
    
    });
    
    //POST
    app.post('/news', (req, res) => {
        
        const newsPost = req.body;
        
        NewsPost.addNewsPost(newsPost, res);

    
    });

    //PATCH/UPDATE
    app.patch('/news/:id', (req, res) => {
        const id = req.params.id;
        const values = req.body
        
        NewsPost.changeNewsPost(id, values, res);
    });

    //DELETE
    app.delete('/news/:id', (req, res) => {
        const id = req.params.id;
        
        NewsPost.deleteNewsPost(id, res);
    });

};

