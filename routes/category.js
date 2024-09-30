import express from "express";
const routerCategory = express.Router();

routerCategory
  .route("/")
  .get((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: "Categories retrieved successfully",
    });
  })
  .post((req, res) => {
    res.status(201).json({
      statusCode: 201,
      message: "Category created successfully",
    });
  });

routerCategory
  .route("/:id")
  .get((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Category ${req.params.id} retrieved successfully`,
    });
  })
  .put((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Category ${req.params.id} updated successfully`,
    });
  })
  .delete((req, res) => {
    res.status(200).json({
      statusCode: 200,
      message: `Category ${req.params.id} deleted successfully`,
    });
  });

export default routerCategory;
