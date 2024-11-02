import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoutes from "./components/layout/ProtectedRoutes";
import { UserProvider } from "./hooks/UserContext";
import { MatchProvider } from "./context/MatchContext";
import { PredictionsProvider } from "./context/PredictionsContext";

import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import PredictionsPage from "./pages/PredictionsPage";
import MatchesPage from "./pages/MatchesPage";
import GameDetailPage from "./pages/MatchesDetailPage";
import DivisionsPage from "./pages/DivisionsPage";
import ProfilePage from "./pages/ProfilePage";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import TokensPage from "./pages/TokensPage";

function App() {
  return (
    <UserProvider>
      <MatchProvider>
        <PredictionsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ingresar" element={<Login />} />
              <Route path="/" element={<ProtectedRoutes />}>
                <Route path="/predicciones" element={<PredictionsPage />} />
                <Route path="/partidos" element={<MatchesPage />} />
                <Route
                  path="/partidos/:partidoId"
                  element={<GameDetailPage />}
                />
                <Route path="/divisiones" element={<DivisionsPage />} />
                <Route path="/tokens" element={<TokensPage />} />
                <Route path="/perfil" element={<ProfilePage />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </PredictionsProvider>
      </MatchProvider>
    </UserProvider>
  );
}

export default App;
