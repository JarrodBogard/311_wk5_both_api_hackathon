const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require('../sql/error')

const getEmployeesAddress = (req, res) => {
    pool.query("SELECT * FROM employeesAddress LIMIT 10", (err, rows) => {
      if (err) return handleSQLError(res, err);
      return res.json(rows);
    });
  };
  
  const getEmployeesCity = (req, res) => {
    const { city } = req.params;
    
    let sql = "SELECT * FROM ?? Where ?? = ?";
    const replacements = ["employeesAddress", "city", city];
    sql = mysql.format(sql, replacements);
    pool.query(sql, (err, rows) => {
      if (err) {
        console.log({ message: "Error occurred: " + err });
        return res.status(500).send("An unexpected error occurred");
      }
      res.json(rows);
    });
  };
  
  const getEmployeesByCounty = (req, res) => {
    const { county } = req.params;
    
    let sql = "SELECT * FROM ?? WHERE ?? = ?";
    const replacements = ["employeesAddress", "county", county];
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
      getEmployeesAddress,
      getEmployeesCity,
      getEmployeesByCounty
};