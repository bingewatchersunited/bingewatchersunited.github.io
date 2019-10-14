CREATE TABLE IF NOT EXISTS bwu.news AS news (
    id INT PRIMARY KEY IDENTITY (1,1),
    news_name VARCHAR (50) NOT NULL,
    news_text VARCHAR (1000) NOT NULL,
    news_image VARCHAR (255) NOT NULL,
    news_type INT (2) NOT NULL,
    made_on DATETIME
);
