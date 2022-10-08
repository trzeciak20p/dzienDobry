
create table nauczyciele(
    nauczyciel_id int primary key not null auto_increment,
    nazwisko varchar(50)  not null,
    imie varchar(30)  not null,
    dobry int, 
    nie_dobry int
); 

create table glosy(
    dzien date not null,
    nauczyciel_id int not null,
    uzytkownik_id int not null,
    glos boolean,
    constraint c_glos_dzien foreign key (dzien) references dni(dzien),
    constraint c_glos_uzytkownik foreign key (urzytkownik_id) references uzytkownicy(urzytkownik_id),
    constraint c_glos_nauczyciel foreign key (nauczyciel_id) references nauczyciele(nauczyciel_id)
);

create table uzytkownicy(
    uzytkownik_id int primary key not null auto_increment,
    nazwa varchar(40) not null,
    haslo password not null,  
);

