create database employeedb;
USE EMPLOYEEDB
CREATE TABLE `employee` (
  `EmpID` int(50) NOT NULL auto_increment,
  `Name` varchar(100) DEFAULT NULL,
  `EmpCode` varchar(100) NOT NULL,
  `Salary` int(60) DEFAULT NULL,
  PRIMARY KEY (`EmpID`)
);
insert into `employee` values(1,'Nishchay Gajera','EMP1',150000),(2,'Nimit Gajera','EMP2',11111),(3,'Darshan Patel','EMP3',121212),(4,'Jasmin Patel','EMP4',252525);
insert into `employee` values(4,'Jasmin Patel','EMP4',252525);
use employeedb;
drop table employee
select * from employee