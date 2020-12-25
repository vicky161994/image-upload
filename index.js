const app = require('express')()
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const route = require('./routes/index');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/interviewImage', {useNewUrlParser: true}, 
(err) => {
    if (!err) {
        console.log('Successfully Established Connection with MongoDB')
    }
    else {
        console.log('Failed to Establish Connection with MongoDB with Error: '+ err)
    }
});
app.use('/', route)
app.set('views',path.join(__dirname,"views"))
app.set("view engine","hbs");
app.use(express.static(path.join(__dirname, '/public')));
 const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server is running on port : ${PORT}`));
