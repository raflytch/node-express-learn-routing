import express from "express";
const productsRouter = express.Router();

productsRouter.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Products retrieved successfully",
    products: [
      {
        id: 1,
        name: "T-Shirt",
        price: 10000,
        quantity: 10,
      },
      {
        id: 2,
        name: "Hoodie",
        price: 20000,
        quantity: 5,
      },
      {
        id: 3,
        name: "Jacket",
        price: 30000,
        quantity: 3,
      },
    ],
  });
});

productsRouter.post("/", (req, res) => {
  res.status(201).json({
    statusCode: 201,
    message: "Products created successfully",
    products: [
      {
        id: 1,
        name: "T-Shirt",
        price: 10000,
        quantity: 10,
      },
      {
        id: 2,
        name: "Hoodie",
        price: 20000,
        quantity: 5,
      },
    ],
  });
});

productsRouter.patch("/:id", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Products updated successfully",
  });
});

productsRouter.put("/:id", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Products updated successfully",
  });
});

productsRouter.delete("/:id", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Products deleted successfully",
  });
});

export default productsRouter;
