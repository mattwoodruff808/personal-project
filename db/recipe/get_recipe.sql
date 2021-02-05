SELECT recipe_id, title, category, recipe_pic, instructions, background FROM recipe
WHERE recipe_id = $1;