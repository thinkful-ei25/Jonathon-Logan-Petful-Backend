'use strict';

const express = require('express');
const catQueue = require('../data/cats');

const router = express.Router();

router.get('/api/cats', (req, res, next) => {
  const cat = catQueue.peek();
  // console.log(cat);
  if (cat) {
    return res.json(cat);
  } else {
    return res.json('No more cats');
  }
});

router.delete('/api/cats', (req, res, next) => {
  // console.log(Cats);
  catQueue.dequeue();
  return res.sendStatus(204).end();
});

module.exports = router;