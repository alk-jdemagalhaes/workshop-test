import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Ex01Page } from "./exercises/ex01";
import { Ex02Page } from "./exercises/ex02";
import { Ex03Page } from "./exercises/ex03";
import { Ex04Page } from "./exercises/ex04";
import { Ex05Page } from "./exercises/ex05";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Link to="/ex01">Ex01</Link>
          <Link to="/ex02">Ex02</Link>
          <Link to="/ex03">Ex03</Link>
          <Link to="/ex04">Ex04</Link>
          <Link to="/ex05">Ex05</Link>
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/ex01" element={<Ex01Page />} />
            <Route path="/ex02" element={<Ex02Page />} />
            <Route path="/ex03" element={<Ex03Page />} />
            <Route path="/ex04" element={<Ex04Page />} />
            <Route path="/ex05" element={<Ex05Page />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
