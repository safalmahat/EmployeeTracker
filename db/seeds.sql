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
('Mark', 'Miller', 1, null),
('Devin', 'Anderson', 2, 8),
('Mary', 'Brown', 3, 8),
('Ashley', 'Jones', 4, 8),
('Tyler', 'Moore', 5, 8),
('Ana', 'Sanchez', 6, 8),
('Lewis', 'Allen', 5, 8),
('Katherine', 'Green', 7, 8);

