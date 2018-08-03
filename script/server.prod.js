const express = require('express');
const path = require('path');
const opn = require('opn');

const port = 3000;
const app = express();

app.use('/', express.static(path.join(__dirname, '../dist/app')));

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        opn('http://localhost:' + port);
    }
});
