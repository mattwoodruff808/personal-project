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
('Symphony Cake', 'American', 'https://lh3.googleusercontent.com/qSSzz8subpNEQtb_60Ayhihak7SADSTPYRZvSTVbTGWxgiaZ9FWQHR0tWYuOIzdMYZX0=s128', 'Symphony Cake: The best cake to ever exist.  You will experience a Symphony in your mouth. This cake is incredibly easy to make, and will make you the most popular at the family reunion!', 'Just throw it all together.', 'This cake was created by Linda Meadows. I don`t think she had the original idea, but this version is certainly her own concoction.'),
('Feijoada', 'Brazilian', 'https://lh3.googleusercontent.com/e6k0a8Zi2h3P5xiGXJuDtNxoGUlhmLsbPjWJtULBJOEwKxf4T_fGrGcmP9nLpOFqLTiqT_4=s102', 'Feijoada: Heaviest meal to exist. This is an iconic Brazilian dish, and perfect right before a Saturday nap.', 'Just throw it all together.', 'One of the best meals in Brazil, a Woodruff favorite. This is the dish that singlehandedly converted Matthew from a picky eater.'),
('Hawaiian Haystacks', 'American', 'https://lh3.googleusercontent.com/WKJ2seRg8EvjzY-Tine2FB2XKSxcNdTdgt-KiPoHbLqrBtRLgDAseEKqrWpakQcW_604=s85', 'Hawaiian Haystacks: Legit just gravy on rice, and all your favorite toppings! Great for large gatherings.', 'Just throw it all together.', 'A classic that we have enjoyed since we were little! This is a recipe that has been passed down from parent to child, and is always a family favorite.'),
('Strogonoff', 'Brazilian', 'https://lh3.googleusercontent.com/TxZU9uVIzPSkMgJhLbbhIuxUKR-wLRPbfe6xOnxBnsMQp208nqeOTiTk7uPJ4pekWSDVcg=s85', 'Strogonoff: Heaven. Plain and simple. And affordable too!', 'Just throw it all together.', 'One of the tastiest, easiest, and cheapest meals we discovered in Brazil. This is a perfect meal to cook in large quantities, and we have done so for friends and family. Even our kids ask for seconds which almost never happens!'),
('Potato Salad', 'American', 'https://lh3.googleusercontent.com/vEEc34umiuWQ7Hu0L9IBqfDPlhzEOVAdwCmswoOx8KmUaXz3CmCPPZSBp2GIYnJXn1yy=s85', 'Potato Salad: Want to be the most popular at the BBQ? Make this.', 'Just throw it all together.', 'This recipe is sacred. We have passed this recipe down several generations. It is originally from a cookbook Granny had in 1905, making it over 100 years old! Our family constantly requests this for every single BBQ we have.'),
('Churrasco', 'Brazilian', 'https://lh3.googleusercontent.com/5RYB2SI_VZ2ZP2aw1rFRGd75H1NsEipwERiCSlK3LW6rhiKaIE-NnxJ9YeGg8k3ZhsrkpA=s106', 'Churrasco: Brazilian BBQ! Can anything be better? This is even more affordable than you know! Try it out.', 'Just throw it all together.', 'This is one of the things our family misses most about Brazil. Everyone there knew how to throw a great party with Churrasco, and you would have to roll us out of there once the eating was finished!'),
('Devona`s Tacos', 'American', 'https://lh3.googleusercontent.com/VN6N-fSj8GKnKkZ_GLL_z3ZFLfjd-fzf57f-uHDIddUteDBuGPrusfSaxcujmcam6Ykb2w=s128', 'Devona`s Tacos: Best. Tacos. Ever.', 'Just throw it all together.', 'Grandmas taco recipe passed down from mother to son to daughter. This recipe helps us to feel close to Grandma, as she has passed away some time ago. When we make this recipe, we feel joy. And it tastes really good as well!'),
('Bolo de Brigadeiro', 'Brazilian', 'https://lh3.googleusercontent.com/ZkyuIrROPTM2vgSaQCtUsHzCdecOwdZQ6eg0WV6iZHq3js5f-kHAKAotbVGmHQozhu3h=s128', 'Bolo de Brigadeiro: Dense, Delicious, Decadent Brazilian Cake.', 'Just throw it all together.', 'This heavy cake was at every birthday party we had in Brazil. There was a time when Matthew ate 3 slices and slept the rest of the day well into the next morning. This cake is worth it!'),
('Pulled Pork Sandwhiches', 'American', 'https://lh3.googleusercontent.com/5iW66Ue4RP7K3V8-PyiPAcWObOwfJijOh5TYo7SS82SSy2oR0yFxf0Epk3-lvTmQXG2UDg=s85', 'Pulled Pork Sandwhiches: Phenomenal when smoked. Add cole-slaw. Mouth watering yet?', 'Just throw it all together.', 'John perfected these sandwhiches, and I dream about them. I don`t think I could ever go back to pulled pork that is not smoked low and slow. My mouth is watering just typing this.'),
('Suco de Maracuja', 'Brazilian', 'https://lh3.googleusercontent.com/FhoIZpcLOhacvHmGSRfBkf0XIRfO23uShiwA7J8g3_UceLHOwKUXlegmSXcK_n7l73SnhA=s119', 'Suco de Maracuja: Xanax in a cup. This is the nectar that the gods drink.', 'Just throw it all together.', 'Need a good night sleep? This has put us to sleep on many occasions. The first place we ate at in Brazil was the home of the Pinha family. They gave us tall glasses of Maracuja and we then took a 3 hour nap in their living room.'),
('Mashed Potatoes', 'American', 'https://lh3.googleusercontent.com/cA0nCynxYp5ONwv4-g74wNZ29rQtSzy-y3q74_kpIutiOZKmKLgBZ92QT7AXJ5jeFox-=s113', 'Mashed Potatoes: An American classic. Not much needs to be said, goes well with Churrasco!', 'Just throw it all together.', 'An american classic, enjoyed by many beyond just our famiy. demanded mashed potatoes and roast every sunday of our mother, and she said "Well you cook it then." So we learned how and loved it!');

INSERT INTO ingredient
(recipe_id, measurement, ingredient)
VALUES
(1, '1 Cake', 'Betty Crocker Fudge Cake'),
(1, '1 Cup', 'Whole Milk'),
(1, '1 Bar', 'Chocolate Symphony Bar'),
(1, '1 12oz Can', 'Sweetened Condensed Milk'),
(1, '2', 'Eggs'),
(1, '1 tsp', 'Vanilla Extract'),
(1, '1 Tub', 'Cool Whip'),
(1, '1 Tub', 'Cool Whip'),
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