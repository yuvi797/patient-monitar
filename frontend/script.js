const API_URL = "https://patient-monitar-production.up.railway.app/api/data";

// Get elements once
const heartEl = document.getElementById("heart");
const waterEl = document.getElementById("water");
const foodEl = document.getElementById("food");

// Show initial loading
heartEl.innerText = "Loading...";
waterEl.innerText = "Loading...";
foodEl.innerText = "Loading...";

async function fetchData() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) throw new Error(`Server error: ${response.status}`);

    const data = await response.json();

    // Only update the text if new data is received
    if (data.heartRate !== undefined) heartEl.innerText = data.heartRate + " BPM";
    if (data.water !== undefined) waterEl.innerText = data.water + " %";
    if (data.food !== undefined) foodEl.innerText = data.food + " %";

  } catch (error) {
    console.error("Fetch error:", error);

    // Show error only if fetch fails
    heartEl.innerText = "Error";
    waterEl.innerText = "Error";
    foodEl.innerText = "Error";
  }
}

// Initial fetch
fetchData();

// Refresh every 2 seconds without flashing "Loading..."
setInterval(fetchData, 2000);
