import { Routes, Route } from "react-router-dom";
import Splashscreen from "./pages/splashscreen";

import "./index.css"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Splashscreen />}/>
      </Routes>
    </>
  );
}

export default App;
