const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({
    heartRate: 81,
    water: 45,
    food: 86
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});