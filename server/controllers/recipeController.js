module.exports = {
    getLandingRecipes: (req, res) => {
        const db = req.app.get('db');

        db.recipe.get_landing_recipes()
            .then(recipes => res.status(200).send(recipes))
            .catch(err => res.status(500).send(err));
    },
    getRecipes: (req, res) => {
        const {category} = req.query;
        const db = req.app.get('db');

        if (category === 'american'){
            return db.recipe.get_american_recipes()
                    .then(recipes => res.status(200).send(recipes))
                    .catch(err => res.status(500).send(err));
        } else if (category === 'brazilian'){
            return db.recipe.get_brazilian_recipes()
                    .then(recipes => res.status(200).send(recipes))
                    .catch(err => res.status(500).send(err));
        } else {
            db.recipe.get_all_recipes()
                .then(recipes => res.status(200).send(recipes))
                .catch(err => res.status(500).send(err));
        }

    },
    getRecipe: (req, res) => {
        const {recipeId} = req.params;
        const db = req.app.get('db');

        db.recipe.get_recipe(recipeId)
            .then(recipe => res.status(200).send(recipe))
            .catch(err => res.status(500).send(err));
    },
    getAboutPic: (req, res) => {
        const db = req.app.get('db');

        db.recipe.get_about_pic()
            .then(aboutPic => res.status(200).send(aboutPic))
            .catch(err => res.status(500).send(err));
    }
}