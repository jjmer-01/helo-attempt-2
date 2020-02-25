ALTER TABLE users
ALTER password
TYPE text;

SELECT * FROM information_schema.columns WHERE TABLE_NAME='users';
