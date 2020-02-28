SELECT * FROM posts
JOIN users
ON users.id = posts.author_id
WHERE post_id = ${postId};
