const jwt = require("jsonwebtoken");
const userModel = require('../models/user.model');

async function protectedAuthMiddleware(req, res, next) {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized: No token provided. Please login first."
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        message: "User not found. Invalid token."
      });
    }

    req.user = user; // Attach user to request for later access
    next(); // Proceed to next middleware or route
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token. Please login again.",
      error: error.message
    });
  }
}

module.exports = protectedAuthMiddleware;
