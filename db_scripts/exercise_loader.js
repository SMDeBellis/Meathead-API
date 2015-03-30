/*****************************************************
	Exercise Table Loading Script
*****************************************************/
var db = require('../db');
var fs = require('fs');

//drop the current table and rebuild
db.query("drop table if exists exercise_list");
db.query("create table if not exists exercise_list(id int not null auto_increment, exercise_name varchar(256) not null, type varchar(32), primary key(id))");

/**
  Function takes a muscle group string and an open file object
  loads the database
**/
function load_to_database(muscleGroup, data){
	if(!data) return;
	var array = data.toString().split('\n');
	var index = array.indexOf('');
	if(index != -1){
		array.splice(index, 1);
	}
	for(i in array){
		db.query("insert into exercise_list(exercise_name, type) values(?, ?)", [array[i], muscleGroup]);
		console.log(array[i]);
	}
}

var muscle_groups = ['abs', 'back', 'biceps', 'chest', 'legs', 'shoulders', 'triceps'];
var file_path = '../exercise_lists/';

for(i in muscle_groups){
	var data = fs.readFileSync(file_path + muscle_groups[i]);
	load_to_database(muscle_groups[i], data);
}

db.query("delete from exercise_list where exercise_name = ''");

process.exit(code=0);
