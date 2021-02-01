SELECT * FROM comment c
JOIN recipe r ON c.recipe_id = r.recipe_id
WHERE r.recipe_id = $1
ORDER BY DESC;