async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();

    document.getElementById("heart").innerText =
      data.heartRate + " BPM";

    document.getElementById("water").innerText =
      data.water + " %";

    document.getElementById("food").innerText =
      data.food + " %";

  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

setInterval(fetchData, 2000);
fetchData();
