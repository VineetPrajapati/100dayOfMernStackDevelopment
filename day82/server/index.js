import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes
app.get("/api", (req, res) => {
  res.json({message: "Hello From Express Server!"});
})



const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
