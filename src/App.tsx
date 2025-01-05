import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import { CartProvider } from "./contexts/CartContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

// Lazy load components
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const HempFlower = lazy(() => import("./pages/HempFlower"));
const Vapes = lazy(() => import("./pages/Vapes"));
const Gummies = lazy(() => import("./pages/Gummies"));
const Mushrooms = lazy(() => import("./pages/Mushrooms"));
const ProductDetail = lazy(() => import("./components/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Router>
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/hemp-flower" element={<HempFlower />} />
              <Route path="/vapes" element={<Vapes />} />
              <Route path="/gummies" element={<Gummies />} />
              <Route path="/mushrooms" element={<Mushrooms />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Toaster />
        </Router>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;