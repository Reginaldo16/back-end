const express = require("express");
const router = express.Router();
const ownerController = require("../controllers/ownerController");

router.get("/", ownerController.getOwners);
router.get("/:id", ownerController.getOwnerById);
router.post("/", ownerController.createOwner);
router.put("/:id", ownerController.updateOwner);
router.delete("/:id", ownerController.deleteOwner);

module.exports = router;
