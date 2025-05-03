-- CreateTable
create table users
(
    "id"         integer auto_increment primary key,
    "full_name"  varchar(100) not null,
    "role"       varchar(50) not null,
    "efficiency" integer     null
);
