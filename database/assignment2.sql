-- Q1. Insert into the table`account`
INSERT INTO account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- Q2. Modify the Tony Stark Record
UPDATE account 
SET account_type = 'Admin' WHERE account_id = 1;

-- Q3. Delete the Tony Stark Record
DELETE FROM account 
WHERE account_id = 1;

-- Q4. Modify the "GM Hummer" Record
UPDATE inventory 
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior');

-- Q5. make and model fields from tables 'inventory and classification'
SELECT inv_make, inv_model, classification_name
FROM inventory
INNER JOIN classification
ON inventory.classification_id = classification.classification_id
WHERE classification_name = 'Sport';

-- Q6. Update all records in the table `inventory`
UPDATE inventory
SET 
  inv_image = REPLACE(inv_image, '/images', '/images/vehicles'),
  inv_thumbnail = REPLACE(inv_thumbnail, '/images', '/images/vehicles');
