import { Link } from "react-router-dom";
import { Home, User, Mail } from "lucide-react";

export const MainNav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link to="/" className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600">
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>
      <Link to="/about" className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600">
        <User className="w-4 h-4" />
        <span>About</span>
      </Link>
      <Link to="/contact" className="flex items-center gap-2 text-sm text-gray-800 hover:text-gray-600">
        <Mail className="w-4 h-4" />
        <span>Contact</span>
      </Link>
    </nav>
  );
};