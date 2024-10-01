const logger = (req, res, next) => {
  const startTime = new Date().getTime();

  const { method, url, ip } = req;

  console.log(`[${new Date().toISOString()}] ${method} ${url} ${ip}`);

  res.on("finish", () => {
    const endTime = new Date().getTime() - startTime;
    console.log(
      `[${new Date().toISOString()}] ${method} ${url} ${ip} ${res.statusCode} ${
        endTime - startTime
      }ms`
    );
  });

  next();
};

export default logger;
