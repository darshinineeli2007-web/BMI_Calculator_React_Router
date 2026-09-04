import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>BMI Calculator</h1>
      <p>Calculate your Body Mass Index easily.</p>

      <Link to="/bmi" className="button">
        Start BMI Calculator
      </Link>
    </div>
  );
}

function BMI() {
  return (
    <div className="page">
      <h1>BMI Calculator</h1>

      <div className="card">
        <label>Weight (kg)</label>
        <input type="number" id="weight" placeholder="Enter weight" />

        <label>Height (cm)</label>
        <input type="number" id="height" placeholder="Enter height" />

        <button
          onClick={() => {
            const weight = Number(document.getElementById("weight").value);
            const height = Number(document.getElementById("height").value);

            if (!weight || !height) {
              alert("Please enter weight and height");
              return;
            }

            const heightInMeter = height / 100;
            const bmi = weight / (heightInMeter * heightInMeter);

            let category = "";

            if (bmi < 18.5) {
              category = "Underweight";
            } else if (bmi < 25) {
              category = "Normal";
            } else if (bmi < 30) {
              category = "Overweight";
            } else {
              category = "Obese";
            }

            alert(`Your BMI is ${bmi.toFixed(2)} - ${category}`);
          }}
        >
          Calculate BMI
        </button>

        <Link to="/" className="back">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/bmi">BMI Calculator</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;