
create table nauczyciele(
    nauczyciel_id smallint primary key not null auto_increment,
    nazwisko varchar(50)  not null,
    imie varchar(30)  not null,
    dobry int, 
    nie_dobry int
); 

create table dni(
    dzien_id smallint primary key not null auto_increment
    dzien date not null,
);

create table glosy(
    dzien_id smallint not null,
    nauczyciel_id int not null,
    uzytkownik_id int not null,
    glos boolean,
    constraint c_glos_dzien foreign key (dzien_id) references dni(dzien_id),
    constraint c_glos_uzytkownik foreign key (urzytkownik_id) references uzytkownicy(urzytkownik_id),
    constraint c_glos_nauczyciel foreign key (nauczyciel_id) references nauczyciele(nauczyciel_id)
);

create table uzytkownicy(
    uzytkownik_id smallint primary key not null auto_increment,
    nazwa varchar(40) not null,
    haslo password not null,  
);
