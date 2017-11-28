#Schema#

DROP DATABASE IF EXISTS clean_titans_db;

CREATE DATABASE clean_titans_db;

USE clean_titans_db;

##Parent Table##
CREATE TABLE parents (
  parent_id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name  VARCHAR(30)
);

##Child Table##
CREATE TABLE children (
  child_id   INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  parent_id  INT,
  first_name VARCHAR(30),
  points     INT          DEFAULT 0,
  avatar     VARCHAR(30),
  nickname   VARCHAR(30),
  FOREIGN KEY (parent_id) REFERENCES parents (parent_id)
);

##Child's Missions Table##
CREATE TABLE child_mission_list (
  seq_no              INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  child_id            INT,
  mission_id          VARCHAR(30),
  mission_status      VARCHAR(1)   DEFAULT 'I',
  mission_status_date DATE         DEFAULT SYSDATE(),
  FOREIGN KEY (child_id) REFERENCES children (child_id),
  FOREIGN KEY (mission_id) REFERENCES mission (mission_id)
);

##Missions Table##
CREATE TABLE mission (
  mission_id          VARCHAR(30) PRIMARY KEY,
  mission_title       VARCHAR(45),
  mission_point_value INT NOT NULL,
  mission_decription  VARCHAR(200),
  mission_video_url   VARCHAR(200)
);

##Child's Rewards Table##

##Rewards Table##
