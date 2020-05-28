DROP TABLE IF EXISTS department; 
DROP TABLE IF EXISTS role; 
DROP TABLE IF EXISTS employee; 

CREATE TABLE department (
    id INTEGER PRIMARY KEY,
    name VARCHAR(30) NOT NULL
)

CREATE TABLE role (
    id INTEGER PRIMARY KEY,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL 
    department_id INTEGER UNSIGNED, 
    CONSTRAINT fk_party FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE SET NULL 
)

CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30), 
    role_id INTEGER UNSIGNED, 
    CONSTRAINT fk_party FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE SET NULL,
    manager_id INTEGER UNSIGNED,
    CONSTRAINT fk_party FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
)




