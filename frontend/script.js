async function fetchData() {
  try {
    const response = await fetch(
      "https://patient-monitar-production.up.railway.app/api/data"
    );

    if (!response.ok) throw new Error("Server error");

    const data = await response.json();

    const heartEl = document.getElementById("heart");
    const waterEl = document.getElementById("water");
    const foodEl = document.getElementById("food");

    if (heartEl && waterEl && foodEl) {
      heartEl.innerText = data.heartRate + " BPM";
      waterEl.innerText = data.water + " %";
      foodEl.innerText = data.food + " %";
    }

  } catch (error) {
    console.error("Fetch error:", error);

    document.getElementById("heart").innerText = "Error";
    document.getElementById("water").innerText = "Error";
    document.getElementById("food").innerText = "Error";
  }
}

setInterval(fetchData, 2000);
fetchData();
