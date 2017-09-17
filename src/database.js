import express from 'express';
import mysql from 'mysql';

const c = mysql.createConnection({
    host: 'lumosleepdiary.cue09nzmpyxl.us-west-2.rds.amazonaws.com',
    port: '3306',
    user: 'plin',
    password: 'ubclfs123',
    database: 'ubcsleeplog'
});

const app = express();

let myToday = '';
let profile = '';

c.connect(function (err) {
    if (!err) {
        console.log("Database is connected ... ");
    } else {
        console.log("Error connecting database ... ");
    }
});

const loginQuery = (login, callback) => {
    let sql = `SELECT * FROM Users WHERE UserName='${login.UserName}' AND Password='${login.Password}';`;
    let validation = '';
    c.query(sql, function (error, results, fields) {
        if (error) {
            callback(error, { validation: false });
        }
        if (results.length === 1) {
            profile = login.UserName;
            callback(null, { validation: true });
        } else {
            callback(error, { validation: false });
        }
    });
}

const dateGenerator = () => {
    const today = new Date();
    const getDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    myToday = getDate;
}

const signupQuery = (form, callback) => {
    dateGenerator();
    let confirm = '';
    let sql = `INSERT INTO Users Values ('${form.UserName}', '${form.Password}', '${form.Name}', '${form.Phone}', '${form.Address}', '${form.Email}', DATE '${myToday}');`;
    c.query(sql, function (error, results, fields) {
        if (error) {
            callback(error, { confirmed: false });
        }
        if (results) {
            callback(null, { confirmed: true });
        } else {
            callback(error, { confirmed: false });
        }
    });
}

const loggingQuery = (log, callback) => {
    let sql = '';
    let logConfirm = '';
    if (log.TimeTryToSleep != '') {
        sql = `UPDATE SleepLog 
        SET TimeInBed = '${log.TimeInBed}',
        TimeTryToSleep = '${log.TimeTryToSleep}',
        HowLongToSleep = '${log.HowLongToSleep}',
        AmountWakenUp = '${log.AmountWakenUp}',
        HowLongDidYouSleep = '${log.HowLongDidYouSleep}',
        WakeTime = '${log.WakeTime}',
        TimeToGetOutOfBed = '${log.TimeToGetOutOfBed}',
        Comments = '${log.Comments}'
        WHERE UserId = '${profile}'
        AND CreateDate = '${log.CreateDate}';`
    } else {
        sql = `INSERT INTO SleepLog (UserId, NapsDuringDay, Medication, TimeInBed, TimeTryToSleep, HowLongToSleep, AmountWakenUp,
            HowLongDidYouSleep, WakeTime, TimeToGetOutOfBed, Comments, CreateDate) VALUES
            ('${profile}', '${log.NapsDuringDay}', '${log.Medication}', '${log.TimeInBed}', '${log.TimeTryToSleep}', '${log.HowLongToSleep}', 
            '${log.AmountWakenUp}', '${log.HowLongDidYouSleep}', '${log.WakeTime}', '${log.TimeToGetOutOfBed}', '${log.Comments}', DATE '${log.CreateDate}');`;
    }

    c.query(sql, function (error, results, fields) {
        if (error) {
            callback(error, { logConfirm: false });
        }
        if (results) {
            callback(null, { logConfirm: true });
        } else {
            callback(error, { logConfirm: false });
        }
    });
}

export {
    loginQuery,
    signupQuery,
    loggingQuery,
}
