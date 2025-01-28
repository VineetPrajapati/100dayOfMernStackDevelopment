import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Mock data
let blogs = [
  { id: 1, title: "First Blog", content: "This is the first blog." },
  { id: 2, title: "Second Blog", content: "This is the second blog." },
];

// Routes
app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.post("/api/blogs", (req, res) => {
  const { title, content } = req.body;
  const newblog = { id: blogs.length + 1, title, content };
  blogs.push(newblog);
  res.status(201).json({ success: true, date: newblog });
});

app.listen(8000, () => console.log(`server running on http://localhost:8000}`));
