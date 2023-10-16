import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import { AppProvider } from "./context/context";
import Home from "./pages/home";
import Users from "./pages/users";
const App = () => {
  const [value, setValue] = useState("");

  return (
    <AppProvider value={{ value, setValue }}>
      <div className="app">
        <BrowserRouter>
          <div className="wrapper">
            <Navbar />
            <div className="page-container">
              <div className="page-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/users" element={<Users />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
};

export default App;
