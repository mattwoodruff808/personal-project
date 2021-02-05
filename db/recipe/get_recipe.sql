SELECT r.recipe_id AS recipe_id, r.title AS title, r.category AS category, r.recipe_pic AS recipe_pic, i.measurement AS measurement, i.ingredient AS ingredient, r.instructions AS instructions, r.background AS background FROM recipe r
JOIN ingredient i ON r.recipe_id = i.recipe_id
WHERE r.recipe_id = $1
AND i.recipe_id = $1;