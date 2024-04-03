import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import Messagistica from "./components/Messagistica";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfileInfoTop from "./components/ProfileInfoTop";
import ProfileInfoBottom from "./components/ProfileInfoBottom"; 
import SideBar from "./components/SideBar";

import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <MyNavbar />
      <ProfilePage />
      <Footer />
      <Messagistica />
    </>
  );
}

export default App;
