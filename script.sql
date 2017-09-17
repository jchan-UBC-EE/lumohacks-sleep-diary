DROP TABLE IF EXISTS SleepLog;
DROP TABLE IF EXISTS Users;

CREATE TABLE Users
	(UserName VARCHAR(250) NOT NULL,
	Password VARCHAR(250) NOT NULL,
	Name VARCHAR(250) NOT NULL,
	Phone VARCHAR(20) NULL,
	Address VARCHAR(250) NULL,
	Email VARCHAR(50) NULL,
	CreateDate DATE NOT NULL,
	PRIMARY KEY (UserName));

CREATE TABLE SleepLog
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
 '11:00PM', '11:32PM', '60', '3', '5', '6:30AM', '7:00AM', 'i was sick', DATE '1961-01-01');

 insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '1:23PM', '11:23PM', '6', '30', '5', '6:30AM', '7:32AM', 'i was sick', DATE '2017-09-02');

insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11:23PM', '11:32PM', '60', '3', '5', '6:30AM', '7:23AM', 'i was sick', DATE '2017-09-03');

insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11:32PM', '11:50PM', '60', '3', '5', '6:30AM', '7:21AM', 'i was sick', DATE '2017-09-04');

  insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11:21PM', '11:59PM', '60', '3', '5', '6:30AM', '7:12AM', 'i was sick', DATE '2017-09-05');

  insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '1:11PM', '12:22PM', '30', '32', '53', '6:30AM', '7:21AM', 'i was sick', DATE '2017-09-06');

  insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11:21PM', '11:50PM', '60', '3', '5', '6:30AM', '7:00AM', 'i was sick', DATE '2017-09-07');

  insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '12:23PM', '11:23PM', '60', '3', '5', '6:30AM', '7:00AM', 'i was sick', DATE '2017-09-08');
