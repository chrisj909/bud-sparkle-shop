import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES } from "@/data/products";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/products";
import { ShieldCheck, Package, Leaf, Truck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  });

  const getFeaturedProducts = (category: string) => {
    return products
      .filter(product => product.category === category)
      .slice(0, 4);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex items-center justify-center h-64">
          Loading products...
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex items-center justify-center h-64 text-red-600">
          Error loading products. Please try again later.
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-accent to-accent/50 py-6">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-primary">
            Premium Quality CBD + Vape Products
          </h1>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              to={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative h-48 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${getFeaturedProducts(category)[0]?.image_url})`,
                }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
              </div>
              <div className="relative h-full flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 bg-gray-50">
        {CATEGORIES.map((category) => (
          <div key={category} className="mb-12 last:mb-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">{category}</h2>
              <Link 
                to={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-primary hover:text-primary-hover transition-colors"
              >
                View All →
              </Link>
            </div>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="relative w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {getFeaturedProducts(category).map((product) => (
                  <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <ProductCard {...product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-12 top-1/2" />
                <CarouselNext className="absolute -right-12 top-1/2" />
              </div>
            </Carousel>
          </div>
        ))}
      </div>

      {/* Quality Icons */}
      <div className="bg-white/95 backdrop-blur-sm border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-6">
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-accent/50 rounded-lg">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Quality Assured</span>
              <p className="text-xs text-gray-600">Lab tested for purity</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-accent/50 rounded-lg">
              <Package className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Premium Sourcing</span>
              <p className="text-xs text-gray-600">Top-tier suppliers</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-accent/50 rounded-lg">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Natural Products</span>
              <p className="text-xs text-gray-600">Organic cultivation</p>
            </div>
            <div className="flex flex-col items-center text-center gap-2 p-4 bg-accent/50 rounded-lg">
              <Truck className="h-8 w-8 text-primary" />
              <span className="text-sm font-medium">Fast Shipping</span>
              <p className="text-xs text-gray-600">Quick delivery</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;