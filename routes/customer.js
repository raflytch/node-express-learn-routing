import express from "express";
const routerCustomer = express.Router();

routerCustomer
  .route("/")
  .get((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: "Customers retrieved successfully",
    });
  })
  .post((req, res) => {
    res.status(201).json({
      statusCode: 201,
      message: "Customer created successfully",
    });
  });

routerCustomer
  .route("/:id")
  .get((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Customer ${req.params.id} retrieved successfully`,
    });
  })
  .put((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Customer ${req.params.id} updated successfully`,
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Customer ${req.params.id} deleted successfully`,
    });
  });

export default routerCustomer;
