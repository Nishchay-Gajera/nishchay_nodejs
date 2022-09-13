create database fk_practice
use fk_practice
create table FK_STUDENT(
	GRNO DOUBLE PRIMARY KEY,
    SNAME VARCHAR(25),
    SPHONE DOUBLE ,
    SEMAIL VARCHAR(25),
    SADD VARCHAR(25),
    SADD2 VARCHAR(25)
)

insert into FK_STUDENT values(1,'Nishchay Gajera',9574467166,'nishchaygajera7@gmail.com','Vrajchowk','Sarthana Jakatnaka Surat'),
(2,'Nimit Gajera',701653145,'nimitgajera3@gmail.com','Vrajchowk','Sarthana Jakatnaka Surat'),
(3,'Vivek Sojitra',9972346796,'viveksojitra8@outlook.com','Mota varachha','Surat'),
(4,'Kashil Dobariya',9675124166,'kashil@gmail.com','Varachha','Surat'),
(5,'Yug Roy',9796453217,'yugroy220@gmail.com','Minibazzar','Surat');

create table FK_STUDRESULT(
	GRNO DOUBLE PRIMARY KEY,
    SMATHS DOUBLE,
    SENGLISH DOUBLE,
    SSCIENCE DOUBLE,
    SHINDI DOUBLE,
    SRESULT VARCHAR(10),
    constraint FK_STUDRESULTPRAC foreign key(GRNO)
    references FK_STUDENT(GRNO)
)
insert into FK_STUDRESULT values(1,96,93,88,64,'Pass'),
(2,90,69,55.5,55,'Pass'),
(3,12,15,52,10,'Fail'),
(4,46,83,18,94,'Fail'),
(5,69,96,45,45,'Pass');
