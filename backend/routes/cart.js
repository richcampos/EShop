const router = require('express').Router;
const ShoppingCart = require('../models/ShoppingCart')

router.get('/:userid', (req,res,next)=>{
  ShoppingCart.find({user:req.params.userId})
  .then(cart=>{
    return res.status(200).json(cart)
  })
  .catch(e => next(e))
});

router.get

module.exports = router;