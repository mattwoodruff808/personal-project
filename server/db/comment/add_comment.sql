INSERT INTO comment
(content, date_created, user_id, recipe_id)
VALUES
($1, $2, $3, $4);