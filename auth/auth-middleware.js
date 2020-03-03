const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const jwtSecret = process.env.JWT_SECRET || "keep it secret";
  const authorization = req.headers.authorization;

  if (authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Invalid credentials", error: err });
      } else {
        req.decodedToken = decodedToken;
        // console.log(decodedToken);
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Not authorized" });
  }
};
