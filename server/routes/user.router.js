const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
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

module.exports = router;