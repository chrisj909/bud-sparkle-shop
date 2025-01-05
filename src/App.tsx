import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { ProductDetail } from "./components/ProductDetail";
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Toaster />
      </Router>
    </CartProvider>
  );
}

export default App;