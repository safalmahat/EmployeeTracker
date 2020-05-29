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
('Mark', 'Miller', 1, 2),
('Devin', 'Anderson', 2, null),
('Mary', 'Brown', 3, 4),
('Ashely', 'Jones', 4, null),
('Tyler', 'Moore', 5, 6),
('Ana', 'Sanchez', 6, null),
('Lewis', 'Allen', 5, 6),
('Katherine', 'Green', 7, null),
('Michelle', 'Walker', 1, 2),
('Diego', 'Torres', 8, 8);

