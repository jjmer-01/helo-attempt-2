const bcrypt = require('bcrypt')

module.exports = {
    register: async(req, res) => {
        //destructuring email & password from user input (req.body)
        const {username, password} = req.body
        const {session} = req
        const db = req.app.get('db')

        //checks to see if user (email) exists already
        let user = await db.check_user([username])
        user = user[0]
        if(user) {
            return res.status(400).send('User already exists')
        }

        //if user doesn't exist salt the password and register_user
        const salt = bcrypt.genSaltSync(10) 
        const hash = bcrypt.hashSync(password, salt)

        let newUser = await db.register_user({username, hash})
        newUser = newUser[0]
        session.user = newUser
        res.status(201).send(session.user)

},

    login: async(req, res) => {
        //destructuring email & pw from user input (req.body)
        const {username, password} = req.body
        const {session} = req
        const db = req.app.get('db')

        //checks to see if user (email exists already)
        let user = await db.check_user([username])
        user = user[0]
        if(!user) {
            return res.status(400).send('User not found. Please try again or register')
        }

        //IF EMAIL IS AUTHENTICATED, TWO POSSIBLE OUTCOMES BELOW:
        const authenticated = bcrypt.compareSync(password, user.password)

        if(authenticated) {
            //PASSWORD AUTHENTICATED
            delete user.password
            session.user = user
            res.status(202).send(session.user)
        } else {
            //PASSWORD INCORRECT
            res.status(401).send('Incorrect password')
        }
    }
}