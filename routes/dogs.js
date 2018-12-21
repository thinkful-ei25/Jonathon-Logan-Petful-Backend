'use strict';
const express = require('express');
const Dogs = require('../data/dogs.js');

const router = express.Router();

router.get('/api/dogs', (req, res, next) => {
  const dog = Dogs[0];
  if (dog) {
    return res.json(dog);
  } else {
    return res.json('No more dogs');
  }
});

router.delete('/api/dogs', (req, res, next) => {
  Dogs.shift();
  return res.sendStatus(204).end();
});

module.exports = router;