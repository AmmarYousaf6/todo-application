var express = require('express');
var router = express.Router();
const todoController = require('../controller/todoController');
/* GET users listing. */
router.get('/', todoController.getTodos);
router.post('/', todoController.addTodos);

module.exports = router;
