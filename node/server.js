const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const database = {
    users: [
        {
            id: '123',
            name: 'john',
            email: 'john@gmail.com',
            password: 'cookies',
            joined: new Date()
        },
        {
            id: '125',
            name: 'test',
            email: 'test@gmail.com',
            password: 'test',
            joined: new Date()
        },
        {
            id: '124',
            name: 'sally',
            email: 'sally@gmail.com',
            password: 'banana',
            joined: new Date()
        }
    ]
}

app.get('/', (req, res) => {
    res.send(database.users);
})
app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        } 
    })
    if (!found) {
        res.status(404).json('no such user');
    }
})
app.post('/signin', (req, res) => {
    if(req.body.email === database.users[0].email &&
        req.body.password === database.users[0].password) {
            res.json('successfully signed in');
        } else {
            res.status(400).json('error logging in');
        }
})
app.post('/register', (req, res) => {
   const{ email, name, password } = req.body;
   database.users.push({
       id: '125',
       name: name,
       email: email,
       joined: new Date()
   })
   res.json(database.users[database.users.length-1]);
})

app.listen(3001);

