SELECT * FROM comment
WHERE recipe_id = $1
ORDER BY DESC;