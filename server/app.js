const express = require('express');
const testRouter = require('./routes/testRouter');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/', (req,res)=>{
    res.send('hi');
});
app.use('/api/v1/test', testRouter);

module.exports = app;