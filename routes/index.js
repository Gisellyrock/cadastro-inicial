var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ menssage: 'Bem vindo a minha API' });
});

module.exports = router;
