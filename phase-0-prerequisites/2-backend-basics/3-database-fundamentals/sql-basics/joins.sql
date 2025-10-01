-----------------------------------------------------
-- SQL BASICS : JOINS
-- Covers all join types with examples
-----------------------------------------------------

-- Tables used in examples:
-- employees (employee_id, first_name, last_name, department_id, salary)
-- departments (department_id, department_name, location_id)

-----------------------------------------------------
-- 1. INNER JOIN
-----------------------------------------------------
-- Returns only matching rows
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
INNER JOIN departments d ON e.department_id = d.department_id;

-----------------------------------------------------
-- 2. LEFT JOIN (LEFT OUTER JOIN)
-----------------------------------------------------
-- Returns all rows from left table + matched rows from right table
-- Non-matching rows from right will be NULL
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
LEFT JOIN departments d ON e.department_id = d.department_id;

-----------------------------------------------------
-- 3. RIGHT JOIN (RIGHT OUTER JOIN)
-----------------------------------------------------
-- Returns all rows from right table + matched rows from left table
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
RIGHT JOIN departments d ON e.department_id = d.department_id;

-----------------------------------------------------
-- 4. FULL OUTER JOIN
-----------------------------------------------------
-- Returns all rows from both tables (match or not)
-- Some DBs don’t support FULL JOIN (like MySQL), 
-- use UNION of LEFT + RIGHT JOIN instead
SELECT e.first_name, e.last_name, d.department_name
FROM employees e
FULL OUTER JOIN departments d ON e.department_id = d.department_id;

-- MySQL alternative (LEFT JOIN + RIGHT JOIN with UNION)
-- SELECT e.first_name, e.last_name, d.department_name
-- FROM employees e
-- LEFT JOIN departments d ON e.department_id = d.department_id
-- UNION
-- SELECT e.first_name, e.last_name, d.department_name
-- FROM employees e
-- RIGHT JOIN departments d ON e.department_id = d.department_id;

-----------------------------------------------------
-- 5. CROSS JOIN
-----------------------------------------------------
-- Cartesian product (every row from employees × every row from departments)
SELECT e.first_name, d.department_name
FROM employees e
CROSS JOIN departments d;

-----------------------------------------------------
-- 6. SELF JOIN
-----------------------------------------------------
-- Table joins with itself (example: employees with their managers)
SELECT e.first_name AS employee,
       m.first_name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.employee_id;

-----------------------------------------------------
-- 7. NATURAL JOIN (if supported)
-----------------------------------------------------
-- Automatically joins on columns with same name
-- SELECT first_name, department_name
-- FROM employees
-- NATURAL JOIN departments;

-----------------------------------------------------
-- 8. USING MULTIPLE JOINS
-----------------------------------------------------
SELECT e.first_name, e.last_name, d.department_name, l.city
FROM employees e
JOIN departments d ON e.department_id = d.department_id
JOIN locations l ON d.location_id = l.location_id;

-----------------------------------------------------
-- 9. JOINS WITH AGGREGATION
-----------------------------------------------------
SELECT d.department_name, COUNT(e.employee_id) AS total_employees, AVG(e.salary) AS avg_salary
FROM departments d
LEFT JOIN employees e ON d.department_id = e.department_id
GROUP BY d.department_name;

-----------------------------------------------------
-- 10. JOIN WITH SUBQUERY
-----------------------------------------------------
SELECT e.first_name, e.salary, d.department_name
FROM employees e
JOIN (
    SELECT department_id, AVG(salary) AS avg_salary
    FROM employees
    GROUP BY department_id
) sub ON e.department_id = sub.department_id
JOIN departments d ON e.department_id = d.department_id
WHERE e.salary > sub.avg_salary;
