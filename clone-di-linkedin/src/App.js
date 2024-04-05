import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Messagistica from "./components/Messagistica";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import HomePage from "./components/HomePage";
import ProfileNavbar from "./components/ProfileNavbar";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:id" element={<ProfileNavbar />} />
        <Route path="/home/:id" element={<HomePage />} />
      </Routes>
      <Messagistica />
    </BrowserRouter>
  );
}

export default App;
