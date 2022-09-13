-- Primary Key

create database handson2
use handson2
create table CLIENT_MASTER(
	CLIENTNO varchar(6) PRIMARY KEY,
     SNAME varchar(20),
		ADDRESS1 VARCHAR(30),
        ADDRESS2 VARCHAR(30),
     CITY varchar(15),
   PINCODE varchar(8),
	STATE varchar(15),
	BALDUE double(10,2)
);
drop database handson2
insert into CLIENT_MASTER values('C00001','Ivan Bayross',null,null,'Mumbai',400054,'Maharashtra',1500),
('C00002','Mamta Muzumdar',null,null,'Madras',780001,'Tamil Nadu',0),
('C00003','chhaya Bankar',null,null,'Mumbai',400057,'Maharashtra',5000),
('C00004','Ashwini Joshi',null,null,'Banglore',560001,'Karnataka',0),
('C00005','Hansel Colaco',null,null,'Mumbai',400060,'Maharashtra',2000),
('C00006','Deepak Sharma',null,null,'Mangalore',560050,'Karnataka',0);
truncate table CLIENT_MASTER
select * from client_master