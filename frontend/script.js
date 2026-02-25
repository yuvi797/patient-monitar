async function fetchData() {
  try {
    const response = await fetch(
      "https://patient-monitar-production.up.railway.app/api/data"
    );

    if (!response.ok) {
      throw new Error("Server error");
    }

    const data = await response.json();

    document.getElementById("heart").innerText =
      data.heartRate + " BPM";

    document.getElementById("water").innerText =
      data.water + " %";

    document.getElementById("food").innerText =
      data.food + " %";

  } catch (error) {
    console.error("Fetch error:", error);

    document.getElementById("heart").innerText = "Error";
    document.getElementById("water").innerText = "Error";
    document.getElementById("food").innerText = "Error";
  }
}

setInterval(fetchData, 2000);
fetchData();
