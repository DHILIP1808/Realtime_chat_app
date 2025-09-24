// src/routes/AppRoutes.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import LoginPage from "../pages/LoginPage";

export default function AppRoutes() {
  const isLoggedIn = true; // replace with auth logic later

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/chat"
          element={isLoggedIn ? <ChatPage /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<Navigate to="/chat" />} />
      </Routes>
    </Router>
  );
}
