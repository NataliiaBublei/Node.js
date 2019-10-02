const fs = require('fs');

function newStudent(group, name, data) {
    fs.mkdir(`./${group}/${name}`, err => {
        if (!err){
            console.log('OK, created student')
        }
    });
    fs.writeFile(`./${group}/${name}/info.txt`, data, err => {
        if (!err) {
            console.log('OK, created info')
        }
    })
}

module.exports = newStudent;

