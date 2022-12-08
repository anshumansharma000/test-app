const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const PORT = process.env.PORT || '8001' ;
const server = app.listen(PORT, () => {
    console.log(`server started at ${PORT}`);
})