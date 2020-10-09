const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes/index');
const fs = require('fs');
const path = require('path');
const express = require('express');
const {notes} = require('./Develop/db/db.json');
const PORT = process.env.PORT || 3001;

const app = express();

//take input from user
app.use(express.urlencoded({extended: true}));
//use json
app.use(express.json());
//use the public directory in the Develop directory
app.use(express.static(__dirname + '/Develop/public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now listening on port ${PORT}`);
});