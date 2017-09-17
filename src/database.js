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
        console.log(results)
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

export {
    loginQuery,
    signupQuery
}
