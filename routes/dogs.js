'use strict';
const express = require('express');
const dogQueue = require('../data/dogs.js');

const router = express.Router();

router.get('/api/dogs', (req, res, next) => {
  const dog = dogQueue.peek();
  if (dog) {
    return res.json(dog);
  } else {
    return res.json('No more dogs');
  }
});

router.delete('/api/dogs', (req, res, next) => {
  dogQueue.dequeue();
  return res.sendStatus(204).end();
});

module.exports = router;