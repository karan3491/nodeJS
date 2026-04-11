var express = require('express');
const jwt = require('jsonwebtoken');
const { setCache } = require('../services/cacheService');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;

var router= express.Router();

router.get('/',(req,res)=>{
    res.send('login screen');
})

var users= {karan:{
    id: 1,
    name: "karan",
    password: "password",
    age: 25
}}

router.post('/', (req,res)=>{
    if (!req.body || Object.keys(req.body).length === 0) return res.status(400).send('Request body is required');;
     const id=1;
    const {name, password,} = req.body;
    authenticate(name,password,async function(err, user){
      if(user) {
        const token = jwt.sign(req.body, SECRET_KEY, { expiresIn: '1h' });
        await setCache(`user:${id}`, {token}, 2); 
        return res.json({
            id,
            name,
            token
        });
    }
       res.status(500).send(`Authentication failed, please check your username and password.`);
    })
    
})

function authenticate(name, pass, fn){
  var user= users[name];
  if(!user) return fn(null, null);
  
  if(pass === user.password){
   return fn(null, user);
  }
  return fn(null, null);
}

module.exports= router;