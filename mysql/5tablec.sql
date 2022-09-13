-- 1

create database onlines;

use onlines;

create table client_masters(
    ClientNo varchar(6),
    Sname varchar(20),
    Address1 varchar(30),
    Address2 varchar(30),
    City varchar(15),
    Pincode int(8),
    State varchar(15),
    Baldue int(10.2),
    check(ClientNo like'C%'),
    primary key(ClientNo)
);


insert into client_masters values 
('C00001','Ivan Bayross','A/14','Worli','Mumbai',400054,'Maharashtra',15000),
('C00002','Mamta Muzumdar','65','Nariman','Madras',780001,'Tamil Nadu',0),
('C00003','Chhaya Banker','A/301','Juhu','Mumbai',400057,'Maharashtra',5000),
('C00004','Ashwini Joshi','6','Nariman','Bangalore',560001,'Karnataka',0),
('C00005','Hansel Colaco','B-30','Bandra','Mumbai',400060,'Maharashtra',2000),
('C00006','Deepak Sharma','69','Juhu','Mangalore',560050,'Karnataka',0);


select * from client_masters;



-- 2



use onlines;

create table product_masters(
    ProductNo varchar(6),
    Description varchar(15)not null,
    ProfitPerCent int(4.2)not null,
    UnitMeaure varchar(10)not null,
    QtyOnHnd int(8)not null,
    ReOrderLvl int(8)not null,
    SellPrice int(8.2)not null,
    CostPrice int(8.2)not null,
    check(ProductNo like'P%'),
    check(SellPrice!=0),
    check(CostPrice!=0),
    primary key(ProductNo)
);


insert into product_masters values
('P00001','T-Shirts',5,'Piece',200,50,350,250),
('P0345','Shirts',6,'Piece',150,50,500,350),
('P06734','Cotton_Jeans',5,'Piece',100,20,600,450),
('P07865','Jeans',5,'Piece',100,20,750,500),
('P07868','Trouser',2,'Piece',150,50,850,550),
('P07885','Pull_Overs',2.5,'Piece',80,30,700,450),
('P07965','Denim_Shirts',4,'Piece',100,40,350,250),
('P07975','Lycra_Tops',5,'Piece',70,30,300,175),
('P08865','Skirts',5,'Piece',75,30,450,300);


select * from product_masters;



-- 3



use onlines;

create table salesman_masters(
    SalesmanNo varchar(6),
    SalesmanName varchar(20)not null,
    Address1 varchar(30)not null,
    Address2 varchar(30),
    City varchar(20),
    Pincode int(8),
    State varchar(20),
    Salamt int(8.2)not null,
    TgttoGet int(6.2)not null,
    Ytdsales int(6.2)not null,
    Remarks varchar(60),
    check(SalesmanNo like'S%'),
    check(Salamt!=0),
    check(TgttoGet!=0),																			
    primary key(SalesmanNo)
);


insert into salesman_masters values
('S00001','Aman','A/14','Worli','Mumbai',400002,'Maharashtra',3000,100,50,'Good'),
('S00002','Omkar','65','Nariman','Mumbai',400001,'Maharashtra',3000,200,100,'Good'),
('S00003','Raj','P-7','Bandra','Mumbai',400032,'Maharashtra',3000,200,100,'Good'),
('S00004','Ashish','A/5','Juhu','Mumbai',400044,'Maharashtra',3500,200,150,'Good');


select * from salesman_masters;



-- 4



use onlines;

create table sales_orders(
    OrderNo varchar(6),
    ClientNo varchar(6),
    OrderDate date not null,
    DelyAdr varchar(25),
    SalesmanNo varchar(6),
    DelyType char(1),
    BillYn char(1),
    DelyDate date,
    OrderStatus varchar(10),
    check(OrderNo like'O%'),
    check(DelyType in ('P','F')),
    check(OrderDate<DelyDate),
    check(OrderStatus in('In Process','Fulfilled','BackOrder','Cancelled')),
    primary key(OrderNo),
	foreign key (ClientNo) references client_masters(ClientNo),
    foreign key (SalesmanNo) references salesman_masters(SalesmanNo)
);


Insert into sales_orders values 
('O19001','C00001','02-07-20','','S00001','F','N','04-06-12','In Process'),
('O19002','C00002','02-06-27','','S00002','P','N','04-06-25','Cancelled'),
('O46865','C00003','02-02-20','','S00003','F','Y','04-02-18','Fulfilled'),
('O19003','C00001','02-04-07','','S00001','F','Y','04-04-03','Fulfilled'),
('O46866','C00004','02-05-22','','S00002','P','N','04-05-20','Cancelled'),
('O19008','C00005','02-07-26','','S00004','F','N','04-05-24','In Process');



select * from sales_orders;





-- 5



use onlines;


create table sales_order_details(
    OrderNo varchar(6),
    ProductNo varchar(6),
    Qtyordered int(8),
    Qtydisp int(8),
    Productrate int(10.2),
    foreign key(OrderNo) references sales_orders(OrderNo),
    foreign key(ProductNo) references product_masters(ProductNo)
);



insert into sales_order_details values
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


select * from sales_order_details;
