const productController = require("../controller/productController");
const express = require("express");
const router = express.Router();

router.post("/createProduct",productController.createProduct);
router.get("/getProducts",productController.getProducts);
router.post("/purchase",productController.productPurchase);
router.post("/restock",productController.restockProduct);
router.get("/getTransactions/:productId",productController.getTransactions);

module.exports= router;