class Tables {
    init(conection) {
        this.conection = conection;

        this.createNews();
    };

    createNews(){

        const sql = 'CREATE TABLE IF NOT EXISTS News (id varchar(255) NOT NULL, title text, subtitle text , content text, creationDate date NOT NULL,  PRIMARY KEY(id))'
 
        this.conection.query(sql, (error) => {
            if(error){
                console.log(error);
            }else{
                console.log('News table created successfully!');
            }
        });

    };
};

module.exports = new Tables;

//Título, Conteúdo e Data de Publicação