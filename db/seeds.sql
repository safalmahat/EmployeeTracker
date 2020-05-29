INSERT INTO department (name)
VALUES 
('IT'),
('Finance & Accounting'),
('Sales & Marketing'),
('Operations');

INSERT INTO role (title, salary, department_id)
VALUES
('Full Stack Developer', 80000, 1),
('Software Engineer', 120000, 1),
('Accountant', 10000, 2), 
('Finanical Analyst', 150000, 2),
('Marketing Coordindator', 70000, 3), 
('Sales Lead', 90000, 3),
('Project Manager', 100000, 4),
('Operations Manager', 90000, 4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Mark', 'Miller', 1, 9),
('Devin', 'Anderson', 2, 9),
('Mary', 'Brown', 3, 9),
('Ashley', 'Jones', 4, 9),
('Tyler', 'Moore', 5, 9),
('Ana', 'Sanchez', 6, 9),
('Lewis', 'Allen', 5, 9),
('Katherine', 'Green', 7, 9);

