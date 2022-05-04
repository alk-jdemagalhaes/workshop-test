import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

import { Ex01Page } from "./exercises/ex01";
import { Ex02Page } from "./exercises/ex02";
import { Ex03Page } from "./exercises/ex03";
import { Ex04Page } from "./exercises/ex04";
import { Ex05Page } from "./exercises/ex05";
import { Ex06Page } from "./exercises/ex06";
import { JestCommands } from "./wiki/jest-commands";
import { GoodCoverage } from "./wiki/good-coverage";
import { OldCodeHandling } from "./wiki/old-code-handling";
import { Sonarcloud } from "./wiki/sonarcloud";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <div>
            <Link to="/jest-commands">Jest Commands</Link>
            <Link to="/good-coverage">Good Coverage</Link>
            <Link to="/old-code-handling">Old Code Handling</Link>
            <Link to="/sonarcloud">Sonarcloud</Link>
          </div>
          <div>
            <Link to="/ex01">Ex01</Link>
            <Link to="/ex02">Ex02</Link>
            <Link to="/ex03">Ex03</Link>
            <Link to="/ex04">Ex04</Link>
            <Link to="/ex05">Ex05</Link>
            <Link to="/ex06">Ex06</Link>
          </div>
        </header>
        <div className="App-body">
          <Routes>
            <Route path="/ex01" element={<Ex01Page />} />
            <Route path="/ex02" element={<Ex02Page />} />
            <Route path="/ex03" element={<Ex03Page />} />
            <Route path="/ex04" element={<Ex04Page />} />
            <Route path="/ex05" element={<Ex05Page />} />
            <Route path="/ex06" element={<Ex06Page />} />
            <Route path="/jest-commands" element={<JestCommands />} />
            <Route path="/good-coverage" element={<GoodCoverage />} />
            <Route path="/old-code-handling" element={<OldCodeHandling />} />
            <Route path="/sonarcloud" element={<Sonarcloud />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
