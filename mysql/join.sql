create database task;
use task;

create table CLIENT_MASTER(
CLINTNO varchar(6) primary key,
SNAME varchar(20),
ADDRESS1 VARCHAR(30),
ADDRESS2 VARCHAR(30),
CITY varchar(15),
PINCODE VARCHAR(8),
STATE Varchar(15),
BALDUE DOUBLE(10,2)
);

drop table CLIENT_MASTER;

insert into CLIENT_MASTER values('C00001','Ivan Bayross',null,null,'Mumbai',400054,'Maharashtra',15000),
('C00002','Mamta Muzumdar',null,null,'Madras',780001,'Tamil Nadu',15000),
('C00003','Chhaya Bankar',null,null,'Mumbai',400057,'Maharashtra',0),
('C00004','Ashwini Joshi',null,null,'Bangalore',560001,'Karnataka',5000),
('C00005','Hansel Colaco',null,null,'Mumbai',400060,'Maharashtra',2000),
('C00006','Deepak Sharma',null,null,'Mangalore',560050,'Karnataka',0);

create table PRODUCT_MASTER(
PRODUCTNO varchar(6) primary key check(PRODUCTNO like 'P%'),
SDESCRIPTION varchar(15)NOT NULL,
PROFITPERCENT DOUBLE(4,2)NOT NULL,
UNITMEASURE varchar(10)NOT NULL,
QTYONHAND bigint(8)NOT NULL,
REORDERLVL bigint(8)NOT NULL,
SELLPRICE DOUBLE(8,2)NOT NULL check (SELLPRICE !=0),
COSTPRICE DOUBLE(8,2) NOT NULL check (COSTPRICE !=0)
);
drop table PRODUCT_MASTER;

insert into PRODUCT_MASTER values('P00001','T-Shirts',5,'Piece',200,50,350,250),
 ('P0345','Shirts',6,'Piece',150,50,500,350),
    ('P06734','Cotton Jeans',5,'Piece',100,20,600,450),
    ('P07865','Jeans',5,'Piece',100,20,700,500),
    ('P07868','Trousers',2,'Piece',150,50,850,550),
 ('P07885','Pull Overs',2.5,'Piece',80,30,700,450),
    ('P07965','Denim Shirts',4,'Piece',100,40,350,250),
    ('P07975','Lycra Tops',5,'Piece',70,30,300,175),
 ('P08865','Skirts',5,'Piece',75,30,450,300);
 
 
 create table SALESMAN_MASTER(
SALEMANNO varchar(6) primary key check(SALEMANNO like 'S%'),
SALESMANNAME varchar(20) not null,
ADDRESS1 varchar (30)not null,
ADDRESS2 VARCHAR (30),
CITY varchar (20),
PINCODE bigint (8),
STATE VARCHAR (20),
SALAMT Double(8,2)not null check (SALAMT !=0),
TGTTOGET double (6,2)not null check (TGTTOGET !=0),
YTDSALES double(6,2)not null check (YTDSALES !=0),
REMARKS varchar (60)
)

insert into SALESMAN_MASTER values('S00001','Aman','A/14','Worli','Mumbai',400002,'Maharashtra',3000,100,50,'Good'),
 ('S00002','Omkar',65,'Nariman','Mumbai',400001,'Maharashtra',3000,200,100,'Good'),
    ('S00003','Raj','P-7','Bandra','Mumbai',400032,'Maharashtra',3000,200,100,'Good'),
 ('S00004','Ashish','A/5','Juhu','Mumbai',400044,'Maharashtra',3500,200,150,'Good');
 
 create table SALES_ORDER(
 ORDERNO VARCHAR(6) PRIMARY KEY,
 CLIENTNO VARCHAR(6),
 ORDERDATE DATE not null,
    DELYADDR VARCHAR(25),
    SALESMANNO VARCHAR(6),
    DELYTYPE CHAR(1) default 'F',
    BILLYN CHAR(1),
    DELYDATE date,
    ORDERSTATUS VARCHAR (10),
    constraint chk_sales_order_1 check(ORDERNO like 'O%'),
 constraint chk_sales_order_2 check(DELYTYPE in('P','F')),
 constraint chk_sales_order_3 check(DELYDATE>ORDERDATE),
 constraint chk_sales_order_4 check(ORDERSTATUS in('In Process','Fulfilled','BackOrder','Cancelled')),
 constraint SALES_ORDER1 foreign key (CLIENTNO) references CLIENT_MASTER(CLINTNO),
 constraint SALES_ORDER2 foreign key (SALESMANNO) references SALESMAN_MASTER(SALEMANNO)
);
insert into SALES_ORDER values('O19001','C00001','2002-07-20',NULL,'S00001','F','N','2004-6-12','In Process'),
('O19002','C00002','2002-06-27',NULL,'S00002','P','N','2004-6-25','Cancelled'),
('O46865','C00003','2002-02-20',NULL,'S00003','F','Y','2004-2-18','Fulfilled'),
('O19003','C00001','2002-04-7',NULL,'S00001','F','Y','2004-4-3','Fulfilled'),
('O46866','C00004','2002-05-22',NULL,'S00002','P','N','2004-5-20','Cancelled'),
('O19008','C00005','2002-07-26',NULL,'S00004','F','N','2004-5-24','In Process');



create table SALES_ORDER_DEATILS(
 ORDERNO VARCHAR(6),
    PRODUCTNO VARCHAR(6) ,
    QTYORDERED BIGINT(8),
    QTYDISP BIGINT(8),
    PRODUCTRATE DOUBLE(10,2),
 constraint SALES_ORDER_DEATILS1 foreign key (ORDERNO) references SALES_ORDER(ORDERNO),
 constraint SALES_ORDER_DEATILS2 foreign key (PRODUCTNO) references PRODUCT_MASTER(PRODUCTNO)
);

insert into SALES_ORDER_DEATILS values
 ('O19001','P00001',4,4,525),
 ('O19001','P07965',2,1,8400),
 ('O19001','P07885',2,1,5250),
 ('O19002','P00001',10,0,525),
 ('O46865','P07868',3,3,3150),
 ('O46865','P07885',3,1,5250),
 ('O46865','P00001',10,10,525),
 ('O46865','P0345',4,4,1050),
 ('O19003','P0345',2,2,1050),
 ('O19003','P06734',1,1,12000),
 ('O46866','P07965',1,0,8400),
 ('O46866','P07975',1,0,1050),
 ('O19008','P00001',10,5,525),
 ('O19008','P07975',5,3,1050);


select * from SALES_ORDER 
inner join SALES_ORDER_DEATILS on SALES_ORDER.ORDERNO = SALES_ORDER_DEATILS.ORDERNO
inner join PRODUCT_MASTER on SALES_ORDER_DEATILS.PRODUCTNO = PRODUCT_MASTER.PRODUCTNO
where SALES_ORDER.DELYDATE='2004-02-18'

select * from client_master
select * from sales_order
select * from sales_order_deatils
select * from PRODUCT_MASTER
select * from SALESMAN_MASTER

select PRODUCT_MASTER.PRODUCTNO,SALES_ORDER_DEATILS.ORDERNO,CLIENT_MASTER.CLINTNO,CLIENT_MASTER.SNAME,PRODUCT_MASTER.SDESCRIPTION 
from PRODUCT_MASTER 
inner join SALES_ORDER_DEATILS on PRODUCT_MASTER.PRODUCTNO = SALES_ORDER_DEATILS.PRODUCTNO
inner join SALES_ORDER ON SALES_ORDER_DEATILS.ORDERNO = SALES_ORDER.ORDERNO
inner join CLIENT_MASTER on SALES_ORDER.CLIENTNO = CLIENT_MASTER.CLINTNO
where PRODUCT_MASTER.PRODUCTNO='P07868'

SELECT distinct PRODUCT_MASTER.PRODUCTNO,PRODUCT_MASTER.SDESCRIPTION
from SALES_ORDER_DEATILS,PRODUCT_MASTER
where PRODUCT_MASTER.PRODUCTNO = SALES_ORDER_DEATILS.PRODUCTNO

SELECT distinct PRODUCT_MASTER.ProductNo,PRODUCT_MASTER.SDescription
from SALES_ORDER_DEATILS,Product_master
where PRODUCT_MASTER.ProductNo = SALES_ORDER_DEATILS.ProductNo
--  3
-- select * from CLIENT_MASTER where City = 'Bangalore' or City = 'Mangalore';

--  4
-- select * from CLIENT_MASTER where Baldue > 10000;

--  5
-- select *from Sales_order where month (orderDate)=06 Group BY MONTH(orderDate);

--  6
-- select * from SALES_ORDER where ClientNo='C00001' or ClientNo='C00002';

--  7 
 -- select * from PRODUCT_MASTER where SellPrice > 500 and SellPrice <=750;
 
 --  8
 -- select ProductNo,Description,SellPrice*.15+SellPrice as new_price from PRODUCT_MASTER where SellPrice>500;
 
 --  9
-- select Sname,City,State from CLIENT_MASTER where State = 'Maharashtra';
 
 --  10
 -- select count(OrderNo) as "Total OrderNo" from SALES_ORDER;
 
 --  11
-- select sum(SellPrice/9) as "avg_price" from PRODUCT_MASTER;

--  12
-- select max(SellPrice) as "max_Price" from PRODUCT_MASTER;
-- select min(SellPrice) as "min_Price" from PRODUCT_MASTER;

--  13
-- select count(SellPrice) as 'less than 500' from PRODUCT_MASTER where SellPrice <= 500;
-- select * from PRODUCT_MASTER where SellPrice <= 500;

--  14
-- select * from PRODUCT_MASTER where QtyOnHnd < ReOrderLvl ;

