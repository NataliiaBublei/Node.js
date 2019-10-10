const express = require('express');
const expHbs = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'static'));

const {user, house, renderPage} = require('./controllers');
const {userMiddleware, houseMiddleware} = require('./middleware');

//Render page
app.get('/',renderPage.main);
app.get('/register', renderPage.register);
app.get('/login', renderPage.login);
app.get('/addHouse', renderPage.addHouse);
app.get('/editUser', renderPage.editUserPage);
app.get('/editHouse', renderPage.editHousePage);

//Users
app.post('/users', userMiddleware.checkUserValidityMiddleware, user.registerUser);
app.post('/auth', userMiddleware.checkUserExistMiddleware, user.userAuth);
app.get('/users', userMiddleware.findAllUsersMiddleware, user.findAllUsers);
app.get('/users/:user_id', userMiddleware.isUserPresentMiddleware, user.getUserById);
app.post('/editUser', userMiddleware.checkEditUserValidityMiddleware, userMiddleware.isEditUserPresent, user.editUser);

//Houses
app.post('/houses', houseMiddleware.checkHouseValidityMiddleware, house.addHouse);
app.get('/houses', houseMiddleware.findAllHousesMiddleware, house.findAllHouses);
app.get('/houses/:house_id', houseMiddleware.isHousePresentMiddleware, house.getHouseById);
app.post('/editHouse', houseMiddleware.checkEditHouseValidityMiddleware, houseMiddleware.isEditHousePresent, house.editHouse);

app.all('*', renderPage.page404);

app.listen(5000, () => {
    console.log('Listen 5000')
});
