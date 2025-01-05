import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./contexts/CartContext";

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Hemp category pages
const HempFlower = lazy(() => import("./pages/hemp/Flower"));
const HempEdibles = lazy(() => import("./pages/hemp/Edibles"));
const HempConcentrates = lazy(() => import("./pages/hemp/Concentrates"));

// Mushroom category pages
const MushroomGummies = lazy(() => import("./pages/mushrooms/Gummies"));
const MushroomDrinks = lazy(() => import("./pages/mushrooms/Drinks"));
const MushroomSnacks = lazy(() => import("./pages/mushrooms/Snacks"));

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Hemp routes */}
            <Route path="/hemp/flower" element={<HempFlower />} />
            <Route path="/hemp/edibles" element={<HempEdibles />} />
            <Route path="/hemp/concentrates" element={<HempConcentrates />} />
            
            {/* Mushroom routes */}
            <Route path="/mushrooms/gummies" element={<MushroomGummies />} />
            <Route path="/mushrooms/drinks" element={<MushroomDrinks />} />
            <Route path="/mushrooms/snacks" element={<MushroomSnacks />} />
            
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Router>
    </CartProvider>
  );
}

export default App;