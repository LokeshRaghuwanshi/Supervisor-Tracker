import React, { useState } from "react";
import "./VinageParts.css";

const VinageParts = () => {
  const [vin, setVin] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    if (vin.length !== 14) {
      setResult("Please enter a valid 14-character VIN.");
      return;
    }

    const yearCode = vin[4].toUpperCase();
    const currentYear = new Date().getFullYear();
    const manufacturingYear = 2010 + (yearCode.charCodeAt(0) - 65);
    const age = currentYear - manufacturingYear;

    let recommendation = "";

    if (age <= 2) {
      recommendation =
        "Your bike is new! Regular service and oil check are enough to keep it smooth.";
    } else if (age <= 5) {
      recommendation =
        "Recommended: Replace brake shoes, cables, and cam chain for better performance.";
    } else {
      recommendation =
        "Your bike is ageing! Replace clutch plates, suspension parts, and check electricals for safe riding.";
    }

    setResult(
      `Vehicle Age: ${age} years\n${recommendation}`
    );
  };

  const supervisors = [
    { name: "Amit Sharma", dealer: "Hero Motors Delhi", sales: "₹1,25,000", img: "https://randomuser.me/api/portraits/men/32.jpg" },
    { name: "Pooja Patel", dealer: "Hero Motors Mumbai", sales: "₹1,10,000", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Ravi Kumar", dealer: "Hero Motors Pune", sales: "₹1,05,000", img: "https://randomuser.me/api/portraits/men/68.jpg" },
  ];

  const technicians = [
    { name: "Sunil Verma", dealer: "Hero Motors Jaipur", sales: "₹95,000", img: "https://randomuser.me/api/portraits/men/72.jpg" },
    { name: "Neha Singh", dealer: "Hero Motors Lucknow", sales: "₹90,500", img: "https://randomuser.me/api/portraits/women/65.jpg" },
    { name: "Rajesh Kumar", dealer: "Hero Motors Indore", sales: "₹89,000", img: "https://randomuser.me/api/portraits/men/55.jpg" },
  ];

  return (
    <div className="vinage-container">
      <header className="vinage-header">
        <h1>🚀 Parts Retail Performance Portal</h1>
        <p>Empowering our heroes to ride further, safer, and stronger!</p>
      </header>

      <div className="vin-section">
        <h2>Know Your Ride. Keep It Alive!</h2>
        <p>Enter your 14-character VIN to discover your bike’s age and recommended maintenance insights.</p>

        <div className="vin-input-box">
          <input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="Enter 14-character VIN"
            maxLength="14"
          />
          <button onClick={handleAnalyze}>Analyze VIN</button>
        </div>

        {result && <pre className="result-box">{result}</pre>}
      </div>

      <section className="performance-section">
        <div className="category">
          <h2>🏆 Top Supervisors</h2>
          <div className="card-container">
            {supervisors.map((sup, index) => (
              <div key={index} className="card">
                <img src={sup.img} alt={sup.name} />
                <h3>{sup.name}</h3>
                <p>{sup.dealer}</p>
                <p className="sales">{sup.sales}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="category">
          <h2>🔧 Top Technicians</h2>
          <div className="card-container">
            {technicians.map((tech, index) => (
              <div key={index} className="card">
                <img src={tech.img} alt={tech.name} />
                <h3>{tech.name}</h3>
                <p>{tech.dealer}</p>
                <p className="sales">{tech.sales}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="vinage-footer">
        <p>💪 “Keep Riding, Keep Shining — Every Mile Matters with Hero.”</p>
      </footer>
    </div>
  );
};

export default VinageParts;