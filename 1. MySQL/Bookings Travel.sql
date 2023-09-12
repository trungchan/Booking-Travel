/*============================== CREATE DATABASE =======================================*/
/*======================================================================================*/
DROP DATABASE IF EXISTS BookingTravels;
CREATE DATABASE BookingTravels;
USE BookingTravels;

DROP TABLE IF EXISTS Departures;
CREATE TABLE Departures(
    departure_id     		SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    departure_name	   		VARCHAR(50) NOT NULL UNIQUE KEY
);

DROP TABLE IF EXISTS Destinations;
CREATE TABLE Destinations(
    destination_id     		SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    destination_name	    VARCHAR(50) NOT NULL UNIQUE KEY,
    `status`				ENUM("Domestic","Foreign")
);

DROP TABLE IF EXISTS `User`;
CREATE TABLE `User`(
    user_id     			SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_email              VARCHAR(50) NOT NULL UNIQUE KEY,
    user_username           VARCHAR(50) NOT NULL UNIQUE KEY,
	user_phone              VARCHAR(50) UNIQUE KEY,
    create_date             DATETIME DEFAULT NOW(),
    `password`              VARCHAR(800),
    `role`           		enum ('ADMIN','USER')
);


DROP TABLE IF EXISTS Tours;
CREATE TABLE Tours(
    tour_id     			SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    departure_id			SMALLINT UNSIGNED NOT NULL,
    destination_id			SMALLINT UNSIGNED NOT NULL,
    tour_name		 		VARCHAR(400) NOT NULL,
    image_url				VARCHAR(500) NOT NULL,
    ratting					DOUBLE,
    disccount				DOUBLE,
    arrival					DATETIME DEFAULT NOW(),
    leaving					DATETIME NOT NULL,
    `description`			VARCHAR(500) NOT NULL,
    price 					DOUBLE NOT NULL,
    `status`				ENUM("Domestic","Foreign"),
    price_sale				DOUBLE NOT NULL,
    FOREIGN KEY (departure_id) REFERENCES Departures(departure_id),
    FOREIGN KEY (destination_id) REFERENCES Destinations(destination_id)

);


DROP TABLE IF EXISTS Bookings;
CREATE TABLE Bookings(
	booking_id				SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id 				SMALLINT UNSIGNED NOT NULL,
    tour_id					SMALLINT UNSIGNED NOT NULL,
    guest 					SMALLINT DEFAULT 1,
    `status`				TINYINT UNSIGNED DEFAULT 0,  -- 0 Unpaid ,1:  Paid , 2 Cancel
    booking_date 			DATETIME DEFAULT NOW(),
    total_price				DOUBLE ,
    FOREIGN KEY (user_id) REFERENCES `User`(user_id),
    FOREIGN KEY (tour_id) REFERENCES Tours(tour_id)
);

DROP TABLE IF EXISTS token;
create table token(
id int unsigned auto_increment primary key,
token varchar(800) not null,
expiration date,
user_agent varchar(500)
);

/*============================== INSERT DATABASE =======================================*/
/*======================================================================================*/
INSERT INTO 	Departures 	   (departure_name			  ) 
	VALUES 					   (N'Hà Nội'	      		  ),
							   (N'Hải Phòng'	      	  ),
							   (N'Nghệ An'		          ),
							   (N'Huế'	        		  ),
							   (N'Đà Nẵng'		    	  ),
							   (N'Nha Trang'        	  ),
							   (N'Thành Phố Hồ Chí Minh'  );



INSERT INTO 	Destinations   (destination_name ,			`status`	  ) 
	VALUES 					   (N'Hà Nội'	     ,  		"Domestic"	  ),
							   (N'Hà Giang'		 , 			"Domestic"    ),
							   (N'Ninh Bình'     ,			"Domestic"    ),
							   (N'Sapa'		     , 			"Domestic"    ),
							   (N'Hải Phòng'	 ,			"Domestic"    ),
							   (N'Quảng Ninh'	 , 			"Domestic" 	  ),
							   (N'Nam Định'      ,			"Domestic"    ),
							   (N'Nghệ An'		 , 			"Domestic"    ),
							   (N'Huế'	         , 			"Domestic" 	  ),
							   (N'Đà Nẵng'		 , 			"Domestic"    ),
							   (N'Nha Trang'     , 			"Domestic"    ),
							   (N'Phú Quốc'      , 			"Domestic"    ),
							   (N'Thành Phố Hồ Chí Minh',	"Domestic"    ),
							   (N'Đà Lạt'		 , 			"Domestic"    ),
							   (N'Bà Rịa Vũng Tàu' , 		"Domestic"    ),
							   (N'Nhật Bản'	     ,			"Foreign"     ),
							   (N'Hàn Quốc'		 , 			"Foreign" 	  ),
							   (N'Singapore'     , 			"Foreign"	  ),
							   (N'Thái Lan'		 , 			"Foreign"     ),
							   (N'Hồng Kông'	 , 			"Foreign"	  ),
							   (N'Trung Quốc'	 ,			"Foreign"	  ),
							   (N'Đài Loan'      ,			"Foreign"  	  ),
							   (N'Pháp'		     , 			"Foreign"     ),
							   (N'Úc'	         , 			"Foreign"	  ),
							   (N'Thụy Sĩ'		 , 			"Foreign"     );
                               
INSERT INTO `User` 			(user_email, user_username, user_phone, `password`, `role`) 
VALUES 					    ('account11@gmail.com','username1' , '098974573'  , '123456' , 'ADMIN' ),
							('account12@gmail.com','username2' , '0989745731' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN' ),
							('account13@gmail.com','username3' , '0989745732' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN' ),
							('account14@gmail.com','username4' , '0989745733' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN'),
							('account15@gmail.com','username5' , '0989745734' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN'),
							('account16@gmail.com','username6' , '0989745735' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'ADMIN'),
							('account17@gmail.com','username7' , '0989745736' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' ,  'USER'),
							('account18@gmail.com','username8' , '0989745737' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' , 'USER'),
							('account19@gmail.com','username9' , '0989745738' , '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' , 'USER'),
							('account111@gmail.com','username10' ,'0989745739', '$2a$10$W2neF9.6Agi6kAKVq8q3fec5dHW8KUA.b0VSIGdIZyUravfLpyIFi' , 'USER');                              
                           
                           
INSERT INTO Tours		    (departure_id, destination_id, tour_name, image_url, ratting, disccount, arrival, leaving, `description`, price, `status`, price_sale ) 
VALUES 					   (7, 6, 'Du lịch Hạ Long' , 'https://media.travel.com.vn/destination/tf_220715111546_272791.jpg', '4.6', '10', '2023-06-12', '2023-06-15' , ' Hà Nội - Hạ Long - Yên Tử - Ninh Bình - Bái Đính - Tràng An (Khách sạn 4 sao)', 4999999, "Domestic", 4499999 ),
						   (1, 12, 'Du lịch Phú Quốc' , 'https://media.travel.com.vn/destination/tf_220527033657_887274.jpg', '4.8', '10', '2023-06-15', '2023-06-18' , ' Combo sunset beach resort and spa 4 sao', 6999999, "Domestic", 6299999 ),
                           (7, 1, 'Du lịch Hà Nội' 	  , 'https://media.travel.com.vn/destination/tf_230308105654_250775.jpg', '4.1', '5', '2023-06-15', '2023-06-20' , ' Tuyệt tình cốc - Bái Đính - Tràng An - Hạ Long', 2999999, "Domestic", 2849999 ),
                           (1, 14, 'Du lịch Đà Lạt' , 'https://media.travel.com.vn/destination/tf_220726033156_024216.jpg', '5.0', '20', '2023-07-02', '2023-07-16' , ' Thác Đambri  - Nông trại cún Puppy Farm - Đồi Chè Cầu Đất - Làng Hoa Vạn Thành', 3999999, "Domestic", 3199999 ),
                           (1, 11, 'Du lịch Nha Trang' , 'https://media.travel.com.vn/destination/tf_230530105636_660842_Bai%20Bien%20Nha%20Trang%20(1).jpg', '4.9', '30', '2023-06-12', '2023-07-20' , ' Vinwonders - Tháp Bà Ponagar - I Resort', 9999999, "Domestic", 6999999 ),
                           (1, 10, 'Du lịch Đà Nẵng' , 'https://media.travel.com.vn/destination/tf__230509025106_559181.jpg', '4.8', '40', '2023-06-12', '2023-07-19' , ' Bà Nà - Hội An - Rừng Dừa Bảy Mẫu', 8999999, "Domestic",5399999 ),
                           (1, 19, 'Du lịch Nhật Bản' , 'https://media.travel.com.vn/destination/tf_230417030820_129622.jpg', '5.0', '20', '2023-08-15', '2023-08-23' , ' Kobe - Osaka - Kyoto - Nagoya - Phú Sĩ - Tokyo', 39999999, "Foreign",31999999 ),
                           (1, 16, 'Du lịch Thái Lan' , 'https://media.travel.com.vn/destination/tf_220909045541_350628.jpg', '4.6', '10', '2023-09-12', '2023-09-18' , ' Xem show paris by night show 136-40 năm', 39999999, "Foreign", 35999999 ),
                           (1, 21, 'Du lịch Trung Quốc' , 'https://media.travel.com.vn/destination/tf_230419102305_907583.jpg', '4.6', '10', '2023-07-05', '2023-07-10' , ' Thượng Hải - Hàng Châu - Tô Châu - Bắc Kinh - Thẩm Khuyến', 29999999, "Foreign", 26999999 ),
                           (1, 17, 'Du lịch Hàn Quốc' , 'https://media.travel.com.vn/destination/tf_230127042039_778039.jpg', '5.0', '10', '2023-08-11', '2023-08-15' , ' Seoul - Jeju - Nami - Everland - Hero Show', 32999999, "Foreign", 29699999 ),
                           (1, 22, 'Du lịch Đài Loan' , 'https://media.travel.com.vn/destination/tf_230717120857_147907_TQ-CMINH%20(11).jpg', '4.6', '10', '2023-06-07', '2023-06-12' , ' Cao Hùng - Đài Trung - Dương Minh Sơn - Đài Bắc(KS 4 sao)', 13999999, "Foreign", 12599999 ),
                           (1, 24, 'Du lịch Úc' , 'https://media.travel.com.vn/destination/tf_230131104446_981509.jpg', '4.9', '10', '2023-09-12', '2023-09-18' , ' Sydney - Blue Mountains - Canberra - Lễ Hội Hoa Floriade - Melbourne ', 53999999, "Foreign", 48599999 );
                           
INSERT INTO Bookings 		(user_id, tour_id, guest, `status`, total_price) 
VALUES 					   (1, 2, 2 , 0, 12600000 ),
							(1, 11, 1, 2, 25200000 ),
							(2, 6, 5 , 1, 27000000 ),
							(3, 1, 1 , 0, 4500000 ),
							(4, 12, 2 , 0, 97200000 ),
							(2, 10, 2 , 2, 59400000 ),
							(3, 3, 2 , 0, 5700000 ),
							(5, 6, 2 , 0, 10800000 ),
							(6, 8, 2 , 0, 7200000 ),
							(7, 9, 2 , 0, 54000000 );
						   
                           



