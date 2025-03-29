const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  const data = await invModel.getInventoryByClassificationId(classification_id)
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

// invCont.buildByInventoryId = async function (req, res, next) {
//   const inventory_id = req.params.inv_id;
//   const data = await invModel.getInventoryById(inventory_id);
//   const inv_details = await utilities.buildInvDetails(data);
//   let nav = await utilities.getNav();
//   const itemName = `${data.inv_make} ${data.inv_model} ${data.inv_year}`;
//   res.render("./inventory/detail", {
//       title: itemName,
//       nav,
//       inv_details,
//   })
// }


// invCont.buildManagement = async function (req, res, next) {
//   let nav = await utilities.getNav();
//   const classificationSelect = await utilities.buildClassificationList()
//   res.render("inventory/management", {
//       title: "Vehicle Management",
//       errors: null,
//       nav,
//       classificationSelect,
//   });
// };

// invCont.buildEdit = async function (req, res, next) {
//   let nav = await utilities.getNav();
//   const classificationSelect = await utilities.buildClassificationList()
//   const data = await invModel.getInventoryById(req.params.inv_id);
//   res.render("inventory/edit", {
//       title: "Edit Vehicle",
//       errors: null,
//       nav,
//       classificationSelect,
//       data,
//   });
// }

// invCont.buildAdd = async function (req, res, next) {
//   let nav = await utilities.getNav();
//   const classificationSelect = await utilities.buildClassificationList()
//   res.render("inventory/add", {
//       title: "Add Vehicle",
//       errors: null,
//       nav,
//       classificationSelect,
//   });
// }

// invCont.addInventory = async function (req, res, next) {
//   const data = req.body;
//   const result = await invModel.addInventory(data);
//   if (result.errors) {
//     let nav = await utilities.getNav();
//     const classificationSelect = await utilities.buildClassificationList()
//     res.render("inventory/add", {
//         title: "Add Vehicle",
//         errors: result.errors,
//         nav,
//         classificationSelect,
//     });
//   } else {
//     res.redirect("/inventory/management");
//   }
// }



module.exports = invCont
