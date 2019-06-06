const Schema = require('mongoose').Schema;

const shoppingCartSchema = new Schema({
  products: [Array],
  totalPrice: Number,
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

module.exports = require('mongoose').model('ShoppingCart', shoppingCartSchema)