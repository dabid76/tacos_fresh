const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET
router.get('/', (req, res) => {
    pool.query('SELECT * FROM "pictures" ORDER BY "id" ASC;')
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

router.get('/:id', (req, res) => {
    let picId = req.params.id;
    console.log('/picId/' + picId);
    let queryText = `SELECT * FROM "pictures" WHERE "pictures".id = $1  ORDER BY "id" ASC;`;
    pool.query(queryText, [picId])
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

module.exports = router
