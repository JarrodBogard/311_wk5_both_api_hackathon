const express = require("express");
const router = express.Router();

// const {
//     getEmployees,
//     getEmployeesById,
//     getEmployeesByFirstName,
// } = require("../controllers/employees");

const employeesController = require("../controllers/employees")

router.get("/", employeesController.getEmployees);
router.get("/:id", employeesController.getEmployeesById);
router.get("/firstname/:first_name", employeesController.getEmployeesByFirstName);


module.exports = router;