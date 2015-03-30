create table if not exists users (
    id int not null AUTO_INCREMENT,
    user_name varchar(64) not null,
    email   varchar(64) not null,
    password varchar(255) not null,
    primary key (id)
);
create table if not exists workout (
    id int not null auto_increment,
    user_id int not null,
    day int not null,
    workout_data date not null,
    primary key (id),
    foreign key(user_id)
        references users(id)
        on delete cascade
);

create table if not exists exercise (
    id int not null auto_increment,
    exercise_name varchar(255) not null,
    workout_id int not null,
    num_sets int not null,
    weight int not null default 0,
    exercise_id int not null,
    primary key (id),
    foreign key(workout_id) 
        references workout(id)
        on delete cascade
);

create table if not exists exercise_list (
    id int not null auto_increment,
    exercise_name varchar(255) not null,
    type varchar(20) not null,
    primary key (id)
);



