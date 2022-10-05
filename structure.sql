

create table nauczyciele(
    nauczyciel_id int primary key not null auto_increment,
    nazwisko varchar(50)  not null,
    imie varchar(30)  not null,
    dobry int, 
    nie_dobry int
); 

create table dni(
    dzien date primary key not null,
    nauczyciel int,
    dobry int, 
    nie_dobry int,
    constraint c_nauczuciel foreign key (nauczyciel) references nauczyciele(nauczyciel_id)
);

create table glosy(
    dzien date primary key not null,
    uzytkownik_id int primary key not null auto_increment,
    constraint c_glos_dzien foreign key (dzien) references dni(dzien),
    constraint c_glos_uzytkownik foreign key (urzytkownik_id) references uzytkownicy(urzytkownik_id),
);

create table uzytkownicy(
    uzytkownik_id int primary key not null auto_increment,
    nazwa varchar(40) not null,
    haslo password not null,  
);

