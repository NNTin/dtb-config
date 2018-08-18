var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bridge = require('../models/Bridge.js');

/* GET ALL BRIDGES */
router.get('/', function(req, res, next) {
  Bridge.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE BRIDGE BY ID */
router.get('/:id', function(req, res, next) {
  Bridge.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE BRIDGE */
router.post('/', function(req, res, next) {
  Bridge.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BRIDGE */
router.put('/:id', function(req, res, next) {
  Bridge.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BRIDGE */
router.delete('/:id', function(req, res, next) {
  Bridge.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
