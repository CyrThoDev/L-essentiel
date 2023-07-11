const express = require("express");

const router = express.Router();

const famillesControllers = require("./controllers/famillesControllers");

router.get("/familles", famillesControllers.browse);
router.get("/familles/:slug", famillesControllers.read);
router.put("/familles/:slug", famillesControllers.edit);
router.post("/familles", famillesControllers.add);
router.delete("/familles/:id", famillesControllers.destroy);

const categoriesControllers = require("./controllers/categoriesControllers");

router.get("/categories", categoriesControllers.browse);
// router.get("/categories/:id", categoriesControllers.readById);
router.get("/categories/:slug", categoriesControllers.readBySlug);
router.put("/categories/:id", categoriesControllers.edit);
router.post("/categories", categoriesControllers.add);
router.delete("/categories/:id", categoriesControllers.destroy);

const productsControllers = require("./controllers/productsControllers");

router.get("/products", productsControllers.browse);
router.get("/products/:slug", productsControllers.read);
router.put("/products/:slug", productsControllers.edit);
router.post("/products", productsControllers.add);
router.delete("/products/:id", productsControllers.destroy);

module.exports = router;
