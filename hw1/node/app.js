//const fs = require('fs');

const createStudent = require('./creatStudent');
const createPhoto = require('./photo');

//fs.mkdir('./jscx-1800', err => {
//    console.log('OK')
//});

//fs.mkdir('jscx-2000', err => {
//    console.log('OK')
//});

createStudent('jscx-1800', 'Nataliia', 'Ріст: 175, \nПараметри: 90-60-90');
createStudent('jscx-2000', 'Vasya', 'Ріст: 180, \nПараметри: 100-70-110');
createPhoto('./jscx-1800/Nataliia/photo.jpg', '../photo/Nata.jpg');
