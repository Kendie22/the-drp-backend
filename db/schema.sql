DROP DATABASE IF EXISTS drp_dev;
CREATE DATABASE drp_dev;


\c drp_dev;

-- designers
CREATE TABLE designers (
   designer_id SERIAL PRIMARY KEY,
   first_name  VARCHAR(100) NOT NULL, 
   last_name VARCHAR(100) NOT NULL,
   brand_name TEXT NOT NULL, 
   years_in_industry INTEGER DEFAULT 7, 
   is_sustainable BOOLEAN DEFAULT TRUE,
   country TEXT NOT NULL,
   price_point TEXT, 
   image TEXT NOT NULL
);
-- clothing line 
CREATE TABLE clothing (
   clothing_id SERIAL PRIMARY KEY,
   designer_id INTEGER NOT NULL REFERENCES designers(designer_id) ON DELETE CASCADE,
   style TEXT NOT NULL, 
   color TEXT NOT NULL, 
   size INTEGER DEFAULT 7, 
   is_recycled_item BOOLEAN DEFAULT FALSE,
   material TEXT,
   price INTEGER, 
   ranking INTEGER, 
   image TEXT NOT NULL
);

