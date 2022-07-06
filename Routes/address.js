const express = require("express");
const router = express.Router();

const { getEmployeesAddress, getEmployeesCity, getEmployeesByCounty } = require("../controllers/address")

router.get("/", getEmployeesAddress)
router.get("/city/:city", getEmployeesCity)
router.get("/county/:county", getEmployeesByCounty)

module.exports = router