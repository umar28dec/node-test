const express = require('express');
const router = express.Router();
const {getData, save, findOne} = require('../controller/todo.controller')


router.get('/', getData);
router.post('/', save);
router.get('/:id', findOne);

module.exports =router;
