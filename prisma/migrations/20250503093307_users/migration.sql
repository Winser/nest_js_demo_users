-- CreateTable
create table users
(
    "id"         integer auto_increment primary key,
    "full_name"  varchar(50) not null,
    "role"       varchar(20) not null,
    "efficiency" integer     null
);
