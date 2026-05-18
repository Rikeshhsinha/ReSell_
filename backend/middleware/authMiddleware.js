const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  try {

    // Get Authorization Header
    const authHeader = req.headers.authorization;

    // Check Token
    if (!authHeader) {

      return res.status(401).json({
        message: "No Token Provided",
      });

    }

    // Remove "Bearer "
    const token = authHeader.split(" ")[1];

    // Verify Token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Save User
    req.user = decoded;

    next();

  } catch (error) {

    console.log(error);

    res.status(401).json({
      message: "Invalid Token",
    });

  }
};