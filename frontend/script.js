const API_URL = "https://patient-monitar-production.up.railway.app/api/data";

const heartEl = document.getElementById("heart");
const waterEl = document.getElementById("water");
const foodEl = document.getElementById("food");

// Optional: simulate data if API fails
function simulateData() {
  return {
    heartRate: Math.floor(Math.random() * (120 - 60 + 1)) + 60, // 60-120 BPM
    water: Math.floor(Math.random() * 101), // 0-100%
    food: Math.floor(Math.random() * 101)   // 0-100%
  };
}

// Update DOM with thresholds for colors
function updateDOM(data) {
  // Heart Rate
  heartEl.innerText = data.heartRate + " BPM";
  if (data.heartRate < 60) heartEl.className = "status warning";
  else if (data.heartRate > 100) heartEl.className = "status critical";
  else heartEl.className = "status normal";

  // Water
  waterEl.innerText = data.water + " %";
  if (data.water < 30) waterEl.className = "status critical";
  else if (data.water < 50) waterEl.className = "status warning";
  else waterEl.className = "status normal";

  // Food
  foodEl.innerText = data.food + " %";
  if (data.food < 50) foodEl.className = "status critical";
  else if (data.food < 70) foodEl.className = "status warning";
  else foodEl.className = "status normal";
}

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error(`Server error: ${response.status}`);
    const data = await response.json();
    updateDOM(data);
  } catch (error) {
    console.error("Fetch error:", error);
    // fallback: simulate random data
    const data = simulateData();
    updateDOM(data);
  }
}

// Initial fetch
fetchData();

// Update every 2 seconds
setInterval(fetchData, 2000);
