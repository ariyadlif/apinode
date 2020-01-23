const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

//koneksi mongodb
mongoose.connect('mongodb://localhost/api_project')
  .then (db => console.log('db connected Berhasil'))
  .catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
  })
)

let corsOptions = {
  origin: '*',
  methods: ['*'],
  allowedHeaders: ['Content-Type','tokenshop']
}
app.use(cors(corsOptions))

require('./router/router')(app)
const PORT = process.env.PORT || 8000

app.listen(PORT,() => {
	console.log('Berhasil menjalankan server di 8000')
})
