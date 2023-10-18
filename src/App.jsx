import { Routes, Route } from "react-router-dom";
import { Dashboard, CreateAds, MediaAdForm, TextAdForm } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/createAd" element={<CreateAds />} />
        <Route path="/media" element={<MediaAdForm />} />
        <Route path="/text" element={<TextAdForm />} />
      </Routes>
    </div>
  );
}

export default App;
