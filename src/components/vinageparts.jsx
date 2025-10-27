

  /*const supervisors = [
    { name: "Anand Suman", dealer: "Mihir Traders and Agencies", img: "/images/IMG-20251026-WA0043.jpg" },
    { name: "Santosh Jha", dealer: "Usha Motors",img: "/images/IMG-20251026-WA0044.jpg" },
    { name: "Rahul Kumar", dealer: "Begusarai Auto Agency",img: "/images/IMG-20251026-WA0045.jpg" },
  ];

  const technicians = [
    { name: "Rakesh Kumar", dealer: "Khagaria Auto Agency",img: "/images/IMG-20251026-WA0046.jpg" },
    { name: "Faizan", dealer: "Usha Motors", img: "/images/IMG-20251026-WA0047.jpg" },
    { name: "Sonu Kumar", dealer: "Ayesha Motors",img: "/images/IMG-20251026-WA0048.jpg" },
  ];
*/
 
import React, { useState } from "react";
import "./VinageParts.css";

const VinageParts = () => {
  const [vin, setVin] = useState("");
  const [result, setResult] = useState("");

  // Mapping for VIN 10th character to manufacturing year
  const vinYearMap = {
    A: 1999, B: 2000, C: 2001, D: 2002, E: 2003, F: 2004, G: 2005, H: 2006,
    J: 2007, K: 2008, L: 2009, M: 2010, N: 2011, P: 2012, R: 2013, S: 2014,
    T: 2015, V: 2016, W: 2017, X: 2018, Y: 2019,
    1: 2020, 2: 2021, 3: 2022, 4: 2023, 5: 2024, 6: 2025,
    7: 2026, 8: 2027, 9: 2028,
  };

  const handleAnalyze = () => {
    if (vin.length !== 17) {
      setResult("❌ Please enter a valid 17-character VIN.");
      return;
    }

    const yearCode = vin[9].toUpperCase(); // 10th character (index 9)
    const manufacturingYear = vinYearMap[yearCode];

    if (!manufacturingYear) {
      setResult("⚠️ Invalid VIN format. Year code not recognized.");
      return;
    }

    const currentYear = new Date().getFullYear();
    const age = currentYear - manufacturingYear;

    let recommendation = "";
    let benefits = "";

    if (age <= 2) {
      recommendation = "✔️ Check and replace ball race kit,key set ";
      benefits = "A fresh ball race kit reduces friction, allowing for smoother and more precise handlebar movements. This leads to a more confident and controlled riding experience.";
    } else if (age <= 5) {
      recommendation = "✔️ Check and Replace brake shoes, and cam chain";
      benefits = "Look for a wear indicator arrow on the brake arm. When this arrow aligns with the reference mark on the brake panel with the brake fully applied, the shoes need to be replaced";
    } else if (age <= 8) {
      recommendation = "✔️ Check and Replace clutch cables,chain sprocket kit,Check Compression";
      benefits = "Cables offers significant benefits for safety, performance, and rider comfort. Cables for the throttle, clutch, and brakes can wear, stretch, and corrode over time, making controls sticky, stiff, or less responsive";
    } else {
      recommendation = "✔️ Check and Replace wheel rim,shocker";
      benefits = "Safety, performance, and rider comfort";
    }

    setResult(
      `🚘 Manufacturing Year: ${manufacturingYear}\n📅 Vehicle Age: ${age} years\n\n🛠 Recommended Parts:\n${recommendation}\n\n💡 Benefits:\n${benefits}`
    );
  };

  const supervisors = [
    { name: "Sonu Kumar", dealer: "Ayesha Motors",img: "/images/IMG-20251026-WA0064.jpg" },
    { name: "Faizan", dealer: "Usha Motors", img: "/images/IMG-20251026-WA0047.jpg" },
    { name: "Rakesh Kumar", dealer: "Khagaria Auto Agency",img: "/images/IMG-20251026-WA0046.jpg" },
  ];

  const technicians = [
    { name: "Rahul Kumar", dealer: "Begusarai Auto Agency",img: "/images/IMG-20251026-WA0045.jpg" },
    {name: "Anand Suman", dealer: "Mihir Traders and Agencies", img: "/images/IMG-20251026-WA0043.jpg" },
    { name: "Santosh Jha", dealer: "Usha Motors",img: "/images/IMG-20251026-WA0044.jpg" },
  ];
//name: "Faizan", dealer: "Usha Motors", img: "/images/IMG-20251026-WA0047.jpg"
//name: "Sonu Kumar", dealer: "Ayesha Motors",img: "/images/IMG-20251026-WA0064.jpg"
//name: "Rahul Kumar", dealer: "Begusarai Auto Agency",img: "/images/IMG-20251026-WA0045.jpg"
  return (
    <div className="vinage-container">
      <header className="vinage-header">
        <h1>🚀 Parts Retail Performance Portal</h1>
        <p>Empowering our heroes to ride further, safer, and stronger!</p>
      </header>

      <div className="vin-section">
        <h2>Know Your Ride. Keep It Alive!</h2>
        <p>Enter your 17-character VIN to discover your bike’s age and recommended maintenance insights.</p>

        <div className="vin-input-box">
          <input
            type="text"
            value={vin}
            onChange={(e) => setVin(e.target.value)}
            placeholder="Enter 17-character VIN"
            maxLength="17"
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