import { Routes, Route } from "react-router-dom";
import { Dashboard, CreateAds } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createAd" element={<CreateAds />} />
      </Routes>
    </div>
  );
}

export default App;
