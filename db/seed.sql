\c drp_dev;

\dt

INSERT INTO designers ( first_name, last_name, brand_name, years_in_industry, is_sustainable, country, price_point, image) 
VALUES 
    ('Kerby','Jean-Raymond','Pyer Moss', 10 , true, 'USA', 'High-end', 'https://images.businessoffashion.com/profiles/asset/1614383836918228/kerby-jean-raymond_courtesy-1645321417176187.png?auto=format%2Ccompress&fit=crop&h=360&w=660'),
    ('Aurora','James','Brother Vellies', 8 , true, 'USA', 'Luxury', 'https://cdn.cliqueinc.com/posts/277913/black-designers-277913-1581098553670-main.500x0c.jpg?interlace=true&quality=70'),
    ('Telfar', 'Clemens','Telfar', 10, true, 'USA', 'Mid-range', 'https://wwd.com/wp-content/uploads/2018/02/telfar_clemmens_gc_51.jpg' ),
    ('Carly', 'Cushnie','Cushine', 10, false, 'USA', 'High-end', 'https://cdn.shopify.com/s/files/1/1031/5525/articles/Carly_Cushnie_Portraits_043-2_1024x1024.jpg?v=1606248154' ),
    ('Ozwald', 'Boateng', 'Ozwald Boateng', 30, false, 'United Kingdom', 'High-end', 'https://images.squarespace-cdn.com/content/v1/56ec32ddc2ea51bd674b7933/1467753781977-T5VO8KPZ2D21TDT722PV/image-asset.jpeg?format=1000w'),
    ('Grace', 'Wales Bonner', 'Wales Bonner', 5, true, 'United Kingdom', 'Luxury','https://www.washingtonpost.com/resizer/r1OEGYp5EFSGM9HWld7JHg158rY=/arc-anglerfish-washpost-prod-washpost/public/TBARKWLODRA7BMSLKXZQYPUR7Q.jpg'),
    ('Christopher', 'John Rogers', 'Christopher John Rogers', 5, false, 'United States', 'High-end', 'https://pyxis.nymag.com/v1/imgs/76c/c7b/b2ea8822ca4bbc2d900bd34e2d6100c227-CJR-Shikeith-01.rvertical.w570.jpg'),
    ('Stella', 'Jean', 'Stella Jean', 10, true, 'Italy', 'Mid-end', 'https://hips.hearstapps.com/hmg-prod/images/designer-stella-jean-poses-during-the-vogue-fashion-dubai-news-photo-1593426289.jpg'), 
    ('Virgil', 'Abloh', 'Off-White & Louis Vuitton Men', 10, false, 'United States', 'Luxury', 'https://images.businessoffashion.com/profiles/asset/1546801818140655/virgil-abloh_christian-anwander-1546802046038668.jpg?auto=format%2Ccompress&fit=crop&h=360&w=660'),
    ('LaQuan', 'Smith', 'LaQuan Smith', 10, false, 'United States', 'High-end', 'https://media.voguebusiness.com/photos/613876fcb5d1d70d84084dc0/2:3/w_2240,c_limit/laquan-smith-voguebus-laquan-smith-sep-21-story.jpg');

INSERT INTO clothing (designer_id, style, color, size, is_recycled_item, material, price, ranking, image)
VALUES 
    (1, 'Jacket', 'Black', 10, true, 'Botton', 200, 1, 'https://image.s5a.com/is/image/saksoff5th/0400017901404?dpr=on,2'),
    (2, 'Shoes', 'Brown', 8, true, 'Leather', 430, 2, 'https://image.s5a.com/is/image/saks/0400017838359_SUNSET?wid=484&hei=646&qlt=90&resMode=sharp2&op_usm=0.9,1.0,8,0'),
    (3, 'Handbag', 'Yellow', 0, false, 'Plastic', 202, 3, 'https://cdn.shopify.com/s/files/1/0880/7204/products/TELFAR-MEDIUM-HIGHLIGHTER-YELLOW-SHOPPING-BAG-HERO_2048x2048.jpg?v=1654881100'),
    (4, 'Jumpsuit', 'Black and White', 12, false, 'Silk', 493, 4, 'https://media.bergdorfgoodman.com/f_auto,q_auto/01/bg_3034017_100188_m'),
    (5, 'Shirt', 'Brown', 8, true, 'Leather', 399, 5, 'https://images.squarespace-cdn.com/content/v1/6169c88e4d8ab0099aaf6e31/1676472402138-RB30IKYH1FO960B3PSP9/10+copy.jpg?format=750w'),
    (6, 'Dress', 'Mutli-colored', 9, true, 'Cotton', 500, 6, 'https://www.net-a-porter.com/variants/images/1647597289730919/in/w920_q60.jpg'),
    (7, 'Dress', 'Multi-colored', 4, false, 'Knit', 1125, 7, 'https://media.bergdorfgoodman.com/f_auto,q_auto:low,ar_5:7,c_fill,dpr_2.0,w_720/01/bg_4440880_100010_m'),
    (8, 'Dress', 'White', 5, true, 'Knit', 945, 8, 'https://m.media-amazon.com/images/G/01/Shopbop/p/prod/products/sjean/sjean302351c925/sjean302351c925_1680014554495_2-0._UX846_FMwebp_.jpg'),
    (9, 'Hoodie', 'Black', 5, false, 'Cotton', 1305, 14, 'https://cdn-images.farfetch-contents.com/19/77/93/70/19779370_44494120_1000.jpg?c=3'),
  