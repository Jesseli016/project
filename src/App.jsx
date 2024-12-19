import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCartStep2 from "./pages/ShoppingCartStep2";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter basename="/Kagumachi">
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="ShoppingCartStep2" element={<ShoppingCartStep2 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;