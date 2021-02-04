SELECT title, category, recipe_pic, instructions, background FROM recipe
WHERE recipe_id = $1;