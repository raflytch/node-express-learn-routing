import express from "express";
const routerOrder = express.Router();

routerOrder
  .route("/")
  .get((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: "Orders retrieved successfully",
    });
  })
  .post((req, res) => {
    res.status(201).json({
      statusCode: 201,
      message: "Order created successfully",
    });
  });

routerOrder
  .route("/:id")
  .get((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Order ${req.params.id} retrieved successfully`,
    });
  })
  .put((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Order ${req.params.id} updated successfully`,
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Order ${req.params.id} deleted successfully`,
    });
  });

export default routerOrder;
