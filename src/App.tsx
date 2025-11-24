import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import DashboardHome from "./pages/Dashboard/Home";
import AuthRoot from "./pages/Auth/AuthRoot";
import SignUp from "./pages/Auth/SignUp";
import VerificationSentScreen from "./pages/Auth/VerificationSentScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/verification-sent" element={<VerificationSentScreen />} />
        <Route element={<AuthRoot />}>
          <Route path="login" element={<div>Login</div>} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
