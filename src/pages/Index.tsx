import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES } from "@/data/products";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/lib/products";
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
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-white">
        <Header />
        <div className="container mx-auto px-2 md:px-4 flex-grow">
          <div className="flex items-center justify-center h-64">
            Loading products...
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-white">
        <Header />
        <div className="container mx-auto px-2 md:px-4 flex-grow">
          <div className="flex items-center justify-center h-64 text-red-600">
            Error loading products. Please try again later.
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-accent to-white">
      <Header />
      <div className="container mx-auto px-2 md:px-4 flex-grow">
        {CATEGORIES.map((category) => (
          <div key={category} className="mb-8">
            <div className="flex justify-between items-center mb-4 pt-4">
              <h2 className="text-2xl font-bold">{category}</h2>
              <Link 
                to={`/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-gray-600 hover:text-gray-800"
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
      <Footer />
    </div>
  );
};

export default Index;