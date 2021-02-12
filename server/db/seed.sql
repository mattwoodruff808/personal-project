DROP TABLE IF EXISTS comment;

DROP TABLE IF EXISTS ingredient;

DROP TABLE IF EXISTS recipe;

DROP TABLE IF EXISTS auth_user;

CREATE TABLE auth_user (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(150) not null,
    username VARCHAR(20) not null,
    password VARCHAR(250) not null,
    profile_pic TEXT
);

CREATE TABLE recipe (
    recipe_id SERIAL PRIMARY KEY,
    title VARCHAR(80),
    category VARCHAR(50),
    recipe_pic TEXT,
    blurb VARCHAR(200),
    instructions TEXT,
    background TEXT
);

CREATE TABLE ingredient (
    ingredient_id SERIAL PRIMARY KEY,
    recipe_id INT REFERENCES recipe(recipe_id),
    measurement VARCHAR(50),
    ingredient VARCHAR(50)
);

CREATE TABLE comment (
    comment_id SERIAL PRIMARY KEY,
    content VARCHAR(250),
    date_created TIMESTAMP WITH TIME ZONE,
    user_id INT REFERENCES auth_user(user_id),
    recipe_id INT REFERENCES recipe(recipe_id)
);

-- Dummy Data:

INSERT INTO recipe
(title, category, recipe_pic, blurb, instructions, background)
VALUES
('Symphony Cake', 'American', 'https://i1.wp.com/www.dutchcountrykitchen.com/wp-content/uploads/2019/08/Chocolate-Symphony-Cake.jpg?fit=1920%2C1280&ssl=1', 'The best cake to ever exist.  You will experience a Symphony in your mouth. This cake is incredibly easy to make, and will make you the most popular at the family reunion!', '1. Bake the cake according to the directions on the package (use the Whole Milk, Eggs, and Vanilla Extract for this part). 2. Let the cake cool for five minutes and then poke holes all along the top of the cake (a fork works well for this part). 3. Then immediately pour the Sweetened Condensed Milk over the cake. Let the cake cool for two hours, or until completely cooled. 4. About thirty minutes before cake is done cooling, pull out the Cool Whip from the fridge to bring almost to room temperature. 5. Divide the Symphony Bar into a two sections, one of nine pieces, and one of seven pieces. Melt the nine pieces of the Symphony Bar in the microwave until just melted. Let it cool while stirring, for thirty seconds or so. 6. Whip the melted chocolate into the Cool Whip until very well combined. Frost the cooled cake with the Cool Whip mixture. 7. Shave the remaining section of the Symphony Bar with a veggie peeler over the frosted cake. 8. Refrigerate overnight for best results.', 'This cake was created by Linda Meadows. I don`t think she had the original idea, but this version is certainly her own concoction. Countless times come to memory of this cake being served at birthdays, get-togethers, and other special occasions. Some of you will certainly remember the cake pan that Linda always used for this cake! We knew the moment she came over to the house that we were about to eat Symphony Cake when we saw her unload that 9 x 13 from her car. Those are happy and delicious memories!'),
('Feijoada', 'Brazilian', 'https://image.freepik.com/fotos-gratis/prato-tipico-brasileiro-chamado-feijoada_261158-827.jpg', 'Heaviest meal to exist. This is an iconic Brazilian dish, and perfect right before a Saturday nap.', 'Just throw it all together.', 'One of the best meals in Brazil, a Woodruff favorite. This is the dish that singlehandedly converted Matthew from a picky eater.'),
('Hawaiian Haystacks', 'American', 'http://homanathome.com/wp-content/uploads/2019/07/Hawaiian-Haystacks-3.jpg', 'Legit just gravy on rice, and all your favorite toppings! Great for large gatherings.', 'Just throw it all together.', 'A classic that we have enjoyed since we were little! This is a recipe that has been passed down from parent to child, and is always a family favorite.'),
('Strogonoff', 'Brazilian', 'https://i.pinimg.com/originals/13/e3/1f/13e31f8003bb934ada9a5a07709401a3.jpg', 'Heaven. Plain and simple. And affordable too!', 'Just throw it all together.', 'One of the tastiest, easiest, and cheapest meals we discovered in Brazil. This is a perfect meal to cook in large quantities, and we have done so for friends and family. Even our kids ask for seconds which almost never happens!'),
('Potato Salad', 'American', 'https://www.kitchensanctuary.com/wp-content/uploads/2017/08/Easy-Potato-Salad-square-FS.jpg', 'Want to be the most popular at the BBQ? Make this.', 'Just throw it all together.', 'This recipe is sacred. We have passed this recipe down several generations. It is originally from a cookbook Granny had in 1905, making it over 100 years old! Our family constantly requests this for every single BBQ we have.'),
('Churrasco', 'Brazilian', 'https://www.brazilianspitroast.com.au/wp-content/uploads/2017/02/BrazilianBBQPrivateEvents.jpg', 'Brazilian BBQ! Can anything be better? This is even more affordable than you know! Try it out.', 'Just throw it all together.', 'This is one of the things our family misses most about Brazil. Everyone there knew how to throw a great party with Churrasco, and you would have to roll us out of there once the eating was finished!'),
('DeVona`s Tacos', 'American', 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F03%2F19%2Fbirria-tacos-FT-RECIPE0420-1.jpg', 'Best. Tacos. Ever.', 'Just throw it all together.', 'Grandmas taco recipe passed down from mother to son to daughter. This recipe helps us to feel close to Grandma, as she has passed away some time ago. When we make this recipe, we feel joy. And it tastes really good as well!'),
('Bolo de Brigadeiro', 'Brazilian', 'https://i.pinimg.com/originals/46/0b/1e/460b1efc864637f12d51e3337082a858.jpg', 'Dense, Delicious, Decadent Brazilian Cake.', 'Just throw it all together.', 'This heavy cake was at every birthday party we had in Brazil. There was a time when Matthew ate 3 slices and slept the rest of the day well into the next morning. This cake is worth it!'),
('Pulled Pork Sandwhiches', 'American', 'https://keviniscooking.com/wp-content/uploads/2019/05/Classic-Pulled-Pork-Sandwich-square.jpg', 'Phenomenal when smoked. Add cole-slaw. Mouth watering yet?', 'Just throw it all together.', 'John perfected these sandwhiches, and I dream about them. I don`t think I could ever go back to pulled pork that is not smoked low and slow. My mouth is watering just typing this.'),
('Suco de Maracuja', 'Brazilian', 'https://www.flavourbazaar.co.uk/_webedit/cached-images/198-0-0-0-10000-10000-836.jpg', 'Xanax in a cup. This is the nectar that the Greek gods of Mt. Olypmus drink.', 'Just throw it all together.', 'Need a good night sleep? This has put us to sleep on many occasions. The first place we ate at in Brazil was the home of the Pinha family. They gave us tall glasses of Maracuja and we then took a 3 hour nap in their living room.'),
('Mashed Potatoes', 'American', 'https://www.thedinnerbite.com/wp-content/uploads/2019/10/creamy-garlic-mashed-potatoes-recipe-img-11-500x500.jpg', 'An American classic. Not much needs to be said, goes well with Churrasco!', 'Just throw it all together.', 'An american classic, enjoyed by many beyond just our famiy. demanded mashed potatoes and roast every sunday of our mother, and she said "Well you cook it then." So we learned how and loved it!');

INSERT INTO ingredient
(recipe_id, measurement, ingredient)
VALUES
(1, '1 Package', 'Betty Crocker Fudge Cake Mix'),
(1, '1/2 Cup', 'Whole Milk'),
(1, '1 Giant', 'Chocolate Symphony Bar'),
(1, '1 8oz Can', 'Sweetened Condensed Milk'),
(1, '2', 'Eggs'),
(1, '1 tsp', 'Vanilla Extract'),
(1, '1 12oz Tub', 'Cool Whip'),
(2, '3 Cups', 'Black Beans'),
(2, '1 Package', 'Kielbasa Sausage'),
(2, '1 Package', 'Bacon'),
(2, '1 Large', 'Onion'),
(2, '4 Tbsp', 'Garlic'),
(2, '2 Large', 'Bayleaves'),
(2, '3 tsp', 'Salt'),
(2, '3 Cups', 'Cooked White Rice'),
(3, '2 Breasts', 'Shredded Chicken'),
(3, '2 Cans', 'Cream of Chicken Soup'),
(3, '2 tsp', 'Salt'),
(3, '1 Package', 'Shredded Cheese'),
(3, '1 Package', 'Shredded Coconut'),
(3, '1 Cup', 'Diced Green Onion'),
(3, '1 Package', 'Chow Mein Noodles'),
(4, '2 Breasts', 'Shredded Chicken'),
(4, '4 Tbsp', 'Ketchup'),
(4, '2 Tbsp', 'Mustard'),
(5, '12', 'Large Idaho Potatoes'),
(5, '2 Cups', 'Mayo'),
(5, '2 Tbsp', 'Vinegar'),
(6, 'Plenty of', 'Meat'),
(6, 'Plenty of', 'Sausage'),
(6, 'Plenty of', 'French Bread'),
(7, '1 Package', 'Corn Tortillas'),
(7, '1 Package', 'Lean Ground Beef'),
(7, '6 Cups', 'Canola Oil'),
(8, '1 Cake', 'Betty Crocker Fudge Cake'),
(8, '5 Cups', 'Brigadeiro Chocolate'),
(8, '2 Cups', 'Chocolate Sprinkles'),
(9, '2 Pounds', 'Pork Shoulder'),
(9, '10 Tbsp', 'Mustard'),
(9, 'Lots of', 'Pork Star Dry Rub'),
(10, '5 Cups', 'Passion Fruit Pulp'),
(10, '6 Cups', 'Chilled Water'),
(10, '1 Cup', 'Sugar'),
(11, '6 Medium', 'Yukon Gold Potatoes'),
(11, '1 Stick', 'KerryGold Butter'),
(11, '1 Cup', 'Whole Milk');