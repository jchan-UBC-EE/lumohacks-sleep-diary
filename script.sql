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
 '11:00', '11:32', '60', '3', '5', '06:30', '07:00', 'i was sick', DATE '1961-01-01');

 insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '01:23', '11:23', '6', '30', '5', '06:30', '07:32', 'i was sick', DATE '2017-09-02');

insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11:23', '11:32', '60', '3', '5', '06:30', '07:23', 'i was sick', DATE '2017-09-03');

insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11:32', '11:50', '60', '3', '5', '06:30', '07:21', 'i was sick', DATE '2017-09-04');

  insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11:21', '11:59', '60', '3', '5', '06:30', '07:12', 'i was sick', DATE '2017-09-05');

  insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '01:11', '12:22', '30', '32', '53', '06:30', '07:21', 'i was sick', DATE '2017-09-06');

  insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '11:21', '11:50', '60', '3', '5', '06:30', '07:00', 'i was sick', DATE '2017-09-07');

  insert into SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp, HowLongDidYouSleep,
 WakeTime, TimeToGetOutOfBed, Comments, CreateDate)  values ('victorwu', '3pm (30 mins)', 'melatonin', 
 '12:23', '11:23', '60', '3', '5', '06:30', '07:00', 'i was sick', DATE '2017-09-08');
