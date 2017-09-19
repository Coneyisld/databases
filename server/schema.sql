CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   roomID int NOT NULL,
--   /* Describe your table here.*/
--   -- stores contents of rooms
--   rooms Varchar(255),
--   PRIMARY KEY (roomID) 
-- );

-- CREATE TABLE users (
--   userID int NOT NULL,
--   /* Describe your table here.*/
--   -- stores contents of users
--   users Varchar(255), 
--   PRIMARY KEY (userID) 
-- );

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT,
  /* Describe your table here.*/
  -- stores contents of messages
  username Varchar(255) NOT NULL,
  message Varchar(255) NOT NULL,
  roomname Varchar(255) NOT NULL,
  -- roomID int NOT NULL,
  -- userID int NOT NULL,
  PRIMARY KEY (ID)
  -- add foreign key from rooms
  -- add foreign key from users
  -- FOREIGN KEY (roomID) REFERENCES rooms(roomID),
  -- FOREIGN KEY (userID) REFERENCES users(userID)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

