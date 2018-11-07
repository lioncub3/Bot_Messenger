'use strict';
let express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.listen(8080, () => console.log('Example app listening on port 8080!'));

app.get('/', (req, res) => res.send('Hello World!'));