const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api/data", (req, res) => {
  res.json({
    heartRate: 81,
    water: 45,
    food: 86
  });
});

// ✅ ADD THIS
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend", "dashboard.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
