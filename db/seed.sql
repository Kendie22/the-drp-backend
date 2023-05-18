\c drp_dev;

\dt

INSERT INTO designers ( first_name, last_name, brand_name, years_in_industry, is_sustainable, country, price_point, image) VALUES
('Kerby','Jean-Raymond','Pyer Moss', 10 , true, 'USA', 'High-end', 'https://images.businessoffashion.com/profiles/asset/1614383836918228/kerby-jean-raymond_courtesy-1645321417176187.png?auto=format%2Ccompress&fit=crop&h=360&w=660'),
('Aurora','James','Brother Vellies', 8 , true, 'USA', 'Luxury', 'https://cdn.cliqueinc.com/posts/277913/black-designers-277913-1581098553670-main.500x0c.jpg?interlace=true&quality=70'),
('Telfar', 'Clemens','Telfar', 10, true, 'USA', 'Mid-range', 'https://wwd.com/wp-content/uploads/2018/02/telfar_clemmens_gc_51.jpg' ),
('Carly', 'Cushnie','Cushine', 10, false, 'USA', 'High-end', 'https://cdn.shopify.com/s/files/1/1031/5525/articles/Carly_Cushnie_Portraits_043-2_1024x1024.jpg?v=1606248154' );


INSERT INTO clothing (style, color, size, is_recycled_item, material, price, ranking, image)
VALUES ('jacket', 'black', 10, true, 'cotton', 200, 1, 'https://image.s5a.com/is/image/saksoff5th/0400017901404?dpr=on,2'),
       ('shoes', 'brown', 8, true, 'leather', 430, 2, 'https://image.s5a.com/is/image/saks/0400017838359_SUNSET?wid=484&hei=646&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0');