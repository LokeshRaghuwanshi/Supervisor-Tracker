import React, { useState } from "react";

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

export default function VinAgeParts() {
  const [vin,setVin] = useState("");
  const [vehicleAge,setVehicleAge] = useState(null);
  const [recommendations,setRecommendations] = useState([]);

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
    <div style={{fontFamily:"Poppins, sans-serif",backgroundColor:"#0f172a",color:"#f8fafc",minHeight:"100vh",width:"100%"}}>

      {/* Hero Section */}
      <div style={{
        backgroundImage:"url('https://images.unsplash.com/photo-1600718372025-1ff1b3e3cf02?auto=format&fit=crop&w=1600&q=80')",
        backgroundSize:"cover",
        backgroundPosition:"center",
        padding:"100px 20px",
        textAlign:"center",
        color:"white",
        textShadow:"0px 2px 8px rgba(0,0,0,0.6)"
      }}>
        <h1 style={{fontSize:"3rem",marginBottom:"15px",fontWeight:"bold"}}>🏍️ Ride Smart. Maintain Smart.</h1>
        <p style={{fontSize:"1.2rem",maxWidth:"800px",margin:"auto",opacity:0.9}}>
          Enter your Vehicle Identification Number (VIN) and discover your bike’s age and recommended maintenance instantly.
        </p>
      </div>

      {/* Input Card */}
      <div style={{
        width:"90%",
        maxWidth:"700px",
        margin:"-60px auto 40px auto",
        backgroundColor:"#1e293b",
        padding:"30px",
        borderRadius:"16px",
        boxShadow:"0 8px 20px rgba(0,0,0,0.4)",
        textAlign:"center"
      }}>
        <input
          type="text"
          placeholder="Enter 14-character VIN"
          value={vin}
          onChange={(e)=>setVin(e.target.value.toUpperCase())}
          maxLength={14}
          style={{
            padding:"14px",
            width:"100%",
            marginBottom:"15px",
            borderRadius:"10px",
            border:"1px solid #334155",
            fontSize:"16px",
            backgroundColor:"#0f172a",
            color:"#f1f5f9",
            textAlign:"center"
          }}
        />
        <button
          onClick={analyzeVIN}
          style={{
            width:"100%",
            padding:"14px",
            borderRadius:"10px",
            border:"none",
            backgroundColor:"#3b82f6",
            color:"white",
            fontSize:"16px",
            fontWeight:"600",
            cursor:"pointer"
          }}
        >
          Analyze VIN
        </button>
      </div>

      {/* Results Section */}
      {vehicleAge !== null && (
        <div style={{
          display:"flex",
          flexWrap:"wrap",
          justifyContent:"center",
          width:"95%",
          margin:"auto"
        }}>
          {recommendations.map((part, idx) => (
            <div key={idx} style={{
              backgroundColor:"#1e293b",
              margin:"10px",
              padding:"15px",
              borderRadius:"12px",
              width:"180px",
              boxShadow:"0 4px 10px rgba(0,0,0,0.3)",
              textAlign:"center"
            }}>
              <img src={PART_IMAGES[part]} alt={part} width="50" height="50" style={{marginBottom:"10px"}} />
              <b>{part}</b>
              <p style={{fontSize:"12px",color:"#cbd5e1",marginTop:"5px"}}>{PART_BENEFITS[part]}</p>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      <footer style={{
        marginTop:"40px",
        padding:"20px",
        textAlign:"center",
        color:"#cbd5e1",
        backgroundColor:"#1e293b"
      }}>
        © {new Date().getFullYear()} VIN Tracker | Built for Smarter Rides 🏍️
      </footer>
    </div>
  );
}
