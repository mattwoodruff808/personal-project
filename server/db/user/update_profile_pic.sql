UPDATE auth_user
SET profile_pic = $1
WHERE user_id = $2;

SELECT user_id, email, username, profile_pic FROM auth_user
WHERE user_id = $2;