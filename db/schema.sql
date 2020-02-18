DROP DATABASE IF EXISTS streamerDB;

CREATE DATABASE streamerDB;

USE streamerDB;

CREATE TABLE user (
	id INT AUTO_INCREMENT NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE shows (
	id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR (255),
    want_to_watch BOOLEAN,
    watching BOOLEAN,
    completed BOOLEAN,
    user_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);