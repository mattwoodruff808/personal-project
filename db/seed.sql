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
    ingredients TEXT,
    instructions TEXT,
    background TEXT
);

CREATE TABLE comment (
    comment_id SERIAL PRIMARY KEY,
    comment VARCHAR(250),
    user_id INT REFERENCES auth_user(user_id),
    recipe_id INT REFERENCES recipe(recipe_id)
);

-- Dummy Data:

INSERT INTO recipe
(title, category, recipe_pic, blurb, ingredients, instructions, background)
VALUES
('Symphony Cake', 'American', 'Recipe URL HERE', 'The best cake to ever exist', 'Milk, Cake, Chocolate', 'Just throw it all together.', 'This was created by Linda Meadows'),
('1Symphony Cake', '1American', '1Recipe URL HERE', '1The best cake to ever exist', '1Milk, Cake, Chocolate', '1Just throw it all together.', '1This was created by Linda Meadows'),
('2Symphony Cake', '2American', '2Recipe URL HERE', '2The best cake to ever exist', '2Milk, Cake, Chocolate', '2Just throw it all together.', '2This was created by Linda Meadows'),
('3Symphony Cake', '3American', '3Recipe URL HERE', '3The best cake to ever exist', '3Milk, Cake, Chocolate', '3Just throw it all together.', '3This was created by Linda Meadows'),
('4Symphony Cake', '4American', '4Recipe URL HERE', '4The best cake to ever exist', '4Milk, Cake, Chocolate', '4Just throw it all together.', '4This was created by Linda Meadows'),
('5Symphony Cake', '5American', '5Recipe URL HERE', '5The best cake to ever exist', '5Milk, Cake, Chocolate', '5Just throw it all together.', '5This was created by Linda Meadows'),
('6Symphony Cake', '6American', '6Recipe URL HERE', '6The best cake to ever exist', '6Milk, Cake, Chocolate', '6Just throw it all together.', '6This was created by Linda Meadows'),
('7Symphony Cake', '7American', '7Recipe URL HERE', '7The best cake to ever exist', '7Milk, Cake, Chocolate', '7Just throw it all together.', '7This was created by Linda Meadows'),
('8Symphony Cake', '8American', '8Recipe URL HERE', '8The best cake to ever exist', '8Milk, Cake, Chocolate', '8Just throw it all together.', '8This was created by Linda Meadows'),
('9Symphony Cake', '9American', '9Recipe URL HERE', '9The best cake to ever exist', '9Milk, Cake, Chocolate', '9Just throw it all together.', '9This was created by Linda Meadows'),
('10Symphony Cake', '10American', '10Recipe URL HERE', '10The best cake to ever exist', '10Milk, Cake, Chocolate', '10Just throw it all together.', '10This was created by Linda Meadows');