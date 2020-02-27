UPDATE posts 
SET 
    title = $2, 
    img = $3, 
    content = $4
WHERE product_id = $1;