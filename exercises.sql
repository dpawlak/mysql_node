-- Challenge 1
SELECT
    DATE_FORMAT(MIN(created_at), "%M %D %Y") as earliest_date
FROM users;

-- Challenge 2 
SELECT *
FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);

-- Challenge 3
SELECT 
    MONTHNAME(created_at) as month,
    COUNT(*) as count
FROM users GROUP BY month
ORDER BY count DESC;

-- Challenge 4
SELECT COUNT(*) as yahoo_users FROM users 
WHERE email LIKE '%@yahoo.com';

-- Challenge 5
SELECT
    CASE
        WHEN email LIKE '%gmail.com' THEN 'gmail'
        WHEN email LIKE '%yahoo.com' THEN 'yahoo'
        WHEN email LIKE '%hotmail.com' THEN 'hotmail'
        ELSE 'other'
    END as provider,
    COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;