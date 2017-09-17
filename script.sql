DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Sleeplog;

CREATE TABLE Users
	(UserName VARCHAR(250) NOT NULL,
	Password VARCHAR(250) NOT NULL,
	Name VARCHAR(250) NOT NULL,
	Phone VARCHAR(20) NULL,
	Address VARCHAR(250) NULL,
	Email VARCHAR(50) NULL,
	CreateDate DATE NOT NULL,
	PRIMARY KEY (UserName));

CREATE TABLE Sleeplog
	(LogId int NOT NULL AUTO_INCREMENT,
	UserId VARCHAR(250) NOT NULL,
	NapsDuringDay VARCHAR(250) NULL,
	Medication VARCHAR(250) NULL,
	TimeInBed VARCHAR(20) NULL,
	TimeTryToSleep VARCHAR(20) NULL,
	HowLongToSleep VARCHAR(20) NULL,
	AmountWakenUp VARCHAR(20) NULL,
	HowLongDidYouSleep VARCHAR(20) NULL,
	WakeTime VARCHAR(20) NULL,
	TimeToGetOutOfBed VARCHAR(20) NULL,
	Comments VARCHAR(250) NULL,
	CreateDate DATE NOT NULL,
	PRIMARY KEY (LogId),
	FOREIGN KEY (UserId) REFERENCES Users(UserName) ON UPDATE CASCADE
);

insert into Users values ('victorwu', 'admin', 'Victor Wu', '6042312412', '6223 Bateman St.', 'wictor-wu@gmail.com', DATE '1961-01-01');

insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11pm', '11pm', '60min', '3', '5 hr', '6:30am', '7am', 'i was sick', DATE '1961-01-01');
