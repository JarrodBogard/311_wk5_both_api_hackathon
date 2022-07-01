//const employees = require('../index')
const mysql = require("mysql")
const pool = require("../Sql/connection")



const getEmployees = (err, res) => {

  pool.query('SELECT * FROM employees', (err, rows) => {
    if (err) {
      console.log({ 'message': 'Error occurred: ' + err })
      return res.status(500).send('Somethings messed up!')
    }
    res.json(rows)
  });
};

const getEmployeesById = (err, res) => {
    let sql = "SELECT ??, ?? FROM ?? WHERE ?? = ?";
    const replacements = ["id", "first_name", "users", "id", ];
    sql = mysql.format(sql, replacement);

    pool.query('SELECT * FROM getEmployeesById', (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('Somethings messed up!')
        }
        res.json(rows)
      });
};

const getEmployeesByFirstName = (err, res) => {
    pool.query('SELECT * FROM getEmployeesByFirstName WHERE params.First', (err, rows) => {
        if (err) {
          console.log({ 'message': 'Error occurred: ' + err })
          return res.status(500).send('Somethings messed up!')
        }
        res.json(rows)
      });
};


module.exports = { 
    getEmployees, 
    getEmployeesById, 
    getEmployeesByFirstName 
}