module.exports = {
    getLandingRecipes: (req, res) => {
        const db = req.app.get('db');

        db.recipe.get_landing_recipes()
            .then(recipes => res.status(200).send(recipes));
    },
    getAllRecipes: (req, res) => {
        const db = req.app.get('db');

        db.recipe.get_all_recipes()
            .then(recipes => res.status(200).send(recipes));
    },
    getCategoryRecipes: (req, res) => {
        const {american, brazilian} = req.query;
        const db = req.app.get('db');

        
    },
    getRecipe: (req, res) => {
        const db = req.app.get('db');

        db.recipe.get_recipe()
            .then(recipe => res.status(200).send(recipe));
    },
    getAboutPic: (req, res) => {
        const db = req.app.get('db');

        db.recipe.get_about_pic()
            .then(aboutPic => res.status(200).send(aboutPic));
    }
}