var express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const { getCache, setCache } = require('../services/cacheService');
var router = express.Router();

/* GET users listing. */
router.get('/:id', authenticateToken, async function(req, res, next) {
  const user = await getCache(`user:${req.params.id}`); 
   res.json(user);
  // res.send('respond with a resource '+ req.user.name);
});


/* GET home page. */
router.post('/', authenticateToken, async function(req, res, next) {
  console.log(req.body)
  const { id, name, age } = req.body;
  await setCache(`user:${id}`, { name,  age}, 2); 
  res.json({ status: 'User inserted into Redis' });
  // res.render('index', { title: 'Express ' + value?.name});
});


module.exports = router;


// req.params.id