const express = require("express");
const {
  getEmployees,
  getEmployeesById,
  getEmployeesByFirstName,
} = require("../controllers/employees");
const router = express.Router();

router.get("/", getEmployees);
router.get("/:id", getEmployeesById);
router.get("/:first_name", getEmployeesByFirstName);

module.exports = router;
