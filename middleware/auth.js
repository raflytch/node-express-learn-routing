const auth = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  if (token !== "123") {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

export default auth;
