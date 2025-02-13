import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home"
import Welcome from "./page/Welcome";

//import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} /> 
          <Route path="home" element={<Home />} /> 
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

