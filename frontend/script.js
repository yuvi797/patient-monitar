const API_URL = "https://patient-monitar-production.up.railway.app/api/data";

async function fetchData() {
  // Get elements
  const heartEl = document.getElementById("heart");
  const waterEl = document.getElementById("water");
  const foodEl = document.getElementById("food");

  // Show loading while fetching
  heartEl.innerText = "Loading...";
  waterEl.innerText = "Loading...";
  foodEl.innerText = "Loading...";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) throw new Error(`Server error: ${response.status}`);

    const data = await response.json();

    // Update dashboard
    heartEl.innerText = data.heartRate + " BPM";
    waterEl.innerText = data.water + " %";
    foodEl.innerText = data.food + " %";

  } catch (error) {
    console.error("Fetch error:", error);

    heartEl.innerText = "Error";
    waterEl.innerText = "Error";
    foodEl.innerText = "Error";
  }
}

// Initial fetch
fetchData();

// Refresh every 2 seconds
setInterval(fetchData, 2000);
