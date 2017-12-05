--#Seeds#

USE clean_titans_db;

--##Parent Data##


--##Child Data##


--##Missions Data##
INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Brush Teeth AM', 3,'Brush Teeth AM', current_timestamp(),current_timestamp());

--##Rewards Data##
INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Ice Cream', 'Ice Cream treat',10,'r', current_timestamp(),current_timestamp());

