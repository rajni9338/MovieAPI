
use movies;
CREATE TABLE users(
id int(11) auto_increment primary key,
surname varchar(50),
firstname varchar(50),
email varchar(60),
pword varchar(200),
UNIQUE KEY unique_email (email))
DEFAULT CHARSET=utf8;




use movies;
CREATE TABLE movie(
id int(11) AUTO_INCREMENT primary key,
movie_id varchar(60),
user_id varchar(60),
rate varchar(1)
)DEFAULT CHARSET=utf8;