import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-accent p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8 text-gray-600">The page you're looking for doesn't exist.</p>
      <Link to="/">
        <Button className="flex items-center gap-2">
          <Home className="h-4 w-4" />
          Return Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;