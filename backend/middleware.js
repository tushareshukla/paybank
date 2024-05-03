const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader.startsWith("Bearer")) {
    return res.status(401).json({
      message: "No token provided",
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
  module.exports = { authMiddleware };
};
