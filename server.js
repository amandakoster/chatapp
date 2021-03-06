const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Chatkit = require('@pusher/chatkit-server')

const app = express();

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:6d529aef-e2d7-4ed2-b3ad-2f55fa5ada56',
  key: 'ffdcf6d8-0df1-4730-8b6e-5614cef71d9a:BvsgGkZ1YkldqeBVc0d4AR1YNxkp9vwq49DThsd1ybE='
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

//users route -- create user
app.post('/users', (req, res) => {
const { username } = req.body
chatkit
  .createUser({
    id: username,
    name: username
  })
  .then(() => res.sendStatus(201))
  .catch(error => {
    if (error.error_type === 'services/chatkit/user_already_exists') {
      res.sendStatus(200)
    } else {
      res.status(error.status).json(error)
    }
  })
})
//auth route -- auth user with token
app.post('/authenticate', (req, res) => {
    const authData = chatkit.authenticate({ userId: req.query.user_id })
    res.status(authData.status).send(authData.body)
  })

//server
const PORT = 3001
app.listen(PORT, err => {
  if (err) {
    console.error(err)
  } else {
    console.log(`Running on port ${PORT}`)
  }
})