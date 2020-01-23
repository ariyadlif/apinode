var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
  username: {
		type: String,
		required: true
	},

	password: {
		type: String,
	},
},
{
  timestamps: true
})

var User = module.exports = mongoose.model('user', UserSchema)
