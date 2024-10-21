import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./hooks/UserContext";
import { GameProvider } from "./context/GameContext";
import { PredictionsProvider } from "./context/PredictionsContext";

import Home from "./pages/Home";
import Login from "./pages/Access";
import PredictionsPage from "./pages/PredictionsPage";
import GamesPage from "./pages/GamesPage";
import GameDetailPage from "./pages/GameDetailPage";
import Footer from "./components/layout/Footer";

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
            </Routes>
            <Footer />
          </BrowserRouter>
        </PredictionsProvider>
      </GameProvider>
    </UserProvider>
  );
}

export default App;
