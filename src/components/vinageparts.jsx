import React, { useState } from "react";
import "./VinageParts.css"; // exact casing!

const YEAR_MAP = { A:2015,B:2016,C:2017,D:2018,E:2019,F:2020,G:2021,H:2022,J:2023,K:2024,L:2025 };
const RECOMMENDATION_RULES = {
  1:["Engine oil","Air filter","Spark plug"],
  2:["Brake inspection","Oil filter","Chain lubrication"],
  3:["Brake pads","Cable adjustment","Cam chain"],
  4:["Brake shoe","Clutch cable","Cam chain"],
  5:["Full service","Replace worn parts"]
};

const PART_IMAGES = {
  "Engine oil":"https://cdn-icons-png.flaticon.com/512/430/430593.png",
  "Air filter":"https://cdn-icons-png.flaticon.com/512/420/420315.png",
  "Spark plug":"https://cdn-icons-png.flaticon.com/512/2541/2541380.png",
  "Brake inspection":"https://cdn-icons-png.flaticon.com/512/609/609361.png",
  "Oil filter":"https://cdn-icons-png.flaticon.com/512/1047/1047978.png",
  "Chain lubrication":"https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  "Brake pads":"https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  "Cable adjustment":"https://cdn-icons-png.flaticon.com/512/4522/4522533.png",
  "Cam chain":"https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
  "Brake shoe":"https://cdn-icons-png.flaticon.com/512/2736/2736669.png",
  "Clutch cable":"https://cdn-icons-png.flaticon.com/512/4522/4522533.png",
  "Full service":"https://cdn-icons-png.flaticon.com/512/3570/3570349.png",
  "Replace worn parts":"https://cdn-icons-png.flaticon.com/512/3094/3094823.png"
};

const PART_BENEFITS = {
  "Engine oil":"Keeps engine running smoothly.",
  "Air filter":"Improves air intake and engine performance.",
  "Spark plug":"Ensures proper ignition.",
  "Brake inspection":"Safe braking performance.",
  "Oil filter":"Protects engine from dirt and debris.",
  "Chain lubrication":"Reduces wear and increases lifespan.",
  "Brake pads":"Ensures effective braking.",
  "Cable adjustment":"Smooth clutch/throttle operation.",
  "Cam chain":"Prevents timing issues.",
  "Brake shoe":"Safe braking performance.",
  "Clutch cable":"Smooth gear shifting.",
  "Full service":"Extends vehicle lifespan.",
  "Replace worn parts":"Reduces risk of breakdowns."
};

// Sample top supervisors
const TOP_SUPERVISORS = [
  { name:"Rahul Sharma", dealership:"Khagaria Auto Agency", amount:"₹1,20,000", image:"https://randomuser.me/api/portraits/men/32.jpg", rating:5 },
  { name:"Abdul ", dealership:"Anas Automobiles", amount:"₹1,15,000", image:"https://randomuser.me/api/portraits/women/44.jpg", rating:5 },
  { name:"Amit Verma", dealership:"Mehwish Motors", amount:"₹1,10,000", image:"https://randomuser.me/api/portraits/men/55.jpg", rating:5 }
];

export default function VinAgeParts() {
  const [vin,setVin] = useState("");
  const [vehicleAge,setVehicleAge] = useState(null);
  const [recommendations,setRecommendations] = useState([]);
  const [showSupervisors,setShowSupervisors] = useState(false);

  const analyzeVIN = () => {
    if(vin.length !== 14){ alert("VIN must be 14 characters!"); return; }
    const yearChar = vin[4].toUpperCase();
    const manufacturingYear = YEAR_MAP[yearChar] || 2020;
    const age = new Date().getFullYear() - manufacturingYear;
    setVehicleAge(age);
    const recs = RECOMMENDATION_RULES[age] || ["Standard checkup"];
    setRecommendations(recs);
  };

  return (
    <div className="vin-container">
      {/* Supervisor Button */}
      <div className="supervisor-button-container">
        <button className="supervisor-btn" onClick={()=>setShowSupervisors(!showSupervisors)}>
          Top Supervisors
        </button>
      </div>

      {/* Hero */}
      <div className="hero">
        <div className="hero-box">
          <h1>🏍️ Know Your Ride. Keep It Alive.</h1>
          <p>Enter your VIN to discover your bike’s age and recommended maintenance instantly.</p>
        </div>
      </div>

      {/* VIN Input */}
      <div className="input-card">
        <input
          type="text"
          placeholder="Enter 14-character VIN"
          value={vin}
          onChange={(e)=>setVin(e.target.value.toUpperCase())}
          maxLength={14}
        />
        <button onClick={analyzeVIN}>Analyze VIN</button>
      </div>

      {/* Recommended Parts */}
      {vehicleAge !== null && (
        <div className="results-container">
          {recommendations.map((part, idx) => (
            <div key={idx} className="result-card">
              <img src={PART_IMAGES[part]} alt={part} />
              <b>{part}</b>
              <p>{PART_BENEFITS[part]}</p>
            </div>
          ))}
        </div>
      )}

      {/* Supervisors */}
      {showSupervisors && (
        <div className="supervisor-container">
          {TOP_SUPERVISORS.map((sup, idx) => (
            <div key={idx} className="supervisor-card">
              <img src={sup.image} alt={sup.name} />
              <div className="supervisor-rating">
                {"★".repeat(sup.rating)}{"☆".repeat(5 - sup.rating)}
              </div>
              <b>{sup.name}</b>
              <p>{sup.dealership}</p>
              <p>{sup.amount}</p>
            </div>
          ))}
        </div>
      )}

      <footer>
        © {new Date().getFullYear()} VIN Tracker | Built for Smarter Rides 🏍️
      </footer>
    </div>
  );
}