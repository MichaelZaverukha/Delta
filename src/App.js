import GlobalStyle from "./globalStyles";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
