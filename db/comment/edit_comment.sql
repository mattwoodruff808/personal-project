UPDATE comment
SET content = $1
WHERE comment_id = $2;

SELECT * FROM comment
WHERE comment_id = $2;