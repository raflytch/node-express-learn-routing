import express from "express";
const router = express.Router();
import routerItems from "./items.js";
import routerProducts from "./products.js";
import routerOrder from "./order.js";
import routerCustomer from "./customer.js";
import routerCategory from "./category.js";

router.use("/barangs", routerItems);
router.use("/products", routerProducts);
router.use("/orders", routerOrder);
router.use("/customers", routerCustomer);
router.use("/categories", routerCategory);

router.use((req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: "Not Found",
  });
});

export default router;
