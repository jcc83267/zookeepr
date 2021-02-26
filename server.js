const express = require('express');
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//used to initialize api server?
const PORT = process.env.PORT || 3001;
const app = express();

// App .USE start
//this lets server.js/"the server" to access puplic and all its files to path
app.use(express.static('public')); //must be first for all app.use!!!!!!!
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// App .USE end


//to listen must be at the end???  answer(should always be after the const app = express()) 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});