import "./App.css";
import AddFood from "./Pages/AddFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Food Recognition</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addfood" element={<AddFood />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
