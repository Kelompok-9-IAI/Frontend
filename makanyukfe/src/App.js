import { Routes, Route } from "react-router-dom"
import Splashscreen from "./pages/splashscreen"

import "./index.css"
import { ReviewOrder } from "./pages/ReviewOrder"

function App() {
  return (
    <div className="font-poppins">
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route
          path="/revieworder"
          caseSensitive={false}
          element={<ReviewOrder />}
        />
      </Routes>
    </div>
  )
}

export default App
