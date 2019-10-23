const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();
const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
global.appRoot = __dirname;

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const {renderPage} = require('./controllers');
const {userRouter, houseRouter, authRouter} = require('./routers');

app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);

app.all('*', renderPage.page404);

app.listen(5000, () => {
    console.log('Listen 5000')
});
