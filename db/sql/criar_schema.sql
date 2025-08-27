CREATE DATABASE auth_test CHARACTER SET utf8mb4;

USE auth_test;

CREATE TABLE conta_usuario (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    hash_senha CHAR(32) CHARACTER SET latin1 NOT NULL UNIQUE,
    salt CHAR(32) CHARACTER SET latin1 NOT NULL UNIQUE,
    email VARCHAR(255),
    telefone CHAR(13)
);

CREATE TABLE usuario (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_conta_usuario INT NOT NULL,
    nome_completo VARCHAR(32) NOT NULL,
    FOREIGN KEY (id_conta_usuario) REFERENCES conta_usuario(id)
);

