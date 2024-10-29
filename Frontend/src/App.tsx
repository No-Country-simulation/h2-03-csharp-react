import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./hooks/UserContext";
import { GameProvider } from "./context/GameContext";
import { PredictionsProvider } from "./context/PredictionsContext";

import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import PredictionsPage from "./pages/PredictionsPage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import DivisionsPage from "./pages/DivisionsPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/layout/Footer";
import TokensPage from "./pages/TokensPage";

function App() {
  return (
    <UserProvider>
      <GameProvider>
        <PredictionsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ingresar" element={<Login />} />
              <Route path="/predicciones" element={<PredictionsPage />} />
              <Route path="/partidos" element={<GamesPage />} />
              <Route path="/partidos/:partidoId" element={<GameDetailPage />} />
              <Route path="/divisiones" element={<DivisionsPage />} />
              <Route path="/tokens" element={<TokensPage />} />
              <Route path="/perfil" element={<ProfilePage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </PredictionsProvider>
      </GameProvider>
    </UserProvider>
  );
}

export default App;
