const express =require('express');
const router = express.Router();
const {getAll, create} = require("./user.Controller");

router.get('/todo', getAll);
router.get('/todo/put', create)
module.exports = router

