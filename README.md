## Ex06 BMI Calculator
## Date:04-09-2026
## AIM
To develop a responsive and interactive Body Mass Index (BMI) Calculator using React that allows users to input their height and weight, and calculates their BMI to categorize their health status (e.g., Underweight, Normal, Overweight, Obese).

## DESIGN STEPS
## STEP 1: Initialize React Project
Create a new React app using create-react-app.
Install React Router using:
npm install react-router-dom
## STEP 2: Set Up Routing
Create routing structure with react-router-dom:

Home route (/) – Intro or Navigation
BMI Calculator route (/bmi)
Result route (/result)
## STEP 3: Design the BMI Form Page
Create a form to accept Height (in cm or m) and Weight (in kg).
On form submit, navigate to the result page with entered values via URL query params or context/state.
## STEP 4: Handle Input Validation
Check if height and weight are valid numbers.
Optionally, show error messages for invalid inputs.
## STEP 5: Perform BMI Calculation
In the result component:
Extract height and weight from the route (URL or passed state).
Apply the BMI formula:
image​

Convert height from cm to m if needed.
## STEP 6: Display Result
Show calculated BMI.
Show category based on BMI range:
Underweight, Normal, Overweight, Obese, etc.
## STEP 7: Navigation Options
Provide a button to go back to the BMI form to calculate again.
## STEP 8: Enhancements
Add styling using CSS or Tailwind.
## PROGRAM
```
App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BMI from "./BMI";
import Result from "./Result";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```
```
App.css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea, #764ba2);
  min-height: 100vh;
}

nav {
  background: white;
  padding: 18px;
  display: flex;
  justify-content: center;
  gap: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

nav a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.page {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.page h1 {
  font-size: 45px;
  margin-bottom: 10px;
}

.page p {
  font-size: 20px;
  margin-bottom: 30px;
}

.button,
button {
  background: white;
  color: #667eea;
  border: none;
  padding: 14px 25px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.card {
  background: white;
  color: #333;
  padding: 35px;
  width: 350px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.card label {
  display: block;
  text-align: left;
  margin: 12px 0 6px;
  font-weight: bold;
}

.card input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
}

.card button {
  width: 100%;
  margin-top: 25px;
  background: #667eea;
  color: white;
}

.back {
  display: block;
  margin-top: 20px;
  text-decoration: none;
  color: #667eea;
  font-weight: bold;
}
```
```
Main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```
```
index.css
html,
body,
#root {
  margin: 0;
  min-height: 100%;
}
```
## OUTPUT

![alt text](image.png)
![alt text](image-1.png)

## RESULT
The BMI Calculator successfully takes user input for height and weight, performs the BMI calculation in real-time using React state and event handling, and displays the BMI value along with the corresponding health category.
