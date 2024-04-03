import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <MyNavbar />
      <ProfilePage />
      <Footer />
    </>
  );
}

export default App;
