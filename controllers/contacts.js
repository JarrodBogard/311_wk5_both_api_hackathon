const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require('../sql/error')

const getEmployeesContact = (req, res) => {
    pool.query("SELECT * FROM employeesContact LIMIT 20", (err, rows) => {
      if (err) return handleSQLError(res, err);
      return res.json(rows);
    });
  };
  
  const getEmployeesByContactId = (req, res) => {
    const { id } = req.params;
    
    let sql = "SELECT * FROM ?? Where ?? = ?";
    const replacements = ["employeesContact", "id", id];
    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, rows) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(rows);
    });
  };
  
  const getEmployeesByFirstPhone = (req, res) => {
    const { phone1 } = req.params;
    
    let sql = "SELECT * FROM ?? WHERE ?? = ?";
    const replacements = ["employeesContact", "phone1", phone1];
    sql = mysql.format(sql, replacements);
  
    pool.query(sql, (err, rows) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(rows);
    });
  };

  module.exports = {
    getEmployeesContact,
    getEmployeesByContactId,
    getEmployeesByFirstPhone
  }