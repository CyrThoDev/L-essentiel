const express = require("express");

const router = express.Router();

const famillesControllers = require("./controllers/famillesControllers");
const categoriesControllers = require("./controllers/categoriesControllers");
const productsControllers = require("./controllers/productsControllers");

router.get("/familles", famillesControllers.browse);
// router.get("/familles/:slug", famillesControllers.readBySlug);
router.get("/familles/:id", famillesControllers.read);
router.get(
  "/familles/:id/categories",
  famillesControllers.browseCategoriesByFamily
);
router.post("/familles", famillesControllers.add);
router.put("/familles/:id", famillesControllers.edit);
router.delete("/familles/:id", famillesControllers.destroy);

router.get("/categories", categoriesControllers.browse);
router.get("/categories/:slug", categoriesControllers.readBySlug); // Récupère tous les produits qui ont comme catégorie le slug
router.put("/categories/:id", categoriesControllers.edit);
router.post("/categories", categoriesControllers.add);
router.delete("/categories/:id", categoriesControllers.destroy);

router.get("/products", productsControllers.browse);
router.get("/products/:slug", productsControllers.read);
router.put("/products/:slug", productsControllers.edit);
router.post("/products", productsControllers.add);
router.delete("/products/:id", productsControllers.destroy);

module.exports = router;
