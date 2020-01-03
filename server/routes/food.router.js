const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

// GET
router.get('/', (req, res) => {
    pool.query(`SELECT "food".dine, "description".description, "description".money 
    FROM "description"
    JOIN "food" ON "food".id = "description".dine_id
    WHERE "food".id < 7;`)
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

router.get('/sushi/tacos', (req, res) => {
    pool.query(`SELECT "food".dine, "description".description, "description".money 
    FROM "description"
    JOIN "food" ON "food".id = "description".dine_id
    WHERE "food".id > 6 LIMIT 6;`)
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

router.get('/sushi/maki/roll', (req, res) => {
    pool.query(`SELECT "food".dine, "description".description, "description".money 
    FROM "description"
    JOIN "food" ON "food".id = "description".dine_id
    WHERE "food".id > 12 LIMIT 6;`)
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

router.get('/specialty/roll', (req, res) => {
    pool.query(`SELECT "food".dine, "description".description, "description".money 
    FROM "description"
    JOIN "food" ON "food".id = "description".dine_id
    WHERE "food".id > 18 LIMIT 5;`)
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

router.get('/appetizers', (req, res) => {
    pool.query(`SELECT "food".dine, "description".description, "description".money 
    FROM "description"
    JOIN "food" ON "food".id = "description".dine_id
    WHERE "food".id > 23 LIMIT 4;`)
        .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error', error)
        res.sendStatus(500);
    });
}); // end router.GET

module.exports = router
