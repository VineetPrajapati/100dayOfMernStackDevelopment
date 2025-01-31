const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.userRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// user login
exports.userLogin = async (req, res) => {
  try {
    // console.log("Incoming requiest:", req.body);
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    // check user exist
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, "secret_key", { expiresIn: "1h" });
    res.json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// protected route
exports.protectAuth = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: "Access denied" });
  try {
    const decode = jwt.verify(token, "secret_key");
    res.json({ message: "Access granted", userId: decode.id });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};
