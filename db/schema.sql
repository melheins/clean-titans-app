--#Schema#

DROP DATABASE IF EXISTS x1vm9o4shp876fga;

CREATE DATABASE x1vm9o4shp876fga;

USE x1vm9o4shp876fga;

--##Parent Table##
CREATE TABLE parents (
  parent_id  INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30),
  last_name  VARCHAR(30),
  uid INT
);

--##Child Table##
CREATE TABLE children (
  child_id   INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  parent_id  INT,
  first_name VARCHAR(30),
  points     INT          DEFAULT 0,
  avatar     VARCHAR(30),
  nickname   VARCHAR(30),
  FOREIGN KEY (parent_id) REFERENCES parents (parent_id)
);

--##Missions Table##
CREATE TABLE mission (
  mission_id          VARCHAR(30) PRIMARY KEY,
  mission_title       VARCHAR(45),
  mission_point_value INT NOT NULL,
  mission_decription  VARCHAR(200),
  mission_video_url   VARCHAR(200)
);

--##Child's Missions Table##
CREATE TABLE child_mission_list (
  seq_no              INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  child_id            INT,
  mission_id          VARCHAR(30),
  mission_status      VARCHAR(1)   DEFAULT 'I',
  mission_status_date TIMESTAMP DEFAULT NOW(),
  FOREIGN KEY (child_id) REFERENCES children (child_id),
  FOREIGN KEY (mission_id) REFERENCES mission (mission_id)
);

--##Child's Rewards Table##
CREATE TABLE rewards_to_earn (
  reward_id VARCHAR(50) PRIMARY KEY,
  reward_description VARCHAR(200),
  reward_points_required INT NOT NULL,
  reward_status VARCHAR(1)   DEFAULT 'I'
);

--##Rewards Table##
CREATE TABLE rewards_earned (
  reward_id VARCHAR(50) PRIMARY KEY,
  reward_points_required INT NOT NULL,
  reward_category VARCHAR(50)
  FOREIGN KEY (reward_id) REFERNCES rewards_to_earn (reward_id)
);

--##Comics Table##
CREATE TABLE comics (
  comic_id VARCHAR(100) PRIMARY KEY,
  comic_points_required INT NOT NULL,
  comic_earned_status VARCHAR(1) DEFAULT 'I'
);
