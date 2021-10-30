const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pool = require('./modules/pool');
const PORT = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.get('/admin', (req, res) => {
    let queryText = `
        SELECT * FROM feedback`;
    console.log('GET')

    pool.query(queryText)
        .then(result => {
            console.log('GET')
            console.log(result.rows);
            res.send(result.rows);
        }).catch(err => {
            console.log('GET ERR', err);
            res.sendStatus(500);
        });
});

app.post('/', (req, res) => {
    console.log('req', req.body);
    console.log('POST');
    const queryText = `
        INSERT INTO feedback 
        ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);`;

    const values = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ];

    pool.query(queryText, values)
        .then(result => {
            console.log('POST SUCCESS');
            res.sendStatus(201);
        }).catch(err => {
            console.log('POST ERR', err);
            res.sendStatus(400);
        });
})

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});