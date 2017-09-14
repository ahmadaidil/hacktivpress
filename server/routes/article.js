'use strict'
const express = require('express');
const router = express.Router();
const articleController = require('../controllers/articleController')

router.post('/', articleController.create);
router.get('/:id', articleController.getOne);
router.get('/', articleController.getAll);
router.put('/:id', articleController.update);
router.delete('/:id', articleController.rm);

module.exports = router;
