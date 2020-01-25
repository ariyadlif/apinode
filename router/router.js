// const = require('jsonwebtoken')
// const = require('bcrypt')
// const = require('cors')
const userController = require('../controller/userController')
const auth = require('../middleware/auth.js')

module.exports = app => {
	app.get('/', userController.home)

	//api user
	app.get('/user', userController.listUser)
	app.get('/user/:id', userController.detailUser)
	app.post('/user/', userController.tambahUser)
	app.put('/user/:id', userController.ubahUser)
	app.delete('/user/:id', userController.hapusUser)

	//get token
	app.post('/token', userController.getToken)

	//api test
	// app.post('apitest', userController.apiTest)

}
