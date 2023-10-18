import { Routes, Route } from "react-router-dom";
import { Dashboard, CreateAds } from "./pages";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createAd" element={<CreateAds />} />
      </Routes>
    </div>
  );
}

export default App;
