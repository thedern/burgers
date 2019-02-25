DROP DATABASE burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);

insert into burgers (burger_name) values ('burger of death');
insert into burgers (burger_name) values ('burger of enlightenment');
insert into burgers (burger_name, devoured) values ('burger of truth', true);