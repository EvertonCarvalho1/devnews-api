const customExpress = require('./config/customExpress');
const conection = require('./database/conection');
const Tables = require('./database/tables');
const cors = require('cors');

conection.connect((error) => {
    if(error) {
        console.log(error);

    }else{
        console.log('Database connected successfully!');
        
        Tables.init(conection);
        
        const app = customExpress();

        app.listen(3333, () => console.log('Server running on port 3333!'));

    };
});




