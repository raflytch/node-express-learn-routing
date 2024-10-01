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

export default router;
