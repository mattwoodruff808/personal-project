SELECT c.comment_id AS comment_id, c.content AS content, c.date_created AS date_created, c.user_id AS user_id, c.recipe_id AS recipe_id, u.profile_pic AS profile_pic, u.username AS username FROM comment c
JOIN auth_user u ON c.user_id = u.user_id
WHERE recipe_id = $1
ORDER BY date_created DESC;