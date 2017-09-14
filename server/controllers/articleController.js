'use strict'

const article = require('../models/article');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

exports.create = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    if(decoded == undefined) res.send({err: 'wrong token'});
    else
      article.create({
        title: req.body.title,
        content: req.body.content,
        category: req.body.category,
        author: decoded.userId
      }, (err, result)=>{
        if(err) res.send({err: err});
        res.json(result);
      });
  });
}

exports.getOne = (req, res) => {
  article.findOne({
    _id: req.params.id
  })
  .populate('author', '_id username')
  .exec((err, result)=>{
    if(err) res.send({err: err});
    res.json(result);
  })
}

exports.getAll = (req, res) => {
  article.find()
  .populate('author', '_id username')
  .exec((err, result)=>{
    if(err) res.send({err: err});
    res.json(result);
  })
}

exports.update = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    if(decoded ==  undefined) res.send({err: 'wrong token'});
    else
      article.updateOne({
        _id : req.params.id
      }, {
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
      }, (err, result)=>{
        if(err) res.send({err: err});
        res.json(result);
      })
  })
}

exports.getByAuthor = (req, res) => {
  article.find({
    author: req.params.author
  })
  .populate('author', '_id username')
  .exec((err, result)=>{
    if(err) res.send({err: err});
    res.json(result);
  })
}

exports.getByCategory = (req, res) => {
  article.find({
    category: req.params.category
  })
  .populate('author', '_id username')
  .exec((err, result)=>{
    if(err) res.send({err: err});
    res.json(result);
  })
}

exports.rm = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    if(decoded ==  undefined) res.send({err: 'wrong token'});
    else
      article.deleteOne({
        _id : req.params.id
      }, (err, result)=>{
        if(err) res.send({err: err})
        res.json(result)
      })
  })
}
