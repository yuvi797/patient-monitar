const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Serve frontend folder
app.use(express.static(path.join(__dirname, "../frontend")));

// API Route
app.get("/api/data", (req, res) => {
  res.json({
    heartRate: (60 + Math.random() * 40).toFixed(0),
    water: (40 + Math.random() * 60).toFixed(0),
    food: (30 + Math.random() * 70).toFixed(0)
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
