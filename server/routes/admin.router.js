const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    let queryText = `
        SELECT * FROM feedback
        ORDER BY id;`;
    console.log('GET')

    pool.query(queryText)
        .then(result => {
            console.log('GET');
            res.send(result.rows);
        }).catch(err => {
            console.log('GET ERR', err);
            res.sendStatus(500);
        });
});

router.delete('/delete/:id', (req, res) => {
    const queryText = `
        DELETE FROM feedback
        WHERE id = $1;`;

    const values = [req.params.id];

    pool.query(queryText, values)
        .then(result => {
            console.log('DELETE @', req.params.id);
            res.sendStatus(204);
        }).catch(err => {
            console.log('DELETE ERR');
            console.log('err', err);
            res.sendStatus(500);
        })
});

router.put('/flag/:id', (req, res)=> {
    const queryText = `
        UPDATE feedback
        SET flagged = NOT flagged
        WHERE id = $1;`;

    const values = [req.params.id];

    pool.query(queryText, values)
        .then(result => {
            console.log('PUT success');
            res.sendStatus(200);
        }).catch(err => {
            console.log('PUT ERR', err);
            res.send(400);
        })
})

module.exports = router;