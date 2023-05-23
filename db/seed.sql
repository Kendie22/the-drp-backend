\c drp_dev;

\dt

INSERT INTO designers ( first_name, last_name, brand_name, years_in_industry, is_sustainable, country, price_point, image) 
VALUES 
    ('Kerby','Jean-Raymond','Pyer Moss', 10 , true, 'USA', 'High-end', 'https://images.businessoffashion.com/profiles/asset/1614383836918228/kerby-jean-raymond_courtesy-1645321417176187.png?auto=format%2Ccompress&fit=crop&h=360&w=660'),
    ('Aurora','James','Brother Vellies', 8 , true, 'USA', 'Luxury', 'https://cdn.cliqueinc.com/posts/277913/black-designers-277913-1581098553670-main.500x0c.jpg?interlace=true&quality=70'),
    ('Telfar', 'Clemens','Telfar', 10, true, 'USA', 'Mid-range', 'https://wwd.com/wp-content/uploads/2018/02/telfar_clemmens_gc_51.jpg' ),
    ('Carly', 'Cushnie','Cushine', 10, false, 'USA', 'High-end', 'https://cdn.shopify.com/s/files/1/1031/5525/articles/Carly_Cushnie_Portraits_043-2_1024x1024.jpg?v=1606248154' ),
    ('Ozwald', 'Boateng', 'Ozwald Boateng', 30, false, 'United Kingdom', 'High-end', 'https://images.squarespace-cdn.com/content/v1/56ec32ddc2ea51bd674b7933/1467753781977-T5VO8KPZ2D21TDT722PV/image-asset.jpeg?format=1000w')
    ('Grace', 'Wales Bonner', 'Wales Bonner', 5, 'United Kingdom', 'Luxury','https://www.washingtonpost.com/resizer/r1OEGYp5EFSGM9HWld7JHg158rY=/arc-anglerfish-washpost-prod-washpost/public/TBARKWLODRA7BMSLKXZQYPUR7Q.jpg');

INSERT INTO clothing (designer_id, style, color, size, is_recycled_item, material, price, ranking, image)
VALUES (1, 'Jacket', 'Black', 10, true, 'Botton', 200, 1, 'https://image.s5a.com/is/image/saksoff5th/0400017901404?dpr=on,2'),
       (2, 'Shoes', 'Brown', 8, true, 'Leather', 430, 2, 'https://image.s5a.com/is/image/saks/0400017838359_SUNSET?wid=484&hei=646&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'),
       (3, 'Handbag', 'Yellow', 0, false, 'Plastic', 202, 3, 'https://cdn.shopify.com/s/files/1/0880/7204/products/TELFAR-MEDIUM-HIGHLIGHTER-YELLOW-SHOPPING-BAG-HERO_2048x2048.jpg?v=1654881100'),
       (4, 'Jumpsuit', 'Black and White', 12, false, 'Silk', 493, 4, 'https://media.bergdorfgoodman.com/f_auto,q_auto/01/bg_3034017_100188_m'),
       (5, 'Shirt', 'Brown', 8, true, 'Leather', 399, 5, 'https://images.squarespace-cdn.com/content/v1/6169c88e4d8ab0099aaf6e31/1676472402138-RB30IKYH1FO960B3PSP9/10+copy.jpg?format=750w');