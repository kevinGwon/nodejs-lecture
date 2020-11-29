https://downloads.mysql.com/archives/community

#실행방법

1. 시스템 환경 설정
2. Mysql server 시작

#접속

1. 터미널
2. cd /usr/local/mysql/bin
3. ./mysql -u root -p

#Table 생성

create database {table name};

#Move table

use {table name}

#Query

create table products (
id int not NULL auto_increment primary key,  
 name varchar(50) not NULL,  
 modelnumber varchar(15) not NULL,
serise varchar(30) not NULL
);

// 단일
insert into products (name, modelnumber, serise) value ('Kevin Gwon', '01043337364', 'Programmer');

// 복합
insert into products (name, modelnumber, serise) values ('Kevin Gwon', '01043337364', 'Programmer'), ('Kevin Gwon 2', '01012341234', 'programmer2');

select \* from {name}

select \* from {name} where {field}=target

update products set {field}='seunggonGwon' where {field}=target
