import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layout/Footer";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import { UserProvider } from "./hooks/UserContext";
import PredictionsPage from "./pages/PredictionsPage";
import MatchesPage from "./pages/MatchesPage";
import DivisionsPage from "./pages/DivisionsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ingresar" element={<Login />} />
            <Route path="/predicciones" element={<PredictionsPage />} />
            <Route path="/partidos" element={<MatchesPage />} />
            <Route path="/divisiones" element={<DivisionsPage />} />
            <Route path="/perfil" element={<ProfilePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
