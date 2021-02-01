module.exports = {
    changeProfilePic: (req, res) => {
        const {userId} = req.params;
        const {newProfilePic} = req.body;
        const db = req.app.get('db');

        db.user.update_profile_pic([newProfilePic, userId])
            .then(user => res.status(200).send(user))
            .catch(err => res.status(500).send(err));
    }
}