-----------------------------------------------------
-- SQL BASICS : SELECT QUERIES
-- Run these queries step by step to practice
-----------------------------------------------------

-- 1. BASIC SELECT
SELECT first_name, last_name 
FROM employees;

-- 2. SELECT ALL COLUMNS
SELECT * 
FROM employees;

-- 3. COLUMN ALIASES
SELECT first_name AS "First Name",
       last_name AS "Surname"
FROM employees;

-- 4. REMOVE DUPLICATES (DISTINCT)
SELECT DISTINCT department_id
FROM employees;

-- 5. FILTERING WITH WHERE
SELECT first_name, salary
FROM employees
WHERE salary > 50000;

-- 5.1 Comparison Operators
SELECT * FROM employees
WHERE department_id = 10;

SELECT * FROM employees
WHERE salary <> 60000;

-- 5.2 BETWEEN
SELECT * FROM employees
WHERE salary BETWEEN 40000 AND 60000;

-- 5.3 IN
SELECT * FROM employees
WHERE department_id IN (10, 20, 30);

-- 5.4 LIKE
SELECT * FROM employees
WHERE first_name LIKE 'A%';   -- starts with A

SELECT * FROM employees
WHERE last_name LIKE '%son';  -- ends with son

SELECT * FROM employees
WHERE first_name LIKE '_a%';  -- 2nd letter is a

-- 5.5 IS NULL / IS NOT NULL
SELECT * FROM employees
WHERE manager_id IS NULL;

-----------------------------------------------------
-- 6. SORTING RESULTS
-----------------------------------------------------
SELECT first_name, salary
FROM employees
ORDER BY salary DESC, first_name ASC;

-----------------------------------------------------
-- 7. LIMITING RESULTS
-----------------------------------------------------
-- MySQL / PostgreSQL / SQLite
SELECT * FROM employees
ORDER BY salary DESC
LIMIT 5;

-- SQL Server
-- SELECT TOP 5 * FROM employees ORDER BY salary DESC;

-----------------------------------------------------
-- 8. AGGREGATE FUNCTIONS
-----------------------------------------------------
SELECT COUNT(*) AS total_employees,
       AVG(salary) AS avg_salary,
       MAX(salary) AS max_salary,
       MIN(salary) AS min_salary,
       SUM(salary) AS total_salary
FROM employees;

-----------------------------------------------------
-- 9. GROUPING DATA
-----------------------------------------------------
SELECT department_id, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_id;

-----------------------------------------------------
-- 10. FILTER GROUPS (HAVING)
-----------------------------------------------------
SELECT department_id, COUNT(*) AS num_employees
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;

-----------------------------------------------------
-- 11. COMBINING RESULTS (UNION)
-----------------------------------------------------
SELECT first_name AS name FROM employees
UNION
SELECT customer_name FROM customers;

-- UNION removes duplicates, UNION ALL keeps all
SELECT first_name AS name FROM employees
UNION ALL
SELECT customer_name FROM customers;

-----------------------------------------------------
-- 12. SUBQUERIES
-----------------------------------------------------
SELECT first_name, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-----------------------------------------------------
-- 13. CONDITIONAL LOGIC (CASE)
-----------------------------------------------------
SELECT first_name,
       salary,
       CASE 
         WHEN salary > 80000 THEN 'High'
         WHEN salary BETWEEN 50000 AND 80000 THEN 'Medium'
         ELSE 'Low'
       END AS salary_level
FROM employees;

-----------------------------------------------------
-- 14. STRING FUNCTIONS
-----------------------------------------------------
SELECT UPPER(first_name) AS upper_name,
       LOWER(last_name) AS lower_name,
       LENGTH(first_name) AS name_length,
       CONCAT(first_name, ' ', last_name) AS full_name
FROM employees;

-----------------------------------------------------
-- 15. DATE FUNCTIONS
-----------------------------------------------------
SELECT NOW() AS current_datetime;   -- MySQL/Postgres
SELECT CURDATE() AS current_date;   -- MySQL
-- SELECT GETDATE() AS current_datetime; -- SQL Server

SELECT YEAR(hire_date) AS hire_year,
       MONTH(hire_date) AS hire_month,
       DAY(hire_date) AS hire_day
FROM employees;

-----------------------------------------------------
-- 16. SELECT WITH JOIN (basic preview, full in joins.sql)
-----------------------------------------------------
SELECT e.first_name, d.department_name
FROM employees e
JOIN departments d ON e.department_id = d.department_id;
