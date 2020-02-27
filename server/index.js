require('dotenv').config()
const express = require('express')
    massive = require('massive')
    session = require('express-session')
    ctrl = require('./controller')
    postCtrl = require('./postController')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env


const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 *24 },
    secret: SESSION_SECRET
}))

//MASSIVE
massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT || 4020, () => console.log(`Server running on ${SERVER_PORT}`))
    console.log("DB Connected")
})


//ENDPOINTS controller
app.post('/api/register', ctrl.register)
app.post('/api/login', ctrl.login)

//ENDPOINTS postController
app.get('/api/posts/', postCtrl.getAllPosts)
app.get('/api/posts/:params', postCtrl.getOnePost)
app.post('/api/posts/', postCtrl.addPost)
app.put('/api/posts/:id', postCtrl.editPost)
app.delete('/api/posts/:id', postCtrl.deletePost)
