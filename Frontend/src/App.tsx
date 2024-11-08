import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
import { DatesProvider } from "./context/DatesContext";
import { CountBetsProvider } from "./context/CountBetsContext";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <UserProvider>
        <DatesProvider>
          <MatchProvider>
            <PredictionsProvider>
              <CountBetsProvider>
                <BrowserRouter>
                  <ScrollToTop />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ingresar" element={<Login />} />
                    <Route path="/onboarding" element={<Onboarding />} />
                    <Route path="/" element={<ProtectedRoutes />}>
                      {/* <Route path="/onboarding" element={<Onboarding />} /> */}
                      <Route
                        path="/predicciones"
                        element={<PredictionsPage />}
                      />
                      <Route path="/partidos" element={<MatchesPage />} />
                      <Route
                        path="/partidos/:partidoId"
                        element={<GameDetailPage />}
                      />
                      <Route path="/divisiones" element={<DivisionsPage />} />
                      <Route path="/tokens" element={<TokensPage />} />
                      <Route path="/perfil" element={<ProfilePage />} />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                  </Routes>
                  <Footer />
                </BrowserRouter>
              </CountBetsProvider>
            </PredictionsProvider>
          </MatchProvider>
        </DatesProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
