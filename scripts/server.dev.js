const express = require('express');
const path = require('path');
const opn = require('opn');
const webpack = require('webpack');
const config = require('../webpack.config.dev');

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use('/', express.static(path.join(__dirname, '../src/')));

app.listen(port, function(err){
    if (err) {
        console.log(err);
    } else {
        opn('http://localhost:' + port);
    }
});