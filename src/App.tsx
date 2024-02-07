import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormExample from "./pages/FormExample";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormExample />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
