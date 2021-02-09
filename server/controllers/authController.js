const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {email, username, password} = req.body;
        const db = req.app.get('db');

        const [foundUser] = await db.user.check_user(email);
        if (foundUser){
            return res.status(400).send('Email already in use');
        }

        let salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.user.register_user([email, username, hash, `https://robohash.org/${username}.png`]);

        req.session.user = newUser;
        res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const {email, password} = req.body;
        const db = req.app.get('db');

        const [foundUser] = await db.user.check_user(email);
        if (!foundUser){
            return res.status(400).send('Email not found');
        }

        const authenticated = bcrypt.compareSync(password, foundUser.password);
        if (!authenticated){
            return res.status(401).send('Password is incorrect');
        }

        delete foundUser.password;

        req.session.user = foundUser;
        res.status(202).send(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    checkUser: (req, res) => {
        if (req.session.user){
            res.status(200).send(req.session.user);
        } else {
            res.status(400).send({error: 'No user logged in'});
        }
    }
}