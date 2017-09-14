'use strict'
const express = require('express');
const router = express.Router();

/* GET main endpoint. */
router.get('/', (req, res, next) => {
  res.send('Welcome to API of hacktivpress!');
});

module.exports = router;
