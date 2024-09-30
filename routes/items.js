import express from "express";
const routerItems = express.Router();

routerItems.route("/").get((req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Barang retrieved successfully",
  });
});

routerItems.route("/").post((req, res) => {
  res.status(201).json({
    statusCode: 201,
    message: "Barang created successfully",
  });
});

routerItems.route("/:id").patch((req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Barang updated successfully",
  });
});

routerItems.route("/:id").put((req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Barang updated successfully",
  });
});

routerItems.route("/:id").delete((req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Barang deleted successfully",
  });
});

routerItems.route("/").all((req, res) => {
  res.status(405).json({
    statusCode: 405,
    message: "Method Not Allowed",
  });
});

export default routerItems;
