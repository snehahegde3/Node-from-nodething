const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

const homeRoutes = require('./routes/home');
const userData = require('./routes/users');

app.use(userData.routes);
app.use(homeRoutes);


app.use((req, res, next)=> {
    res.status(404).render('404', {pageTitle: 'Error', path: ''});
});


app.listen(3000);