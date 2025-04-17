// Needed Resources
const express = require("express")
const router = new express.Router()
const invController = require("../controllers/invController")
const utilities = require("../utilities/")
const invValidate = require("../utilities/inventory-valdation")

router.use(["/add-classification", "/add-inventory", "/edit/:inv_Id", "/update", "/delete/:inv_Id", "/delete/",], utilities.checkManager);

router.get("/",utilities.handleErrors(invController.buildManagement));
// Route to build inventory by classification view
router.get("/type/:classificationId", utilities.handleErrors(invController.buildByClassificationId));
router.get("/detail/:inv_id", utilities.handleErrors(invController.buildByInventoryId));

router.get("/add-classification", utilities.handleErrors(invController.buildAddClassification));
router.post(
    "/add-classification",
    invValidate.classificationRules(),
    invValidate.checkClassificationData,
    utilities.handleErrors(invController.addClassification)
);

router.get("/add-inventory", utilities.handleErrors(invController.buildAddInventory));
router.post(
    "/add-inventory",
    invValidate.inventoryRules(),
    invValidate.checkInventoryData,
    utilities.handleErrors(invController.addInventory)
);

router.get("/getInventory/:classification_id", utilities.handleErrors(invController.getInventoryJSON))

router.get("/edit/:inv_id", utilities.handleErrors(invController.buildEditInventory));
router.post(
    "/update",
    invValidate.inventoryRules(),
    invValidate.checkUpdateData,
    utilities.handleErrors(invController.updateInventory)
);

router.get("/delete/:inv_id", utilities.handleErrors(invController.buildDelInventory));
router.post("/delete", utilities.handleErrors(invController.deleteInventory) )

module.exports = router;