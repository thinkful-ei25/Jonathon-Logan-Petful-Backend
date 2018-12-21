'use strict';

const express = require('express');
const Cats = require('../data/cats');

const router = express.Router();

router.get('/api/cats', (req, res, next) => {
  const cat = Cats[0];
  // console.log(cat);
  if (!cat) {
    return res.json('No more cats');
  } else {
    return res.json(cat);
  }
});

router.delete('/api/cats', (req, res, next) => {
  // console.log(Cats);
  Cats.shift();
  return res.sendStatus(204).end();
});

module.exports = router;