create table if not exists users (
    id int not null AUTO_INCREMENT,
    user_name varchar(64) not null,
    email   varchar(64) not null,
    password varchar(255) not null,
    primary key (id)
);

create table if not exists workout(
    id int not null AUTO_INCREMENT,
    workout_name varchar(64) not null,
    workout_id BINARY(16) not null, /*uuid*/
    user_id int not null,
    primary key (id, workout_id)
);

create table if not exists completed_workout(
    workout_id int not null,
    user_id int not null,
    id  BINARY(16) not null, /*uuid*/
    date_completed date not null,
    primary key (id),
    foreign key (user_id)
        references users(id)
        on delete cascade
);

create table if not exists exercises(
    id int not null AUTO_INCREMENT,
    name varchar(64) not null,
    exercise_id int not null,
    set_num int not null,
    weight int not null,
    completed_workout_id BINARY(16) not null, /*uuid*/
    primary key (id),
    foreign key (completed_workout_id)
        references completed_workout(id)
        on delete cascade
);


create table if not exists exercise_list (
    id int not null auto_increment,
    exercise_name varchar(255) not null,
    type varchar(20) not null,
    primary key (id)
);


create table if not exists workout_exercise_list_rel(
    /*id int not null AUTO_INCREMENT,*/
    workout_id BINARY(16) not null,
    exercise_id int not null,
    primary key (workout_id)
    /*Need to figure out how to get this do work
	so that the rows will delete if a workout is deleted*/
    /*foreign key (workout_id)
        references workout(workout_id)
        on delete cascade*/
);

