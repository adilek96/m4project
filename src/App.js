import BuyPage from "./pages/BuyPage";
import Stocks from "./pages/Stocks";
import Accounting from "./pages/Accounting";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Stocks />} />
      <Route path="stocks" element={<Accounting />} />
      <Route path="buy" element={<BuyPage />} />
    </Routes>
  );
}

export default App;
