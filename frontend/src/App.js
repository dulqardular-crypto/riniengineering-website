import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Toaster
        theme="dark"
        position="top-center"
        toastOptions={{
          style: {
            background: "#14161A",
            border: "1px solid rgba(255,255,255,0.1)",
            color: "#F8FAFC",
            borderRadius: "2px",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
