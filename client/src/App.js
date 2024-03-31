import "./App.css";
import AddFood from "./Pages/AddFood";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Dashboard } from "./Pages/Dashboard";
// import { Profile } from "./Pages/Profile";
import { UpdateUser } from "./Pages/UpdateUser";
import { Session } from "./Pages/Session";
import { Profile } from "./Pages/Profile2";

function App() {
  return (
    <CookiesProvider>
      <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addfood" element={<AddFood />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/update" element={<UpdateUser />} />
              <Route path="/sessions" element={<Session />} />
            </Routes>
          </BrowserRouter>
      </div>
    </CookiesProvider>
  );
}

export default App;
