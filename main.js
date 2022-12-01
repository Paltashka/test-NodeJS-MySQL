const port = require('./config.js');
const express = require('express');
const routes = require('./src/Users/routes.js');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var moment = require('moment');

const app = express();
app.use(jsonParser);
app.use(routes);

app.use('*', (req, res) => {
    res.status(404).json('page not found');
});

app.use((err, req, res, next) => {
    res
        .status(err.status || 500)
        .json({
            error: err.message || 'Unknown error'
        });
});

app.listen(port, () => console.log('The server has started'));