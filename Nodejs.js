'use strict';
let express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
app.listen(80, () => console.log('Example app listening on port 80!'));


app.get('/', (req, res) => res.send('Hello World!'));


app.get('/webhook', (req, res) => {
 
    // Токен верификации. Он должен быть строкой, состоящей из случайных символов
    let VERIFY_TOKEN = "SOMETHING_RANDOM";
 
    // Разбор параметров запроса
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
 
    // Проверка, имеются ли в запросе mode и token 
    if (mode && token) {
 
        // Проверка правильности mode и token
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {
 
            // Отправка токена challenge из запроса
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);
 
        } else {
            // Отправка ответа '403 Forbidden' если верифицировать токен не удалось
            res.sendStatus(403);
        }
    }
});