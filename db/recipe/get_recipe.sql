SELECT title, category, recipe_pic, ingredients, instructions, background FROM recipe
WHERE recipe_id = $1;