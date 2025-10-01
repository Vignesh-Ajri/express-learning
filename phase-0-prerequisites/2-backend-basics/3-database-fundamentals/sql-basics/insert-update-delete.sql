-----------------------------------------------------
-- SQL BASICS : INSERT, UPDATE, DELETE
-- Covers all concepts with examples
-----------------------------------------------------

-----------------------------------------------------
-- 1. INSERT DATA
-----------------------------------------------------

-- 1.1 Insert into all columns
INSERT INTO employees (employee_id, first_name, last_name, salary, department_id, hire_date)
VALUES (101, 'John', 'Doe', 60000, 10, '2022-01-01');

-- 1.2 Insert into specific columns only
INSERT INTO employees (first_name, last_name, salary)
VALUES ('Alice', 'Smith', 50000);

-- 1.3 Insert multiple rows at once (MySQL/Postgres/SQLite)
INSERT INTO employees (first_name, last_name, salary, department_id)
VALUES 
    ('David', 'Brown', 40000, 20),
    ('Emma', 'Taylor', 45000, 20);

-- 1.4 Insert from another table
INSERT INTO employees_archive (employee_id, first_name, last_name, salary)
SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE hire_date < '2020-01-01';

-----------------------------------------------------
-- 2. UPDATE DATA
-----------------------------------------------------

-- 2.1 Update a single column
UPDATE employees
SET salary = 65000
WHERE employee_id = 101;

-- 2.2 Update multiple columns
UPDATE employees
SET salary = 70000,
    department_id = 30
WHERE employee_id = 102;

-- 2.3 Update using conditions
UPDATE employees
SET salary = salary * 1.10
WHERE department_id = 20;

-- 2.4 Update from another table (SQL Server, Postgres)
-- Example: Match department_id from departments table
-- UPDATE employees e
-- SET department_id = d.department_id
-- FROM departments d
-- WHERE e.department_name = d.department_name;

-----------------------------------------------------
-- 3. DELETE DATA
-----------------------------------------------------

-- 3.1 Delete specific rows
DELETE FROM employees
WHERE employee_id = 103;

-- 3.2 Delete with conditions
DELETE FROM employees
WHERE salary < 30000;

-- 3.3 Delete all rows (keep structure)
DELETE FROM employees;

-- 3.4 TRUNCATE TABLE (faster, resets auto_increment, no WHERE allowed)
TRUNCATE TABLE employees;

-----------------------------------------------------
-- 4. SAFE PRACTICES
-----------------------------------------------------

-- Always test with SELECT before DELETE or UPDATE
SELECT * FROM employees WHERE salary < 30000;

-- Then execute UPDATE/DELETE carefully
