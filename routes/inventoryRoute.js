// Needed Resources 
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")
const utilities = require("../utilities/")


// Route to build inventory view
router.get("/",utilities.handleErrors(invController.buildManagement));

// Route to build inventory by classification view
router.get("/type/:classificationId", invController.buildByClassificationId);
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
router.get("/detail/:inv_id", utilities.handleErrors(invController.buildByInventoryId));


router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification));
router.get("/add-vehicle", utilities.handleErrors(invController.buildAddVehicle));
router.get("/edit-vehicle/:inv_id", utilities.handleErrors(invController.buildEditVehicle));


module.exports = router;