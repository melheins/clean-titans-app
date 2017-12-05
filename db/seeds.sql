--#Seeds#

USE clean_titans_db;

--##Parent Data##


--##Child Data##


--##Missions Data##
INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Brush Teeth AM', 3,'Brush Teeth AM', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Brush Teeth PM', 3,'Brush Teeth PM', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Empty Cat Litter', 8,'Empty Cat Litter', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Empty Diswasher', 6,'Empty Diswasher', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Empty Trash', 5,'Empty Trash', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Gather Dirty Clothes', 3,'Gather Dirty Clothes', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Load Dishwasher', 8,'Load Dishwasher', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Make Bed', 3,'Make Bed', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Make School Lunch', 5,'Make School Lunch', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Pick Up Toys', 7,'Pick Up Toys', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Put Away Laundry', 5,'Put Away Laundry', current_timestamp(),current_timestamp());

INSERT INTO missions (mission_title, mission_point_value, mission_decription, createdAt,updatedAt)
VALUES ('Walk The Dog', 6,'Walk The Dog', current_timestamp(),current_timestamp());




--##Rewards Data##
INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Ice Cream', 'Ice Cream treat',10,'r', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Marvel Comic', 'Comic 1',15,'c', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Tablet/Laptop 30', 'Tablet/Laptop Time for 30 minutes',15,'r', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('TV Time - Single Episode', 'TV Time - Single Episode',15,'r', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('TV Time - Full Movie', 'TV Time - Full Movie',25,'r', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('You Choose Family Dinner', 'You Choose Family Dinner',50,'r', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('$3 Trip to The Dollar Store', '$3 Trip to The Dollar Store',75,'r', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('$5 Trip to The Dollar Store', '$5 Trip to The Dollar Store',100,'r', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('Dinner Out with a Parent', 'Dinner Out with a Parent',100,'r', current_timestamp(),current_timestamp());

INSERT INTO rewards (reward_name, reward_description,reward_points_required,reward_category, createdAt,updatedAt)
VALUES ('New Video Game', 'New Video Game',100,'r', current_timestamp(),current_timestamp());
