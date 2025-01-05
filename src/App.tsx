import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ProductDetail } from "./components/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
        <Toaster />
      </Router>
    </CartProvider>
  );
}

export default App;