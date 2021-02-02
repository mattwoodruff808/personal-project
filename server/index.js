require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      massive = require('massive'),
      authCtrl = require('./controllers/authController'),
      auth = require('./middleware/authMiddleware'),
      recCtrl = require('./controllers/recipeController'),
      comCtrl = require('./controllers/commentController'),
      profCtrl = require('./controllers/profileController'),
      {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
      app = express();

app.use(express.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {maxAge: 1000 * 60 * 60 * 24 * 365}
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
})

//Auth Endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.get('/api/logout', authCtrl.logout);

//Recipe Endpoints
app.get('/api/landing-recipe', recCtrl.getLandingRecipes);
app.get('/api/recipe', recCtrl.getRecipes);
app.get('/api/recipe/:recipeId', recCtrl.getRecipe);
app.get('/api/about-pic', recCtrl.getAboutPic);

//Comment Endpoints
app.post('/api/comment/:recipeId', auth.usersOnly, comCtrl.addComment);
app.get('/api/comments/:recipeId', auth.usersOnly, comCtrl.getComments);
app.put('/api/comment/:commentId', auth.usersOnly, comCtrl.editComment);
app.delete('/api/comment/:commentId', auth.usersOnly, comCtrl.deleteComment);

//Profile Endpoints
app.put('/api/profile-pic/:userId', auth.usersOnly, profCtrl.changeProfilePic);

app.listen(SERVER_PORT, () => console.log(`Server is cooking up on port ${SERVER_PORT}`));