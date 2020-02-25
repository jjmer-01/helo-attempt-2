CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    img TEXT,
    content TEXT,
    author_id INT references users(id)
)

-- INSERT INTO users (username, password, profile_pic)
-- VALUES 
-- ('jess', 'pw', 'https://hottopic.scene7.com/is/image/HotTopic/10798139_hi?$pdp_hero_standard$'), 
-- ('leah', 'pw', 'https://images-na.ssl-images-amazon.com/images/I/41te4jIxCKL._AC_.jpg'), 
-- ('chels', 'pw', 'https://www.writeups.org/wp-content/uploads/Blossom-Powerpuff-Girls-Profile.jpg');
