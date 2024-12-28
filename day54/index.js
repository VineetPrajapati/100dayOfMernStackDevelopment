const express = require("express");
const app = express();

const Joi = require("joi");

app.use(express.json());

// Error Handling with middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: `Internal Server Error`,
  });
});

// middleware for validating user data
// basic validation middleware
function validdateUser(req, res, next) {
  const { name, email, age } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({
      error: `Name is required and must be a string`,
    });
  }
  if (!email || !email.includes("@")) {
    res.status(400).json({
      error: `A valid email is required`,
    });
  }
  if (!age || typeof age !== "number" || age < 1) {
    res.status(400).json({
      error: `Age required and must be positive number`,
    });
  }

  next(); // it will pass the control to the next middleware or route handler
}

app.post("/user", validdateUser, (req, res) => {
  const { name, email, age } = req.body;

  console.log({ name, email, age });

  res.status(201).json({
    success: true,
    data: { name, email, age },
  });
});

//  Using third - party libraries for validation
// Joi schema for user validation
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().positive().required(),
});

// Middleware for validationg user data using joi
function joiValidateUser(req, res, next) {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    });
  }

  next();
}

app.post("/api/user", joiValidateUser, (req, res) => {
  const { name, email, age } = req.body;
  console.log({ name, email, age });

  res.status(201).json({
    success: true,
    data: { name, email, age },
  });
});

app.listen(8080, () => console.log(`Server started at http://localhost:8080`));
