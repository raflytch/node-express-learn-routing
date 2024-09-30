import express from "express";
const app = express();
const port = 3000;
import router from "./routes/index.js";

app.use("/", router);

app.use("/", (req, res, next) => {
  res.status(404).json({
    statusCode: 404,
    message: "Not Found",
  });
});

app.listen(port, () => {
  console.log(`This port is listening on ${port}`);
});
