const users = require('../models/user');
const random = require('../helpers/hash');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

exports.signup = (req, res) => {
  let secret = random.randStr(8);
  users.create({
    username: req.body.username,
    password: random.hash(req.body.password, secret),
    secretKey: secret
  })
  .then(user => {
      res.json(user);
  })
}

exports.signin = (req, res) => {
  users.findOne({
    username: req.body.username
  }, (err, user)=>{
    if(err || user == null) res.send({err: true, msg:'username doesn\'t exist'})
    else {
      pass = random.hash(req.body.password, user.secretKey);
      if (pass == user.password) {
        jwt.sign({
          userId : user._id,
          username: user.username,
          fullname: user.fullname,
          email: user.email
        }, process.env.SECRET_KEY, (err, token) => {
          if (err) console.log(err)
          res.send({err:false, token: token})
        });
      } else {
        res.send({err: true, msg:'wrong password'})
      }
    }
  })
}

exports.checkLogin = (req, res) => {
  jwt.verify(req.headers.token, process.env.SECRET_KEY, (err, decoded)=>{
    if(err) res.send(err)
    res.json(decoded)
  })
}