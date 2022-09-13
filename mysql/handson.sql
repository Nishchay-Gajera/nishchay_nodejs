create database handson
use handson

-- CLIENT MASTER 
create table CLIENT_MASTER(
	CLIENTNO varchar(6),
     SNAME varchar(20),
		ADDRESS1 VARCHAR(30),
        ADDRESS2 VARCHAR(30),
     CITY varchar(15),
   PINCODE varchar(8),
	STATE varchar(15),
	BALDUE double(10,2)
);


insert into CLIENT_MASTER values('C00001','Ivan Bayross',null,null,'Mumbai',400054,'Maharashtra',1500),
('C00002','Mamta Muzumdar',null,null,'Madras',780001,'Tamil Nadu',0),
('C00003','chhaya Bankar',null,null,'Mumbai',400057,'Maharashtra',5000),
('C00004','Ashwini Joshi',null,null,'Banglore',560001,'Karnataka',0),
('C00005','Hansel Colaco',null,null,'Mumbai',400060,'Maharashtra',2000),
('C00006','Deepak Sharma',null,null,'Mangalore',560050,'Karnataka',0);

select sname from CLIENT_MASTER
select * from CLIENT_MASTER
select * from CLIENT_MASTER WHERE CITY='Mumbai';
select sname,city,state from CLIENT_MASTER

SET SQL_SAFE_UPDATES = 0;
update CLIENT_MASTER set CITY = 'Banglore' where CLIENTNO = 'C00005'


SET SQL_SAFE_UPDATES = 0;
update CLIENT_MASTER set BALDUE = 1000 where CLIENTNO = 'C00005'

DELETE FROM CLIENT_MASTER WHERE STATE = 'TAMIL NADU'

-- PRODUCT_MASTER

create table PRODUCT_MASTER(
	PRODUCTNO varchar(6),
    SDESCRIPTION varchar(15),
    PROFITPERCENT double(4,2),
    UNITMEASURE varchar(10),
    QTYONHAND int(8),
    REORDERLVL int(8),
    SELLPRICE double(8,2),
    COSTPRICE double(8,2)
);

insert into PRODUCT_MASTER values('P00001','T-Shirt',5,'Piece',200,50,350,250),
('P0345','Shirt',6,'Piece',150,50,500,350),
('P06734','Cotton Jeans',5,'Piece',100,20,600,450),
('P07865','Jeans',5,'Piece',100,20,750,500),
('P07868','Trousers',2,'Piece',150,50,850,550),
('P07885','Pull Overs',2.5,'Piece',80,30,700,450),
('P07965','Denim Shirts',4,'Piece',100,40,350,250),
('P07975','Lycra Tops',5,'Piece',70,30,300,175),
('P08865','Skirts',5,'Piece',75,30,450,300);

select * from PRODUCT_MASTER
select SDESCRIPTION from PRODUCT_MASTER


SET SQL_SAFE_UPDATES = 0;
update PRODUCT_MASTER set COSTPRICE = 950 where SDESCRIPTION = 'Trousers'

DELETE FROM PRODUCT_MASTER WHERE QTYONHAND = 100

-- SALESMAN_MASTER

create table SALESMAN_MASTER(
	SALESMANNO VARCHAR(6),
    SALESMANNAME VARCHAR(20),
    ADDRESS1 VARCHAR(30),
    ADDRESS2 VARCHAR(30),
    CITY VARCHAR(20),
    PINCODE int(8),
    STATE VARCHAR(20),
    SALAMT double(8,2),
    TGTTOGET DOUBLE(6,2),
    YTDSALES DOUBLE(6,2),
    REMARKS VARCHAR(06)
);

insert into SALESMAN_MASTER values('S00001','Aman','A/14','Worli','Mumbai',400002,'Maharashtra',3000,100,50,'Good'),
('S00002','Omkar','65','Nariman','Mumbai',400001,'Maharashtra',3000,200,100,'Good'),
('S00003','Raj','p-7','Bandra','Mumbai',400032,'Maharashtra',3000,200,100,'Good'),
('S00004','Ashish','A/5','Juhu','Mumbai',400044,'Maharashtra',3500,200,150,'Good');

update SALESMAN_MASTER SET CITY='Pune'
select * from SALESMAN_MASTER
select * from SALESMAN_MASTER where SALAMT = 3000

DELETE FROM SALESMAN_MASTER WHERE SALAMT = 3500
