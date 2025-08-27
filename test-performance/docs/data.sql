CREATE DATABASE if not exists agrodata_camilo_rodriguez_malecon; -- cambiar nombre de la base datos no olvidarlos 

-- use the database 
use agrodata_camilo_rodriguez_malecon;

create table farms (
farm_id int primary key, 
farm_name varchar(120), 
region varchar(30)
);


create table crops (

	id_crop int primary key,
	crop_type varchar(30),
	cost varchar(30),
	crop_variety varchar(30),
    fertilizer varchar(30),
    organic varchar(20),
    soil_type varchar(20),
    farm_id int not null, 
    foreign key (farm_id) references farms (farm_id),
    sensor_id int not null,
    foreign key (sensor_id) references reader_sensors (sensor_id),
);


create table production_reports (

	report_id int primary key,
	responsable_technician varchar(30),
    production_tons int,
    timetable datetime, 
	id_technical int not null,
	foreign key (id_technical) references technicians (id_technical),
    id_crop int not null, 
    foreign key (id_crop) references crops (id_crop)

);									



create table technicians (
	id_technical int primary key,
    full_name varchar(100),
	national_id varchar(20) not null,
	phone varchar(20),
	address varchar(20)
	
);


create table reader_sensors (
sensor_id int,
type_sensor varchar(50),
state_sensor varchar(50),
timetable datetime,
irrigation_systems varchar(30),
maintenance_date date,
id_technical int not null,
foreign key (id_technical) references technicians (id_technical)


);