import BuyPage from "./pages/BuyPage";
import Stocks from "./pages/Stocks";
import Accounting from "./pages/Accounting";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accounting />} />
      <Route path="stocks" element={<Stocks />} />
      <Route path="buy" element={<BuyPage />} />
    </Routes>
  );
}

export default App;
