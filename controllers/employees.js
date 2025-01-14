const mysql = require("mysql");
const pool = require("../sql/connection");
const { handleSQLError } = require('../sql/error')

const getEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 10", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

const getEmployeesById = (req, res) => {
  const { id } = req.params;
  
  let sql = "SELECT * FROM ?? Where ?? = ?";
  const replacements = ["employees", "id", id];
  sql = mysql.format(sql, replacements);
  pool.query(sql, (err, rows) => {
    if (err) {
      console.log({ message: "Error occurred: " + err });
      return res.status(500).send("An unexpected error occurred");
    }
    res.json(rows);
  });
};

const getEmployeesByFirstName = (req, res) => {
  const { first_name } = req.params;
  
  let sql = "SELECT * FROM ?? WHERE ?? = ?";
  const replacements = ["employees", "first_name", first_name];
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
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName
};
