module.exports = {
    addComment: (req, res) => {
        const {recipeId} = req.params;
        const {content, userId} = req.body;
        const date = new Date;
        const db = req.app.get('db');

        db.comment.add_comment([content, date, userId, recipeId])
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err));
    },
    getComments: (req, res) => {
        const {recipeId} = req.params;
        const db = req.app.get('db');

        db.comment.get_comments(recipeId)
            .then(comments => res.status(200).send(comments))
            .catch(err => res.status(500).send(err));
    },
    editComment: (req, res) => {
        const {commentId} = req.params;
        const {content} = req.body;
        const db = req.app.get('db');

        db.comment.edit_comment([content, commentId])
            .then(comment => res.status(200).send(comment))
            .catch(err => res.status(500).send(err));
    },
    deleteComment: (req, res) => {
        const {commentId} = req.params;
        const db = req.app.get('db');

        db.comment.delete_comment(commentId)
            .then(() => res.sendStatus(200))
            .catch(err => res.status(500).send(err));
    }
}