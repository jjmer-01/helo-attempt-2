UPDATE posts 
SET 
    title = ${title}, 
    img = ${img}, 
    content = ${content}
WHERE post_id = ${postId};