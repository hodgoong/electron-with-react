const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const filename = 'main.js';
const source = path.resolve(__dirname, '../src/main.js');
const destination = path.resolve(__dirname, '../dist/app/');


mkdirp(destination, function (err) {
    if (err) throw err;
    fs.copyFile(source, path.join(destination, filename), (err) => {
        if(err) throw err;
    });
});

