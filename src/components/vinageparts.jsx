import { useState } from "react";

// Map 5th character to manufacturing year
const YEAR_MAP = {
  A: 2010, B: 2011, C: 2012, D: 2013,
  E: 2014, F: 2015, G: 2016, H: 2017,
  I: 2018, J: 2019, K: 2020, L: 2021,
  M: 2022, N: 2023, O: 2024, P: 2025
};

// Parts to recommend based on vehicle age
const RECOMMENDATION_RULES = {
  1: ["Check oil", "Check tires"],
  2: ["Brake inspection", "Change oil filter"],
  3: ["Brake pads", "Chain lubrication"],
  4: ["Brake shoe", "Cable adjustment", "Cam chain"],
  5: ["Full service", "Replace worn parts"]
};

// Optional: Benefits for each part
const PART_BENEFITS = {
  "Check oil": "Prevents engine damage and ensures smooth running.",
  "Check tires": "Improves safety and tire life.",
  "Brake inspection": "Ensures safe braking and prevents accidents.",
  "Change oil filter": "Keeps engine clean and efficient.",
  "Brake pads": "Provides proper braking performance.",
  "Chain lubrication": "Reduces wear and improves performance.",
  "Brake shoe": "Ensures effective braking.",
  "Cable adjustment": "Smooth clutch/throttle operation.",
  "Cam chain": "Prevents engine timing issues.",
  "Full service": "Extends vehicle lifespan.",
  "Replace worn parts": "Reduces breakdown risk."
};

export default function VinAgeParts() {
  const [vin, setVin] = useState("");
  const [year, setYear] = useState(null);
  const [age, setAge] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  const analyzeVIN = () => {
    if (vin.length !== 14) {
      alert("VIN must be 14 characters!");
      return;
    }

    const yearChar = vin[4].toUpperCase();
    const vehicleYear = YEAR_MAP[yearChar] || 2025;
    const vehicleAge = new Date().getFullYear() - vehicleYear;

    setYear(vehicleYear);
    setAge(vehicleAge);

    const recs = RECOMMENDATION_RULES[vehicleAge] || ["Standard checkup"];
    setRecommendations(recs);
  };

  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "10px", maxWidth: "500px", margin: "20px auto" }}>
      <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>VIN Tracker</h1>
      <input
        type="text"
        placeholder="Enter 14-char VIN"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />
      <button onClick={analyzeVIN} style={{ padding: "8px 12px" }}>Analyze</button>

      {year && (
        <div style={{ marginTop: "20px" }}>
          <p><b>Year of Manufacture:</b> {year}</p>
          <p><b>Vehicle Age:</b> {age} years</p>
          <p><b>Recommended Parts/Services:</b></p>
          <ul>
            {recommendations.map((rec, idx) => (
              <li key={idx}>
                {rec} <br />
                <small>{PART_BENEFITS[rec]}</small>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}