import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route all traffic to the landing page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the Express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
