create database comkey
use comkey
create table comkeyp(
	r varchar(10),
    g varchar(10),
    b varchar(10),
	primary key (r,g,b)
)
insert into comkeyp values('y','y','y');
insert into comkeyp values('y','n','y');
insert into comkeyp values('y','y','y');