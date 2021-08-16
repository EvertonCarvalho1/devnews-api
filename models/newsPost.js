const moment = require('moment');
const conection = require('../database/conection');

class NewsPost {

    addNewsPost(newsPost, res) {


        const validTitle = newsPost.title.length >= 3;
        const validSubtitle = newsPost.subtitle.length >= 3;
        const validContent = newsPost.content.length >= 3;

        const validations = [
            {
                name: 'title',
                valid: validTitle,
                message: 'Titulo deve ter mais de 3 caracteres!',
            },

            {
                name: 'subtitle',
                valid: validSubtitle,
                message: 'Subtítulo deve ter mais de 3 caracteres!',
            },

            {
                name: 'content',
                valid: validContent,
                message: 'Conteúdo deve ter mais de 3 caracteres!',
            },
        ];

        const validationError = validations.filter(field => !field.valid);

        const thereAreErrors = validationError.length;
       

        if(thereAreErrors){

            res.status(400).json(validationError);

        }else{

            const creationDate = moment().format('YYYY-MM-DD');

            const newsPostDated = {...newsPost, creationDate};
            console.log(newsPostDated)

            const sql = 'INSERT INTO News SET ?';

            conection.query(sql, newsPostDated, (error, results) => {

                if(error){
                    res.status(400).json(error);
                }else{

                    res.status(201).json(newsPost);
                };

            });
        };
    };

    listNewsPost(res) {
        const sql = 'SELECT * FROM News';

        conection.query(sql, (error, results) => {
            if(error){
                res.status(400).json(error);
            }else{
                res.status(200).json(results);
            };
        });
    };

    listById(id, res){
        const sql = `SELECT * FROM News WHERE id=${id}`;

        conection.query(sql, (error, results) => {

            const newsPostId = results[0];

            if(error){
                res.status(400).json(error);
            }else{
                res.status(200).json(newsPostId);
            };

        });
    };

    changeNewsPost(id, values, res){
        const sql = 'UPDATE News SET ? WHERE id=?'

        conection.query(sql, [values, id], (error, results) => {
            if(error){
                res.status(400).json(error);
            }
                res.status(200).json({...values, id});
        });
    };

    deleteNewsPost(id, res){
        const sql = 'DELETE FROM News WHERE id=?';

        conection.query(sql, id, (error, results) => {
            if(error){
                res.status(400).json(error);
            }else{
                res.status(200).json({id});
            };

        });
    };

};

module.exports = new NewsPost;

