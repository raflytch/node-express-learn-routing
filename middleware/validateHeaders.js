const validateHeaders = (req, res, next) => {
  const contentType = req.headers["content-type"];
  if (contentType !== "application/json") {
    res.status(400).json({ message: "Invalid content type" });
  }

  next();
};

export default validateHeaders;
