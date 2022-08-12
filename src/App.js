import logo from "./logo.svg";
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Women from "./pages/women";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/women" element={<Women />} />
      </Routes>
    </div>
  );
}

export default App;
