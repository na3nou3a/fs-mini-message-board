const express = require('express');
const router = express.Router();

const messages = require('../messages');

router.get('/', function (req, res, next) {
  res.render('form', { title: 'create new Message' });
});

router.post('/', function (req, res, next) {
  const msg = {
    user: req.body.username,
    text: req.body.message,
    added: new Date(),
  };
  messages.unshift(msg);
  console.log(messages);
  res.redirect('/');
});

module.exports = router;
