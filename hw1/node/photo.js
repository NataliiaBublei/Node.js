const fs = require('fs');

function createPhoto(par1, par2) {
    fs.createReadStream(par2).pipe(fs.createWriteStream(par1));
    console.log('OK, created photo')
}

module.exports = createPhoto;

