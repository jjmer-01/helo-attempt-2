SELECT * FROM posts
JOIN users
ON posts.author_id = users.id 
WHERE users.id = ${users.id}