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
    date_created TIMESTAMP,
    user_id INT REFERENCES auth_user(user_id),
    recipe_id INT REFERENCES recipe(recipe_id)
);

-- Dummy Data:

INSERT INTO recipe
(title, category, recipe_pic, blurb, instructions, background)
VALUES
('Symphony Cake', 'American', 'Recipe URL HERE', 'The best cake to ever exist.', 'Just throw it all together.', 'This was created by Linda Meadows.'),
('Feijoada', 'Brazilian', '1Recipe URL HERE', 'Heaviest meal to exist.', 'Just throw it all together.', 'One of the best meals in Brazil, a Woodruff favorite.'),
('Hawaiian Haystacks', 'American', '2Recipe URL HERE', 'Legit just gravy on rice.', 'Just throw it all together.', 'A classic that we have enjoyed since we were little!'),
('Strogonoff', 'Brazilian', '3Recipe URL HERE', 'Heaven. Plain and simple.', 'Just throw it all together.', 'One of the tastiest, easiest, and cheapest meals we discovered in Brazil'),
('Potato Salad', 'American', '4Recipe URL HERE', 'TRADITIIIOOOONNN!!!', 'Just throw it all together.', 'This recipe is sacred. From a cookbook Granny had in 1905.'),
('Churrasco', 'Brazilian', '5Recipe URL HERE', 'Real BBQ', 'Just throw it all together.', 'This is one of the things I miss most about Brazil.'),
('Devona`s Tacos', 'American', '6Recipe URL HERE', 'Best. Tacos. Ever.', 'Just throw it all together.', 'Grandmas taco recipe passed down from mother to son to daughter.'),
('Bolo de Brigadeiro', 'Brazilian', '7Recipe URL HERE', 'Dense, Delicious, Decadent Cake.', 'Just throw it all together.', 'This heavy cake was at every birthday party we had in Brazil.'),
('Pulled Pork Sandwhiches', 'American', '8Recipe URL HERE', 'Phenomenal when smoked. Add cole-slaw.', 'Just throw it all together.', 'John perfected these sandwhiches, and I dream about them.'),
('Suco de Maracuja', 'Brazilian', '9Recipe URL HERE', 'Xanax in a cup.', 'Just throw it all together.', 'Need a good night sleep? This has put us to sleep on many occasions.'),
('Mashed Potatoes', 'American', '10Recipe URL HERE', 'A classic.', 'Just throw it all together.', 'An american classic, enjoyed by many beyond just our famiy.');

INSERT INTO ingredient
(recipe_id, measurement, ingredient)
VALUES
(1, '1 Cake', 'Betty Crocker Fudge Cake'),
(1, '1 Cup', 'Whole Milk'),
(1, '1 Bar', 'Chocolate Symphony Bar'),
(2, '3 Cups', 'Black Beans'),
(2, '1 Package', 'Kielbasa Sausage'),
(2, '1 Package', 'Bacon'),
(3, '2 Breasts', 'Shredded Chicken'),
(3, '2 Cans', 'Cream of Chicken Soup'),
(3, '2 tsp', 'Salt'),
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