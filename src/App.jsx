import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import EmailSent from "./pages/EmailSent/EmailSent";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import PasswordSuccess from "./pages/PasswordSuccess/PasswordSuccess";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Store from "./pages/Store/Store";
import Settings from "./pages/Settings/Settings";
import Skin from "./pages/Skin/Skin";
import Bilhete from "./pages/Bilhete/Bilhete";
import Recharge from "./pages/Recharge/Recharge";
import History from "./pages/History/History";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";
import Trips from "./pages/Trips/Trips";
import Help from "./pages/Help/Help";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/store" element={<Store />} />
        <Route path="/skins" element={<Skin />} />
        <Route path="/recargas" element={<Recharge />} />
        <Route path="/historico" element={<History />} />
        <Route path="/notificacoes" element={<Notifications />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/trips" element={<Trips />} />
        <Route path="/help" element={<Help />} />
        <Route path="/bilhete" element={<Bilhete />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/bilhete" element={<Bilhete />} />
        <Route path="/email-sent" element={<EmailSent />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/password-success" element={<PasswordSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
