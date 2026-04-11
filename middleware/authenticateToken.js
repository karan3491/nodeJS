const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;


//const SECRET_KEY = process.env.JWT_SECRET || 'yoursecretkeyChange';

function authenticateToken(req,res,next){
 const authHeader= req.headers['authorization'];
 const token = authHeader && authHeader.split(' ')[1];
 if(!token) return res.status(401).json({ error: 'Token required' });
 jwt.verify(token, SECRET_KEY, (err, user)=>{
    if(err){
        return res.status(404).json({ error: 'Invaild or expired token' });
    }
    req.user = user;
    next();
 });

}
module.exports = authenticateToken;