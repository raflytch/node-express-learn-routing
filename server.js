import express from "express";
import router from "./routes/index.js";
import logger from "./middleware/logging.js";
import validateHeaders from "./middleware/validateHeaders.js";
import auth from "./middleware/auth.js";
const app = express();
const port = 3000;

app.use("/", router);

app.use(logger);

app.use(express.json());

app.use(validateHeaders);

app.use(auth);

app.get("/", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    message: "Application started successfully",
  });
});

app.listen(port, () => {
  console.log(`This port is listening on ${port}`);
});
