const express = require("express");
const router = express.Router();

const { getEmployeesContact, getEmployeesByContactId, getEmployeesByFirstPhone } = require("../controllers/contacts")

router.get("/", getEmployeesContact)
router.get("/:id", getEmployeesByContactId)
router.get("/phone/:phone1", getEmployeesByFirstPhone)

module.exports = router