import "./App.css";
import AddFood from "./Pages/AddFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Dashboard } from "./Pages/Dashboard";
import { Profile } from "./Pages/Profile";
import { UpdateUser } from "./Pages/UpdateUser";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
        <header className="App-header">
          <h1>Food Recognition</h1>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addfood" element={<AddFood />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/update" element={<UpdateUser />} />
            </Routes>
          </BrowserRouter>
        </header>
      </div>
    </CookiesProvider>
  );
}

export default App;
