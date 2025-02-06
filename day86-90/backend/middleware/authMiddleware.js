const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    // console.log("Received Token:", token); // Debugging

    if(!token) {
        return res.status(403).json({ message: "Access denied. No token provided."});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        next();
        
    } catch (err) {
        // console.error("JWT Verification Error:", err); // Debugging
        res.status(401).json({ message: "Invalid token"});        
    }
    
};

const isAdmin = (req, res, next) => {
    if(!req.user?.isAdmin) {
        return res.status(403).json({ message: "Access denied. Admins only." })
    }
    next();
}

module.exports = { authenticate, isAdmin};