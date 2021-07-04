'use strict';

const express = require('express') 

const cors = require('cors');
require('dotenv').config();

const mongoose=require('mongoose');


const app = express() 
app.use(cors()) 
app.use(express.json())
const PORT=process.env.PORT;
mongoose.connect('mongodb://localhost:27017/ahmad', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

});


const artic=require('./controllers/Art.controllers');
const crud=require('./controllers/Art.mongooseController');
 
app.get('/ahmad',artic.getArtData);

app.post('/ahmad/best',crud.createNewArt);
app.get('/ahmad/best',crud.getNewArt);
app.delete('/ahmad/best/:slug',crud.deletenewArt);
app.put('/ahmad/best/:slug',crud.updateNewArt);

app.get('/', 
 function (req, res) { 
  res.send('Hello World') 
})
 
app.listen(PORT) 