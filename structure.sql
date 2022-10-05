

create table nauczyciele(
    id int primary key not null,
    nazwisko varchar(50)  not null,
    imie varchar(30)  not null,
    dobry int, 
    nie_dobry int
); 

create table dni(
    dzien date primary key not null,
    nauczyciel int ,
    dobry int, 
    nie_dobry int,
    constraint c_nauczuciel foreign key (nauczyciel) references nauczyciele(id)
);


create table licznik(
    dobry int,
    nie_dobry int
);

