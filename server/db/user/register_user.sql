INSERT INTO auth_user
(email, username, password, profile_pic)
VALUES
($1, $2, $3, $4)
RETURNING user_id, email, username, profile_pic;