
create table nauczyciele(
    nauczyciel_id tinyint primary key not null auto_increment,
    nazwisko varchar(50)  not null,
    imie varchar(30)  not null,
    dobry int, 
    nie_dobry int
); 

create table uzytkownicy(
    uzytkownik_id smallint primary key not null auto_increment,
    nazwa varchar(40) not null,
    haslo varchar(40) not null
);

create table glosy(
    glos_id int not null,
    data date not null,
    nauczyciel_id tinyint not null,
    uzytkownik_id smallint not null,
    glos boolean,
    constraint fk_glos_uzytkownik foreign key (uzytkownik_id) references uzytkownicy(uzytkownik_id),
    constraint fk_glos_nauczyciel foreign key (nauczyciel_id) references nauczyciele(nauczyciel_id)
);


