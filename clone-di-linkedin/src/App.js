import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import Messagistica from "./components/Messagistica";
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
