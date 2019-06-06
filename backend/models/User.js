const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  userPhotoUrl: String,
  shoppingCart: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ShoppingCart'
    }
  ]
},{
  timestamps:{
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema)