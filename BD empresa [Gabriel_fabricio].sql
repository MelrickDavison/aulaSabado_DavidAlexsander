CREATE DATABASE empresa;
USE empresa;

CREATE TABLE cliente(
	nome VARCHAR(50),
    telefone VARCHAR(10),
    cpf VARCHAR(14) UNIQUE,
    PRIMARY KEY(cpf)
);
CREATE TABLE pedido(
	FK_cpf VARCHAR(10),
	num_pedido INT AUTO_INCREMENT UNIQUE,
    data_pedido VARCHAR(10),
    preco_total DOUBLE,
    FOREIGN KEY(FK_cpf) REFERENCES cliente(cpf),
    PRIMARY KEY(num_pedido)
);
CREATE TABLE emp(
	FK_num_pedido INT AUTO_INCREMENT UNIQUE,
	nome VARCHAR(50) NOT NULL,
    cnpj VARCHAR(18) UNIQUE,
    FOREIGN KEY(FK_num_pedido) REFERENCES pedido(num_pedido),
    PRIMARY KEY(cnpj)
);
CREATE TABLE produto(
	nome_prod VARCHAR(50) NOT NULL,
    preco_prod DOUBLE,
    cod_prod INT UNIQUE,
    PRIMARY KEY(cod_prod)
    
);
CREATE TABLE pedi_prod(
	FK_num_pedido INT AUTO_INCREMENT UNIQUE,
    FK_cod_prod INT UNIQUE,
    quantidade INT,
    FOREIGN KEY (FK_num_pedido) REFERENCES pedido(num_pedido),
    FOREIGN KEY (FK_cod_prod) REFERENCES produto(cod_prod),
    PRIMARY KEY(FK_num_pedido, FK_cod_prod)
);








