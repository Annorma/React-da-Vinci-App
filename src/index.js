import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import bootstrap from "bootstrap"; // eslint-disable-line no-unused-vars
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Biography from "./components/Biography";
import Popular from "./components/Popular";
import PaintingList from "./components/PaintingList";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

const paintings = [
  { name: "Mona Lisa", year: 1503 },
  { name: "The Last Supper", year: 1496 },
  { name: "Lady with an Ermine", year: 1489 }
];

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Biography />} />
            <Route
              path="paintings"
              element={<PaintingList paintings={paintings} />}
            />
            <Route path="popular" element={<Popular />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
