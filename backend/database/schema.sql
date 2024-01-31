CREATE DATABASE IF NOT EXISTS archivHit;

USE archivHit;
  
CREATE TABLE `user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(80),
    `email` VARCHAR(125),
    `password` VARCHAR(255)
  );

CREATE TABLE `editor` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(80)
);

CREATE TABLE `game` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `type` BOOLEAN,
    `play_time` INT,
    `age_min` INT,
    `age_max` INT,
    `player_min` INT,
    `player_max` INT,
    `user_id` INT,
    `editor_id` INT,
    FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE,
    FOREIGN KEY (editor_id) REFERENCES editor (id) ON DELETE CASCADE
  );