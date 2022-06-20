const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const { validateUsername, validateData, validateLogin } = require('./userMiddleware');
const app = express();
app.use(bodyParser.json());

const geraToken = () => crypto.randomBytes(12).toString('hex');


const user = { name: 'ola', age: 12}

app.get('/user', (req, res) => {
  res.status(200).json(user);
})

app.post('/user/register',
    validateUsername,
    validateData,
    (req, res) => {
        console.log(req);
        res.status(201).json({ message: "user created"})
});

app.post('/user/login',
  validateLogin,
  (req, res) => {
    const token = geraToken();
    res.status(201).json({ "token": token })
});

app.listen(3001, () => console.log('run 3001'));