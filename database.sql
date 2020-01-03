
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
"id" SERIAL PRIMARY KEY,
"username" VARCHAR (80) UNIQUE NOT NULL,
"password" VARCHAR (1000) NOT NULL,
"admin" BOOLEAN default true
);

CREATE TABLE "food" (
	"id" SERIAL PRIMARY KEY,
	"dine" varchar(255) NOT NULL
);

CREATE TABLE "description" (
"id" SERIAL PRIMARY KEY,
"description" varchar(255) NOT NULL,
"dine_id" INT REFERENCES "food" ON DELETE CASCADE ON UPDATE CASCADE,
"money" varchar(255) NOT NULL
);

CREATE TABLE "pictures" (
  "id" SERIAL PRIMARY KEY,
  "image"  VARCHAR(120) NOT NULL
);

INSERT INTO "food" ("dine")
VALUES ('T1. Cuban'),
('T2. Brisket'),
('T3. Bulgogi'),
('T4. Carne Asada'),
('T5. Tradition Taco'),
('T6. Crispy Shrimp'),
('T7. Chicken Honey Crispy'),
('T8. Spicy Salmon Taco'),
('T9. Spicy Tuna Taco'),
('T10. Spicy Yellowtail Taco'),
('T11. Crunchy Crab Taco'),
('T12. Tempura Shrimp Taco'),
('S1. California Roll'),
('S2. Crunchyroll'),
('S3. Philadelphia Roll'),
('S4. Spicy Salmon Roll'),
('S5. Spicy Yellowtail Roll'),
('S6. Spicy Tuna Roll'),
('S7. Crunchy Tempura Roll'),
('S8. #9 Roll'),
('S9. Caterpillar Roll'),
('S10. MA Roll'),
('S11. Mahtomedi Roll'),
('A1. Rosemary Parmesan Fries'),
('A2. KBBQ Wings (6)'),
('A3. Pot Sticker (5)'),
('A4. Crispy Chicken Feet');

INSERT INTO "description" ("description", "dine_id", "money")
VALUES ('Pull Pork, Caramelized Red Pepper, Swiss Cheese, Cilantro, Avocados & Spicy Honey Mayo Aioli', 1, '$3.25');

INSERT INTO "description" ("description", "dine_id", "money")
VALUES ('Smoked Marinated Brisket, Caramelized Onion, Queso Fresco Cheese, Banana Pepper, Cilantro & Chipotle Aioli', 2, '$3.75'),
('Korean BBQ Steak, Coleslaw, Cilantro, Pickled Ginger & Chipotle Aioli', 3, '$3.75'),
('Marinated Steak, Pico De Gallo, Queso Fresco Cheese, Cilantro & Chipotle Aioli', 4, '$3.75'),
('Seasoned Ground Beef, Cheddar Cheese & Pico De Gallo', 5, '$3.25'),
('Tempura Shrimp, Coleslaw, Cilantro & Sweet Spicy Aioli', 6, '$3.75'),
('Bread Chicken, Coleslaw, Cilantro, Diced Honey Crisp Apple & Spicy Honey Aioli', 7, '$3.75'),
('Spicy Salmon, Avocados, Cucumber & Spicy Mayo', 8, '$4.25'),
('Sushi Rice, Spicy Tuna, Avocado, Cucumber & Spicy Mayo', 9, '$4.25'),
('Sushi Rice, Spicy Yellow, Avocados, Cucumber & Spicy Mayo', 10, '$4.50'),
('Sushi Rice, Crab Mix, Avocado, Cucumber, Flake & Eel Sauce', 11, '$4.25'),
('Sushi Rice, Tempura Shrimp, Avocado, Cucumber, Flake, Eel & Spicy Mayo Sauce', 12, '$4.25'),
('Crab, Cucumber & Avocado', 13, '$7.95'),
('Crab Mix, Cucumber, Tempura Flakes, Eel Sauce & Spicy Mayo', 14, '$7.95'),
('Salmon, Cream Cheese & Cucumber', 15, '$13.25'),
('Salmon, Cucumber, Garlic Powder & Chili Oil', 16, '$8.25'),
('Yellowtail, Scallion, Cucumber, Sriracha & Lime Seasoning', 17, '$8.25'),
('Tuna, Spicy Mayo & Cucumber', 18, '$8.50'),
('Tempura Shrimp, Avocado, Cucumber, Top With Tuna, Jalapeños, Flake, Pouza & Eel Sauce', 19, '$13.25'),
('Tempura Shrimp, Avocado, Cucumber, Top With Salmon, Avocado, Eel & Spicy Sauce', 20, '$12.95'),
('Freshwater Eel, Cucumber, Top With Avocado & Eel Sauce', 21, '$13.25'),
('Tempura Shrimp, Cucumber, Avocado, Top With Spicy Tuna, Jalapeños, Eel & Spicy Mayo Sauce', 22, '$13.50'),
('Tuna, Salmon, Tilapia, Avocado, Cucumber, Top With Flake, Eel and Spicy Mayo Sauce', 23, '$14.25'),
('Serverd With House Basil Garlic Aioli', 24, '$3.25'),
('House Make korean BBQ sauce, & Top with Cilantro', 25, '$5.99'),
('Seasoned Ground Pork, Mix Vegetable, Serve With Sweet Soy', 26, '$4.99'),
('Served With House Chipotle Sauce', 27, '$4.99');

INSERT INTO "pictures" ("image")
VALUES ('images/A0.jpg'),
 ('images/A1.jpg'),
 ('images/A2.jpg'),
 ('images/A3.jpg'),
 ('images/A4.jpg'),
 ('images/A5.jpg'),
 ('images/A6.jpg'),
 ('images/A7.jpg'),
 ('images/A8.jpg'),
 ('images/A9.jpg'),
 ('images/A10.jpg'),
 ('images/A11.jpg'),
 ('images/T1.jpg'),
 ('images/T2.jpg'),
 ('images/T3.jpg'),
 ('images/T4.jpg'),
 ('images/T5.jpg');